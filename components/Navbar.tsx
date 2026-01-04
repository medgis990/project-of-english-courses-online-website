
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:rotate-12 transition-transform">
                E
              </div>
              <span className="text-xl font-bold text-blue-900 tracking-tight">EnglishFlow <span className="text-blue-600 font-medium">Academy</span></span>
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/courses" className="text-gray-600 hover:text-blue-600 transition">Courses</Link>
            <Link to="/ai-tutor" className="text-gray-600 hover:text-blue-600 transition">AI Tutor</Link>
            <Link to="/level-test" className="text-gray-600 hover:text-blue-600 transition">Level Test</Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600 transition">About</Link>
            <Link to="/login" className="bg-blue-50 text-blue-600 px-5 py-2 rounded-full font-medium hover:bg-blue-100 transition">Log In</Link>
            <Link to="/pricing" className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition shadow-md shadow-blue-200">Get Started</Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-blue-50 animate-fade-in-down">
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
            <Link to="/courses" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50">Courses</Link>
            <Link to="/ai-tutor" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50">AI Tutor</Link>
            <Link to="/level-test" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50">Level Test</Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50">About</Link>
            <div className="pt-4 flex flex-col gap-2">
              <Link to="/login" className="text-center bg-blue-50 text-blue-600 px-5 py-3 rounded-xl font-medium">Log In</Link>
              <Link to="/pricing" className="text-center bg-blue-600 text-white px-5 py-3 rounded-xl font-medium shadow-md">Get Started</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
