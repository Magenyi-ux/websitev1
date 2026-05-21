import React, { useState } from 'react';
import { PRICING_PLANS } from '../data';
import { CheckCircle2, Star, Send } from 'lucide-react';

export default function Pricing() {
  const [subscribedPlan, setSubscribedPlan] = useState<string | null>(null);

  const handleSubscribe = (planId: string) => {
    setSubscribedPlan(planId);
    setTimeout(() => {
      setSubscribedPlan(null);
    }, 5000);
  };

  return (
    <section 
      id="pricing-section" 
      className="py-16 md:py-20 border-b-2 border-[#2B2B2B] bg-[#FAF9F5] relative overflow-hidden"
      style={{
        backgroundImage: 'radial-gradient(ellipse at center, rgba(43,43,43,0.02) 0%, transparent 80%)'
      }}
    >
      {/* Editorial Watermark Grid */}
      <div className="absolute inset-0 border-t-2 border-b-2 border-[#2B2B2B]/10 my-1 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Heading Editorial Sheet */}
        <div className="text-center max-w-2xl mx-auto mb-14 border-2 border-black bg-white p-6 md:p-8 rounded shadow-[4px_4px_0px_0px_#2B2B2B]">
          <span className="font-mono text-xs tracking-[0.3em] text-gray-400 block uppercase mb-1">
            OFFICIAL SUBSCRIPTION RATINGS
          </span>
          <h3 className="font-serif text-3xl md:text-4xl font-black uppercase text-[#2B2B2B] tracking-tight">
            Simple, Transparent Pricing
          </h3>
          <div className="w-16 h-0.5 bg-[#2B2B2B] mx-auto my-3" />
          <p className="font-serif italic text-base text-gray-700 leading-relaxed max-w-lg mx-auto">
            "Choose the plan that fits your exam preparation needs. All licenses grant guaranteed local privacy and instant standalone calibrations."
          </p>
        </div>

        {/* The 3 Pricing columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
          {PRICING_PLANS.map((plan) => (
            <div 
              key={plan.id}
              className={`border-4 border-[#2B2B2B] rounded p-6 md:p-8 flex flex-col justify-between relative shadow-[6px_6px_0px_0px_#2B2B2B] transition-all bg-white hover:translate-x-0.5 hover:translate-y-0.5 ${
                plan.isPopular ? 'ring-offset-2 ring-2 ring-black' : ''
              }`}
            >
              {/* Optional Popular Ribbon */}
              {plan.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#2B2B2B] text-white font-mono text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded shadow-md border border-white flex items-center gap-1">
                  <Star size={10} className="fill-current text-white" />
                  <span>MOST FAMOUS LICENSE</span>
                </div>
              )}

              {/* Top Details */}
              <div>
                <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest block mb-1">
                  TARIFF TIER NO. {plan.id === 'starter' ? 'I' : plan.id === 'professional' ? 'II' : 'III'}
                </span>
                
                <h4 className="font-serif text-xl font-bold uppercase text-[#2B2B2B]">
                  {plan.name}
                </h4>
                
                <p className="font-mono text-[10px] text-gray-500 italic mt-1 pb-4 border-b border-dashed border-[#2B2B2B]/20">
                  {plan.badge}
                </p>

                {/* Substantive pricing stats display */}
                <div className="py-6 flex flex-col justify-center">
                  <span className="font-serif text-3xl font-black tracking-tight text-[#2B2B2B]">
                    {plan.priceNigeria}
                  </span>
                  <span className="font-mono text-[10px] text-gray-500 uppercase mt-1">
                    Equivalency: {plan.priceShillings}
                  </span>
                </div>

                <div className="border-t border-b border-[#2B2B2B]/30 py-4 my-2">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-gray-400 block mb-3">
                    LICENSED PRIVILEGES:
                  </span>
                  <ul className="space-y-3">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs">
                        <CheckCircle2 size={13} className="text-[#2B2B2B] shrink-0 mt-0.5" />
                        <span className="font-serif text-[#2B2B2B]/80 leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Subscription Action Section */}
              <div className="mt-8 space-y-3">
                {subscribedPlan === plan.id ? (
                  <div className="border-2 border-dashed border-emerald-800 bg-emerald-50 text-emerald-800 p-3 rounded text-center">
                    <p className="font-serif font-bold text-xs uppercase tracking-wide flex items-center justify-center gap-1.5">
                      <Send size={12} />
                      <span>Licensing Docket Issued</span>
                    </p>
                    <p className="font-mono text-[9px] mt-1 leading-normal uppercase">
                      Study dispatch is pending confirmation from postmaster.
                    </p>
                  </div>
                ) : (
                  <button
                    id={`plan-btn-${plan.id}`}
                    onClick={() => handleSubscribe(plan.id)}
                    className={`w-full py-3 px-4 font-serif text-xs font-bold uppercase tracking-widest transition-all rounded text-center cursor-pointer border-2 border-[#2B2B2B] shadow-[3px_3px_0px_0px_#FAF9F5,3px_3px_0px_1.5px_#2B2B2B] hover:shadow-[0px_0px_0px_0px_#2B2B2B] hover:translate-x-0.5 hover:translate-y-0.5 ${
                      plan.isPopular 
                        ? 'bg-[#2B2B2B] text-white hover:bg-white hover:text-[#2B2B2B]' 
                        : 'bg-white text-[#2B2B2B] hover:bg-[#2B2B2B] hover:text-white'
                    }`}
                  >
                    Ascribe to {plan.isPopular ? 'Most Popular' : plan.id === 'starter' ? 'Free Squire' : 'Master Patent'}
                  </button>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Ledger Bottom Note */}
        <div className="text-center mt-12">
          <p className="font-serif italic text-xs text-gray-500 leading-normal max-w-md mx-auto">
            "Notice: All subscriptions operate securely under mechanical credit terms. To pay via local money orders or electronic naira, direct return dispatches to our postmaster desks."
          </p>
        </div>

      </div>
    </section>
  );
}
