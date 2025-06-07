import React, { useState } from 'react';

export default function SIPCalculator() {
  const [name, setName] = useState('');
  const [sipAmount, setSipAmount] = useState(0);
  const [years, setYears] = useState(1);
  const [expectedReturn, setExpectedReturn] = useState(2);
  const [result, setResult] = useState(null);
  const [invested, setInvested] = useState(null);
  const [gain, setGain] = useState(null);

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
        <p className="italic text-lg text-gray-700">
          "The strongest force in the universe is compound interest." – Albert Einstein
        </p>
        <p className="italic text-lg text-gray-700 mt-2">
          "Start early, invest regularly, and stay invested." – Common SIP Wisdom
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
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full"
          />
          <div className="text-right text-green-700 font-semibold">{years} year(s)</div>
        </div>

        <div className="mt-4">
          <label className="block text-gray-700 mb-1">Expected Return (%)</label>
          <input
            type="range"
            min="1"
            max="30"
            value={expectedReturn}
            onChange={(e) => setExpectedReturn(Number(e.target.value))}
            className="w-full"
          />
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
      </div>
    </div>
  );
}
