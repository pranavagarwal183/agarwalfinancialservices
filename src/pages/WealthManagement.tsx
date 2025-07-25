import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { TrendingUp, Shield, Target, Users } from 'lucide-react';

const WealthManagement = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 to-gold/5 py-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Comprehensive Wealth Management
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Build, preserve, and transfer your wealth with our personalized strategies
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                {
                  icon: TrendingUp,
                  title: "Portfolio Management",
                  description: "Diversified investment portfolios tailored to your risk profile"
                },
                {
                  icon: Shield,
                  title: "Risk Assessment",
                  description: "Comprehensive risk analysis and mitigation strategies"
                },
                {
                  icon: Target,
                  title: "Goal Planning",
                  description: "Strategic planning to achieve your financial objectives"
                },
                {
                  icon: Users,
                  title: "Estate Planning",
                  description: "Ensure smooth wealth transfer to future generations"
                }
              ].map((service, index) => (
                <div key={index} className="card p-6 text-center group">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>

            {/* Detailed Content */}
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Our Wealth Management Approach</h2>
              
              <div className="space-y-8">
                <div className="card p-8">
                  <h3 className="text-2xl font-semibold mb-4">Personalized Strategy</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Every client's financial situation is unique. We begin with a comprehensive analysis of your current assets, 
                    liabilities, income, and future goals to create a customized wealth management strategy that aligns with 
                    your specific needs and risk tolerance.
                  </p>
                </div>

                <div className="card p-8">
                  <h3 className="text-2xl font-semibold mb-4">Diversified Investment Portfolio</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our investment philosophy centers on diversification across asset classes, sectors, and geographies. 
                    We utilize a mix of equity, debt, real estate, and alternative investments to optimize returns while 
                    managing risk effectively.
                  </p>
                </div>

                <div className="card p-8">
                  <h3 className="text-2xl font-semibold mb-4">Ongoing Monitoring & Review</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Wealth management is not a one-time activity. We continuously monitor your portfolio performance, 
                    market conditions, and life changes to ensure your strategy remains aligned with your evolving goals 
                    and circumstances.
                  </p>
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

export default WealthManagement;