import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-8 text-center">
        Privacy Policy
      </h1>

      <div className="space-y-8 text-gray-800 text-base sm:text-lg leading-relaxed bg-white p-6 rounded-xl shadow-md border border-gray-100">

        <div>
          <h2 className="font-semibold text-blue-800 mb-2">1. Information We Collect</h2>
          <p>At Agarwal Financial Services, we collect information that you provide directly to us, including:</p>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li>Name and contact information</li>
            <li>Purchase history</li>
            <li>Payment information</li>
            <li>Communication preferences</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-blue-800 mb-2">2. How We Use Your Information</h2>
          <p>We use the collected information to:</p>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li>Process your purchases</li>
            <li>Communicate with you about our products and services</li>
            <li>Improve our customer service</li>
            <li>Send promotional materials (with your consent)</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-blue-800 mb-2">3. Information Security</h2>
          <p>We implement appropriate security measures to protect your personal information and maintain its confidentiality.</p>
        </div>

        <div>
          <h2 className="font-semibold text-blue-800 mb-2">4. Data Retention</h2>
          <p>We retain your personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required by law.</p>
        </div>

        <div>
          <h2 className="font-semibold text-blue-800 mb-2">5. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li>Access your personal information</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to data processing</li>
            <li>Data portability</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-blue-800 mb-2">6. Contact Information</h2>
          <p>For any privacy-related questions or concerns, please contact us at:</p>
          <p className="mt-2">
            Phone: +91 982448111<br />
            Alternative Phone: +91 9824448113<br />
            Address: 318, Pride Sapphire, Opposite Golden Supermarket, Off Amin Marg, Rajkot, Gujarat, India - 360001
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-blue-800 mb-2">7. Updates to Privacy Policy</h2>
          <p>We may update this privacy policy from time to time. The latest version will always be available on our website.</p>
        </div>
      </div>
    </div>
  );
}
