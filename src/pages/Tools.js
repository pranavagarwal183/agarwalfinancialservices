import React from 'react';

export default function Tools() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Financial Tools</h2>
      <div className="space-y-6">
        <div className="bg-white shadow-md p-4 rounded-md">
          <h3 className="text-lg font-semibold mb-2">Financial Fitness Assessment</h3>
          <p>Evaluate your financial health with our easy-to-use fitness tool.</p>
        </div>
        <div className="bg-white shadow-md p-4 rounded-md">
          <h3 className="text-lg font-semibold mb-2">Risk Profile</h3>
          <p>Understand your risk tolerance to choose the right investment strategy.</p>
        </div>
        <div className="bg-white shadow-md p-4 rounded-md">
          <h3 className="text-lg font-semibold mb-2">Investment Calculators</h3>
          <p>Use SIP, retirement, and tax calculators to plan your future efficiently.</p>
        </div>
      </div>
    </div>
  );
}
