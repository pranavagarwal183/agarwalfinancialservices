import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "How do I start investing with Agarwal Financial Services?",
          answer: "Getting started is simple. Contact us to schedule a consultation where we'll assess your financial goals, risk tolerance, and investment horizon. Based on this, we'll recommend a personalized investment strategy."
        },
        {
          question: "What is the minimum amount required to start investing?",
          answer: "You can start investing with as little as ₹500 per month through SIPs in mutual funds. For lumpsum investments, the minimum varies by fund but typically starts from ₹5,000."
        },
        {
          question: "Do I need to visit your office to invest?",
          answer: "While we welcome office visits, most investment processes can be completed online or through phone consultations. We provide digital services for your convenience."
        }
      ]
    },
    {
      category: "Mutual Funds",
      questions: [
        {
          question: "What are mutual funds and how do they work?",
          answer: "Mutual funds pool money from multiple investors to invest in diversified portfolios of stocks, bonds, or other securities. Professional fund managers make investment decisions on behalf of investors."
        },
        {
          question: "What is the difference between SIP and lumpsum investment?",
          answer: "SIP (Systematic Investment Plan) involves investing a fixed amount regularly, while lumpsum is a one-time investment. SIP helps average out market volatility and is ideal for long-term wealth creation."
        },
        {
          question: "Can I withdraw my mutual fund investments anytime?",
          answer: "Most mutual funds are open-ended and allow redemption anytime. However, some funds may have exit loads for early withdrawals. ELSS funds have a 3-year lock-in period."
        }
      ]
    },
    {
      category: "Fees and Charges",
      questions: [
        {
          question: "What fees do you charge for your services?",
          answer: "Our advisory fees are transparent and competitive. We charge a small percentage of your investment as advisory fees. Detailed fee structure will be shared during consultation."
        },
        {
          question: "Are there any hidden charges?",
          answer: "No, we believe in complete transparency. All charges including fund management fees, exit loads, and our advisory fees are clearly disclosed upfront."
        }
      ]
    },
    {
      category: "Tax and Legal",
      questions: [
        {
          question: "How are mutual fund investments taxed?",
          answer: "Tax treatment depends on the type of fund and holding period. Equity funds held for more than 1 year are subject to LTCG tax of 10% on gains above ₹1 lakh. We provide detailed tax guidance."
        },
        {
          question: "Can I get tax benefits on my investments?",
          answer: "Yes, ELSS (Equity Linked Savings Scheme) funds offer tax deduction up to ₹1.5 lakh under Section 80C. We help you optimize your tax-saving investments."
        }
      ]
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 to-gold/5 py-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Find answers to common questions about our services and investment options
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              {faqs.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-12">
                  <h2 className="text-2xl font-bold text-primary mb-6">{category.category}</h2>
                  
                  <div className="space-y-4">
                    {category.questions.map((faq, questionIndex) => {
                      const globalIndex = categoryIndex * 10 + questionIndex;
                      const isOpen = openFAQ === globalIndex;
                      
                      return (
                        <div key={questionIndex} className="card">
                          <button
                            className="w-full p-6 text-left flex items-center justify-between hover:bg-accent/50 transition-colors"
                            onClick={() => toggleFAQ(globalIndex)}
                          >
                            <h3 className="font-semibold text-lg pr-4">{faq.question}</h3>
                            {isOpen ? (
                              <ChevronDown className="h-5 w-5 text-primary flex-shrink-0" />
                            ) : (
                              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0" />
                            )}
                          </button>
                          
                          {isOpen && (
                            <div className="px-6 pb-6">
                              <div className="border-t pt-4">
                                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Section */}
            <div className="mt-16">
              <div className="card p-8 max-w-2xl mx-auto text-center">
                <h3 className="text-2xl font-semibold mb-4">Still Have Questions?</h3>
                <p className="text-muted-foreground mb-6">
                  Can't find the answer you're looking for? Our team is here to help you with any questions 
                  about our services or investment options.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="btn-primary">Contact Us</button>
                  <button className="btn-secondary">Schedule Consultation</button>
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

export default FAQ;