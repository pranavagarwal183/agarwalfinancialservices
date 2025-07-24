import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  PiggyBank, 
  TrendingUp, 
  Shield, 
  Calculator, 
  Building, 
  Heart,
  GraduationCap,
  Home,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: PiggyBank,
    title: 'Wealth Management',
    description: 'Comprehensive wealth building strategies tailored to your financial goals and risk tolerance.',
    features: ['Portfolio Management', 'Asset Allocation', 'Risk Assessment', 'Regular Reviews'],
    color: 'text-blue-600 dark:text-blue-400',
  },
  {
    icon: TrendingUp,
    title: 'Investment Planning',
    description: 'Strategic investment solutions including mutual funds, SIPs, and equity investments.',
    features: ['Mutual Funds', 'SIP Planning', 'Equity Investments', 'Tax Planning'],
    color: 'text-green-600 dark:text-green-400',
  },
  {
    icon: Shield,
    title: 'Insurance Solutions',
    description: 'Protect your family and assets with comprehensive life and general insurance plans.',
    features: ['Life Insurance', 'Health Insurance', 'General Insurance', 'Claims Support'],
    color: 'text-purple-600 dark:text-purple-400',
  },
  {
    icon: Calculator,
    title: 'Tax Planning',
    description: 'Optimize your tax liabilities with smart planning and investment strategies.',
    features: ['Tax Optimization', '80C Investments', 'Tax-free Bonds', 'ELSS Funds'],
    color: 'text-orange-600 dark:text-orange-400',
  },
  {
    icon: Building,
    title: 'Corporate Finance',
    description: 'Business financial solutions for companies looking to grow and optimize.',
    features: ['Business Loans', 'Working Capital', 'Investment Advisory', 'Risk Management'],
    color: 'text-indigo-600 dark:text-indigo-400',
  },
  {
    icon: GraduationCap,
    title: 'Education Planning',
    description: 'Secure your child\'s educational future with dedicated education savings plans.',
    features: ['Education Savings', 'Child Plans', 'Study Abroad Planning', 'Scholarship Guidance'],
    color: 'text-pink-600 dark:text-pink-400',
  },
  {
    icon: Home,
    title: 'Real Estate Finance',
    description: 'Home loan assistance and real estate investment guidance for property buyers.',
    features: ['Home Loans', 'Property Investment', 'Loan Against Property', 'Real Estate Advisory'],
    color: 'text-cyan-600 dark:text-cyan-400',
  },
  {
    icon: Heart,
    title: 'Retirement Planning',
    description: 'Build a secure retirement corpus with systematic retirement planning strategies.',
    features: ['Pension Plans', 'Retirement Corpus', 'Senior Citizen Plans', 'Post-retirement Income'],
    color: 'text-red-600 dark:text-red-400',
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Comprehensive Financial
            <span className="block text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From wealth management to retirement planning, we offer a complete suite of financial services 
            designed to help you achieve your financial goals at every stage of life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="card-professional hover:scale-105 transition-all duration-300 animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4 ${service.color}`}>
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in">
          <div className="bg-primary rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Transform Your Financial Future?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Schedule a free consultation with our expert financial advisors and discover 
              how we can help you achieve your financial goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="btn-gold text-lg px-8 py-4 focus-ring"
              >
                Book Free Consultation
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary focus-ring"
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}