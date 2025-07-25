import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-primary mb-8">Terms of Service</h1>
              <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

              <div className="prose max-w-none space-y-8">
                <div className="card p-8">
                  <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By accessing and using the services of Agarwal Financial Services, you accept and agree 
                    to be bound by the terms and provision of this agreement. These terms apply to all 
                    users of our services including browsers, clients, and contributors.
                  </p>
                </div>

                <div className="card p-8">
                  <h2 className="text-2xl font-semibold mb-4">Services Description</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Agarwal Financial Services provides financial advisory services including but not limited to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Mutual fund distribution and advisory</li>
                    <li>Investment planning and portfolio management</li>
                    <li>Insurance planning and solutions</li>
                    <li>Tax planning and wealth management</li>
                    <li>Retirement and education planning</li>
                  </ul>
                </div>

                <div className="card p-8">
                  <h2 className="text-2xl font-semibold mb-4">Client Responsibilities</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    As a client, you agree to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Provide accurate and complete information about your financial situation</li>
                    <li>Inform us of any material changes in your circumstances</li>
                    <li>Review all investment documents carefully before making decisions</li>
                    <li>Understand that all investments carry inherent risks</li>
                    <li>Make informed decisions based on your risk tolerance and goals</li>
                  </ul>
                </div>

                <div className="card p-8">
                  <h2 className="text-2xl font-semibold mb-4">Investment Risks</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    All investments involve risk, including the potential loss of principal. Past performance 
                    does not guarantee future results. We provide recommendations based on our analysis and 
                    your stated objectives, but the final investment decisions rest with you.
                  </p>
                </div>

                <div className="card p-8">
                  <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our liability is limited to the extent permitted by law. We shall not be liable for any 
                    indirect, incidental, special, or consequential damages arising from your use of our 
                    services or any investment decisions made based on our recommendations.
                  </p>
                </div>

                <div className="card p-8">
                  <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    These terms shall be governed by and construed in accordance with the laws of India. 
                    Any disputes arising under these terms shall be subject to the jurisdiction of courts 
                    in Rajkot, Gujarat.
                  </p>
                </div>

                <div className="card p-8">
                  <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    For questions about these Terms of Service, please contact us at 
                    sushilagarwal22@gmail.com or call +91 9824448111.
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

export default TermsOfService;