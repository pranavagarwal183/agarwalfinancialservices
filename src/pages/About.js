import React from 'react';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Company Introduction */}
      <section className="mb-12 bg-white p-6 rounded-xl shadow-md border border-gray-100">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-900 border-b-4 border-blue-300 inline-block pb-1">
          About Agarwal Financial Services
        </h2>
        <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
          <p>
            Agarwal Financial Services is a trusted AMFI-Registered Mutual Fund Distributor, committed to empowering individuals and families to achieve financial independence through smart, goal-oriented investment strategies.
          </p>
          <p>
            With deep industry experience and a client-first approach, we specialize in investment planning, insurance advisory, retirement solutions, and portfolio diversification tailored to your unique financial goals. Whether you are just starting your investment journey or optimizing your existing portfolio, we provide expert guidance and transparency every step of the way.
          </p>
        </div>
      </section>

      {/* Mutual Fund Information */}
      <section className="bg-blue-50 p-6 rounded-xl shadow-sm border border-blue-100">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-blue-800 border-b-2 border-blue-400 inline-block pb-1">
          Mutual Funds
        </h2>
        <div className="space-y-5 text-gray-800 text-base sm:text-lg leading-relaxed">
          <p>
            Mutual funds are one of the most accessible and versatile investment options available in India. They allow individuals to pool money with other investors to invest in a diversified portfolio managed by professional fund managers.
          </p>

          <p>
            With various schemes such as equity, debt, hybrid, sector-specific, and tax-saving funds, mutual funds can cater to both short-term needs and long-term wealth accumulation. They offer flexibility for investors to match their financial objectives and risk tolerance.
          </p>

          <p>
            One of the core benefits of mutual funds is <strong className="text-blue-700">diversification</strong>. Investing in a mutual fund gives exposure to a basket of securities, reducing the risks of investing in a single asset.
          </p>

          <p>
            Another key feature is <strong className="text-blue-700">liquidity</strong>. Most open-ended mutual funds allow investors to buy or sell units anytime without heavy penalties. This provides easy access to money compared to traditional long-term financial products.
          </p>

          <p>
            Systematic Investment Plans (SIPs) make mutual funds even more accessible by enabling regular, small investments, which encourages financial discipline and leverages compounding for long-term benefits.
          </p>

          <p>
            For tax-conscious investors, mutual funds also offer <strong className="text-blue-700">Equity Linked Savings Schemes (ELSS)</strong> under Section 80C of the Income Tax Act. These schemes help in growing wealth while saving on taxes.
          </p>

          <p>
            In summary, mutual funds combine growth potential, liquidity, risk management, and tax efficiency—making them an ideal investment vehicle for both new and seasoned investors.
          </p>
        </div>
      </section>
    </div>
  );
}
