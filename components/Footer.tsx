
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold">E</div>
              <span className="text-xl font-bold text-blue-900">EnglishFlow</span>
            </Link>
            <p className="text-gray-500 mb-6 leading-relaxed">
              Empowering global learners to achieve English fluency through personalized human interaction and cutting-edge AI technology.
            </p>
            <div className="flex space-x-4">
              {/* Social placeholders */}
              <div className="w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:text-blue-600 cursor-pointer transition"><i className="fab fa-facebook"></i></div>
              <div className="w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:text-blue-400 cursor-pointer transition"><i className="fab fa-twitter"></i></div>
              <div className="w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:text-pink-600 cursor-pointer transition"><i className="fab fa-instagram"></i></div>
            </div>
          </div>
          
          <div>
            <h4 className="text-blue-900 font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-500">
              <li><Link to="/courses" className="hover:text-blue-600 transition">All Courses</Link></li>
              <li><Link to="/level-test" className="hover:text-blue-600 transition">Level Test</Link></li>
              <li><Link to="/ai-tutor" className="hover:text-blue-600 transition">AI Tutor</Link></li>
              <li><Link to="/about" className="hover:text-blue-600 transition">Teachers</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-blue-900 font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-gray-500">
              <li><Link to="/contact" className="hover:text-blue-600 transition">Contact Us</Link></li>
              <li><Link to="/faq" className="hover:text-blue-600 transition">FAQ</Link></li>
              <li><Link to="/privacy" className="hover:text-blue-600 transition">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-blue-600 transition">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-blue-900 font-bold mb-6">Newsletter</h4>
            <p className="text-gray-500 mb-4 text-sm">Join 5,000+ learners getting weekly English tips.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white border border-gray-200 rounded-l-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-100"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg font-medium hover:bg-blue-700 transition">Join</button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© 2024 EnglishFlow Academy. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex gap-6">
            <span>GDPR Compliant</span>
            <span>SSL Secured</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
