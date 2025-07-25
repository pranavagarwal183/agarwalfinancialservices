import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Award, Users, GraduationCap, Phone, Mail } from 'lucide-react';

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Sushil Agarwal",
      position: "Founder & CEO",
      experience: "22+ Years",
      specialization: "Wealth Management & Strategic Planning",
      email: "sushilagarwal22@gmail.com",
      phone: "+91 9824448111"
    },
    {
      name: "Nidhi",
      position: "Manager",
      experience: "12+ Years",
      specialization: "Client Relations",
      email: "nidhi@agarwalfinancial.com",
      phone: "+91 9824448113"
    },
    {
      name: "Suresh Kumar",
      position: "Manager",
      experience: "10+ Years",
      specialization: "Portfolio Management",
      email: "suresh@agarwalfinancial.com",
      phone: "+91 9824448114"
    },
    {
      name: "Harsh Patadiya",
      position: "Operations Lead",
      experience: "5+ Years",
      specialization: "Support and Services",
      email: "harsh@agarwalfinancial.com",
      phone: "+91 9824448116"
    }
  ];

  // Separate the founder from the rest of the team for the hierarchical layout
  const founder = teamMembers[0];
  const otherMembers = teamMembers.slice(1);

  return (
    <div className="min-h-screen bg-white">
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

        {/* Team Stats & Members Section */}
        <section className="py-16">
          <div className="container-custom">
            {/* Team Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
              {[
                { icon: Users, number: "3,000+", label: "Happy Clients" },
                { icon: Award, number: "22+", label: "Years Experience" },
                { icon: GraduationCap, number: "100%", label: "Certified Advisors" },
                { icon: Phone, number: "24/7", label: "Dedicated Support" }
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

            {/* --- Team Members Section (Hierarchical Layout) --- */}
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Our Leadership</h2>

              {/* --- Founder & CEO Section --- */}
              <div className="flex justify-center mb-16">
                <div className="bg-white rounded-lg p-6 md:p-8 w-full max-w-3xl text-center md:flex md:items-center md:gap-8 md:text-left shadow-2xl border">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary to-gold rounded-full flex items-center justify-center mx-auto md:mx-0 flex-shrink-0 mb-6 md:mb-0 border-4 border-white">
                    <span className="text-4xl font-bold text-white">
                      {founder.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="w-full">
                    <h3 className="text-3xl font-bold text-gray-900 mb-1">{founder.name}</h3>
                    <p className="text-primary font-medium text-xl mb-4">{founder.position}</p>
                    <div className="text-left text-sm text-muted-foreground space-y-2 h-16">
                      {founder.experience && <p><strong>Experience:</strong> {founder.experience}</p>}
                      {founder.specialization && <p><strong>Specialization:</strong> {founder.specialization}</p>}
                    </div>
                    <div className="border-t mt-4 pt-4 space-y-3">
                      <a href={`mailto:${founder.email}`} className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground hover:text-primary transition-colors">
                        <Mail className="w-4 h-4" />
                        <span>{founder.email}</span>
                      </a>
                      <a href={`tel:${founder.phone}`} className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground hover:text-primary transition-colors">
                        <Phone className="w-4 h-4" />
                        <span>{founder.phone}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* --- Other Team Members Section --- */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {otherMembers.map((member) => (
                  <div 
                    key={member.name} 
                    className="bg-white rounded-lg p-6 text-center group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border"
                  >
                    <div className="w-28 h-28 bg-gradient-to-br from-primary to-gold rounded-full flex items-center justify-center mx-auto mb-5 border-4 border-white shadow-lg">
                      <span className="text-3xl font-bold text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-4">{member.position}</p>
                    
                    <div className="text-sm text-muted-foreground space-y-2 h-20">
                      {member.experience && <p><strong>Experience:</strong> {member.experience}</p>}
                      {member.specialization && <p><strong>Specialization:</strong> {member.specialization}</p>}
                    </div>
                    
                    <div className="border-t mt-4 pt-4 space-y-3">
                      <a href={`mailto:${member.email}`} className="flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                        <Mail className="w-4 h-4" />
                        <span>{member.email}</span>
                      </a>
                      <a href={`tel:${member.phone}`} className="flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                        <Phone className="w-4 h-4" />
                        <span>{member.phone}</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Company Values */}
            <div className="mt-24">
              <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: "Integrity", description: "We maintain the highest ethical standards in all our dealings, ensuring transparency and honesty." },
                  { title: "Excellence", description: "We strive for excellence in service delivery, continuously improving our knowledge and skills to serve you better." },
                  { title: "Client-Centric", description: "Your financial goals are our priority. We customize our services to meet your unique needs and circumstances." }
                ].map((value) => (
                  <div key={value.title} className="bg-gray-50 rounded-lg p-6 text-center border">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{value.title}</h3>
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