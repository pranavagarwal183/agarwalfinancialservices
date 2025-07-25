import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, TrendingDown, Activity, AlertCircle } from 'lucide-react';

// --- Data Interface ---
interface IndexData {
  name: string;
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  prevClose: number;
  date: string; 
}

// --- List of Symbols to Fetch ---
// Using US stocks because the /v2/eod endpoint does not support Indian indices.
const SYMBOLS_TO_FETCH = ['BSE', 'SENSEX', 'AMZN', 'TSLA'];

// --- API Fetch Function for v2 End-of-Day Data ---
const fetchEodMarketData = async (symbols: string[]): Promise<IndexData[]> => {
  console.log("Fetching EOD data from marketstack v2 endpoint...");
  const apiKey = import.meta.env.VITE_MARKETSTACK_API_KEY;

  if (!apiKey) {
    throw new Error("API key is missing. Please set VITE_MARKETSTACK_API_KEY in your .env.local file.");
  }

  const dataPromises = symbols.map(async (symbol) => {
    // Using the /v2/eod endpoint and fetching the last 2 days of data.
    const eodUrl = `http://api.marketstack.com/v2/eod?access_key=${apiKey}&symbols=${symbol}&limit=2`;
    const response = await fetch(eodUrl);
    
    if (!response.ok) {
        const errorData = await response.json();
        const errorMessage = errorData?.error?.message || `EOD fetch failed for ${symbol}`;
        throw new Error(errorMessage);
    }
    
    const eodData = await response.json();

    if (!eodData?.data || eodData.data.length < 2) {
      throw new Error(`Insufficient EOD data for ${symbol}. Check your API plan or symbol.`);
    }

    const latestData = eodData.data[0];
    const previousData = eodData.data[1];

    // Using adjusted close for more accurate price comparison
    const price = latestData.adj_close;
    const prevClose = previousData.adj_close;
    const change = price - prevClose;
    const changePercent = (change / prevClose) * 100;
    
    return {
      // Name now comes directly from the API response
      name: latestData.name,
      symbol: symbol,
      price: price,
      change: change,
      changePercent: changePercent,
      prevClose: prevClose,
      date: new Date(latestData.date).toLocaleDateString('en-US', {day: 'numeric', month: 'short', year: 'numeric'}),
    };
  });

  return Promise.all(dataPromises);
};


export default function MarketIndexes() {
  const [indexes, setIndexes] = useState<IndexData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Corrected useEffect hook
  useEffect(() => {
    const getMarketData = async () => {
      try {
        // Updated to use the new symbol list
        const data = await fetchEodMarketData(SYMBOLS_TO_FETCH);
        setIndexes(data);
      } catch (err: any) { // ADDED OPENING BRACE {
        setError(err.message || "Failed to fetch market data.");
        console.error(err);
      } // ADDED CLOSING BRACE } 
      finally {
        setLoading(false);
      }
    };

    getMarketData();
  }, []);

  // --- No changes needed for the rest of the component (formatNumber, JSX) ---
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US', { // Changed to en-US for dollar formatting
      style: 'currency',
      currency: 'USD',
    }).format(num);
  };
  
  if (loading) {
     return (
       <section className="py-8 bg-gray-50 dark:bg-gray-900/50">
         <div className="container mx-auto px-4">
           <div className="flex justify-center items-center h-40">
             <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
             <span className="ml-4 text-gray-500 dark:text-gray-400">Loading Market Data...</span>
           </div>
         </div>
       </section>
     );
   }
 
   if (error) {
     return (
       <section className="py-8 bg-red-50 dark:bg-red-900/20">
         <div className="container mx-auto px-4">
           <div className="flex justify-center items-center h-40 text-red-600 dark:text-red-400 text-center">
             <AlertCircle className="h-6 w-6" />
             <span className="ml-3 font-medium">{error}</span>
           </div>
         </div>
       </section>
     );
   }

  return (
    <section className="py-8 bg-gray-50 dark:bg-gray-900/50 border-y border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Activity className="h-6 w-6 text-blue-600" />
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">Market Summary (End-of-Day)</h3>
          </div>
          {indexes.length > 0 && (
             <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
              Data from: {indexes[0].date}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {indexes.map((index) => {
            const isPositive = index.change >= 0;
            return (
              <Card key={index.symbol} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-4">
                  <div className="text-center">
                    <h4 className="font-bold text-base text-gray-900 dark:text-white truncate" title={index.name}>{index.name}</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Prev. Close: {formatNumber(index.prevClose)}</p>
                    
                    <div className="text-2xl font-extrabold text-gray-800 dark:text-gray-100 my-2">
                      {formatNumber(index.price)}
                    </div>

                    <div className={`flex items-center justify-center gap-1.5 text-sm font-semibold ${
                      isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                    }`}>
                      {isPositive ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                      <span>
                        {isPositive ? '+' : ''}{(index.change).toFixed(2)}
                        <span className="ml-1">({isPositive ? '+' : ''}{index.changePercent.toFixed(2)}%)</span>
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            * Market data provided by marketstack. Prices shown are based on the previous day's close.
          </p>
        </div>
      </div>
    </section>
  );
}