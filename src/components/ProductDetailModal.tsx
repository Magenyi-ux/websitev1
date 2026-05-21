import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Award, History, Cog } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductDetailModal({ product, onClose }: ProductDetailModalProps) {
  if (!product) return null;

  return (
    <AnimatePresence>
      <div 
        id="product-modal-container"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
      >
        {/* Backdrop */}
        <motion.div
          id="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          id="modal-box"
          initial={{ scale: 0.95, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.95, y: 20, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 220 }}
          className="relative max-w-2xl w-full bg-[#FAF9F5] border-4 border-[#2B2B2B] p-6 md:p-8 rounded shadow-2xl z-10 overflow-hidden"
          style={{
            backgroundImage: 'radial-gradient(circle at center, rgba(43,43,43,0.01) 0%, transparent 100%)',
          }}
        >
          {/* Inner double border decorative line */}
          <div className="absolute inset-0 border-2 border-dashed border-[#2B2B2B]/20 m-1 pointer-events-none rounded" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 border border-gray-300 hover:border-black rounded transition-all cursor-pointer z-10 text-[#2B2B2B]"
          >
            <X size={18} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start mt-2">
            
            {/* Image Column */}
            <div className="space-y-4">
              <div className="border-2 border-[#2B2B2B] p-1.5 bg-white rounded">
                <img
                  src={product.image}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="w-full aspect-square object-cover filter contrast-125 brightness-95 grayscale rounded"
                />
              </div>
              <div className="border border-dashed border-[#2B2B2B]/30 p-3 rounded bg-white text-center">
                <span className="font-mono text-[9px] text-[#2B2B2B]/60 uppercase tracking-widest block">
                  PHYSICAL ENVELOPE IDENTITY
                </span>
                <span className="font-mono text-xs font-bold block text-[#2B2B2B] mt-1 select-all">
                  MD-1899-{product.id.toUpperCase()}
                </span>
              </div>
            </div>

            {/* Info Column */}
            <div className="space-y-5">
              <div>
                <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest border border-gray-300 px-2 py-0.5 rounded-sm">
                  {product.category}
                </span>
                <h3 className="font-serif text-2xl font-black text-[#2B2B2B] tracking-tight mt-3 leading-none">
                  {product.name}
                </h3>
                <div className="w-16 h-1.5 bg-[#2B2B2B] mt-2" />
              </div>

              {/* Description */}
              <p className="font-serif text-sm text-gray-700 leading-relaxed italic">
                "{product.description}"
              </p>

              {/* Technical Specifications Section */}
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#2B2B2B] font-mono border-b border-[#2B2B2B]/20 pb-1">
                  <Cog size={13} />
                  <span>Technical Bulletins</span>
                </div>
                <ul className="space-y-1.5">
                  {product.specification.map((spec, index) => (
                    <li key={index} className="flex items-start gap-2 text-xs font-mono text-gray-700">
                      <span className="bg-[#2B2B2B] text-white w-3.5 h-3.5 rounded-full flex items-center justify-center text-[8px] mt-0.5 shrink-0">
                        {index + 1}
                      </span>
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Historical Heritage Section */}
              <div className="space-y-1 bg-white p-3 border border-gray-200 rounded">
                <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-gray-600 font-mono">
                  <History size={11} />
                  <span>Lore & Heritage Record</span>
                </div>
                <p className="font-serif text-[11px] text-gray-600 leading-relaxed italic">
                  {product.heritage}
                </p>
              </div>

              {/* Action Ribbon / CLOSE DOSSIER */}
              <div className="pt-2 border-t border-[#2B2B2B]/20 flex flex-col gap-2">
                <button
                  onClick={onClose}
                  className="w-full bg-[#2B2B2B] text-white py-3 font-serif font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-[#2B2B2B] border-2 border-[#2B2B2B] shadow-[3px_3px_0px_0px_#FAF9F5,3px_3px_0px_1.5px_#2B2B2B] hover:shadow-[0px_0px_0px_0px_#2B2B2B] hover:translate-x-0.5 hover:translate-y-0.5 active:translate-y-1 transition-all rounded cursor-pointer"
                >
                  Close Specification Dossier
                </button>
              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
