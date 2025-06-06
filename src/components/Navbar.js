import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white text-sm font-semibold">
      <ul className="flex flex-wrap justify-center gap-8 py-3">
        <li>
          <Link to="/" className="hover:text-yellow-300 transition">HOME</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-yellow-300 transition">ABOUT US</Link>
        </li>
        <li>
          <Link to="/services" className="hover:text-yellow-300 transition">WHAT WE OFFER</Link>
        </li>
        <li>
          <Link to="/tools" className="hover:text-yellow-300 transition">CALCULATORS</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-yellow-300 transition">CONTACT US</Link>
        </li>
      </ul>
    </nav>
  );
}
