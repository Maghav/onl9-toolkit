import React from 'react';
import { X, Home, Grid, Cpu, Cloud, Globe, Settings, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const menuItems = [
    { icon: Home, label: 'Home', path: '/', color: 'bg-neo-yellow' },
    { icon: Grid, label: 'All Tools', path: '/tools', color: 'bg-neo-blue' },
    { icon: Globe, label: 'Web Tools', path: '/category/Web', color: 'bg-neo-pink' },
    { icon: Cloud, label: 'Cloud Tools', path: '/category/Cloud', color: 'bg-neo-green' },
    { icon: Cpu, label: 'AI Tools', path: '/category/AI', color: 'bg-neo-orange' },
    { icon: Info, label: 'About Us', path: '/about', color: 'bg-white' },
    { icon: Settings, label: 'Settings', path: '/settings', color: 'bg-gray-200' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 h-full w-72 bg-white border-r-4 border-black z-[70] p-6 flex flex-col"
          >
            <div className="flex items-center justify-between mb-10">
              <span className="text-xl font-black">NAVIGATION</span>
              <button 
                onClick={onClose}
                className="p-1 neo-border bg-neo-pink hover:neo-shadow-sm transition-all"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="flex-1 space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={onClose}
                  className={cn(
                    "flex items-center gap-4 p-3 neo-border font-bold neo-shadow-hover",
                    item.color
                  )}
                >
                  <item.icon size={22} />
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto pt-6 border-t-4 border-black">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">ONL9 Toolkit v1.0</p>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-black neo-border"></div>
                <div className="w-8 h-8 bg-neo-yellow neo-border"></div>
                <div className="w-8 h-8 bg-neo-blue neo-border"></div>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};
