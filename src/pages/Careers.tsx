import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Briefcase, Users, TrendingUp, Award, MapPin, Clock } from 'lucide-react';

const Careers = () => {
  const openPositions = [
    {
      title: "Senior Financial Advisor",
      location: "Rajkot, Gujarat",
      type: "Full-time",
      experience: "3-5 years",
      description: "Looking for an experienced financial advisor to join our growing team. You'll work directly with clients to provide comprehensive financial planning services.",
      requirements: [
        "CFP or CFA certification preferred",
        "3+ years in financial advisory",
        "Strong communication skills",
        "Client relationship management experience"
      ]
    },
    {
      title: "Investment Research Analyst",
      location: "Rajkot, Gujarat", 
      type: "Full-time",
      experience: "2-4 years",
      description: "Analyze market trends, research investment opportunities, and support our advisory team with data-driven insights.",
      requirements: [
        "Finance or Economics degree",
        "Strong analytical skills", 
        "Knowledge of mutual funds and equity markets",
        "Proficiency in Excel and financial modeling"
      ]
    },
    {
      title: "Client Relationship Executive",
      location: "Rajkot, Gujarat",
      type: "Full-time", 
      experience: "1-3 years",
      description: "Maintain client relationships, assist with investment processes, and provide ongoing support to our valued clients.",
      requirements: [
        "Graduate degree preferred",
        "Excellent communication skills",
        "Customer service orientation",
        "Basic knowledge of financial products"
      ]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Clear career progression paths with opportunities for professional development"
    },
    {
      icon: Award,
      title: "Competitive Compensation",
      description: "Attractive salary packages with performance-based incentives"
    },
    {
      icon: Users,
      title: "Learning Environment",
      description: "Continuous learning opportunities and industry certifications support"
    },
    {
      icon: Briefcase,
      title: "Work-Life Balance",
      description: "Flexible working arrangements and supportive work culture"
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
                Join Our Team
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Build your career in financial services with a company that values growth, integrity, and client success
              </p>
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-16">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Agarwal Financial Services?</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {benefits.map((benefit, index) => (
                <div key={index} className="card p-6 text-center group">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>

            {/* Company Culture */}
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-6">Our Culture</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Agarwal Financial Services, we believe in fostering a culture of excellence, integrity, and 
                continuous learning. Our team members are our greatest asset, and we're committed to providing 
                an environment where you can grow professionally while making a meaningful impact on our clients' 
                financial futures.
              </p>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 bg-accent/30">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Current Openings</h2>
              
              <div className="space-y-8">
                {openPositions.map((position, index) => (
                  <div key={index} className="card p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {position.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {position.type}
                          </div>
                          <div className="flex items-center gap-1">
                            <Briefcase className="h-4 w-4" />
                            {position.experience}
                          </div>
                        </div>
                      </div>
                      <button className="btn-primary mt-4 lg:mt-0">
                        Apply Now
                      </button>
                    </div>
                    
                    <p className="text-muted-foreground mb-6">{position.description}</p>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((requirement, reqIndex) => (
                          <li key={reqIndex} className="text-muted-foreground flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            {requirement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Application Process</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    step: "1",
                    title: "Submit Application",
                    description: "Send your resume and cover letter to careers@agarwalfinancial.com"
                  },
                  {
                    step: "2", 
                    title: "Initial Screening",
                    description: "Our HR team will review your application and contact qualified candidates"
                  },
                  {
                    step: "3",
                    title: "Interview Process",
                    description: "Multiple rounds including technical and cultural fit assessments"
                  }
                ].map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact for Careers */}
            <div className="mt-16">
              <div className="card p-8 max-w-2xl mx-auto text-center">
                <h3 className="text-2xl font-semibold mb-4">Ready to Join Us?</h3>
                <p className="text-muted-foreground mb-6">
                  Don't see a position that matches your skills? We're always looking for talented individuals 
                  to join our team. Send us your resume and let's discuss how you can contribute to our success.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="btn-primary">
                    Email Your Resume
                  </button>
                  <button className="btn-secondary">
                    Learn More About Us
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

export default Careers;