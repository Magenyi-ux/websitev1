import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, X, Send, Eye, ShieldCheck, Mail } from 'lucide-react';
import { CartItem } from '../types';
import SphereLearnLogo from './SphereLearnLogo';

interface HeaderProps {
  onScrollToSection: (id: string) => void;
}

export default function Header({ onScrollToSection }: HeaderProps) {
  return (
    <>
      <header 
        id="navigation-header" 
        className="sticky top-0 z-40 bg-[#FAF9F5] border-b-2 border-[#2B2B2B]"
        style={{ backgroundImage: 'radial-gradient(ellipse at center, rgba(43,43,43,0.03) 0%, transparent 80%)' }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          
          {/* Logo Monogram */}
          <button 
            id="logo-button"
            onClick={() => onScrollToSection('hero')} 
            className="group flex items-center space-x-3 cursor-pointer text-left"
          >
            <div className="border-2 border-[#2B2B2B] w-10 h-10 flex items-center justify-center bg-white shadow-[2px_2px_0px_0px_#2B2B2B] group-hover:shadow-[0px_0px_0px_0px_#2B2B2B] group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-all rounded">
              <SphereLearnLogo size={28} />
            </div>
            <div className="hidden sm:block">
              <span className="font-serif block text-sm font-bold tracking-widest uppercase text-[#2B2B2B]">
                Examply
              </span>
              <span className="font-mono block text-[9px] text-[#2B2B2B]/60 tracking-wider">
                BY SPHERELEARN
              </span>
            </div>
          </button>

          {/* Center Navigation Links (Newspaper Style) */}
          <nav id="header-nav-links" className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => onScrollToSection('catalog')} 
              className="font-serif text-sm font-bold text-[#2B2B2B] hover:underline decoration-1 hover:underline-offset-4 cursor-pointer"
            >
              The Syllabus Archives
            </button>
            <button 
              onClick={() => onScrollToSection('categories')} 
              className="font-serif text-sm font-bold text-[#2B2B2B] hover:underline decoration-1 hover:underline-offset-4 cursor-pointer"
            >
              Study Divisions
            </button>
            <button 
              onClick={() => onScrollToSection('about')} 
              className="font-serif text-sm font-bold text-[#2B2B2B] hover:underline decoration-1 hover:underline-offset-4 cursor-pointer"
            >
              Why SphereLearn
            </button>
            <button 
              onClick={() => onScrollToSection('pricing-section')} 
              className="font-serif text-sm font-bold text-[#2B2B2B] hover:underline decoration-1 hover:underline-offset-4 cursor-pointer"
            >
              Study Subscriptions
            </button>
            <button 
              onClick={() => onScrollToSection('newsletter')} 
              className="font-serif text-sm font-bold text-[#2B2B2B] hover:underline decoration-1 hover:underline-offset-4 cursor-pointer"
            >
              The Academic Courier
            </button>
          </nav>

          {/* Right Header items - Empty spacer for visual symmetry */}
          <div className="flex items-center space-x-4">
            <span className="hidden sm:inline-block font-mono text-[9px] text-gray-400 uppercase tracking-widest bg-gray-100 border border-gray-200 px-2 py-1 rounded">
              Sovereign Exam Academy
            </span>
          </div>
        </div>

        {/* Vintage Styled Ribbon Rule */}
        <div className="h-1 bg-[#2B2B2B] w-full border-t border-b border-white" />
      </header>
    </>
  );
}
