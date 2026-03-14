'use client';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Star, Shield, Zap, Target } from 'lucide-react';

export default function Home() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
            alt="Gym background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        </div>

        <motion.div 
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4 text-white drop-shadow-lg"
          >
            Your Second <span className="text-yellow-500">Chance</span>
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-xl md:text-3xl font-light text-gray-300 mb-10 tracking-wide"
          >
            Premium training facility for the elite.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/book" className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-black bg-yellow-500 rounded hover:bg-yellow-400 transition-all uppercase tracking-widest overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">Book Free Trial <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
            </Link>
            <Link href="/programs" className="inline-flex items-center justify-center px-8 py-4 font-bold text-white glass rounded hover:bg-white/10 transition-all uppercase tracking-widest border border-white/20">
              View Programs
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-[#050505] relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
              Why Choose <span className="text-gradient">Plan B</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-400 max-w-2xl mx-auto">
              We provide more than just equipment. We provide a lifestyle transformation.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Shield className="w-10 h-10 text-yellow-500 mb-4" />, title: 'Premium Equipment', desc: 'Top-tier machinery selected by professional bodybuilders.' },
              { icon: <Zap className="w-10 h-10 text-yellow-500 mb-4" />, title: 'Elite Atmosphere', desc: 'Train alongside individuals who push you to be your absolute best.' },
              { icon: <Target className="w-10 h-10 text-yellow-500 mb-4" />, title: 'Proven Results', desc: 'Our scientifically-backed programs guarantee your transformation.' }
            ].map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="glass-card p-10 rounded-xl hover:-translate-y-2 transition-transform duration-300"
              >
                {benefit.icon}
                <h3 className="text-2xl font-bold uppercase tracking-wide mb-3">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16 border-b border-white/10 pb-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-2">Elite <span className="text-gradient">Programs</span></h2>
              <p className="text-gray-400">Tailored training for maximum gains.</p>
            </div>
            <Link href="/programs" className="hidden md:flex items-center gap-2 text-yellow-500 hover:text-yellow-400 uppercase font-bold text-sm tracking-wider">
              See All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Strength Training', img: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop' },
              { title: 'Functional Fitness', img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop' },
              { title: 'Personal Coaching', img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop' }
            ].map((prog, i) => (
              <div key={i} className="group relative rounded-xl overflow-hidden h-[400px]">
                <img src={prog.img} alt={prog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex items-end p-8">
                  <div>
                    <h3 className="text-2xl font-bold uppercase tracking-wide mb-2">{prog.title}</h3>
                    <Link href="/programs" className="text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-center uppercase tracking-tight mb-16 text-gradient">Success Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: 'Michael T.', text: 'Plan B changed my life. The trainers push you far beyond what you think are your limits. Best decision I ever made.', role: 'Member since 2024' },
              { name: 'Sarah J.', text: 'The atmosphere is incredible. Everyone is focused, the equipment is top notch, and the results speak for themselves.', role: 'Member since 2023' }
            ].map((testimony, i) => (
              <div key={i} className="glass-card p-8 rounded-xl relative">
                <div className="flex text-yellow-500 mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-xl text-gray-300 italic mb-6">"{testimony.text}"</p>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider">{testimony.name}</h4>
                  <p className="text-sm text-yellow-600 uppercase tracking-widest">{testimony.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-yellow-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), repeating-linear-gradient(45deg, #000 25%, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)', backgroundPosition: '0 0, 10px 10px', backgroundSize: '20px 20px' }}></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-black text-black uppercase tracking-tighter mb-6">Ready to Transform?</h2>
          <p className="text-gray-900 text-xl font-medium mb-10 max-w-2xl mx-auto">Stop waiting. Start executing. Claim your free trial today and experience the difference.</p>
          <Link href="/book" className="inline-flex items-center justify-center px-10 py-5 font-black text-yellow-500 bg-black rounded hover:bg-gray-900 transition-colors uppercase tracking-widest shadow-2xl">
            Claim Your Spot
          </Link>
        </div>
      </section>
      
    </div>
  );
}
