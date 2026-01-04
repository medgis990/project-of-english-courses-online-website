
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const dismissed = localStorage.getItem('dismissed-banner');
      if (!dismissed) setShowBanner(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const dismissBanner = () => {
    setShowBanner(false);
    localStorage.setItem('dismissed-banner', 'true');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {showBanner && (
        <div className="bg-blue-600 text-white py-3 px-4 fixed top-0 left-0 right-0 z-50 flex justify-between items-center shadow-lg">
          <p className="text-sm md:text-base font-medium mx-auto">
            🚀 Flash Sale: Get <span className="font-bold underline">50% OFF</span> your first enrollment! Use code: <span className="font-bold">FIRSTFLOW50</span>
          </p>
          <button onClick={dismissBanner} className="p-1 hover:bg-blue-700 rounded transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
      <Navbar />
      <main className={`flex-grow ${showBanner ? 'pt-12' : ''}`}>
        {children}
      </main>
      <Footer />
      
      {/* Floating Feedback Button */}
      <button 
        onClick={() => alert('Feedback form coming soon!')}
        className="fixed bottom-6 right-6 bg-teal-500 text-white px-4 py-2 rounded-full shadow-2xl hover:bg-teal-600 transition-all flex items-center gap-2 z-40"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
        <span>Feedback</span>
      </button>
    </div>
  );
};

export default Layout;
