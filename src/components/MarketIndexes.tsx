'use client';
import { useEffect, useState } from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

// Expanded the list to include more major market indices
const stocks = [
  'NIFTY',
  'SENSEX',
  'BANKNIFTY',
  'NIFTY FINANCIAL SERVICES',
  'NIFTY MIDCAP 100'
];

interface StockData {
  name: string;
  price: number;
  change: number;
  changePercent: number;
}

// The fetchStockData function remains the same
const fetchStockData = async (stockName: string): Promise<StockData | null> => {
  const url = `https://stock.indianapi.in/historical_data?stock_name=${stockName}&period=1m&filter=price`;
  try {
    const res = await fetch(url, {
      headers: { 'x-api-key': import.meta.env.VITE_INDIAN_API_KEY },
      cache: 'no-store',
    });
    if (!res.ok) {
        console.error(`API Error for ${stockName}: ${res.statusText}`);
        return null;
    }
    const json = await res.json();
    const values = json.datasets?.[0]?.values;
    if (!values || values.length < 2) return null;
    const latestDataPoint = values[values.length - 1];
    const previousDataPoint = values[values.length - 2];
    const price = parseFloat(latestDataPoint[1]);
    const prevClose = parseFloat(previousDataPoint[1]);
    const change = price - prevClose;
    const changePercent = (change / prevClose) * 100;
    return { name: stockName, price, change, changePercent };
  } catch (err) {
    console.error(`Error fetching ${stockName}:`, err);
    return null;
  }
};

export default function MarketIndexes() {
  const [data, setData] = useState<StockData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllStocks = async () => {
      setLoading(true);
      const results = await Promise.all(stocks.map(fetchStockData));
      setData(results.filter((d): d is StockData => d !== null));
      setLoading(false);
    };
    fetchAllStocks();
  }, []);

  return (
    <div className="p-4 sm:p-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center sm:text-center">Market Overview</h2>
        {loading ? (
          <p className="text-center text-gray-500">Loading data...</p>
        ) : data.length === 0 ? (
          <p className="text-center text-red-500">Could not fetch market data. Please check your API key or try again later.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {data.map((item) => {
              const isPositive = item.change >= 0;
              const changeColor = isPositive ? 'text-green-600' : 'text-red-600';
              const changeSign = isPositive ? '+' : '';

              return (
                <div key={item.name} className="p-4 bg-white border rounded-lg shadow-sm text-center transition-all hover:shadow-md hover:-translate-y-1">
                  <p className="font-semibold text-gray-700 truncate">{item.name}</p>
                  <p className="text-2xl font-bold text-gray-900 my-2">
                    {new Intl.NumberFormat('en-IN', { maximumFractionDigits: 2 }).format(item.price)}
                  </p>
                  <div className={`flex items-center justify-center gap-1.5 text-sm ${changeColor}`}>
                    {isPositive ? <ArrowUpRight className="h-4 w-4"/> : <ArrowDownRight className="h-4 w-4"/>}
                    <span className="font-semibold">
                      {item.change.toFixed(2)} ({changeSign}{item.changePercent.toFixed(2)}%)
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}