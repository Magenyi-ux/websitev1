import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SphereLearnLogo from './SphereLearnLogo';

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [stage, setStage] = useState<'drop' | 'split' | 'reveal' | 'done'>('drop');

  useEffect(() => {
    // 1. Drop occurs instantly, wait for drop bounce to settle (1.2 seconds)
    const timer1 = setTimeout(() => {
      setStage('split');
    }, 1500);

    // 2. Let the split animation play out for 1.3 seconds
    const timer2 = setTimeout(() => {
      setStage('reveal');
    }, 2800);

    // 3. Reveal completes, trigger parent state change
    const timer3 = setTimeout(() => {
      setStage('done');
      onComplete();
    }, 3800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  if (stage === 'done') return null;

  return (
    <AnimatePresence>
      {stage !== 'done' && (
        <motion.div
          id="splash-container"
          className="fixed inset-0 z-[1000] flex items-center justify-center overflow-hidden bg-[#2B2B2B] select-none"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Subtle paper background lines inside splash */}
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

          {/* Left Sliding Panel */}
          <motion.div
            id="splash-panel-left"
            className="absolute top-0 bottom-0 left-0 w-1/2 bg-[#2B2B2B] border-r border-white/10"
            animate={{
              x: stage === 'reveal' ? '-100%' : '0%',
            }}
            transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
          />

          {/* Right Sliding Panel */}
          <motion.div
            id="splash-panel-right"
            className="absolute top-0 bottom-0 right-0 w-1/2 bg-[#2B2B2B] border-l border-white/10"
            animate={{
              x: stage === 'reveal' ? '100%' : '0%',
            }}
            transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
          />

          {/* Centered Brand Text */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="flex items-center space-x-4 md:space-x-8 text-white">
              {/* EXAM (Splits Left) */}
              <motion.h1
                id="splash-text-auden"
                initial={{ y: -400, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  x: stage === 'split' || stage === 'reveal' ? -150 : 0,
                }}
                transition={{
                  y: { type: 'spring', stiffness: 120, damping: 12 },
                  opacity: { duration: 0.6 },
                  x: { duration: 1.0, ease: [0.25, 1, 0.5, 1] },
                }}
                className="font-sans text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter uppercase"
                style={{ fontFamily: '"Georgia", serif' }}
              >
                Exam
              </motion.h1>

               {/* SphereLearn Crest (Sits in middle, scales and rotates into seal) */}
              <motion.div
                id="splash-text-amp"
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: stage === 'split' || stage === 'reveal' ? 1.4 : 1,
                  opacity: 1,
                  rotate: stage === 'split' || stage === 'reveal' ? 360 : 0
                }}
                transition={{
                  scale: { duration: 0.5, delay: 0.3 },
                  opacity: { duration: 0.4, delay: 0.3 },
                  rotate: { duration: 1.2, ease: "easeInOut" }
                }}
                className="text-white border-2 border-white/40 rounded-full w-14 h-14 md:w-20 md:h-20 flex items-center justify-center bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
              >
                <SphereLearnLogo size={42} color="white" />
              </motion.div>

              {/* PLY (Splits Right) */}
              <motion.h1
                id="splash-text-blackwell"
                initial={{ y: -400, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  x: stage === 'split' || stage === 'reveal' ? 150 : 0,
                }}
                transition={{
                  y: { type: 'spring', stiffness: 120, damping: 12, delay: 0.1 },
                  opacity: { duration: 0.6, delay: 0.1 },
                  x: { duration: 1.0, ease: [0.25, 1, 0.5, 1] },
                }}
                className="font-sans text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter uppercase"
                style={{ fontFamily: '"Georgia", serif' }}
              >
                ply
              </motion.h1>
            </div>

            {/* Subtext Tagline/Establishing Metadata */}
            <motion.div
              id="splash-subtext"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: stage === 'drop' ? 0.7 : 0,
                y: stage === 'drop' ? 0 : -10,
              }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-8 text-center text-white/50 tracking-[0.25em] text-xs font-mono uppercase"
            >
              SPHERELEARN REVOLUTIONARY EDUCATION • ESTD. 1899
            </motion.div>

            {/* SPLITTING subtitles */}
            <AnimatePresence>
              {(stage === 'split') && (
                <motion.div
                  id="splash-split-meta"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute top-24 sm:top-28 w-[380px] text-center border-t border-b border-white/10 py-2"
                >
                  <p className="text-white font-mono text-[10px] tracking-[0.3em] uppercase">
                    CALIBRATING COGNITIVE EXAM SCROLLS
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Quick-Skip typewriter button */}
          <button
            id="splash-skip-btn"
            onClick={() => {
              setStage('reveal');
              setTimeout(() => {
                setStage('done');
                onComplete();
              }, 1200);
            }}
            className="absolute bottom-6 right-6 font-mono text-xs text-white/30 hover:text-white border border-white/20 hover:border-white px-3 py-1 cursor-pointer transition-colors uppercase tracking-widest z-50 rounded"
          >
            Skip Intro [ESC]
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
