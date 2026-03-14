import Link from 'next/link';
import { Facebook, Instagram, Twitter, Dumbbell } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1 border-gray-800">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Dumbbell className="text-yellow-500 w-8 h-8" />
              <span className="text-2xl font-bold tracking-tighter uppercase">Plan B</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your second chance at greatness. We provide premium facilities, elite trainers, and an atmosphere that demands excellence.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Programs', href: '/programs' },
                { name: 'Trainers', href: '/trainers' },
                { name: 'Memberships', href: '/memberships' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>123 Fitness Ave.</li>
              <li>India,10001</li>
              <li className="pt-2">mahanthdu1423@gmail.com.com</li>
              <li>+91 8217686386</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold uppercase tracking-wider mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-yellow-500 hover:text-black transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-yellow-500 hover:text-black transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-yellow-500 hover:text-black transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center sm:flex sm:justify-between items-center text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} Plan B Gym. All rights reserved.</p>
          <div className="mt-4 sm:mt-0 space-x-4">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
