import { CATEGORIES } from '../data';
import { Category } from '../types';
import { Layers, Bookmark, Hourglass, Landmark } from 'lucide-react';

interface CategoriesProps {
  selectedCategory: string | null;
  onSelectCategory: (categoryId: string | null) => void;
}

export default function Categories({ selectedCategory, onSelectCategory }: CategoriesProps) {
  
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'chronometres':
        return <Hourglass className="stroke-[1.5]" size={28} />;
      case 'tomes':
        return <Bookmark className="stroke-[1.5]" size={28} />;
      case 'optical':
        return <Layers className="stroke-[1.5]" size={28} />;
      default:
        return <Landmark className="stroke-[1.5]" size={28} />;
    }
  };

  return (
    <section 
      id="categories" 
      className="bg-[#FAF9F5] py-16 border-b-2 border-[#2B2B2B]"
      style={{
        backgroundImage: 'linear-gradient(rgba(43,43,43,0.01) 1px, transparent 1px)',
        backgroundSize: '100% 12px'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-gray-500 block mb-2">
            CONSIGNMENT DIRECTORIES
          </span>
          <h3 className="font-serif text-3xl md:text-4xl font-black uppercase text-[#2B2B2B] tracking-tight">
            The Classes of Curio
          </h3>
          <div className="w-24 h-0.5 bg-[#2B2B2B] mx-auto mt-4" />
          <p className="font-serif italic text-sm text-gray-600 mt-3">
            "Our inventories are logged under four distinct classes of mechanical, optical, scribing and binder workmanship."
          </p>
        </div>

        {/* Categories Grid (Interactive Filter buttons) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`category-btn-${cat.id}`}
                onClick={() => onSelectCategory(isSelected ? null : cat.id)}
                className={`group text-left border-2 border-[#2B2B2B] p-5 rounded relative overflow-hidden transition-all duration-300 shadow-[4px_4px_0px_0px_#2B2B2B] hover:shadow-[7px_7px_0px_0px_#2B2B2B] hover:-translate-y-0.5 cursor-pointer flex flex-col justify-between ${
                  isSelected ? 'bg-[#2B2B2B] text-white shadow-[1px_1px_0px_0px_#2B2B2B]' : 'bg-white text-[#2B2B2B]'
                }`}
                style={{ minHeight: '220px' }}
              >
                {/* Vintage Class stamp tag */}
                <div className={`font-mono text-[9px] tracking-widest font-black uppercase border-b pb-1.5 mb-3 flex items-center justify-between ${
                  isSelected ? 'border-white/20 text-white/70' : 'border-[#2B2B2B]/20 text-[#2B2B2B]/60'
                }`}>
                  <span>{cat.codeName}</span>
                  <span className="text-[8px] border px-1 rounded-sm opacity-80">{cat.periodOrigin}</span>
                </div>

                {/* Content */}
                <div>
                  <div className={`mb-3 shrink-0 ${isSelected ? 'text-white' : 'text-[#2B2B2B]'}`}>
                    {getCategoryIcon(cat.id)}
                  </div>
                  <h4 className="font-serif text-lg font-black tracking-tight uppercase leading-tight mb-2">
                    {cat.name}
                  </h4>
                  <p className={`font-serif text-xs leading-relaxed ${
                    isSelected ? 'text-white/80' : 'text-gray-600'
                  }`}>
                    {cat.description}
                  </p>
                </div>

                {/* Filter Trigger status indicator inside card footer */}
                <div className="mt-4 pt-2 border-t border-dashed border-[#2B2B2B]/10 flex items-center justify-between text-[10px] font-mono uppercase tracking-wider font-extrabold w-full">
                  <span>
                    {isSelected ? '● ACTIVE EXCLUSION' : 'SELECT CLASSIFICATION'}
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    {isSelected ? '✖' : '→'}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Global Reset Filter Button */}
        {selectedCategory && (
          <div className="text-center mt-8">
            <button
              id="clear-filter-btn"
              onClick={() => onSelectCategory(null)}
              className="border border-[#2B2B2B] bg-[#2B2B2B] hover:bg-white hover:text-[#2B2B2B] text-white font-mono text-xs uppercase px-4 py-2 rounded tracking-widest transition-all shadow-[2px_2px_0px_0px_rgba(43,43,43,0.3)] cursor-pointer"
            >
              Expose Complete Inventory [Show All]
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
