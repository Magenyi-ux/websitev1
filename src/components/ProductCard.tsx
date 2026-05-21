import React from 'react';
import { motion, useMotionValue, useTransform } from 'motion/react';
import { Product } from '../types';
import { Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onOpenDetails: (product: Product) => void;
}

export default function ProductCard({ product, onOpenDetails }: ProductCardProps) {
  // Local 3D Hover Tilt effect
  const cardX = useMotionValue(0);
  const cardY = useMotionValue(0);

  const rotateX = useTransform(cardY, [-180, 180], [10, -10]);
  const rotateY = useTransform(cardX, [-180, 180], [-10, 10]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    cardX.set(mouseX);
    cardY.set(mouseY);
  }

  function handleMouseLeave() {
    cardX.set(0);
    cardY.set(0);
  }

  return (
    <div
      id={`product-card-wrapper-${product.id}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="py-4 cursor-default"
      style={{ perspective: 1000 }}
    >
      <motion.div
        id={`product-card-${product.id}`}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="bg-white border-2 border-[#2B2B2B] p-4 pb-5 shadow-[4px_4px_0px_0px_#2B2B2B] hover:shadow-[10px_10px_0px_0px_#2B2B2B] transition-shadow duration-300 rounded overflow-hidden flex flex-col justify-between"
      >
        <div>
          {/* Top Label & Seal */}
          <div className="flex items-center justify-between border-b border-[#2B2B2B]/20 pb-2 mb-3">
            <span className="font-mono text-[9px] text-[#2B2B2B]/60 tracking-wider">
              REGISTRY UNIT CODE # {product.id.toUpperCase()}
            </span>
            <span className="font-serif italic border border-[#2B2B2B]/30 px-1 py-0.5 rounded text-[9px] text-gray-500 scale-90">
              IMPORTED
            </span>
          </div>

          {/* Product Image Block */}
          <div className="relative group overflow-hidden border border-[#2B2B2B] rounded bg-[#2B2B2B]/5">
            <img
              src={product.image}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full aspect-square object-cover filter contrast-110 brightness-95 grayscale group-hover:scale-105 transition-transform duration-500"
            />
            
            {/* Quick Inspect Button on Hover inside Image container */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <button
                onClick={() => onOpenDetails(product)}
                className="bg-white text-[#2B2B2B] border border-black px-4 py-2 rounded-full font-serif text-xs font-bold uppercase tracking-widest hover:bg-[#FAF9F5] transition-all cursor-pointer shadow-lg transform translate-y-3 group-hover:translate-y-0 duration-300 flex items-center gap-1.5"
              >
                <Eye size={14} />
                <span>Examine Core</span>
              </button>
            </div>
          </div>

          {/* Core Info */}
          <div className="mt-4">
            <h4 className="font-serif text-lg font-black text-[#2B2B2B] tracking-tight leading-tight">
              {product.name}
            </h4>
            <p className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mt-0.5">
              CLASSIFICATION: {product.category.toUpperCase()}
            </p>
            <p className="font-serif text-xs text-gray-600 mt-2 line-clamp-3 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Spec details previews */}
          <div className="mt-4 pt-3 border-t border-dashed border-[#2B2B2B]/20">
            <p className="font-mono text-[9px] text-gray-500 uppercase tracking-wider mb-1">
              PROVENANCE BULLETINS:
            </p>
            <ul className="space-y-0.5">
              {product.specification.slice(0, 2).map((spec, index) => (
                <li key={index} className="flex items-center gap-1.5 text-[10px] font-mono text-gray-700 leading-tight">
                  <span className="text-[#2B2B2B]/40">•</span> {spec}
                  {index === 1 && product.specification.length > 2 && "..."}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Actions / NO PRICING */}
        <div className="mt-5 pt-3 border-t border-[#2B2B2B]/10">
          <button
            onClick={() => onOpenDetails(product)}
            className="w-full bg-[#2B2B2B] text-white border-2 border-[#2B2B2B] py-2.5 font-serif text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-[#2B2B2B] active:translate-x-0.5 active:translate-y-0.5 transition-all rounded shadow-[2px_2px_0px_0px_#2B2B2B] hover:shadow-[0px_0px_0px_0px_#2B2B2B] cursor-pointer text-center flex items-center justify-center gap-1.5"
          >
            <Eye size={14} />
            <span>Inspect Specification Dossier</span>
          </button>
        </div>

      </motion.div>
    </div>
  );
}
