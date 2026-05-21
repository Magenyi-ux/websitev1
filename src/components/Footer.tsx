import { Cpu } from 'lucide-react';
import SphereLearnLogo from './SphereLearnLogo';

interface FooterProps {
  onScrollToSection: (id: string) => void;
}

export default function Footer({ onScrollToSection }: FooterProps) {
  return (
    <footer 
      id="footer" 
      className="bg-[#FAF9F5] text-[#2B2B2B] border-t-4 border-[#2B2B2B] pt-12 pb-8 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Newspaper Style Editorial Splitting Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-[#2B2B2B]/20">
          
          {/* Col 1: Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="border-2 border-[#2B2B2B] w-8 h-8 flex items-center justify-center bg-white rounded">
                <SphereLearnLogo size={22} />
              </div>
              <span className="font-serif text-sm font-bold tracking-widest uppercase">
                Examply
              </span>
            </div>
            
            <p className="font-serif text-xs text-gray-600 leading-relaxed italic">
              "Providing West African scholars with elite past exam prep ledgers and groundbreaking offline mechanical tutor engines. Helping students master JAMB, WAEC, and NECO with extreme security and zero wire delays since MDCCCXCIX."
            </p>
            
            <div className="font-mono text-[9px] text-[#2B2B2B]/60 tracking-wider">
              ESTB. 1899 • LAGOS & BOSTON
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h5 className="font-serif text-xs font-bold uppercase tracking-wider text-[#2B2B2B] border-b border-[#2B2B2B]/10 pb-1.5">
              The Academic Pages
            </h5>
            <ul className="space-y-2 font-mono text-xs">
              <li>
                <button 
                  onClick={() => onScrollToSection('hero')} 
                  className="text-gray-600 hover:text-black hover:underline cursor-pointer"
                >
                  Return to Summit
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onScrollToSection('catalog')} 
                  className="text-gray-600 hover:text-black hover:underline cursor-pointer"
                >
                  Syllabus Archives
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onScrollToSection('categories')} 
                  className="text-gray-600 hover:text-black hover:underline cursor-pointer"
                >
                  Study classes
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onScrollToSection('pricing-section')} 
                  className="text-gray-600 hover:text-black hover:underline cursor-pointer"
                >
                  Subscription Tariffs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onScrollToSection('about')} 
                  className="text-gray-600 hover:text-black hover:underline cursor-pointer"
                >
                  SphereLearn Heritage
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Shipping Regulations & Policies */}
          <div className="space-y-3">
            <h5 className="font-serif text-xs font-bold uppercase tracking-wider text-[#2B2B2B] border-b border-[#2B2B2B]/10 pb-1.5">
              Academic Terms
            </h5>
            <ul className="space-y-1.5 font-serif text-xs text-gray-600">
              <li className="leading-tight">
                <span className="font-mono text-[10px] font-bold">I.</span> Past exam keys are meticulously resolved and double-checked by older master scribes.
              </li>
              <li className="leading-tight">
                <span className="font-mono text-[10px] font-bold">II.</span> Offline tutor mechanical computing gears are calibrated preceding shipping.
              </li>
              <li className="leading-tight">
                <span className="font-mono text-[10px] font-bold">III.</span> Zero paper records or score dossiers are saved in external clouds.
              </li>
            </ul>
          </div>

          {/* Col 4: Post Address Ledger */}
          <div className="space-y-3">
            <h5 className="font-serif text-xs font-bold uppercase tracking-wider text-[#2B2B2B] border-b border-[#2B2B2B]/10 pb-1.5">
              General Headquarters
            </h5>
            <div className="font-serif text-xs text-gray-600 space-y-1">
              <p className="font-bold">SphereLearn Study Hall</p>
              <p>448 Scholar Avenue Slipway</p>
              <p>Lagos Mainland & Boston Vaults</p>
              <p className="font-mono text-[10px] text-gray-500 pt-1">
                Pneumatic Cable: SL-LAGOS-EX
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright rule */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <SphereLearnLogo size={16} />
            <p className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">
              © {new Date().getFullYear()} EXAMPLY BY SPHERELEARN • PRIVATE SCHOLAR REGISTRY
            </p>
          </div>
          
          <div className="text-right">
            <p className="font-mono text-[9px] text-gray-400 uppercase tracking-tight">
              Ascribed under Sovereign Patent Law • All Rights Reserved.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
