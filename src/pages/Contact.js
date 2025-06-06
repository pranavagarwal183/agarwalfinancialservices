import React from 'react';

export default function Contact() {
  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8 max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-500">
          Contact Us
        </h2>
        <p className="text-gray-600 mt-2">Have questions? We'd love to hear from you!</p>
      </div>

      <div className="bg-white border border-gray-100 shadow-xl rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="space-y-2 text-gray-700 text-base">
          <p>
            <strong>Email:</strong> sushilagarwal22@gmail.com
          </p>
          <p>
            <strong>Phone:</strong> +91-9824448111
          </p>
        </div>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
