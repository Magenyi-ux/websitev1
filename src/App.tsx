/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ProductCard from './components/ProductCard';
import ProductDetailModal from './components/ProductDetailModal';
import Benefits from './components/Benefits';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import PaperNoise from './components/PaperNoise';
import SplashScreen from './components/SplashScreen';
import Pricing from './components/Pricing';
import { PRODUCTS } from './data';
import { Product } from './types';
import { BookOpen, RefreshCw, Send, AlertCircle } from 'lucide-react';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleScrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Filter products based on active category
  const filteredProducts = selectedCategory
    ? PRODUCTS.filter((p) => p.category === selectedCategory)
    : PRODUCTS;

  return (
    <>
      {/* 1. Immersive Grainy Paper Overlay */}
      <PaperNoise />

      {/* 2. Brand Drop and Split Intro Overlay */}
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}

      {/* 3. Main Page Body (rendered below or post-splash) */}
      <div 
        id="store-main-layout" 
        className="min-h-screen bg-[#FAF9F5] text-[#2B2B2B] flex flex-col font-sans selection:bg-[#2B2B2B] selection:text-white"
        style={{
          display: showSplash ? 'hidden' : 'flex'
        }}
      >
        {/* Navigation Header */}
        <Header 
          onScrollToSection={handleScrollToSection}
        />

        {/* Hero Section */}
        <Hero onScrollToCatalog={() => handleScrollToSection('catalog')} />

        {/* Product Categories Classification Filter Show */}
        <Categories 
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* Main Exhibition Catalog Showcase */}
        <section 
          id="catalog" 
          className="py-16 md:py-20 border-b-2 border-[#2B2B2B] bg-white relative"
          style={{
            backgroundImage: 'repeating-linear-gradient(90deg, rgba(43,43,43,0.01) 0px, rgba(43,43,43,0.01) 1px, transparent 1px, transparent 40px)',
          }}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            
            {/* Catalog Subheading */}
            <div className="flex flex-col md:flex-row items-baseline justify-between border-b-2 border-[#2B2B2B] pb-6 mb-10">
              <div>
                <span className="font-mono text-xs text-gray-500 uppercase tracking-widest block mb-1">
                  CURRENT DISPLAY STOCK
                </span>
                <h3 className="font-serif text-3xl md:text-4xl font-extrabold uppercase text-[#2B2B2B] tracking-tight">
                  The Curated Registry
                </h3>
              </div>
              
              <div className="mt-2 md:mt-0">
                <p className="font-mono text-xs text-gray-500 uppercase">
                  {filteredProducts.length} ARTICLES EXHIBITED {selectedCategory && `[CLASS: ${selectedCategory.toUpperCase()}]`}
                </p>
              </div>
            </div>

            {/* Catalog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ProductCard 
                      product={product}
                      onOpenDetails={setSelectedProduct}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* If no products matches */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-16 border border-dashed border-[#2B2B2B]/20 rounded">
                <AlertCircle size={24} className="mx-auto text-gray-400 mb-2" />
                <p className="font-serif italic text-sm text-gray-600">No curio available matching this filter.</p>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="mt-3 font-mono text-xs uppercase underline text-[#2B2B2B]"
                >
                  Expose complete registry
                </button>
              </div>
            )}

          </div>
        </section>

        {/* Pricing Subscriptions */}
        <Pricing />

        {/* Benefits Section & Guarantee seals */}
        <Benefits />

        {/* Gazette / Newsletter envelope */}
        <Newsletter />

        {/* Footer info & licenses */}
        <Footer onScrollToSection={handleScrollToSection} />

        {/* Detailed Specsheet dossier modal */}
        <ProductDetailModal 
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      </div>
    </>
  );
}
