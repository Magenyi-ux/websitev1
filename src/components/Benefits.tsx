import { BENEFITS } from '../data';
import { Shovel, ShieldCheck, Mail, Compass } from 'lucide-react';

export default function Benefits() {
  return (
    <section 
      id="about" 
      className="bg-white py-16 border-b-2 border-[#2B2B2B] relative overflow-hidden"
      style={{
        backgroundImage: 'radial-gradient(circle at 10% 90%, rgba(43,43,43,0.015) 0%, transparent 60%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Main Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Traditional Seal & Large Editorial Header */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-12 h-[1px] bg-[#2B2B2B]" />
              <span className="font-mono text-xs font-bold tracking-[0.25em] text-gray-500 uppercase">
                OUR TRADITIONS
              </span>
            </div>
            
            <h3 className="font-serif text-3xl md:text-5xl font-black text-[#2B2B2B] tracking-tight uppercase leading-[0.95]">
              Guiding <span className="underline decoration-1 underline-offset-4 decoration-dashed">Establisment</span> Principles
            </h3>

            <p className="font-serif text-sm text-gray-700 leading-relaxed">
              In an age of mechanical rush and rapid discard, Auden & Blackwell remains defiantly slow. We preserve the classical secrets of natural tanning, optical alignment, and heavy horological escapement.
            </p>

            {/* Vintage Round Stamp layout */}
            <div className="border-4 border-[#2B2B2B] rounded-full w-32 h-32 flex flex-col items-center justify-center p-2 text-center mx-auto lg:mx-0 select-none border-double">
              <span className="font-mono text-[8px] tracking-widest text-[#2B2B2B] font-extrabold block">
                AUDEN & BLACKWELL
              </span>
              <span className="font-serif text-xl font-bold block text-[#2B2B2B] border-t border-b border-[#2B2B2B]/40 py-0.5 my-1">
                LTD.
              </span>
              <span className="font-mono text-[7px] text-gray-500 block uppercase">
                BOSTON MA
              </span>
            </div>
          </div>

          {/* Right Column: Three detailed ledger logs of our guarantees */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {BENEFITS.map((benefit, idx) => (
              <div 
                key={idx} 
                className="bg-[#FAF9F5] border-2 border-[#2B2B2B] p-5 rounded relative overflow-hidden shadow-[3px_3px_0px_0px_#2B2B2B] flex flex-col justify-between"
                style={{ minHeight: '260px' }}
              >
                {/* Vintage stamp look on corner of details */}
                <div className="absolute right-3 top-3 border border-dashed border-red-800/30 text-red-800/60 font-mono text-[8px] uppercase tracking-wider px-1.5 py-0.5 rounded rotate-3 font-extrabold">
                  {benefit.mercantileSeal}
                </div>

                <div>
                  <span className="font-mono text-xs font-black text-gray-400 block mb-3">
                    MEMORANDUM NO. 0{idx + 1}
                  </span>
                  
                  <h4 className="font-serif text-lg font-black uppercase text-[#2B2B2B] pb-2 border-b border-[#2B2B2B]/20 mb-3 tracking-tight">
                    {benefit.title}
                  </h4>
                  
                  <p className="font-serif text-xs text-gray-700 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Subtext marker inside each benefit */}
                <span className="font-mono text-[8px] text-gray-400 mt-4 block">
                  VERIFIED BY EXECUTIVE CLERK AUDEN
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
