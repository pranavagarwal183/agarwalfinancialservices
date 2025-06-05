import React from 'react';

export default function Services() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-lg p-5 rounded-md">
          <h3 className="text-xl font-semibold mb-2">Mutual Funds</h3>
          <p>Expert guidance to invest in mutual funds that align with your financial goals and risk appetite.</p>
        </div>
        <div className="bg-white shadow-lg p-5 rounded-md">
          <h3 className="text-xl font-semibold mb-2">Life Insurance</h3>
          <p>Secure your family's future with customized life insurance policies tailored to your needs.</p>
        </div>
        <div className="bg-white shadow-lg p-5 rounded-md">
          <h3 className="text-xl font-semibold mb-2">General Insurance</h3>
          <p>Protect assets with health, motor, travel, and property insurance options.</p>
        </div>
        <div className="bg-white shadow-lg p-5 rounded-md">
          <h3 className="text-xl font-semibold mb-2">Financial Planning</h3>
          <p>Comprehensive financial planning services including retirement, education, and tax planning.</p>
        </div>
      </div>
    </div>
  );
}
