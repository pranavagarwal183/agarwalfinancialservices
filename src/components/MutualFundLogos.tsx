import { useEffect, useState } from 'react';

const mutualFundCompanies = [
  'SBI Mutual Fund',
  'HDFC Mutual Fund',
  'ICICI Prudential MF',
  'Aditya Birla Sun Life MF',
  'Nippon India MF',
  'Kotak Mahindra MF',
  'Axis Mutual Fund',
  'UTI Mutual Fund',
  'DSP Mutual Fund',
  'Franklin Templeton MF',
  'Invesco Mutual Fund',
  'Mirae Asset MF',
  'Tata Mutual Fund',
  'PGIM India MF',
  'Mahindra Manulife MF',
  'Canara Robeco MF',
  'L&T Mutual Fund',
  'Edelweiss MF',
  'HSBC Mutual Fund',
  'Principal MF'
];

export default function MutualFundLogos() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mutualFundCompanies.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Create a sliding effect by showing 6 companies at a time
  const getVisibleCompanies = () => {
    const visible = [];
    for (let i = 0; i < 6; i++) {
      const index = (currentIndex + i) % mutualFundCompanies.length;
      visible.push(mutualFundCompanies[index]);
    }
    return visible;
  };

  return (
    <section className="py-12 bg-white dark:bg-gray-900 border-y border-border">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold mb-2">Trusted Partners</h3>
          <p className="text-muted-foreground">
            We partner with India's leading mutual fund companies to offer you the best investment options
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex items-center justify-center space-x-8 md:space-x-12">
            {getVisibleCompanies().map((company, index) => (
              <div
                key={`${company}-${index}`}
                className="flex-shrink-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-32 h-16 md:w-40 md:h-20 bg-gradient-to-br from-primary/5 to-gold/5 rounded-lg border border-border flex items-center justify-center p-4 hover:shadow-md transition-all duration-300">
                  <span className="text-xs md:text-sm font-medium text-center text-muted-foreground leading-tight">
                    {company}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white dark:from-gray-900 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white dark:from-gray-900 to-transparent pointer-events-none"></div>
        </div>

        <div className="flex justify-center mt-6">
          <div className="flex space-x-2">
            {Array.from({ length: Math.ceil(mutualFundCompanies.length / 6) }).map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / 6) === index
                    ? 'bg-primary'
                    : 'bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            And many more leading financial institutions. 
            <span className="text-primary font-medium cursor-pointer hover:underline ml-1">
              View all partners →
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}