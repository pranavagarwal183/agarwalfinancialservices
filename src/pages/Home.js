import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="font-sans text-gray-800">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 px-8 py-12">
        {/* Text */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Welcome To Agarwal Financial Services
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Established in 2003. With 22+ years of experience in the financial industry, Agarwal Financial Services has grown into a trusted name in the financial sector, offering tailored solutions that align with the diverse needs of our clients. 
            We specialize in distributing financial products, ensuring every recommendation is suited to each client's unique goals and requirements.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80"
            alt="Happy Family"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Inquiry Now Sidebar */}
      <div className="fixed left-0 top-1/3 transform -rotate-90 origin-left bg-green-600 text-white px-3 py-2 font-semibold text-sm cursor-pointer z-50">
        Inquiry Now
      </div>

      {/* WhatsApp Chat Now Button */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow-lg z-50"
      >
        <FaWhatsapp className="mr-2" />
        Chat Now
      </a>
    </div>
  );
}
