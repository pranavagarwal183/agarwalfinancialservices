import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="font-sans text-gray-800">
      {/* Top Banner */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
        <img src="/logo.png" alt="Logo" className="h-16" />
        <div className="text-sm text-right">
          <p className="text-gray-600">AMFI-Registered Mutual Fund Distributor</p>
          <div className="mt-2 space-x-2">
            <button className="bg-blue-900 text-white px-4 py-1 rounded-full hover:bg-blue-700">
              Portfolio Login
            </button>
            <button className="bg-black text-white px-4 py-1 rounded-full hover:bg-gray-800">
              New User Signup
            </button>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-blue-900 text-white text-sm font-semibold">
        <ul className="flex justify-center gap-8 py-3">
          <li className="hover:underline cursor-pointer">HOME</li>
          <li className="hover:underline cursor-pointer">ABOUT US</li>
          <li className="hover:underline cursor-pointer">WHAT WE OFFER</li>
          <li className="hover:underline cursor-pointer">CALCULATORS</li>
          <li className="hover:underline cursor-pointer">CONTACT US</li>
        </ul>
      </nav>

      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 px-8 py-12">
        {/* Text */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Welcome To Agarwal Financial Services
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Established in 2020. With 18 years of experience in the financial industry, Agarwal Financial Services has grown into a trusted name in the financial sector, offering tailored solutions that align with the diverse needs of our clients. 
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
