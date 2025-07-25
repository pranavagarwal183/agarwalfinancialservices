import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Award, Users, GraduationCap, Phone } from 'lucide-react';

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Sushil Agarwal",
      position: "Founder & CEO",
      experience: "20+ Years",
      education: "MBA Finance, CFA",
      specialization: "Wealth Management & Strategic Planning",
      email: "sushilagarwal22@gmail.com",
      phone: "+91 9824448111"
    },
    {
      name: "Priya Agarwal",
      position: "Senior Investment Advisor",
      experience: "15+ Years",
      education: "M.Com, CFP",
      specialization: "Mutual Funds & Portfolio Management",
      email: "priya@agarwalfinancial.com",
      phone: "+91 9824448113"
    },
    {
      name: "Rajesh Kumar",
      position: "Insurance Specialist",
      experience: "12+ Years",
      education: "MBA Insurance, IRDA Certified",
      specialization: "Life & General Insurance",
      email: "rajesh@agarwalfinancial.com",
      phone: "+91 9824448116"
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
                Meet Our Expert Team
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Experienced professionals dedicated to your financial success
              </p>
            </div>
          </div>
        </section>

        {/* Team Stats */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid md:grid-cols-4 gap-8 mb-16">
              {[
                {
                  icon: Users,
                  number: "500+",
                  label: "Happy Clients"
                },
                {
                  icon: Award,
                  number: "20+",
                  label: "Years Experience"
                },
                {
                  icon: GraduationCap,
                  number: "100%",
                  label: "Certified Advisors"
                },
                {
                  icon: Phone,
                  number: "24/7",
                  label: "Support Available"
                }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Team Members */}
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <div key={index} className="card p-6 text-center group hover:shadow-lg transition-shadow">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary to-gold rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.position}</p>
                    
                    <div className="space-y-2 text-sm text-muted-foreground mb-4">
                      <p><strong>Experience:</strong> {member.experience}</p>
                      <p><strong>Education:</strong> {member.education}</p>
                      <p><strong>Specialization:</strong> {member.specialization}</p>
                    </div>
                    
                    <div className="border-t pt-4 space-y-1 text-sm">
                      <p className="text-muted-foreground">{member.email}</p>
                      <p className="text-muted-foreground">{member.phone}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Company Values */}
            <div className="mt-20">
              <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Integrity",
                    description: "We maintain the highest ethical standards in all our dealings, ensuring transparency and honesty in every client interaction."
                  },
                  {
                    title: "Excellence",
                    description: "We strive for excellence in service delivery, continuously improving our knowledge and skills to serve our clients better."
                  },
                  {
                    title: "Client-Centric",
                    description: "Your financial goals are our priority. We customize our services to meet your unique needs and circumstances."
                  }
                ].map((value, index) => (
                  <div key={index} className="card p-6 text-center">
                    <h3 className="text-xl font-semibold mb-4 text-primary">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OurTeam;