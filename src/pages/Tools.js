// src/pages/Calculators.js
import React from 'react';
import { Link } from 'react-router-dom';

const calculators = [
  {
    name: 'Education Calculator',
    image: '/assets/calculators/education.png',
    link: '/calculators/education',
  },
  {
    name: 'Lumpsum Calculator',
    image: '/assets/calculators/lumpsum.png',
    link: '/calculators/lumpsum',
  },
  {
    name: 'Retirement Calculator',
    image: '/assets/calculators/retirement.png',
    link: '/calculators/retirement',
  },
  {
    name: 'SIP Calculator',
    image: '/assets/calculators/sip.png',
    link: '/calculators/sip',
  },
  {
    name: 'Wedding Calculator',
    image: '/assets/calculators/wedding.png',
    link: '/calculators/wedding',
  },
  {
    name: 'Dream Vacation Calculator',
    image: '/assets/calculators/vacation.png',
    link: '/calculators/vacation',
  },
];

export default function Calculators() {
  return (
    <div className="bg-gray-100 min-h-screen px-6 py-10">
      <h2 className="text-3xl font-bold text-green-700 mb-4">All MF Calculators</h2>
      <p className="text-gray-700 max-w-xl mb-10">
        Financial goals are the priorities and targets you set for how you want to spend and save your money. They aren't one size fits all, because everyone has different priorities. However, if you don't set your financial goals, you'll probably be left wondering where all your money went. Importance of Setting Goals.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {calculators.map((item, idx) => (
          <Link to={item.link} key={idx}>
            <div className="bg-white rounded-xl shadow hover:shadow-lg p-6 flex flex-col items-center justify-center transition-all">
              <img src={item.image} alt={item.name} className="w-16 h-16 mb-4" />
              <h3 className="text-lg font-bold text-green-700 text-center">{item.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
