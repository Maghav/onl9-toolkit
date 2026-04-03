import React, { useState } from 'react';
import { Menu, X, Search, Github } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  onMenuClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b-4 border-black px-4 md:px-8 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button 
          onClick={onMenuClick}
          className="p-2 neo-border bg-neo-yellow hover:neo-shadow-sm transition-all active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
        >
          <Menu size={24} />
        </button>
        <Link to="/" className="text-2xl font-black tracking-tighter hover:text-neo-pink transition-colors">
          ONL9<span className="text-neo-blue">TOOLKIT</span>
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-6 font-bold">
        <Link to="/" className="hover:underline decoration-4 underline-offset-4 decoration-neo-pink">Home</Link>
        <Link to="/tools" className="hover:underline decoration-4 underline-offset-4 decoration-neo-blue">All Tools</Link>
        <Link to="/about" className="hover:underline decoration-4 underline-offset-4 decoration-neo-green">About</Link>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative hidden sm:block">
          <input 
            type="text" 
            placeholder="Search tools..." 
            className="neo-border px-4 py-1.5 pl-10 focus:outline-none focus:neo-shadow-sm transition-all w-48 lg:w-64"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
        </div>
        <button className="neo-button bg-black text-white hover:bg-gray-800">
          Login
        </button>
      </div>
    </header>
  );
};
