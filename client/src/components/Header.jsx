import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/" className="flex items-center">
          <img src="/images/SURF DECK.png" alt="Surf Deck Logo" className="h-10 w-10 mr-2" />
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Surf</span>
            <span className="text-slate-900">Deck</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-4">
          <Link to="/Home">
            <li className="text-slate-700 hover:text-blue-500 hover:underline cursor-pointer transition duration-300">
      
            </li>
          </Link>
          <Link to="/About">
            <li className="text-slate-700 hover:text-blue-500 hover:underline cursor-pointer transition duration-300">
              AboutUs
            </li>
          </Link>
          <Link to="/Packages">
            <li className="text-slate-700 hover:text-blue-500 hover:underline cursor-pointer transition duration-300">
              Packages
            </li>
          </Link>
          <Link to="/Staff">
            <li className="text-slate-700 hover:text-blue-500 hover:underline cursor-pointer transition duration-300">
              Staff
            </li>
          </Link>
          <Link to="/Event">
            <li className="text-slate-700 hover:text-blue-500 hover:underline cursor-pointer transition duration-300">
              Events
            </li>
          </Link>
          <Link to="/Equipment">
            <li className="text-slate-700 hover:text-blue-500 hover:underline cursor-pointer transition duration-300">
              Equipment
            </li>
          </Link>
          <Link to="/Payments">
            <li className="text-slate-700 hover:text-blue-500 hover:underline cursor-pointer transition duration-300">
              Payments
            </li>
          </Link>
          <Link to="/Supplier">
            <li className="text-slate-700 hover:text-blue-500 hover:underline cursor-pointer transition duration-300">
              Supplier
            </li>
          </Link>
          <Link to="/Profile">
            <li className="text-slate-700 hover:text-blue-500 hover:underline cursor-pointer transition duration-300">
              Profile
            </li>
          </Link>
          <Link to="/Signin">
            <li className="text-slate-700 hover:text-blue-500 hover:underline cursor-pointer transition duration-300">
              Signin
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
