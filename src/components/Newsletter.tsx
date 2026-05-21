import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldAlert, Sparkles, Mail } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [stampSealed, setStampSealed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    // Simulate pneumatic tube/wax seal compression delay
    setTimeout(() => {
      setLoading(false);
      setStampSealed(true);
    }, 1500);
  };

  return (
    <section 
      id="newsletter" 
      className="bg-[#2B2B2B] text-white py-16 md:py-20 relative overflow-hidden"
    >
      {/* Decorative vertical rulers mimicking layout margins */}
      <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-white/5 hidden md:block" />
      <div className="absolute right-4 top-0 bottom-0 w-[1px] bg-white/5 hidden md:block" />

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        
        {/* Ornate crest */}
        <div className="inline-block border-2 border-white/20 p-2 rounded-full mb-4">
          <Mail size={24} className="text-white/70" />
        </div>

        {/* Header content */}
        <span className="font-mono text-xs tracking-[0.35em] text-white/50 uppercase block mb-2">
          BI-WEEKLY GAZETTE SUBSCRIPTIONS
        </span>
        <h3 className="font-serif text-3xl md:text-4xl font-extrabold uppercase tracking-tight mb-4 text-[#FAF9F5]">
          Ascribe to The SphereLearn Gazette
        </h3>
        <p className="font-serif italic text-base text-[#FAF9F5]/70 max-w-xl mx-auto mb-10">
          "Receive historical exam catalogs, syllabus digests, free model study sheets, and prioritized updates on offline AI tutor machine releases directly in your courier box."
        </p>

        {/* Envelope container */}
        <div className="max-w-md mx-auto bg-[#FAF9F5] text-[#2B2B2B] border-4 border-[#2B2B2B] p-6 md:p-8 rounded shadow-2xl relative overflow-hidden">
          
          {/* Inner double border inside mock letter envelope */}
          <div className="absolute inset-0 border border-dashed border-[#2B2B2B]/20 m-1 pointer-events-none rounded" />

          <AnimatePresence mode="wait">
            {!stampSealed ? (
              <motion.form 
                key="subscription-form"
                onSubmit={handleSubscribe} 
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-4"
              >
                <div className="text-left">
                  <label htmlFor="gazette-email" className="block font-mono text-[9px] uppercase tracking-wider text-gray-500 mb-1">
                    Enter Return Electronic Mail Address
                  </label>
                  <input
                    id="gazette-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. adams@spherelearn.net"
                    className="w-full bg-white border-2 border-[#2B2B2B] px-4 py-2.5 font-mono text-xs text-[#2B2B2B] rounded focus:outline-none focus:ring-1 focus:ring-black placeholder-gray-400"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#2B2B2B] hover:bg-black text-white py-3.5 font-serif font-black uppercase tracking-widest text-xs transition-colors rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,0.15)] cursor-pointer flex items-center justify-center space-x-2"
                >
                  {loading ? (
                    <span className="font-mono text-[10px] uppercase">Sealing Dispatch Tubulars...</span>
                  ) : (
                    <>
                      <span>Dispatch Subscription Bill</span>
                    </>
                  )}
                </button>

                <p className="font-mono text-[8px] text-gray-400 text-center uppercase tracking-normal">
                  Guaranteed Spam-Free. We abhor cheap advertisement circulars.
                </p>
              </motion.form>
            ) : (
              <motion.div 
                key="subscription-success"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="py-6 flex flex-col items-center justify-center text-center space-y-4 relative"
              >
                {/* 3D Wax Seal Animation */}
                <motion.div
                  initial={{ scale: 3, opacity: 0, rotate: -45 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  transition={{ type: 'spring', damping: 10, stiffness: 100, delay: 0.1 }}
                  className="w-16 h-16 rounded-full bg-[#8E1E1E] border-2 border-[#5B1010] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.3)] flex items-center justify-center text-white/90 select-none relative z-10 cursor-default"
                >
                  <div className="absolute inset-0.5 rounded-full border border-dashed border-white/20" />
                  <span className="font-serif text-2xl font-black italic">E</span>
                </motion.div>

                {/* Seal message */}
                <div className="space-y-1 z-10">
                  <h4 className="font-serif text-lg font-black uppercase text-[#2B2B2B] leading-none">
                    SEALED & REGISTERED
                  </h4>
                  <p className="font-mono text-[10px] text-gray-500 uppercase tracking-wider">
                    RECORDS UPDATE COMPLETE
                  </p>
                </div>

                <p className="font-serif text-sm text-gray-700 leading-relaxed max-w-sm">
                  We have cataloged your academic mail box address: <span className="underline font-bold font-mono text-xs">{email}</span>. A historic welcome letter is being routed down our express pneumatic lines right now.
                </p>

                <div className="font-mono text-[8px] text-red-800 border border-red-800/20 bg-red-800/5 px-2 py-0.5 rounded mt-2">
                  VERIFICATION LOGGED MDCCCXCIX
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
