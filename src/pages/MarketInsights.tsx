import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { TrendingUp, TrendingDown, Calendar, Eye } from 'lucide-react';

const MarketInsights = () => {
  const insights = [
    {
      title: "Q4 2024 Market Review: Resilient Performance Amid Global Uncertainties",
      date: "January 15, 2025",
      category: "Market Review",
      summary: "Indian equity markets showed remarkable resilience in Q4 2024, with Nifty 50 gaining 8.2% despite global headwinds.",
      readTime: "5 min read",
      trend: "up"
    },
    {
      title: "Sectoral Rotation: Why Banking Stocks Are Gaining Momentum",
      date: "January 10, 2025", 
      category: "Sector Analysis",
      summary: "Banking sector is witnessing renewed interest as credit growth accelerates and asset quality improves across major banks.",
      readTime: "4 min read",
      trend: "up"
    },
    {
      title: "SIP Flows Hit Record High: What This Means for Retail Investors",
      date: "January 5, 2025",
      category: "Investment Trends",
      summary: "Monthly SIP flows crossed ₹20,000 crores for the first time, indicating strong retail participation in equity markets.",
      readTime: "3 min read",
      trend: "up"
    },
    {
      title: "US Fed Policy Impact on Emerging Markets",
      date: "December 28, 2024",
      category: "Global Markets", 
      summary: "Analysis of how potential US Federal Reserve policy changes could impact capital flows to emerging markets including India.",
      readTime: "6 min read",
      trend: "down"
    }
  ];

  const marketHighlights = [
    {
      metric: "Nifty 50",
      value: "22,850",
      change: "+1.2%",
      trend: "up"
    },
    {
      metric: "FII Flows (Jan)",
      value: "₹8,500 Cr",
      change: "Net Buying",
      trend: "up"
    },
    {
      metric: "SIP Flows (Dec)",
      value: "₹20,371 Cr",
      change: "+12% MoM",
      trend: "up"
    },
    {
      metric: "10Y G-Sec Yield",
      value: "6.85%",
      change: "-0.15%",
      trend: "down"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 to-gold/5 py-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Market Insights
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Stay informed with our latest market analysis and investment perspectives
              </p>
            </div>
          </div>
        </section>

        {/* Market Highlights */}
        <section className="py-8 bg-accent/30">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-center mb-8">Market Highlights</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {marketHighlights.map((highlight, index) => (
                <div key={index} className="card p-6 text-center">
                  <div className="text-sm text-muted-foreground mb-2">{highlight.metric}</div>
                  <div className="text-2xl font-bold mb-2">{highlight.value}</div>
                  <div className={`flex items-center justify-center gap-1 text-sm ${
                    highlight.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {highlight.trend === 'up' ? (
                      <TrendingUp className="h-4 w-4" />
                    ) : (
                      <TrendingDown className="h-4 w-4" />
                    )}
                    {highlight.change}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Insights */}
        <section className="py-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Latest Analysis</h2>
              
              <div className="space-y-8">
                {insights.map((insight, index) => (
                  <div key={index} className="card p-8 group hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                          {insight.category}
                        </span>
                        <div className={`p-1 rounded-full ${
                          insight.trend === 'up' ? 'bg-green-100' : 'bg-red-100'
                        }`}>
                          {insight.trend === 'up' ? (
                            <TrendingUp className="h-4 w-4 text-green-600" />
                          ) : (
                            <TrendingDown className="h-4 w-4 text-red-600" />
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {insight.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          {insight.readTime}
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {insight.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {insight.summary}
                    </p>
                    
                    <button className="text-primary font-medium hover:underline">
                      Read Full Analysis →
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-16">
              <div className="card p-8 max-w-2xl mx-auto text-center">
                <h3 className="text-2xl font-semibold mb-4">Stay Updated</h3>
                <p className="text-muted-foreground mb-6">
                  Subscribe to our weekly market insights and get expert analysis delivered 
                  straight to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button className="btn-primary px-6">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MarketInsights;