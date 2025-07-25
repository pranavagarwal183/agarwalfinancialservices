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
              <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

              <div className="prose max-w-none space-y-8">
                <div className="card p-8">
                  <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We collect information you provide directly to us, such as when you create an account, 
                    request services, or communicate with us. This may include:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Personal identification information (name, email, phone number)</li>
                    <li>Financial information necessary for our services</li>
                    <li>Communication preferences</li>
                    <li>Technical data from your use of our website</li>
                  </ul>
                </div>

                <div className="card p-8">
                  <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process transactions and manage your account</li>
                    <li>Communicate with you about our services</li>
                    <li>Comply with legal and regulatory requirements</li>
                    <li>Protect against fraud and unauthorized access</li>
                  </ul>
                </div>

                <div className="card p-8">
                  <h2 className="text-2xl font-semibold mb-4">Information Sharing</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We do not sell, trade, or rent your personal information to third parties. We may share 
                    your information only in the following circumstances: with your consent, to comply with 
                    legal obligations, to protect our rights and safety, or with service providers who assist 
                    us in operating our business under strict confidentiality agreements.
                  </p>
                </div>

                <div className="card p-8">
                  <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We implement appropriate technical and organizational measures to protect your personal 
                    information against unauthorized access, alteration, disclosure, or destruction. However, 
                    no method of transmission over the internet or electronic storage is 100% secure.
                  </p>
                </div>

                <div className="card p-8">
                  <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    You have the right to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Access and update your personal information</li>
                    <li>Request deletion of your data</li>
                    <li>Opt-out of marketing communications</li>
                    <li>File a complaint with regulatory authorities</li>
                  </ul>
                </div>

                <div className="card p-8">
                  <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions about this Privacy Policy, please contact us at 
                    sushilagarwal22@gmail.com or call us at +91 9824448111.
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