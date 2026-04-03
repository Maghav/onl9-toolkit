import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    title: "AI Content Writer",
    description: "Generate SEO-optimized articles in seconds with our advanced AI engine.",
    color: "bg-neo-yellow",
    image: "https://picsum.photos/seed/ai-writer/800/400",
    link: "/tool/ai-writer"
  },
  {
    id: 2,
    title: "Cloud DNS Lookup",
    description: "Instantly check DNS records across global servers for any domain.",
    color: "bg-neo-blue",
    image: "https://picsum.photos/seed/dns/800/400",
    link: "/tool/dns-lookup"
  },
  {
    id: 3,
    title: "Neo Image Optimizer",
    description: "Compress images without losing quality. Perfect for web performance.",
    color: "bg-neo-pink",
    image: "https://picsum.photos/seed/image/800/400",
    link: "/tool/image-optimizer"
  }
];

export const HeroSlideshow: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 py-8">
      <div className="relative h-[400px] md:h-[500px] neo-border bg-white neo-shadow overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 flex flex-col md:flex-row"
          >
            <div className={`w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center ${slides[current].color} border-b-4 md:border-b-0 md:border-r-4 border-black`}>
              <motion.span 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-3 py-1 bg-black text-white text-xs font-bold uppercase tracking-widest mb-4 w-fit"
              >
                Featured Tool
              </motion.span>
              <motion.h2 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl font-black mb-4 leading-tight"
              >
                {slides[current].title}
              </motion.h2>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg font-bold mb-8 max-w-md"
              >
                {slides[current].description}
              </motion.p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Link 
                  to={slides[current].link}
                  className="neo-button bg-black text-white hover:bg-gray-800 inline-block text-center"
                >
                  Try It Now
                </Link>
              </motion.div>
            </div>
            <div className="w-full md:w-1/2 relative bg-gray-100">
              <img 
                src={slides[current].image} 
                alt={slides[current].title}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/10 mix-blend-multiply"></div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="absolute bottom-6 right-6 flex gap-3 z-10">
          <button 
            onClick={prev}
            className="p-3 bg-white neo-border hover:neo-shadow-sm transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={next}
            className="p-3 bg-white neo-border hover:neo-shadow-sm transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};
