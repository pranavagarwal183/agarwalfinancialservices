import React from 'react';

export default function Contact() {
  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
      <p className="mb-2 text-center">Have questions? Get in touch!</p>
      <div className="bg-white shadow p-4 rounded-md space-y-4">
        <p><strong>Email:</strong> info@.com</p>
        <p><strong>Phone:</strong> +91-9824448111</p>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" />
          <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" />
          <textarea placeholder="Your Message" className="w-full p-2 border rounded" rows="4"></textarea>
          <button type="submit" className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800">Send</button>
        </form>
      </div>
    </div>
  );
}
