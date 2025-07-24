import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, TrendingDown, Activity } from 'lucide-react';

interface IndexData {
  name: string;
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
}

export default function MarketIndexes() {
  const [indexes, setIndexes] = useState<IndexData[]>([]);
  const [loading, setLoading] = useState(true);

  // Mock data for demonstration - In real app, fetch from financial API
  useEffect(() => {
    const mockData: IndexData[] = [
      {
        name: 'NIFTY 50',
        symbol: 'NIFTY',
        price: 19685.50,
        change: 127.25,
        changePercent: 0.65
      },
      {
        name: 'SENSEX',
        symbol: 'SENSEX',
        price: 65953.48,
        change: 432.18,
        changePercent: 0.66
      },
      {
        name: 'NIFTY BANK',
        symbol: 'BANKNIFTY',
        price: 43567.30,
        change: -156.75,
        changePercent: -0.36
      },
      {
        name: 'NIFTY IT',
        symbol: 'NIFTYIT',
        price: 29876.45,
        change: 189.25,
        changePercent: 0.64
      },
      {
        name: 'NIFTY FMCG',
        symbol: 'NIFTYFMCG',
        price: 56234.78,
        change: 78.90,
        changePercent: 0.14
      }
    ];

    // Simulate API delay
    setTimeout(() => {
      setIndexes(mockData);
      setLoading(false);
    }, 1000);

    // Update prices every 30 seconds with random fluctuations
    const interval = setInterval(() => {
      setIndexes(prev => prev.map(index => {
        const randomChange = (Math.random() - 0.5) * 2; // Random change between -1% to +1%
        const newPrice = index.price * (1 + randomChange / 100);
        const priceChange = newPrice - index.price;
        const percentChange = (priceChange / index.price) * 100;

        return {
          ...index,
          price: Number(newPrice.toFixed(2)),
          change: Number(priceChange.toFixed(2)),
          changePercent: Number(percentChange.toFixed(2))
        };
      }));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-IN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(num);
  };

  if (loading) {
    return (
      <section className="py-8 bg-muted/30">
        <div className="container-custom">
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            <span className="ml-3 text-muted-foreground">Loading market data...</span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 bg-muted/30 border-y border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-semibold">Live Market Indexes</h3>
            <div className="flex items-center gap-1 text-success text-sm">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              <span>Live</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            Last updated: {new Date().toLocaleTimeString()}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {indexes.map((index) => (
            <Card key={index.symbol} className="card-professional hover:shadow-md transition-all duration-200">
              <CardContent className="p-4">
                <div className="text-center">
                  <h4 className="font-semibold text-sm mb-1">{index.name}</h4>
                  <div className="text-lg font-bold mb-2">
                    {formatNumber(index.price)}
                  </div>
                  <div className={`flex items-center justify-center gap-1 text-sm ${
                    index.change >= 0 ? 'text-success' : 'text-destructive'
                  }`}>
                    {index.change >= 0 ? (
                      <TrendingUp className="h-3 w-3" />
                    ) : (
                      <TrendingDown className="h-3 w-3" />
                    )}
                    <span>
                      {index.change >= 0 ? '+' : ''}{formatNumber(Math.abs(index.change))} 
                      ({index.changePercent >= 0 ? '+' : ''}{index.changePercent}%)
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-4 text-center">
          <p className="text-xs text-muted-foreground">
            * Market data is for demonstration purposes. In production, integrate with live market data APIs.
          </p>
        </div>
      </div>
    </section>
  );
}