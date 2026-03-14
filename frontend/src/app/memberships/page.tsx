import { CheckCircle2 } from 'lucide-react';

export default function MembershipsPage() {
  const plans = [
    {
      name: 'Monthly',
      price: '$99',
      period: '/mo',
      features: ['24/7 Gym Access', 'Locker Room & Sauna', '1 Free PT Session', 'Nutrition Guide'],
      buttonText: 'Join Monthly',
      highlighted: false,
    },
    {
      name: '3 Months (Pro)',
      price: '$269',
      period: '/3mo',
      features: ['24/7 Gym Access', 'All Premium Amenities', '3 Free PT Sessions', 'Custom Meal Plan', 'Guest Pass (1/mo)'],
      buttonText: 'Become a Pro',
      highlighted: true,
    },
    {
      name: 'Yearly (Elite)',
      price: '$899',
      period: '/yr',
      features: ['Unrestricted Access', 'All Premium Amenities', 'Monthly 3D Body Scan', 'Unlimited Guest Passes', 'Private Locker', 'Exclusive Merchandise'],
      buttonText: 'Commit to Elite',
      highlighted: false,
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">Choose Your <span className="text-yellow-500">Commitment</span></h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">No hidden fees. No complicated contracts. Just results.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`rounded-2xl relative ${plan.highlighted ? 'glass-card border-yellow-500/50 scale-105 z-10 p-10 shadow-[0_0_40px_rgba(234,179,8,0.15)]' : 'bg-[#111] p-8 border border-white/5'}`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-500 text-black text-xs font-black uppercase tracking-widest py-1 px-4 rounded-full">
                  Most Popular
                </div>
              )}
              
              <h2 className="text-2xl font-bold uppercase tracking-wide mb-2 text-center text-gray-300">{plan.name}</h2>
              <div className="text-center mb-8">
                <span className="text-5xl font-black text-white">{plan.price}</span>
                <span className="text-gray-500 font-medium">{plan.period}</span>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-gray-300 font-medium">
                    <CheckCircle2 className={`w-5 h-5 ${plan.highlighted ? 'text-yellow-500' : 'text-gray-600'}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 text-center rounded font-bold uppercase tracking-widest transition-all ${
                plan.highlighted 
                  ? 'bg-yellow-500 text-black hover:bg-yellow-400 shadow-lg' 
                  : 'bg-zinc-800 text-white hover:bg-zinc-700'
              }`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
