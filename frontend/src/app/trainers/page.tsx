import { ShieldCheck, Award, Star } from 'lucide-react';

export default function TrainersPage() {
  const trainers = [
    {
      name: 'Marcus Steele',
      specialty: 'Powerlifting / Strength',
      bio: 'Former competitive powerlifter with over 15 years of coaching experience. Marcus focuses on raw strength and perfect technique.',
      certifications: ['CSCS', 'USA Weightlifting L2'],
      image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1974&auto=format&fit=crop'
    },
    {
      name: 'Elena Rostova',
      specialty: 'HIIT / Weight Loss',
      bio: 'Elena brings extreme energy to every session. She specializes in transformations, pushing clients entirely past their comfort zones.',
      certifications: ['ACE Certified', 'Precision Nutrition'],
      image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=1974&auto=format&fit=crop'
    },
    {
      name: 'David Chen',
      specialty: 'Hypertrophy / Bodybuilding',
      bio: 'Bodybuilding champion focusing on aesthetic transformations. David knows exactly how to build a symmetrical, powerful physique.',
      certifications: ['ISSA Master Trainer', 'IFBB Pro Coach'],
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop'
    },
    {
      name: 'Sarah Jenkins',
      specialty: 'Functional Fitness / Mobility',
      bio: 'Sarah focuses on making your body impenetrable to injuries while increasing your athletic capability across all planes of movement.',
      certifications: ['CrossFit L3', 'FRCms'],
      image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop'
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">Our <span className="text-yellow-500">Trainers</span></h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Learn from the strongest. We only hire the top 1% of coaches in the industry.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {trainers.map((trainer, i) => (
            <div key={i} className="glass-card rounded-2xl overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-2/5 h-80 md:h-auto overflow-hidden">
                <img src={trainer.image} alt={trainer.name} className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
              <div className="p-8 md:w-3/5 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-yellow-500 mb-2">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-xs font-bold uppercase tracking-widest">{trainer.specialty}</span>
                </div>
                <h2 className="text-3xl font-black uppercase tracking-wide mb-4">{trainer.name}</h2>
                <p className="text-gray-400 mb-6">{trainer.bio}</p>
                
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-yellow-500" /> Certifications
                  </h3>
                  <ul className="space-y-1">
                    {trainer.certifications.map((cert, j) => (
                      <li key={j} className="text-gray-400 text-sm flex items-center gap-2">
                        <Award className="w-3 h-3 text-gray-600" /> {cert}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
