import React from 'react';
import { ImFacebook2 } from "react-icons/im";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-teal-100 to-blue-100 text-gray-800 shadow-lg">
      <div className='flex flex-col sm:flex-row justify-between items-center max-w-6xl mx-auto p-6'>
        
        {/* Footer Navigation */}
        <div className="footer-nav mb-4 sm:mb-0">
          <ul className="flex flex-col sm:flex-row gap-4 p-4 rounded-lg bg-white bg-opacity-90 shadow-md">
            <li>  
              <a href="/" className="text-gray-700 font-semibold hover:text-teal-600 transition-colors duration-300">
                Home
              </a>
            </li>
            <li> 
              <a href="/about" className="text-gray-700 font-semibold hover:text-teal-600 transition-colors duration-300">
                About us
              </a>
            </li>
            <li> 
              <a href="/packages" className="text-gray-700 font-semibold hover:text-teal-600 transition-colors duration-300">
                Packages
              </a>
            </li>
            <li> 
              <a href="/Events" className="text-gray-700 font-semibold hover:text-teal-600 transition-colors duration-300">
                Events
              </a>
            </li>
            <li> 
              <a href="/staff" className="text-gray-700 font-semibold hover:text-teal-600 transition-colors duration-300">
                Staff
              </a>
            </li>
            <li>
              <a href="/support" className="text-gray-700 font-semibold hover:text-teal-600 transition-colors duration-300">
                Contact us
              </a>
            </li>
          </ul>
        </div>

        {/* Footer Address */}
        <div className="footer-address text-center sm:text-left mb-4 sm:mb-0">
          <p className="font-bold text-lg">Surf-Deck Surfing School</p>
          <p>Beach Road, Arugambay</p>
          <p>+99 123456789</p>
          <p className="mt-2">surfdeck@gmail.com</p>
        </div>

        {/* Footer Social Icons */}
        <div className="footer-social flex gap-4">
          <a href="#" className="text-gray-700 hover:text-teal-600 transition-colors duration-300">
            <ImFacebook2 size={28} />
          </a>
          <a href="#" className="text-gray-700 hover:text-teal-600 transition-colors duration-300">
            <FaInstagram size={28} />
          </a>
          <a href="#" className="text-gray-700 hover:text-teal-600 transition-colors duration-300">
            <FaTwitter size={28} />
          </a>
          <a href="#" className="text-gray-700 hover:text-teal-600 transition-colors duration-300">
            <FaYoutube size={28} />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center bg-opacity-70 py-4 mt-6 bg-gradient-to-r from-teal-200 to-blue-200">
        <p className="text-sm">&copy; 2024 Surf-Deck Surfing School. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
