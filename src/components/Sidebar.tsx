import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  House, 
  Users, 
  Compass, 
  FlagBannerFold, 
  Images, 
  UsersThree,
  WhatsappLogo,
  InstagramLogo,
  X
} from '@phosphor-icons/react';
import { organizationProfile } from '../data/organizationProfile';
import { TreeNav, TreeNavItem } from './ui/tree-nav';

const navItems: TreeNavItem[] = [
  { id: 'beranda', label: 'Beranda', href: '#beranda', icon: <House size={16} weight="regular" /> },
  { id: 'tentang', label: 'Tentang Ambalan', href: '#tentang', icon: <Users size={16} weight="regular" /> },
  { id: 'filosofi', label: 'Filosofi', href: '#filosofi', icon: <Compass size={16} weight="regular" /> },
  { id: 'kegiatan', label: 'Kegiatan', href: '#kegiatan', icon: <FlagBannerFold size={16} weight="regular" /> },
  { id: 'galeri', label: 'Galeri', href: '#galeri', icon: <Images size={16} weight="regular" /> },
  { id: 'kepengurusan', label: 'Kepengurusan', href: '#kepengurusan', icon: <UsersThree size={16} weight="regular" /> },
];

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
  activeSection?: string;
}

export function Sidebar({ isOpen = true, onClose, activeSection = 'beranda' }: SidebarProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleSelect = (item: TreeNavItem) => {
    const element = document.getElementById(item.href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      if (isMobile && onClose) {
        onClose();
      }
    }
  };

  return (
    <>
      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Sidebar container */}
      <motion.aside
        initial={isMobile ? { x: -320 } : false}
        animate={isMobile ? (isOpen ? { x: 0 } : { x: -320 }) : { x: 0 }}
        transition={{ type: "spring", visualDuration: 0.3, bounce: 0.2 }}
        className={`
          fixed top-0 left-0 z-50 h-full
          lg:sticky lg:top-0 lg:z-20 lg:h-screen lg:shrink-0
          flex flex-col
          bg-brand-deep
          w-80 lg:w-64 shadow-2xl lg:shadow-none border-r border-white/10
          ${isMobile && !isOpen ? 'hidden' : 'flex'}
        `}
        aria-label="Navigasi sidebar"
      >
        {/* Close button for mobile */}
        {isMobile && (
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 text-white/60 hover:text-white focus-ring rounded-full"
            aria-label="Tutup sidebar"
          >
            <X size={24} />
          </button>
        )}

        {/* Brand header */}
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center">
              <span className="font-bold text-brand-deep text-lg">AK</span>
            </div>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex-1"
              >
                <h2 className="font-bold text-white text-lg leading-tight">
                  Ambalan
                  <span className="block text-brand-primary text-sm">
                    Kameswara Sekartaji
                  </span>
                </h2>
              </motion.div>
            )}
          </div>
        </div>

        {/* Navigation with TreeNav */}
        <nav className="flex-1 py-6 px-2 overflow-y-auto">
          <TreeNav
            items={navItems}
            activeHref={`#${activeSection}`}
            followHover={true}
            onSelect={(item) => handleSelect(item)}
            className="text-white/70"
          />
        </nav>

        {/* CTA section */}
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 border-t border-white/10"
          >
            <button
              onClick={() => handleSelect({ href: '#bergabung', label: 'Bergabung' })}
              className="w-full bg-brand-primary text-brand-deep font-bold py-3.5 px-4 rounded-lg
                       hover:bg-brand-primary/90 transition-colors focus-ring"
            >
              Bergabung
            </button>
          </motion.div>
        )}

        {/* Social links */}
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-6 border-t border-white/10"
          >
            <div className="flex gap-4 justify-center">
              <a
                href={organizationProfile.whatsappContactUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white/60 hover:text-white transition-colors focus-ring rounded-lg"
                aria-label="WhatsApp"
              >
                <WhatsappLogo size={20} weight="fill" />
              </a>
              <a
                href={organizationProfile.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white/60 hover:text-white transition-colors focus-ring rounded-lg"
                aria-label="Instagram"
              >
                <InstagramLogo size={20} weight="fill" />
              </a>
            </div>
          </motion.div>
        )}
      </motion.aside>
    </>
  );
}
