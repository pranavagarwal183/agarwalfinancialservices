export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
          <ul className="text-sm space-y-2 text-gray-300">
            <li><strong>Address:</strong> 318, Pride Sapphire, Opposite Golden Supermarket, Off Amin Marg, Rajkot, Gujarat, India - 360001</li>
            <li><strong>Phone:</strong> +91-9824448111</li>
            <li><strong>Office:</strong> +91-9824448113,+91-9824448116</li>
            <li><strong>Email:</strong> sushilagarwal22@gmail.com</li>
          </ul>
        </div>
        <div></div>
        {/* Embedded Map */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Locate Us</h3>
          <div className="rounded overflow-hidden shadow-lg">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d691.4074980353588!2d70.78186401538964!3d22.284224298497563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca3bf99f43d9%3A0xf37119cfd285f15e!2sGolden%20Super%20Market!5e0!3m2!1sen!2sin!4v1749214707673!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="bg-blue-800 text-sm text-center py-4 border-t border-blue-700">
        <p>&copy; {new Date().getFullYear()} Agarwal Financial Services. All rights reserved.</p>
        <p className="text-gray-300 mt-1 px-4">
          Risk Factors – Investments in Mutual Funds are subject to Market Risks. Read all scheme-related documents carefully before investing. Mutual Fund Schemes do not assure or guarantee any returns. Past performances of any Mutual Fund Scheme may or may not be sustained in the future. There is no guarantee that the investment objective of any suggested scheme shall be achieved. All existing and prospective investors are advised to check and evaluate the Exit loads and other cost structures (TER) applicable at the time of making the investment before finalizing any investment decision for Mutual Funds schemes. We deal in Regular Plans only for Mutual Fund Schemes and earn a Trailing Commission on client investments. Disclosure of commission earnings is made to clients at the time of investments.
        </p>
        <p>AMFI Registered Mutual Fund Distributor | ARN-11312 | EUIN-E036621</p>
      </div>
    </footer>
  );
}
