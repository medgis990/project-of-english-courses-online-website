
import React from 'react';
import { Link } from 'react-router-dom';
import { FEATURES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/60 z-10"></div>
        <img 
          src="https://picsum.photos/id/1/1920/1080" 
          alt="Online Class" 
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-white">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Master English with <span className="text-teal-400">Live 1-on-1 Lessons</span> & AI Practice
            </h1>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Personalized sessions with native teachers, 24/7 AI tutor access, and recorded lessons to help you achieve fluency faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/level-test" className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition shadow-xl text-center">
                Take Free Level Test
              </Link>
              <Link to="/pricing" className="bg-teal-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-600 transition shadow-xl text-center">
                Book First Session – 50% OFF
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <div className="bg-white py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-12 items-center grayscale opacity-60">
          <div className="flex items-center gap-2"><span className="font-bold text-xl">10k+</span> Students</div>
          <div className="flex items-center gap-2"><span className="font-bold text-xl">500+</span> Certified Teachers</div>
          <div className="flex items-center gap-2"><span className="font-bold text-xl">4.9/5</span> Rating</div>
          <div className="flex items-center gap-2"><span className="font-bold text-xl">24/7</span> Support</div>
        </div>
      </div>

      {/* Feature Grid */}
      <section className="py-24 bg-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Why EnglishFlow Academy?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">We combine human expertise with cutting-edge technology to create the ultimate learning environment.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feature) => (
              <div key={feature.id} className="bg-white p-8 rounded-2xl shadow-sm border border-blue-50 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                   {/* Simplified icon representation */}
                   <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                   </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-blue-600 rounded-3xl p-12 md:p-20 flex flex-col md:flex-row items-center gap-12 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 p-10 opacity-10">
               <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V5C14.017 3.89543 14.9124 3 16.017 3H21.017C22.1216 3 23.017 3.89543 23.017 5V15C23.017 18.3137 20.3307 21 17.017 21H14.017ZM1.017 21L1.017 18C1.017 16.8954 1.91243 16 3.017 16H6.017C6.56928 16 7.017 15.5523 7.017 15V9C7.017 8.44772 6.56928 8 6.017 8H3.017C1.91243 8 1.017 7.10457 1.017 6V5C1.017 3.89543 1.91243 3 3.017 3H8.017C9.12157 3 10.017 3.89543 10.017 5V15C10.017 18.3137 7.33071 21 4.017 21H1.017Z" /></svg>
            </div>
            <div className="md:w-1/2 relative z-10">
              <p className="text-2xl md:text-3xl italic mb-8 leading-snug">
                "EnglishFlow Academy changed my life. I went from being afraid to speak to leading international meetings in just 6 months. The AI tutor is my secret weapon!"
              </p>
              <div className="flex items-center gap-4">
                <img src="https://picsum.photos/id/64/100/100" className="w-16 h-16 rounded-full border-4 border-blue-400" alt="Student" />
                <div>
                  <div className="font-bold text-xl">Elena Rodriguez</div>
                  <div className="text-blue-200">Software Engineer, Brazil</div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4 relative z-10">
               <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl text-center">
                  <div className="text-4xl font-bold mb-2">95%</div>
                  <div className="text-blue-100 text-sm">Fluency Improvement</div>
               </div>
               <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl text-center">
                  <div className="text-4xl font-bold mb-2">24h</div>
                  <div className="text-blue-100 text-sm">Response Time</div>
               </div>
               <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl text-center col-span-2">
                  <div className="text-4xl font-bold mb-2">10k+</div>
                  <div className="text-blue-100 text-sm">Happy Global Students</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">Ready to start your journey?</h2>
          <p className="text-xl text-gray-500 mb-10">Join thousands of students and transform your English today.</p>
          <Link to="/pricing" className="inline-block bg-blue-600 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-blue-700 transition shadow-2xl">
             Enroll Now & Save 50%
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
