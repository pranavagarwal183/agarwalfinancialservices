import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card'; // Assuming shadcn/ui
import { TrendingUp, TrendingDown, Activity, AlertCircle } from 'lucide-react';

// --- Data Interface ---
// Represents the structure of the data for a single market index.
interface IndexData {
  name: string;
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  prevClose: number; // Added previous day's closing price
}

// --- Mock API Fetch Function ---
// In a real application, you would replace this with a fetch call to a real financial API.
// This function simulates fetching the initial market data.
const fetchInitialMarketData = async (): Promise<IndexData[]> => {
  console.log("Fetching initial market data...");
  const mockData: IndexData[] = [
    {
      name: 'NIFTY 50',
      symbol: 'NIFTY',
      price: 23537.85,
      change: 66.70,
      changePercent: 0.28,
      prevClose: 23471.15,
    },
    {
      name: 'SENSEX',
      symbol: 'SENSEX',
      price: 77337.59,
      change: 131.18,
      changePercent: 0.17,
      prevClose: 77206.41,
    },
    {
      name: 'NIFTY BANK',
      symbol: 'BANKNIFTY',
      price: 51703.95,
      change: -80.90,
      changePercent: -0.16,
      prevClose: 51784.85,
    },
    {
      name: 'NIFTY IT',
      symbol: 'NIFTYIT',
      price: 35489.10,
      change: 355.20,
      changePercent: 1.01,
      prevClose: 35133.90,
    },
    {
        name: 'NIFTY FMCG',
        symbol: 'NIFTYFMCG',
        price: 56234.78,
        change: 78.90,
        changePercent: 0.14,
        prevClose: 56155.88
    }
  ];

  // Simulate network delay
  return new Promise(resolve => {
    setTimeout(() => {
      // In a real API, you'd calculate change here based on fetched data
      const dataWithChange = mockData.map(index => ({
        ...index,
        change: index.price - index.prevClose,
        changePercent: ((index.price - index.prevClose) / index.prevClose) * 100,
      }));
      resolve(dataWithChange);
    }, 1200);
  });
};


export default function MarketIndexes() {
  // --- State Management ---
  const [indexes, setIndexes] = useState<IndexData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  // --- Effect for Initial Data Fetching ---
  useEffect(() => {
    const getMarketData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchInitialMarketData();
        setIndexes(data);
        setLastUpdated(new Date());
      } catch (err) {
        setError("Failed to fetch market data. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getMarketData();
  }, []);

  // --- Effect for Simulating Live Price Updates ---
  useEffect(() => {
    if (indexes.length === 0) return;

    const interval = setInterval(() => {
      setIndexes(prevIndexes =>
        prevIndexes.map(index => {
          // Simulate a small, random fluctuation for the live price
          const fluctuation = (Math.random() - 0.5) * (index.prevClose * 0.0005);
          const newPrice = index.price + fluctuation;
          const newChange = newPrice - index.prevClose;
          const newChangePercent = (newChange / index.prevClose) * 100;

          return {
            ...index,
            price: newPrice,
            change: newChange,
            changePercent: newChangePercent,
          };
        })
      );
      setLastUpdated(new Date());
    }, 3000); // Update every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [indexes.length]); // Rerun only when indexes are first populated

  // --- Helper Function for Formatting Numbers ---
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-IN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(num);
  };

  // --- Render Loading State ---
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

  // --- Render Error State ---
  if (error) {
    return (
      <section className="py-8 bg-red-50 dark:bg-red-900/20">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center h-40 text-red-600 dark:text-red-400">
            <AlertCircle className="h-6 w-6" />
            <span className="ml-3 font-medium">{error}</span>
          </div>
        </div>
      </section>
    );
  }

  // --- Render Main Component ---
  return (
    <section className="py-8 bg-gray-50 dark:bg-gray-900/50 border-y border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Activity className="h-6 w-6 text-blue-600" />
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">Live Market Indexes</h3>
            <div className="flex items-center gap-1.5 text-green-600 dark:text-green-400 text-sm font-semibold">
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
              <span>Live</span>
            </div>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
            Last updated: {lastUpdated.toLocaleTimeString('en-US')}
          </p>
        </div>

        {/* Index Cards Grid */}
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
                      {isPositive ? (
                        <TrendingUp className="h-4 w-4" />
                      ) : (
                        <TrendingDown className="h-4 w-4" />
                      )}
                      <span>
                        {isPositive ? '+' : ''}{formatNumber(index.change)}
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
            * Market data is simulated for demonstration purposes.
          </p>
        </div>
      </div>
    </section>
  );
}
