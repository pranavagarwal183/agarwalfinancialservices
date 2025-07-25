import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Award, 
  Users, 
  TrendingUp, 
  Shield, 
  Target,
  Heart,
  CheckCircle,
  Star
} from 'lucide-react';

const achievements = [
  {
    icon: Award,
    title: '22+ Years Experience',
    description: 'Trusted financial expertise since 2003',
  },
  {
    icon: Users,
    title: '3,000+ Happy Clients',
    description: 'Serving families across India',
  },
  {
    icon: TrendingUp,
    title: '₹200+ Crores Managed',
    description: 'Assets under management',
  },
  {
    icon: Shield,
    title: '100+ Different Funds',
    description: 'Mutual Fund AMCS',
  },
];

const values = [
  {
    icon: Target,
    title: 'Goal-Oriented Approach',
    description: 'Every strategy is designed around your specific financial objectives and timeline.',
  },
  {
    icon: Shield,
    title: 'Trust & Transparency',
    description: 'Complete transparency in all our dealings with no hidden charges or surprises.',
  },
  {
    icon: Heart,
    title: 'Client-First Philosophy',
    description: 'Your financial well-being is our priority, not just investment returns.',
  },
  {
    icon: TrendingUp,
    title: 'Innovation & Growth',
    description: 'Leveraging latest financial tools and strategies for optimal results.',
  },
];

const certifications = [
  'SEBI Registered Investment Advisor',
  'IRDA Licensed Insurance Advisor',
  'AMFI Registered Mutual Fund Distributor',
  'CFP Certified Financial Planner',
  'ISO 9001:2015 Certified',
];

const testimonialHighlight = {
  text: "Agarwal Financial Services has been instrumental in helping us achieve our financial goals. Their personalized approach and expert guidance have given us the confidence to secure our family's future.",
  author: "Priya & Rajesh Sharma",
  role: "Happy Clients since 2018"
};

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About
            <span className="text-primary"> Agarwal Financial</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            With over two decades of experience in financial services, we've helped thousands of families 
            achieve their financial dreams through trusted advice and proven strategies.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
          <div className="animate-slide-in-left">
            <h3 className="text-3xl font-bold mb-6">Our Story</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2003 by Mr. Sushil Agarwal, Agarwal Financial Services began with a simple 
                mission: to make quality financial planning accessible to every Indian family.
              </p>
              <p>
                What started as a small advisory firm has grown into one of India's most trusted 
                financial service providers, managing over ₹500 crores in client assets and serving 
                more than 3,000 satisfied clients across the country.
              </p>
              <p>
                Our success is built on three pillars: trust, transparency, and proven results. 
                We believe that financial planning is not just about investments, it's about 
                understanding your dreams and creating a roadmap to achieve them.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-6">
              {certifications.map((cert) => (
                <Badge key={cert} variant="secondary" className="text-xs">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  {cert}
                </Badge>
              ))}
            </div>
          </div>

          <div className="animate-slide-in-right">
            <Card className="card-hero p-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-primary-foreground" />
                </div>
                <blockquote className="text-lg italic mb-4 text-muted-foreground">
                  "{testimonialHighlight.text}"
                </blockquote>
                <cite className="font-semibold text-foreground">
                  {testimonialHighlight.author}
                </cite>
                <p className="text-sm text-muted-foreground">
                  {testimonialHighlight.role}
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Achievements */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {achievements.map((achievement, index) => (
            <Card 
              key={achievement.title}
              className="card-professional text-center p-6 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-muted-foreground text-sm">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 animate-fade-in">Our Core Values</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="flex gap-4 animate-slide-in-left"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in">
          <Card className="card-hero p-8 lg:p-12">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Start Your Financial Journey?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied clients who trust us with their financial future. 
              Let's create a personalized plan for your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-primary text-lg px-8 py-4 focus-ring">
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 focus-ring">
                View Our Portfolio
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}