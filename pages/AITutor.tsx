
import React, { useState, useRef, useEffect } from 'react';
import { generateTutorResponse } from '../services/gemini';
import { ChatMessage } from '../types';

const AITutor: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hello! I'm your EnglishFlow AI Tutor. I'm here 24/7 to help you practice your conversation skills. How are you feeling today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    const aiResponse = await generateTutorResponse(messages, userMessage);
    setMessages(prev => [...prev, { role: 'model', text: aiResponse }]);
    setIsLoading(false);
  };

  return (
    <div className="py-20 bg-gray-50 min-h-[90vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12">
        
        {/* Explanation Section */}
        <div className="lg:w-1/3">
          <h1 className="text-4xl font-bold text-blue-900 mb-6">Meet Your 24/7 AI Tutor</h1>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Practice English anytime without the pressure of a human audience. Our AI is trained to correct your grammar, suggest better vocabulary, and simulate real-world conversations.
          </p>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <h4 className="font-bold text-blue-900">Always Available</h4>
                <p className="text-gray-500">Practice at 3 AM or 3 PM. Your tutor is always ready.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              </div>
              <div>
                <h4 className="font-bold text-blue-900">Instant Feedback</h4>
                <p className="text-gray-500">Get grammar corrections in real-time as you chat.</p>
              </div>
            </div>
          </div>
          <div className="mt-12 p-6 bg-blue-600 rounded-2xl text-white">
            <h4 className="font-bold mb-2">Want the full experience?</h4>
            <p className="text-blue-100 text-sm mb-4">Unlimited AI Tutor access is included in our Pro and Elite packages.</p>
            <button className="bg-white text-blue-600 px-6 py-2 rounded-xl font-bold text-sm">Upgrade Now</button>
          </div>
        </div>

        {/* Chat Widget Section */}
        <div className="lg:w-2/3 bg-white rounded-3xl shadow-2xl border border-blue-50 flex flex-col h-[700px]">
          <div className="p-6 border-b border-gray-100 flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z"/></svg>
            </div>
            <div>
              <h3 className="font-bold text-blue-900">AI Tutor Demo</h3>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-400 font-medium">Online & Listening</span>
              </div>
            </div>
          </div>

          <div 
            ref={scrollRef}
            className="flex-grow p-6 overflow-y-auto space-y-6 bg-blue-50/20"
          >
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-5 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-none' 
                    : 'bg-white text-gray-700 shadow-sm border border-gray-100 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-5 rounded-2xl rounded-tl-none border border-gray-100 flex gap-1">
                   <div className="w-2 h-2 bg-blue-200 rounded-full animate-bounce"></div>
                   <div className="w-2 h-2 bg-blue-300 rounded-full animate-bounce delay-100"></div>
                   <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-6 bg-white border-t border-gray-100">
            <div className="flex gap-4">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message here..."
                className="flex-grow bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-100 transition"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="bg-blue-600 text-white p-4 rounded-2xl hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-100"
              >
                <svg className="w-6 h-6 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            <p className="text-[10px] text-gray-400 mt-4 text-center">Powered by Gemini 3. Practice makes perfect!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AITutor;
