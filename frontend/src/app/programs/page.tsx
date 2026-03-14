import Link from 'next/link';
import { ArrowRight, User } from 'lucide-react';

export default function ProgramsPage() {
  const programs = [
    {
      title: 'Strength Training',
      description: 'Build raw power and muscle mass with heavy compound lifts and progressive overload techniques under exact supervision.',
      trainer: 'Marcus Steele',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: 'Weight Loss Focus',
      description: 'A high-intensity mix of cardio and resistance training designed to maximize calorie burn and metabolic conditioning.',
      trainer: 'Elena Rostova',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: 'Personal Training',
      description: 'One-on-one tailored coaching to fix imbalances, improve technique, and accelerate your unique fitness goals.',
      trainer: 'David Chen',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: 'Functional Fitness',
      description: 'Train your body for real-world activities. Incorporates kettlebells, mobility work, and dynamic movements.',
      trainer: 'Sarah Jenkins',
      image: 'https://images.unsplash.com/photo-1583454155184-870a1f05a8c4?q=80&w=2070&auto=format&fit=crop',
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">Elite <span className="text-yellow-500">Programs</span></h1>
          <p className="text-xl text-gray-400 max-w-2xl">Discover exactly what you need to transform. Select a program and commit entirely.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {programs.map((program, i) => (
            <div key={i} className="glass-card rounded-2xl overflow-hidden group flex flex-col">
              <div className="h-64 overflow-hidden">
                <img src={program.image} alt={program.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h2 className="text-3xl font-black uppercase tracking-wide mb-3">{program.title}</h2>
                <p className="text-gray-400 mb-6 flex-grow">{program.description}</p>
                <div className="flex items-center text-sm text-yellow-500 uppercase tracking-widest font-bold mb-8">
                  <User className="w-4 h-4 mr-2" /> Trainer: {program.trainer}
                </div>
                <Link href="/book" className="w-full py-4 text-center rounded bg-zinc-800 hover:bg-yellow-500 hover:text-black text-white font-bold uppercase tracking-widest transition-colors flex justify-center items-center gap-2">
                  Join Program <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
