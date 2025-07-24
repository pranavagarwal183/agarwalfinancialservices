import { TrendingUp, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const footerLinks = {
  services: [
    'Wealth Management',
    'Investment Planning',
    'Insurance Solutions',
    'Tax Planning',
    'Retirement Planning',
    'Education Planning',
  ],
  company: [
    'About Us',
    'Our Team',
    'Careers',
    'News & Updates',
    'Client Testimonials',
    'Contact Us',
  ],
  resources: [
    'Financial Calculator',
    'Investment Guide',
    'Tax Saving Tips',
    'Market Insights',
    'Downloads',
    'FAQ',
  ],
  legal: [
    'Privacy Policy',
    'Terms of Service',
    'Disclaimer',
    'SEBI Compliance',
    'Grievance Redressal',
    'Risk Disclosure',
  ],
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-gold-foreground" />
                </div>
                <span className="text-xl font-bold">Agarwal Financial Services</span>
              </div>
              
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Transforming financial futures since 1998. We provide comprehensive financial 
                planning services to help individuals and families achieve their financial goals 
                with confidence and security.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-gold" />
                  <span className="text-sm">+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-gold" />
                  <span className="text-sm">info@agarwalfinancial.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-gold" />
                  <span className="text-sm">123 Business Center, MG Road, Bangalore</span>
                </div>
              </div>

              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-primary-foreground/10 hover:bg-gold rounded-lg flex items-center justify-center text-primary-foreground hover:text-gold-foreground transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-primary"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-sm text-primary-foreground/80 hover:text-primary-foreground hover:underline transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-sm text-primary-foreground/80 hover:text-primary-foreground hover:underline transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources & Legal */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Resources</h3>
              <ul className="space-y-3 mb-8">
                {footerLinks.resources.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-sm text-primary-foreground/80 hover:text-primary-foreground hover:underline transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-semibold mb-6">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-sm text-primary-foreground/80 hover:text-primary-foreground hover:underline transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-sm text-primary-foreground/80">
              © 2024 Agarwal Financial Services. All rights reserved.
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-end gap-6 text-sm">
              <span className="text-primary-foreground/60">SEBI Reg. No: INZ000123456</span>
              <span className="text-primary-foreground/60">IRDA License No: 12345</span>
              <span className="text-primary-foreground/60">AMFI Reg. No: ARN-98765</span>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-primary-foreground/10">
            <p className="text-xs text-primary-foreground/60 text-center leading-relaxed">
              <strong>Disclaimer:</strong> Mutual fund investments are subject to market risks. 
              Please read all scheme related documents carefully before investing. Past performance 
              is not indicative of future returns. Please consider your specific investment requirements 
              before choosing a fund, or designing a portfolio that suits your needs.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}