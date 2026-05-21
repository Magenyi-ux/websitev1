import React from 'react';
import { motion, useMotionValue, useTransform } from 'motion/react';
import { Anchor, Cpu, CalendarRange, Clock, Award, Layers, Zap } from 'lucide-react';
import SphereLearnLogo from './SphereLearnLogo';

interface HeroProps {
  onScrollToCatalog: () => void;
}

export default function Hero({ onScrollToCatalog }: HeroProps) {
  // 3D Tilting Card Logic for the Hero Frame
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Map mouse positions to rotational degrees
  const rotateX = useTransform(y, [-300, 300], [15, -15]);
  const rotateY = useTransform(x, [-300, 300], [-15, 15]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  // Current Local Date Formatter
  const currentDate = new Date('2026-05-20T21:47:29Z');
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <section 
      id="hero" 
      className="relative bg-[#FAF9F5] py-12 md:py-16 border-b-2 border-[#2B2B2B] overflow-hidden"
      style={{
        backgroundImage: 'radial-gradient(circle at 75% 75%, rgba(43,43,43,0.02) 0%, transparent 60%)',
      }}
    >
      {/* Decorative Star Background pattern */}
      <div className="absolute right-12 top-6 opacity-[0.04] text-[#2B2B2B] select-none pointer-events-none hidden lg:block">
        <span className="font-serif text-[180px] font-bold italic leading-none">★</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Column A: Left Scholar Bulletin (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between border-2 border-[#2B2B2B] bg-white p-5 md:p-6 shadow-[4px_4px_0px_0px_#2B2B2B] rounded relative">
            
            {/* Top Bulletin Header */}
            <div className="border-b border-[#2B2B2B] pb-3 text-center">
              <span className="font-mono text-[9px] tracking-[0.25em] text-gray-500 uppercase block">
                The Academic Press Gazette
              </span>
              <div className="flex items-center justify-between mt-1 text-[10px] font-mono text-gray-600 px-1 border-t border-[#2B2B2B]/20 pt-1">
                <span className="flex items-center gap-1">
                  <CalendarRange size={11} /> {formattedDate}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={11} /> SHIFT I DESK
                </span>
              </div>
            </div>

            {/* Main Headline Block */}
            <div className="my-6 space-y-4">
              <span className="inline-block bg-[#2B2B2B] text-white text-[9px] px-2 py-0.5 tracking-widest font-mono rounded-sm">
                SPHERELEARN REVOLUTION SCRIPT
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-[38px] font-black leading-none text-[#2B2B2B] tracking-tight uppercase">
                Master Your Exams with <span className="underline decoration-double decoration-1 underline-offset-4">Examply</span>
              </h2>
              <p className="font-serif italic text-base text-gray-700 leading-relaxed">
                "The smartest way to prepare for WAEC, JAMB & NECO. Download practice packs, study offline with AI-powered guidance, and ace your exams."
              </p>
              <p className="font-mono text-[10px] text-gray-400 uppercase leading-snug">
                CALIBRATED AND CERTIFIED SAFE BY SPHERELEARN LABS.
              </p>
            </div>

            {/* Miniature Courier Dispatch Alert inside bulletin */}
            <div className="border-t border-b border-dashed border-[#2B2B2B]/30 py-3 my-4">
              <div className="flex items-start gap-3">
                <div className="text-[#2B2B2B] mt-0.5 shrink-0">
                  <Cpu size={18} />
                </div>
                <div>
                  <h4 className="font-serif text-xs font-bold leading-none text-[#2B2B2B]">MECHANICAL INTELLIGENCE PATENTED</h4>
                  <p className="font-mono text-[10px] text-gray-500 leading-normal mt-1">
                    SphereLearn's revolutionary offline AI engine provides instant feedback to questions and academic inquiries without any dependency on the telegraph wire. Complete classroom privacy ensured.
                  </p>
                </div>
              </div>
            </div>

            {/* Actions for Scholar Inquiry */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                id="hero-inspect-btn"
                onClick={onScrollToCatalog}
                className="flex-1 bg-[#2B2B2B] text-white py-3 px-4 font-serif text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[#2B2B2B] border-2 border-[#2B2B2B] shadow-[3px_3px_0px_0px_#FAF9F5,3px_3px_0px_1.5px_#2B2B2B] hover:shadow-[0px_0px_0px_0px_#2B2B2B] hover:translate-x-0.5 hover:translate-y-0.5 active:translate-y-1 transition-all rounded text-center cursor-pointer font-extrabold"
              >
                Inspect Study Syllabus
              </button>
              <button
                id="hero-scroll-btn"
                onClick={() => {
                  const target = document.getElementById('pricing-section');
                  target?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-2 border-[#2B2B2B] text-[#2B2B2B] bg-transparent py-3 px-4 font-mono text-[10px] font-bold uppercase tracking-wider hover:bg-[#2B2B2B]/5 rounded transition-colors cursor-pointer text-center"
              >
                Study Tariffs
              </button>
            </div>
            
          </div>

          {/* Column B: Interactive 3D Frame Block (7 Cols) */}
          <div 
            id="hero-3d-wrapper"
            className="lg:col-span-7 flex flex-col justify-center min-h-[350px] sm:min-h-[450px]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 1200 }}
          >
            <motion.div
              id="hero-3d-card"
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }}
              className="relative w-full max-w-xl bg-white border-4 border-[#2B2B2B] p-4 shadow-[12px_12px_0px_0px_#2B2B2B] rounded overflow-hidden"
            >
              {/* Outer Parchment Frame */}
              <div className="absolute inset-0 border-2 border-dashed border-[#2B2B2B]/30 m-1 pointer-events-none rounded" />

              {/* Header inside Image frame */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <SphereLearnLogo size={14} />
                  <span className="font-mono text-[9px] text-[#2B2B2B]/70 tracking-widest uppercase">
                    MONOCHROME TELEGRAPHIC RECORDING NO. 1899
                  </span>
                </div>
                <span className="font-serif italic text-xs text-[#2B2B2B]/60">
                  Carbon Print circa 1901
                </span>
              </div>

              {/* The high-quality generated hero image representing the mechanical AI engine */}
              <div className="relative overflow-hidden border border-[#2B2B2B] rounded">
                <img
                  src="/src/assets/images/offline_ai_engine_1779314387884.png"
                  alt="SphereLearn Mechanical Tutor Device"
                  referrerPolicy="no-referrer"
                  className="w-full h-[250px] sm:h-[350px] object-cover filter contrast-125 brightness-95 grayscale"
                />
                
                {/* 3D layered watermark floating sticker */}
                <div 
                  className="absolute bottom-4 right-4 bg-white/95 border-2 border-[#2B2B2B] p-2 rotate-2 shadow-lg rounded"
                  style={{ transform: 'translateZ(40px)' }}
                >
                  <div className="border border-dashed border-[#2B2B2B]/50 p-1 flex flex-col items-center">
                    <SphereLearnLogo size={16} className="mb-0.5" />
                    <span className="font-sans text-[10px] font-black tracking-widest text-[#2B2B2B] leading-none block">
                      SPHERELEARN CO.
                    </span>
                    <span className="font-mono text-[7px] text-gray-500 block mt-0.5">
                      OFFLINE AI PATENTED
                    </span>
                  </div>
                </div>
              </div>

              {/* Caption details below image card */}
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="bg-[#2B2B2B]/10 p-1 rounded flex items-center justify-center">
                    <SphereLearnLogo size={16} />
                  </span>
                  <div>
                    <span className="font-serif text-[11px] block text-[#2B2B2B] font-bold leading-none">
                      The SphereLearn Mechanical Tutor
                    </span>
                    <span className="font-mono text-[9px] text-gray-500 block mt-0.5">
                      Model Series 08X • Standalone Compute Core
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-mono text-[10px] text-red-800 font-bold tracking-widest block">
                    100% OFF-WIRE COMPATIBLE
                  </span>
                  <span className="font-mono text-[8px] text-gray-400 block">
                    Zero Telegraph Wires Required
                  </span>
                </div>
              </div>

            </motion.div>
          </div>

        </div>

        {/* Dynamic Core Stats Row (Newspaper Style) */}
        <div id="stats-row" className="mt-12 border-2 border-r-4 border-b-4 border-[#2B2B2B] bg-white rounded divide-y divide-y-reverse md:divide-y-0 md:divide-x divide-[#2B2B2B] grid grid-cols-1 md:grid-cols-3 text-center">
          <div className="p-4 flex flex-col justify-center">
            <span className="font-serif italic text-sm text-gray-500 block uppercase tracking-wider">Historical Archive Scale</span>
            <span className="font-serif text-3xl font-black text-[#2B2B2B] uppercase mt-1 tracking-tight">
              15+ Years
            </span>
            <span className="font-mono text-[9px] text-gray-400 uppercase tracking-widest mt-1">WAEC, JAMB, & NECO PAST LEDGERS</span>
          </div>
          
          <div className="p-4 flex flex-col justify-center">
            <span className="font-serif italic text-sm text-gray-500 block uppercase tracking-wider">Inquiry Capacity</span>
            <span className="font-serif text-3xl font-black text-[#2B2B2B] uppercase mt-1 tracking-tight">
              1000+ Questions
            </span>
            <span className="font-mono text-[9px] text-gray-400 uppercase tracking-widest mt-1">Meticulously cataloged challenges</span>
          </div>

          <div className="p-4 flex flex-col justify-center">
            <span className="font-serif italic text-sm text-gray-500 block uppercase tracking-wider">Intellectual Attendance</span>
            <span className="font-serif text-3xl font-black text-[#2B2B2B] uppercase mt-1 tracking-tight">
              24/7 Offline
            </span>
            <span className="font-mono text-[9px] text-gray-400 uppercase tracking-widest mt-1">Delivered via local mechanical AI</span>
          </div>
        </div>

      </div>
    </section>
  );
}
