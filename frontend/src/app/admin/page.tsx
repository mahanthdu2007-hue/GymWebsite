'use client';
import { useState } from 'react';
import { Users, Calendar, Dumbbell, CreditCard, LayoutDashboard, Plus, Trash2, Edit2, LogOut } from 'lucide-react';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Mock Login Form
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen pt-32 pb-24 flex items-center justify-center">
        <div className="glass-card p-12 rounded-2xl w-full max-w-md">
          <h1 className="text-3xl font-black uppercase tracking-tight mb-8 text-center text-yellow-500">Admin Login</h1>
          <form onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true); }} className="space-y-6">
            <div>
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email</label>
              <input type="email" required className="mt-2 w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:outline-none focus:border-yellow-500" placeholder="admin@planbthegym.com" />
            </div>
            <div>
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Password</label>
              <input type="password" required className="mt-2 w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:outline-none focus:border-yellow-500" placeholder="••••••••" />
            </div>
            <button type="submit" className="w-full py-4 bg-yellow-500 text-black font-black uppercase tracking-widest rounded hover:bg-yellow-400">
              Authenticate
            </button>
          </form>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
    { id: 'bookings', label: 'Bookings', icon: <Calendar className="w-5 h-5" /> },
    { id: 'programs', label: 'Programs', icon: <Dumbbell className="w-5 h-5" /> },
    { id: 'trainers', label: 'Trainers', icon: <Users className="w-5 h-5" /> },
    { id: 'memberships', label: 'Memberships', icon: <CreditCard className="w-5 h-5" /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {['Total Users: 1,204', 'Active Bookings: 43', 'Monthly Revenue: $42K', 'New Inquiries: 12'].map((stat, i) => (
              <div key={i} className="glass-card p-6 rounded-xl border border-white/5 bg-[#111]">
                <h3 className="text-2xl font-black text-yellow-500 mb-2">{stat.split(': ')[1]}</h3>
                <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">{stat.split(': ')[0]}</p>
              </div>
            ))}
          </div>
        );
      case 'bookings':
        return (
          <div className="glass-card rounded-xl overflow-hidden border border-white/5 bg-[#111]">
            <table className="w-full text-left bg-black text-sm">
              <thead className="text-xs text-gray-400 uppercase tracking-widest bg-white/5 border-b border-white/10">
                <tr>
                  <th className="px-6 py-4">Name</th>
                  <th className="px-6 py-4">Trainer</th>
                  <th className="px-6 py-4">Date & Time</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[1, 2, 3].map((item) => (
                  <tr key={item} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">John Doe {item}</td>
                    <td className="px-6 py-4 text-gray-400">Marcus Steele</td>
                    <td className="px-6 py-4 text-gray-400">Oct {item + 10}, 2024 - 09:00 AM</td>
                    <td className="px-6 py-4"><span className="px-3 py-1 bg-yellow-500/20 text-yellow-500 rounded-full text-xs font-bold uppercase">Pending</span></td>
                    <td className="px-6 py-4 flex gap-3">
                      <button className="text-green-500 hover:text-green-400"><CheckCircle2Icon /></button>
                      <button className="text-red-500 hover:text-red-400"><Trash2 className="w-4 h-4" /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      // Other cases can be built similarly
      default:
        return (
          <div className="flex flex-col items-center justify-center h-64 border-2 border-dashed border-white/10 rounded-xl text-gray-500">
            <h3 className="text-xl uppercase tracking-widest font-bold mb-4">{activeTab} Management</h3>
            <button className="flex items-center gap-2 px-6 py-3 bg-white/5 rounded text-white hover:bg-white/10 transition-colors uppercase text-sm font-bold tracking-wider">
              <Plus className="w-4 h-4" /> Add New Header
            </button>
          </div>
        );
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-[#050505] flex">
      {/* Sidebar */}
      <div className="w-64 border-r border-white/10 hidden md:flex flex-col h-[calc(100vh-6rem)] sticky top-24">
        <div className="p-6">
          <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-6">CMS Control</p>
          <nav className="space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded text-sm font-bold uppercase tracking-wider transition-all ${
                  activeTab === tab.id ? 'bg-yellow-500 text-black' : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </nav>
        </div>
        <div className="mt-auto p-6 border-t border-white/10 text-center">
          <button onClick={() => setIsLoggedIn(false)} className="w-full flex items-center justify-center gap-2 px-4 py-3 text-red-500 hover:bg-red-500/10 rounded uppercase text-sm font-bold tracking-wider transition-colors">
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-black uppercase tracking-wide text-white capitalize">{activeTab}</h2>
          <button className="md:hidden p-2 bg-yellow-500 text-black rounded"><LayoutDashboard className="w-5 h-5" /></button>
        </div>
        {renderContent()}
      </div>
    </div>
  );
}

// Helper icon component
function CheckCircle2Icon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
  );
}
