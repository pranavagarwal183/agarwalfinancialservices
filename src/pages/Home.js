import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import ImageMy from '../assets/1000090699.jpg';
import { motion } from 'framer-motion';
import AMCScrollBar from '../components/AMCScrollBar';


// Dummy AMC logos (replace with real ones)
const amcLogos = [
  { name: "SBI", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/SBI-logo.svg/512px-SBI-logo.svg.png" },
  { name: "HDFC", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/HDFC_Bank_Logo.svg/512px-HDFC_Bank_Logo.svg.png" },
  { name: "ICICI", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/33/ICICI_Bank_Logo.svg/512px-ICICI_Bank_Logo.svg.png" },
  { name: "Axis", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Axis_Bank_logo.svg/512px-Axis_Bank_logo.svg.png" },
  { name: "UTI", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/UTI_Mutual_Fund_Logo.svg/512px-UTI_Mutual_Fund_Logo.svg.png" },
];

export default function Home() {
  return (
    <div className="font-sans text-gray-800 overflow-x-hidden">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 px-8 py-12">
        {/* Text */}
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-4 leading-snug">
            Welcome To Agarwal Financial Services
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Established in 2003, Agarwal Financial Services has grown into a trusted name in the financial sector.
            With over 22 years of expertise, we offer personalized solutions tailored to each client's goals,
            specializing in mutual fund distribution and financial planning.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6 }}
        >
          <img
            src={ImageMy}
            alt="Happy Family"
            className="rounded-lg shadow-2xl border-2 border-blue-100"
          />
        </motion.div>
      </div>

      <div><AMCScrollBar /></div>

      {/* Inquiry Now Sidebar */}
      <div className="fixed left-0 top-1/3 transform -rotate-90 origin-left bg-green-600 text-white px-3 py-2 font-semibold text-sm cursor-pointer hover:bg-green-700 transition z-50">
        Inquiry Now
      </div>

      {/* WhatsApp Chat Now Button */}
      <a
        href="https://wa.me/919824448111"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow-lg z-50"
      >
        <FaWhatsapp className="mr-2 text-xl" />
        Chat Now
      </a>
    </div>
  );
}
