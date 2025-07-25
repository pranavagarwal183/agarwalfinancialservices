import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Disclaimer = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-primary mb-8">Disclaimer</h1>
              <p className="text-muted-foreground mb-8">Important disclosures and risk warnings</p>

              <div className="prose max-w-none space-y-8">
                <div className="card p-8 border-l-4 border-amber-500">
                  <h2 className="text-2xl font-semibold mb-4 text-amber-600">Investment Risk Warning</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Mutual fund investments are subject to market risks. Please read all scheme 
                    related documents carefully before investing.</strong> Past performance is not indicative 
                    of future returns. Please consider your specific investment requirements before choosing 
                    a fund or designing a portfolio that suits your needs.
                  </p>
                </div>

                <div className="card p-8">
                  <h2 className="text-2xl font-semibold mb-4">General Disclaimer</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The information provided on this website and through our services is for general 
                    informational purposes only and should not be considered as personalized investment 
                    advice. All investment decisions should be made based on your individual financial 
                    situation, risk tolerance, and investment objectives.
                  </p>
                </div>

                <div className="card p-8">
                  <h2 className="text-2xl font-semibold mb-4">Market Risks</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    All investments carry various types of risks including:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li><strong>Market Risk:</strong> Risk of loss due to market volatility and economic factors</li>
                    <li><strong>Credit Risk:</strong> Risk of default by issuers of debt instruments</li>
                    <li><strong>Liquidity Risk:</strong> Risk of not being able to sell investments when needed</li>
                    <li><strong>Interest Rate Risk:</strong> Risk due to changes in interest rates</li>
                    <li><strong>Currency Risk:</strong> Risk due to fluctuations in foreign exchange rates</li>
                  </ul>
                </div>

                <div className="card p-8">
                  <h2 className="text-2xl font-semibold mb-4">No Guarantee of Returns</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    There is no assurance or guarantee that the objectives of any investment product will 
                    be achieved. All investments have the potential for profit as well as the risk of loss. 
                    Historical performance should not be taken as an indication or guarantee of future 
                    performance.
                  </p>
                </div>

                <div className="card p-8">
                  <h2 className="text-2xl font-semibold mb-4">Professional Advice</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    While we strive to provide accurate and up-to-date information, we recommend that you 
                    consult with qualified financial advisors and read all relevant documents before making 
                    any investment decisions. Tax implications may vary based on individual circumstances 
                    and may change in the future.
                  </p>
                </div>

                <div className="card p-8">
                  <h2 className="text-2xl font-semibold mb-4">Regulatory Information</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Agarwal Financial Services is an AMFI Registered Mutual Fund Distributor with 
                    Registration Number ARN-11312. We are authorized to distribute mutual fund products 
                    and provide investment advisory services as per SEBI regulations.
                  </p>
                </div>

                <div className="card p-8 bg-primary/5">
                  <h2 className="text-2xl font-semibold mb-4">Contact for Clarifications</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    For any clarifications regarding our services or this disclaimer, please contact us at 
                    sushilagarwal22@gmail.com or call +91 9824448111. We are committed to providing 
                    transparent and ethical financial services to all our clients.
                  </p>
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

export default Disclaimer;