import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white font-semibold sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-center items-center">
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm">
          <li><Link to="/" className="hover:text-yellow-300 transition">HOME</Link></li>
          <li><Link to="/about" className="hover:text-yellow-300 transition">ABOUT US</Link></li>
          <li><Link to="/services" className="hover:text-yellow-300 transition">WHAT WE OFFER</Link></li>
          <li><Link to="/tools" className="hover:text-yellow-300 transition">CALCULATORS</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-300 transition">CONTACT US</Link></li>
          <li><Link to="/termsofuse" className="hover:text-yellow-300 transition">TERMS OF USE</Link></li>
          <li><Link to="/privacypolicy" className="hover:text-yellow-300 transition">PRIVACY POLICY</Link></li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 text-sm px-6 pb-4">
          <li><Link to="/" onClick={() => setIsOpen(false)} className="hover:text-yellow-300">HOME</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-yellow-300">ABOUT US</Link></li>
          <li><Link to="/services" onClick={() => setIsOpen(false)} className="hover:text-yellow-300">WHAT WE OFFER</Link></li>
          <li><Link to="/tools" onClick={() => setIsOpen(false)} className="hover:text-yellow-300">CALCULATORS</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-yellow-300">CONTACT US</Link></li>
        </ul>
      )}
    </nav>
  );
}
