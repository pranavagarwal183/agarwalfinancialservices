import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { FaPiggyBank, FaHeartbeat, FaShieldAlt, FaChartLine } from 'react-icons/fa';

export default function Services() {
  return (
    <div className="relative overflow-hidden">
      {/* Background animated character */}
      <div className="absolute -z-10 top-0 right-0 w-[250px] md:w-[350px] opacity-20">
        <Player
          autoplay
          loop
          src="https://assets2.lottiefiles.com/packages/lf20_touohxv0.json"
        />
      </div>

      <div className="p-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-10">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <ServiceCard
            icon={<FaPiggyBank className="text-pink-600 text-3xl" />}
            title="Mutual Funds"
            description="Expert guidance to invest in mutual funds that align with your financial goals and risk appetite."
          />
          <ServiceCard
            icon={<FaHeartbeat className="text-red-600 text-3xl" />}
            title="Life Insurance"
            description="Secure your family's future with customized life insurance policies tailored to your needs."
          />
          <ServiceCard
            icon={<FaShieldAlt className="text-green-600 text-3xl" />}
            title="General Insurance"
            description="Protect assets with health, motor, travel, and property insurance options."
          />
          <ServiceCard
            icon={<FaChartLine className="text-blue-600 text-3xl" />}
            title="Financial Planning"
            description="Comprehensive financial planning services including retirement, education, and tax planning."
          />
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 transform transition hover:scale-105 hover:shadow-2xl duration-300 border hover:border-blue-400">
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-gray-100 p-3 rounded-full">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-blue-800">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
