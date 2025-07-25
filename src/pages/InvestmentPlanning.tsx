import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BarChart3, PieChart, LineChart, DollarSign } from 'lucide-react';

const InvestmentPlanning = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 to-gold/5 py-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Strategic Investment Planning
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Make informed investment decisions with our expert guidance and research-backed strategies
              </p>
            </div>
          </div>
        </section>

        {/* Investment Options */}
        <section className="py-16">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12">Investment Solutions</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                {
                  icon: BarChart3,
                  title: "Mutual Funds",
                  description: "Diversified funds across equity, debt, and hybrid categories"
                },
                {
                  icon: PieChart,
                  title: "Direct Equity",
                  description: "Individual stock selection based on fundamental analysis"
                },
                {
                  icon: LineChart,
                  title: "SIP & STP",
                  description: "Systematic investment and transfer plans for disciplined investing"
                },
                {
                  icon: DollarSign,
                  title: "Fixed Income",
                  description: "Bonds, FDs, and other debt instruments for stable returns"
                }
              ].map((option, index) => (
                <div key={index} className="card p-6 text-center group">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <option.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{option.title}</h3>
                  <p className="text-muted-foreground">{option.description}</p>
                </div>
              ))}
            </div>

            {/* Investment Process */}
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Our Investment Process</h2>
              
              <div className="space-y-8">
                <div className="card p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">1. Goal Assessment</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We start by understanding your financial goals, investment horizon, and risk appetite. Whether you're 
                    planning for retirement, children's education, or wealth creation, we align your investments accordingly.
                  </p>
                </div>

                <div className="card p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">2. Asset Allocation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Based on your profile, we recommend an optimal asset allocation strategy across equity, debt, and 
                    alternative investments to balance risk and returns effectively.
                  </p>
                </div>

                <div className="card p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">3. Fund Selection</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our research team analyzes fund performance, manager track record, and investment philosophy to 
                    select the best funds for your portfolio across different categories.
                  </p>
                </div>

                <div className="card p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">4. Regular Review</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We conduct periodic portfolio reviews to ensure your investments remain aligned with your goals 
                    and make necessary adjustments based on market conditions and life changes.
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

export default InvestmentPlanning;