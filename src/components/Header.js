import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; 
import banner from '../assets/mutual-fund-banner.png'; 

export default function Header() {
  return (
    <header
      className="bg-cover bg-center" // Placed in public
    >
      <div className="bg-white bg-opacity-0">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 py-4 text-black">
          {/* Left: Logo + Text */}
          <div className="flex items-center space-x-4">
            <img src={logo} alt="AFS Logo" className="h-16 object-contain" />
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-black ">Agarwal Financial Services</h1>
              <p className="text-sm text-black-300">AMFI-Registered Mutual Fund Distributor</p>
            </div>
          </div>

          {/* Right: Buttons + Navigation */}
          <div className="mt-4 md:mt-0 text-sm text-right space-y-2">
            <div className="space-x-2">
              <button className="bg-blue-900 text-white px-4 py-1 rounded-full hover:bg-blue-700 transition">
                Portfolio Login
              </button>
              <button className="bg-black text-white px-4 py-1 rounded-full hover:bg-gray-800 transition">
                New User Signup
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
