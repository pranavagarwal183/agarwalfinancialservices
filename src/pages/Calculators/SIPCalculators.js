import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const quotes = [
  '"The strongest force in the universe is compound interest." – Albert Einstein',
  '"Start early, invest regularly, and stay invested." – Common SIP Wisdom',
  '"Compound interest is the eighth wonder of the world. He who understands it, earns it." – Albert Einstein',
  '"Investing should be more like watching paint dry or watching grass grow. If you want excitement, take $800 and go to Las Vegas." – Paul Samuelson',
  '"Do not save what is left after spending, but spend what is left after saving." – Warren Buffett'
];

export default function SIPCalculator() {
  const [name, setName] = useState('');
  const [sipAmount, setSipAmount] = useState(10000);
  const [years, setYears] = useState(10);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [result, setResult] = useState(null);
  const [invested, setInvested] = useState(null);
  const [gain, setGain] = useState(null);
  const [quote, setQuote] = useState(quotes[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const index = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[index]);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const calculateSIP = () => {
    const monthlyRate = expectedReturn / 100 / 12;
    const months = years * 12;
    const futureValue =
      sipAmount * ((Math.pow(1 + monthlyRate, months) - 1) * (1 + monthlyRate)) / monthlyRate;

    const investedValue = sipAmount * months;
    const totalGain = futureValue - investedValue;

    setResult(Math.round(futureValue));
    setInvested(Math.round(investedValue));
    setGain(Math.round(totalGain));
  };

  const sendMail = () => {
    const summary = `Hi ${name}, your SIP of Rs.${sipAmount} for ${years} years at ${expectedReturn}% expected return is projected to be worth Rs.${result}. Invested amount: Rs.${invested}. Gain: Rs.${gain}.`;
    const subject = encodeURIComponent('Your SIP Calculation Result');
    const body = encodeURIComponent(summary);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-4 text-green-700">SIP Calculator</h1>

      {/* Quotes */}
      <div className="text-center mb-8 max-w-2xl">
        <p className="italic text-lg text-gray-700 transition-opacity duration-500 ease-in-out">
          {quote}
        </p>
      </div>

      {/* Calculator Box */}
      <div className="w-full max-w-xl bg-white border rounded-xl shadow-lg p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded px-3 py-2"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">SIP amount (₹)</label>
            <input
              type="number"
              value={sipAmount}
              onChange={(e) => setSipAmount(Number(e.target.value))}
              className="w-full border rounded px-3 py-2"
              placeholder="e.g. 5000"
            />
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-gray-700 mb-1">Investment Duration (Years)</label>
          <input
            type="range"
            min="1"
            max="30"
            list="yearMarks"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full"
          />
          <datalist id="yearMarks">
            {[5, 10, 15, 20, 25, 30].map((val) => (
              <option key={val} value={val} label={`${val}`} />
            ))}
          </datalist>
          <div className="text-right text-green-700 font-semibold">{years} year(s)</div>
        </div>

        <div className="mt-4">
          <label className="block text-gray-700 mb-1">Expected Return (%)</label>
          <input
            type="range"
            min="1"
            max="15"
            list="interestMarks"
            value={expectedReturn}
            onChange={(e) => setExpectedReturn(Number(e.target.value))}
            className="w-full"
          />
          <datalist id="interestMarks">
            {[5, 7, 10, 12, 15].map((val) => (
              <option key={val} value={val} label={`${val}%`} />
            ))}
          </datalist>
          <div className="text-right text-green-700 font-semibold">{expectedReturn}% per annum</div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <button
            onClick={calculateSIP}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded shadow w-full sm:w-auto"
          >
            Calculate
          </button>
          {result && (
            <button
              onClick={sendMail}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow w-full sm:w-auto"
            >
              Mail Result
            </button>
          )}
        </div>

        {/* Results */}
        {result && (
          <div className="mt-6 space-y-2 text-lg font-medium text-gray-800">
            <div>
              <span className="font-semibold text-gray-700">Projected SIP Value:</span>{' '}
              ₹{result.toLocaleString()}
            </div>
            <div>
              <span className="font-semibold text-gray-700">Invested Amount:</span>{' '}
              ₹{invested.toLocaleString()}
            </div>
            <div>
              <span className="font-semibold text-gray-700">Total Gain:</span>{' '}
              ₹{gain.toLocaleString()}
            </div>
          </div>
        )}

        {/* Bar Chart */}
        {result && (
          <div className="mt-8">
            <Bar
              data={{
                labels: ['Invested', 'Gain', 'Projected Value'],
                datasets: [
                  {
                    label: '₹ Value',
                    data: [invested, gain, result],
                    backgroundColor: ['#10B981', '#3B82F6', '#F59E0B'],
                  },
                ],
              }}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                scales: {
                  y: {
                    beginAtZero: true,
                  },
                },
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
