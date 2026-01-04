
import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-blue-900">Welcome back, Alex! 👋</h1>
          <p className="text-gray-500">You're making great progress. You've completed 12 sessions this month.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
             <div className="flex justify-between items-center mb-6">
                <span className="text-gray-400 font-bold text-xs uppercase">Overall Progress</span>
                <span className="text-blue-600 font-bold">78%</span>
             </div>
             <div className="h-2 w-full bg-blue-50 rounded-full mb-6">
                <div className="h-full bg-blue-600 rounded-full" style={{ width: '78%' }}></div>
             </div>
             <p className="text-gray-500 text-sm">Keep it up! You're only 2 sessions away from Intermediate B2.</p>
          </div>
          
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
             <div className="flex justify-between items-center mb-6">
                <span className="text-gray-400 font-bold text-xs uppercase">Session Credits</span>
                <span className="text-teal-600 font-bold">4 Left</span>
             </div>
             <div className="text-3xl font-bold text-blue-900 mb-2">4 / 8</div>
             <p className="text-gray-500 text-sm">Package expires in 12 days.</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
             <div className="flex justify-between items-center mb-6">
                <span className="text-gray-400 font-bold text-xs uppercase">AI Tutor Time</span>
                <span className="text-blue-600 font-bold">Unlimited</span>
             </div>
             <div className="text-3xl font-bold text-blue-900 mb-2">12.5 hrs</div>
             <p className="text-gray-500 text-sm">Practiced this week.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upcoming Sessions */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
             <div className="p-6 border-b border-gray-50 flex justify-between items-center">
                <h3 className="font-bold text-blue-900">Upcoming Live Sessions</h3>
                <button className="text-blue-600 font-medium text-sm">Book New</button>
             </div>
             <div className="divide-y divide-gray-50">
                <div className="p-6 flex items-center gap-4">
                   <img src="https://picsum.photos/id/1025/100/100" className="w-12 h-12 rounded-full" alt="Teacher" />
                   <div className="flex-grow">
                      <div className="font-bold text-blue-900">Sarah Jenkins</div>
                      <div className="text-xs text-gray-400">Conversational Practice • Tomorrow, 10:00 AM</div>
                   </div>
                   <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold">Join Room</button>
                </div>
                <div className="p-6 flex items-center gap-4 opacity-60">
                   <img src="https://picsum.photos/id/1011/100/100" className="w-12 h-12 rounded-full" alt="Teacher" />
                   <div className="flex-grow">
                      <div className="font-bold text-blue-900">Mark Thompson</div>
                      <div className="text-xs text-gray-400">Grammar Focus • Friday, 4:00 PM</div>
                   </div>
                   <button className="bg-gray-100 text-gray-500 px-4 py-2 rounded-lg text-sm font-bold" disabled>Starts in 2d</button>
                </div>
             </div>
          </div>

          {/* Recorded Sessions */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
             <div className="p-6 border-b border-gray-50 flex justify-between items-center">
                <h3 className="font-bold text-blue-900">Recent Recorded Sessions</h3>
                <button className="text-blue-600 font-medium text-sm">View All</button>
             </div>
             <div className="p-6 grid grid-cols-2 gap-4">
                <div className="group cursor-pointer">
                   <div className="relative aspect-video bg-gray-200 rounded-xl mb-2 overflow-hidden">
                      <img src="https://picsum.photos/id/201/400/225" className="w-full h-full object-cover group-hover:scale-110 transition" alt="Thumbnail" />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/40 transition">
                         <div className="w-10 h-10 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                         </div>
                      </div>
                   </div>
                   <div className="font-bold text-sm text-blue-900">Business Idioms #4</div>
                   <div className="text-xs text-gray-400">Oct 12, 2023 • 45 mins</div>
                </div>
                <div className="group cursor-pointer">
                   <div className="relative aspect-video bg-gray-200 rounded-xl mb-2 overflow-hidden">
                      <img src="https://picsum.photos/id/202/400/225" className="w-full h-full object-cover group-hover:scale-110 transition" alt="Thumbnail" />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/40 transition">
                         <div className="w-10 h-10 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                         </div>
                      </div>
                   </div>
                   <div className="font-bold text-sm text-blue-900">Phrasal Verbs Intro</div>
                   <div className="text-xs text-gray-400">Oct 08, 2023 • 50 mins</div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
