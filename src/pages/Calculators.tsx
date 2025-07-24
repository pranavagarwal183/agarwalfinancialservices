import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator, TrendingUp, PiggyBank, Target } from 'lucide-react';
import SIPCalculator from '../components/calculators/SIPCalculator';
import LumpsumCalculator from '../components/calculators/LumpsumCalculator';
import RetirementCalculator from '../components/calculators/RetirementCalculator';

const CalculatorsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary/5 to-gold/5">
          <div className="container-custom">
            <div className="text-center mb-16 animate-fade-in">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Calculator className="h-8 w-8 text-primary-foreground" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Financial
                <span className="text-primary"> Calculators</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Plan your financial future with our comprehensive suite of calculators.
                Get instant insights into your investments, savings, and retirement planning.
              </p>
            </div>
          </div>
        </section>

        {/* Calculators Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* SIP Calculator */}
              <div className="animate-slide-in-left">
                <Card className="card-professional h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <TrendingUp className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-2xl">SIP Calculator</CardTitle>
                    </div>
                    <p className="text-muted-foreground">
                      Calculate the future value of your Systematic Investment Plan (SIP)
                      and see how regular investments can help you build wealth over time.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <SIPCalculator />
                  </CardContent>
                </Card>
              </div>

              {/* Lumpsum Calculator */}
              <div className="animate-slide-in-right">
                <Card className="card-professional h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                        <PiggyBank className="h-6 w-6 text-success" />
                      </div>
                      <CardTitle className="text-2xl">Lumpsum Calculator</CardTitle>
                    </div>
                    <p className="text-muted-foreground">
                      Calculate returns on your one-time investment and understand
                      how your money can grow with compound interest.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <LumpsumCalculator />
                  </CardContent>
                </Card>
              </div>

              {/* Retirement Calculator */}
              <div className="lg:col-span-2 animate-fade-in">
                <Card className="card-professional">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center">
                        <Target className="h-6 w-6 text-gold" />
                      </div>
                      <CardTitle className="text-2xl">Retirement Planning Calculator</CardTitle>
                    </div>
                    <p className="text-muted-foreground">
                      Plan for a comfortable retirement by calculating how much you need to save
                      and invest to meet your retirement goals.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <RetirementCalculator />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CalculatorsPage;
