import React from 'react';
import { HeroSlideshow } from '@/src/components/home/HeroSlideshow';
import { ToolSection } from '@/src/components/home/ToolGrid';
import { TOOLS, CATEGORIES } from '@/src/data/tools';
import { motion } from 'motion/react';

export const Home: React.FC = () => {
  const categoryColors = {
    Web: 'bg-neo-blue',
    Cloud: 'bg-neo-green',
    AI: 'bg-neo-orange',
    SEO: 'bg-neo-yellow',
    Dev: 'bg-neo-pink',
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pb-20"
    >
      <HeroSlideshow />
      
      <div className="max-w-7xl mx-auto px-4 mt-12 mb-8">
        <div className="bg-white neo-border p-8 neo-shadow flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-black mb-4">The Ultimate Digital Toolkit.</h1>
            <p className="text-lg font-bold text-gray-600">
              Access 50+ professional tools for web development, cloud management, and AI content generation. 
              All in one place, styled with pure neubrutalism.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="neo-border p-4 bg-neo-yellow neo-shadow-sm text-center min-w-[120px]">
              <div className="text-3xl font-black">50+</div>
              <div className="text-xs font-bold uppercase">Tools</div>
            </div>
            <div className="neo-border p-4 bg-neo-blue neo-shadow-sm text-center min-w-[120px]">
              <div className="text-3xl font-black">100k</div>
              <div className="text-xs font-bold uppercase">Users</div>
            </div>
          </div>
        </div>
      </div>

      {CATEGORIES.map((category) => {
        const categoryTools = TOOLS.filter(t => t.category === category);
        if (categoryTools.length === 0) return null;
        
        return (
          <ToolSection 
            key={category}
            title={`${category} Tools`}
            tools={categoryTools}
            // @ts-ignore
            color={categoryColors[category] || 'bg-white'}
          />
        );
      })}

      {/* Newsletter / Footer Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-black text-white neo-border p-12 neo-shadow text-center">
          <h2 className="text-4xl font-black mb-6">Stay Updated with New Tools</h2>
          <p className="text-xl font-bold mb-8 text-gray-400">We add new tools every week. Join our newsletter to get notified.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="your@email.com" 
              className="flex-1 px-6 py-4 neo-border text-black font-bold focus:outline-none"
            />
            <button className="neo-button bg-neo-yellow text-black hover:bg-yellow-400 py-4">
              Subscribe Now
            </button>
          </form>
        </div>
      </section>
    </motion.div>
  );
};
