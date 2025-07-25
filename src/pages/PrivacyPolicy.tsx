import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-primary mb-8">Privacy Policy</h1>
              <p className="text-muted-foreground mb-8">Last updated: July 2025</p>

              <div className="prose max-w-none space-y-8">

                <div className="card p-8">
                  <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    At Agarwal Financial Services, we collect information that you provide directly to us, including:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Name and contact information</li>
                    <li>Purchase history</li>
                    <li>Payment information</li>
                    <li>Communication preferences</li>
                  </ul>
                </div>

                <div className="card p-8">
                  <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We use the collected information to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Process your purchases</li>
                    <li>Communicate with you about our products and services</li>
                    <li>Improve our customer service</li>
                    <li>Send promotional materials (with your consent)</li>
                  </ul>
                </div>

                <div className="card p-8">
                  <h2 className="text-2xl font-semibold mb-4">3. Information Security</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We implement appropriate security measures to protect your personal information and maintain its confidentiality.
                  </p>
                </div>

                <div className="card p-8">
                  <h2 className="text-2xl font-semibold mb-4">4. Data Retention</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We retain your personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required by law.
                  </p>
                </div>

                <div className="card p-8">
                  <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    You have the right to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate data</li>
                    <li>Request deletion of your data</li>
                    <li>Object to data processing</li>
                    <li>Data portability</li>
                  </ul>
                </div>

                <div className="card p-8">
                  <h2 className="text-2xl font-semibold mb-4">6. Contact Information</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    For any privacy-related questions or concerns, please contact us at:
                    <br />
                    <br />
                    <strong>Phone:</strong> +91 9824448111
                    <br />
                    <strong>Alternative Phone:</strong> +91 9824448113
                    <br />
                    <strong>Address:</strong> 318, Pride Sapphire, Opposite Golden Supermarket, Off Amin Marg, Rajkot, Gujarat, India - 360001
                  </p>
                </div>

                <div className="card p-8">
                  <h2 className="text-2xl font-semibold mb-4">7. Updates to Privacy Policy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update this privacy policy from time to time. The latest version will always be available on our website.
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

export default PrivacyPolicy;