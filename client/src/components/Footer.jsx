import React from 'react'
import { ImFacebook2 } from "react-icons/im"

export default function Footer() {
  return (
    <footer className="bg-blue-100 shadow-md">
    <div className='flex flex-col sm:flex-row justify-between items-center max-w-6xl mx-auto p-6'>
       <div className="footer-nav">
        <ul className="flex flex-col sm:flex-row gap-4 p-4 rounded-lg shadow-lg">
          <li>  <a href="/" className="text-gray-800 font-semibold hover:text-blue-600 transition-colors duration-300">Home</a></li>
           <li> <a href="/about" className="text-gray-800 font-semibold hover:text-blue-600 transition-colors duration-300">About us</a></li>
           <li> <a href="/packages" className="text-gray-800 font-semibold hover:text-blue-600 transition-colors duration-300">Packages</a></li>
           <li> <a href="/events" className="text-gray-800 font-semibold hover:text-blue-600 transition-colors duration-300">Events</a></li>
           <li> <a href="/staff" className="text-gray-800 font-semibold hover:text-blue-600 transition-colors duration-300">Staff</a></li>
            <li><a href="/support" className="text-gray-800 font-semibold hover:text-blue-600 transition-colors duration-300">Contact us</a></li>
            </ul>
          </div>

          {/*footer address*/}
          <div className="footer-address text-center sm:text-left text-gray-800 mb-4 sm:mb-0">
            <p className="font-semibold">Surf-Deck Surfing School</p>
            <p>Beach Road, Arugambay</p>
            <p>+99 123456789</p>
            <br></br>
            <p>surfdeck@gmail.com</p>
          </div>
          <div className="footer-social">
            <a href="#"><i className="FaFacebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </footer>
   
  );
}
