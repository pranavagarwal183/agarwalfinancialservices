import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, TrendingUp, Users } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const stats = [
  { id: 1, name: 'Years of Experience', value: '22+' },
  { id: 2, name: 'Happy Clients', value: '3,000+' },
  { id: 3, name: 'Assets Managed', value: '₹200Cr+' },
  { id: 4, name: 'Mutual Funds', value: '100+' },
];

const features = [
  {
    name: 'Personalized Planning',
    description: 'Tailored financial strategies for your unique goals',
    icon: Users,
  },
  {
    name: 'Secure Investments',
    description: 'Your investments are protected with bank-level security',
    icon: Shield,
  },
  {
    name: 'Proven Growth',
    description: 'Consistent returns with our time-tested strategies',
    icon: TrendingUp,
  },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Financial Success"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="text-white animate-fade-in">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              Your Financial
              <span className="block text-gold">Success Story</span>
              Starts Here
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
              Transform your financial future with expert guidance, personalized strategies, 
              and proven investment solutions from Agarwal Financial Services.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="btn-gold text-lg px-8 py-4 group focus-ring"
                onClick={() => window.location.href = '/contact'}
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-4 border-white text-primary hover:bg-white hover:text-primary focus-ring"
                onClick={() => window.location.href = '/services'}
              >
                View Our Services
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.id} className="text-center lg:text-left animate-scale-in">
                  <div className="text-3xl lg:text-4xl font-bold text-gold mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/80">
                    {stat.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="lg:pl-8">
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={feature.name}
                  className="glass-effect p-6 rounded-xl animate-slide-in-right"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-black mb-2">
                        {feature.name}
                      </h3>
                      <p className="text-black/80">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}