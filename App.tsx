
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import LevelTest from './pages/LevelTest';
import AITutor from './pages/AITutor';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/courses" element={<Pricing />} />
          <Route path="/level-test" element={<LevelTest />} />
          <Route path="/ai-tutor" element={<AITutor />} />
          <Route path="/login" element={<Dashboard />} /> {/* Simple mock for demo */}
          <Route path="/about" element={
            <div className="py-24 text-center max-w-4xl mx-auto px-4">
              <h1 className="text-4xl font-bold text-blue-900 mb-8">About EnglishFlow Academy</h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-12">
                Founded in 2023, EnglishFlow Academy was born out of a simple idea: that language learning should be human-centric but technology-enhanced. We believe everyone deserves to communicate with confidence across borders.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h3>
                  <p className="text-gray-500">Making English fluency accessible to everyone through personalized, flexible online learning that fits into modern lives.</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Methodology</h3>
                  <p className="text-gray-500">We combine the "Speak-First" approach with AI-assisted reinforcement, ensuring that students spend 80% of their class time speaking.</p>
                </div>
              </div>
              <div className="mt-20">
                <h3 className="text-3xl font-bold text-blue-900 mb-12">Meet Our Founders</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                   {[1,2,3].map(i => (
                     <div key={i} className="text-center">
                        <img src={`https://picsum.photos/id/${i+50}/300/300`} className="w-full aspect-square object-cover rounded-3xl mb-4 shadow-lg" alt="Founder" />
                        <div className="font-bold text-blue-900">Team Member {i}</div>
                        <div className="text-gray-400 text-sm">Educational Specialist</div>
                     </div>
                   ))}
                </div>
              </div>
            </div>
          } />
          <Route path="/contact" element={
             <div className="py-24 bg-blue-50/30 min-h-screen">
                <div className="max-w-4xl mx-auto px-4 bg-white p-12 rounded-3xl shadow-xl">
                   <h1 className="text-3xl font-bold text-blue-900 mb-8">Get in Touch</h1>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <form className="space-y-6">
                         <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                            <input type="text" className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-100 outline-none" placeholder="John Doe" />
                         </div>
                         <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                            <input type="email" className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-100 outline-none" placeholder="john@example.com" />
                         </div>
                         <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                            <textarea rows={4} className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-100 outline-none" placeholder="How can we help?"></textarea>
                         </div>
                         <button type="button" className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 shadow-lg">Send Message</button>
                      </form>
                      <div className="space-y-8">
                         <div>
                            <h4 className="font-bold text-blue-900 mb-2">Email Us</h4>
                            <p className="text-gray-500">hello@englishflow.academy</p>
                         </div>
                         <div>
                            <h4 className="font-bold text-blue-900 mb-2">WhatsApp</h4>
                            <p className="text-gray-500">+1 (555) 123-4567</p>
                         </div>
                         <div>
                            <h4 className="font-bold text-blue-900 mb-2">Headquarters</h4>
                            <p className="text-gray-500">123 Language Lane, Suite 400<br/>San Francisco, CA 94105</p>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          } />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
