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
              <h1 className="text-4xl font-bold text-primary mb-8">Terms of Use</h1>
              <p className="text-muted-foreground mb-8">Last Updated: July 2025</p>

              <div className="prose max-w-none space-y-8">

                <div className="card p-8">
                  <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By accessing and using the services of Agarwal Financial Services, you agree to be bound by these Terms of Use.
                  </p>
                </div>

                <div className="card p-8">
                  <h2 className="text-2xl font-semibold mb-4">2. Product Information</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We strive to provide accurate product descriptions and pricing. However, we reserve the right to correct any errors and modify prices without prior notice.
                  </p>
                </div>

                <div className="card p-8">
                  <h2 className="text-2xl font-semibold mb-4">3. Purchase and Payment</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    All purchases are subject to availability and acceptance of your order. We accept various payment methods and ensure secure transaction processing.
                  </p>
                </div>

                <div className="card p-8">
                  <h2 className="text-2xl font-semibold mb-4">4. Return Policy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our return policy allows returns within 7 days of purchase, subject to the condition of the product and original packaging.
                  </p>
                </div>

                <div className="card p-8">
                  <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    All content, including designs, logos, and images, are the property of Agarwal Financial Services and are protected by applicable intellectual property laws.
                  </p>
                </div>

                <div className="card p-8">
                  <h2 className="text-2xl font-semibold mb-4">6. Contact Information</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Phone:</strong> +91 9824448111
                    <br />
                    <strong>Alternative Phone:</strong> +91 9824448113
                    <br />
                    <strong>Address:</strong> 318, Pride Sapphire, Opposite Golden Supermarket, Off Amin Marg, Rajkot, Gujarat, India - 360001
                  </p>
                </div>

                <div className="card p-8">
                  <h2 className="text-2xl font-semibold mb-4">7. Modifications to Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We reserve the right to modify these terms at any time. Continued use of our services after any modifications indicates your acceptance of the updated terms.
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