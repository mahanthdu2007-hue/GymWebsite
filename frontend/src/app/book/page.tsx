'use client';
import { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, CheckCircle2 } from 'lucide-react';

export default function BookPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call to backend
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-32 pb-24 flex items-center justify-center">
        <div className="glass-card p-12 rounded-2xl text-center max-w-lg mx-auto">
          <CheckCircle2 className="w-20 h-20 text-yellow-500 mx-auto mb-6" />
          <h2 className="text-4xl font-black uppercase tracking-tight mb-4">Request Sent</h2>
          <p className="text-gray-400 mb-8">We have received your trial request. A confirmation email and SMS will be sent shortly to confirm your slot.</p>
          <button onClick={() => setSubmitted(false)} className="px-8 py-3 bg-zinc-800 text-white font-bold rounded hover:bg-zinc-700 uppercase tracking-wider">
            Book Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-4">Book Your <span className="text-yellow-500">Trial</span></h1>
          <p className="text-xl text-gray-400">Take the first step towards your transformation. Select your preferred trainer and time.</p>
        </div>

        <div className="glass-card p-8 md:p-12 rounded-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Personal Info */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-300 uppercase tracking-wider flex items-center gap-2"><User className="w-4 h-4 text-yellow-500" /> Full Name</label>
                <input required type="text" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-yellow-500 transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-300 uppercase tracking-wider flex items-center gap-2"><Mail className="w-4 h-4 text-yellow-500" /> Email</label>
                <input required type="email" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-yellow-500 transition-colors" placeholder="john@example.com" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-bold text-gray-300 uppercase tracking-wider flex items-center gap-2"><Phone className="w-4 h-4 text-yellow-500" /> Phone Number</label>
                <input required type="tel" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-yellow-500 transition-colors" placeholder="+1 (555) 000-0000" />
              </div>

              {/* Booking Options */}
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-bold text-gray-300 uppercase tracking-wider flex items-center gap-2"><User className="w-4 h-4 text-yellow-500" /> Preferred Trainer</label>
                <select className="w-full bg-black border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-yellow-500 transition-colors appearance-none cursor-pointer">
                  <option value="">Any Available Trainer</option>
                  <option value="marcus">Marcus Steele (Strength)</option>
                  <option value="elena">Elena Rostova (HIIT)</option>
                  <option value="david">David Chen (Bodybuilding)</option>
                  <option value="sarah">Sarah Jenkins (Functional)</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-300 uppercase tracking-wider flex items-center gap-2"><Calendar className="w-4 h-4 text-yellow-500" /> Date</label>
                <input required type="date" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-yellow-500 transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-300 uppercase tracking-wider flex items-center gap-2"><Clock className="w-4 h-4 text-yellow-500" /> Time</label>
                <select required className="w-full bg-black border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-yellow-500 transition-colors appearance-none cursor-pointer">
                  <option value="">Select Time Slot</option>
                  <option value="06:00">06:00 AM</option>
                  <option value="09:00">09:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="17:00">05:00 PM</option>
                  <option value="19:00">07:00 PM</option>
                </select>
              </div>
            </div>

            <button type="submit" className="w-full py-4 mt-8 bg-yellow-500 text-black font-black uppercase tracking-widest rounded-lg hover:bg-yellow-400 transition-colors shadow-[0_0_20px_rgba(234,179,8,0.3)]">
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
