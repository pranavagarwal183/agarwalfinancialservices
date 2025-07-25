import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BookOpen, TrendingUp, Shield, Target } from 'lucide-react';

const InvestmentGuide = () => {
  const guides = [
    {
      title: "Beginner's Guide to Mutual Funds",
      description: "Understand the basics of mutual fund investing, types of funds, and how to get started.",
      icon: BookOpen,
      topics: ["What are Mutual Funds", "Types of Mutual Funds", "SIP vs Lumpsum", "Risk Assessment"]
    },
    {
      title: "Building Your First Portfolio",
      description: "Learn how to create a diversified investment portfolio based on your goals and risk profile.",
      icon: Target,
      topics: ["Asset Allocation", "Diversification", "Goal Setting", "Review Process"]
    },
    {
      title: "Understanding Market Risks",
      description: "Comprehensive guide to different types of investment risks and how to manage them.",
      icon: Shield,
      topics: ["Market Risk", "Credit Risk", "Liquidity Risk", "Risk Mitigation"]
    },
    {
      title: "Advanced Investment Strategies",
      description: "Explore sophisticated investment techniques for experienced investors.",
      icon: TrendingUp,
      topics: ["Value Investing", "Growth Investing", "Sector Rotation", "Tax Optimization"]
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
                Investment Guide
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Comprehensive resources to help you make informed investment decisions
              </p>
            </div>
          </div>
        </section>

        {/* Investment Guides */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {guides.map((guide, index) => (
                <div key={index} className="card p-8 group hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <guide.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{guide.title}</h3>
                      <p className="text-muted-foreground">{guide.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-primary">Topics Covered:</h4>
                    <ul className="space-y-1">
                      {guide.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Key Investment Principles */}
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Key Investment Principles</h2>
              
              <div className="space-y-8">
                <div className="card p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">Start Early</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The power of compounding works best when you give it time. Starting your investment journey 
                    early, even with small amounts, can lead to significant wealth creation over the long term.
                  </p>
                </div>

                <div className="card p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">Diversify Your Portfolio</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Don't put all your eggs in one basket. Spread your investments across different asset classes, 
                    sectors, and geographies to reduce risk and improve potential returns.
                  </p>
                </div>

                <div className="card p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">Invest Regularly</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Systematic Investment Plans (SIPs) help you invest a fixed amount regularly, regardless of 
                    market conditions. This approach helps average out market volatility and builds discipline.
                  </p>
                </div>

                <div className="card p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">Stay Invested</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Avoid the temptation to time the market. Stay invested through market ups and downs to 
                    benefit from long-term wealth creation and the power of compounding.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <div className="card p-8 max-w-2xl mx-auto">
                <h3 className="text-2xl font-semibold mb-4">Ready to Start Your Investment Journey?</h3>
                <p className="text-muted-foreground mb-6">
                  Our expert advisors are here to help you create a personalized investment strategy 
                  based on your goals and risk profile.
                </p>
                <button className="btn-primary">
                  Schedule a Consultation
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default InvestmentGuide;