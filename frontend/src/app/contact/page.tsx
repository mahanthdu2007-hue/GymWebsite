'use client';
import { useState } from 'react';
import { MapPin, Phone, Mail, Instagram, Twitter, Facebook, Send } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    window.location.href = `mailto:mahanthdu1423@gmail.com?subject=Gym Website Contact: ${name}&body=Name: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${message}`;
    
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">Get In <span className="text-yellow-500">Touch</span></h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Have questions about our facility, elite trainers, or corporate plans? Reach out below.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-10 pl-4">
            <div>
              <h2 className="text-3xl font-black uppercase tracking-wide mb-6">Headquarters</h2>
              <div className="flex items-start gap-4 text-gray-400 mb-6">
                <MapPin className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-white uppercase tracking-wider mb-1">Plan B The Gym</p>
                  <p>123 Elite Fitness Avenue<br />New York, NY 10001</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-400 mb-6">
                <Phone className="w-6 h-6 text-yellow-500" />
                <p className="font-bold text-white tracking-widest">+91 8217686386</p>
              </div>
              <div className="flex items-center gap-4 text-gray-400">
                <Mail className="w-6 h-6 text-yellow-500" />
                <p className="font-bold text-white tracking-widest">mahanthdu1423@gmail.com</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-black uppercase tracking-wide mb-6">Follow Us</h2>
              <div className="flex space-x-6">
                <a href="#" className="w-12 h-12 rounded-full glass border-white/10 flex items-center justify-center text-gray-400 hover:bg-yellow-500 hover:text-black hover:scale-110 transition-all">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full glass border-white/10 flex items-center justify-center text-gray-400 hover:bg-yellow-500 hover:text-black hover:scale-110 transition-all">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full glass border-white/10 flex items-center justify-center text-gray-400 hover:bg-yellow-500 hover:text-black hover:scale-110 transition-all">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Google Map Placeholder */}
            <div className="w-full h-64 bg-[#111] rounded-xl border border-white/5 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-yellow-500/10 group-hover:bg-yellow-500/20 transition-colors z-10"></div>
              <MapPin className="w-12 h-12 text-yellow-500/50 absolute z-0" />
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" className="w-full h-full object-cover opacity-30 grayscale filter mix-blend-overlay" alt="Map mockup" />
              <span className="relative z-20 font-bold uppercase tracking-widest text-sm text-yellow-500">Interactive Map Active in Production</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-10 rounded-2xl">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <Send className="w-16 h-16 text-yellow-500 mb-6" />
                <h3 className="text-3xl font-black uppercase tracking-tight mb-4">Message Sent</h3>
                <p className="text-gray-400">Our team will get back to you within 24 hours.</p>
                <button onClick={() => setSubmitted(false)} className="mt-8 text-yellow-500 hover:text-white uppercase tracking-widest font-bold font-sm underline transition-colors">Send Another Message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-3xl font-black uppercase tracking-wide mb-8">Send a Message</h2>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Name</label>
                  <input required type="text" name="name" className="w-full bg-black/50 border border-white/10 rounded p-4 text-white focus:outline-none focus:border-yellow-500 transition-colors" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Email</label>
                  <input required type="email" name="email" className="w-full bg-black/50 border border-white/10 rounded p-4 text-white focus:outline-none focus:border-yellow-500 transition-colors" placeholder="your@email.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Message</label>
                  <textarea required rows={5} name="message" className="w-full bg-black/50 border border-white/10 rounded p-4 text-white focus:outline-none focus:border-yellow-500 transition-colors resize-none" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-yellow-500 text-black font-black uppercase tracking-widest rounded hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2">
                  Send <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
