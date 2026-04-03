import React from 'react';
import { Link } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';
import { Tool } from '@/src/data/tools';
import { cn } from '@/src/lib/utils';
import { motion } from 'motion/react';

interface ToolCardProps {
  tool: Tool;
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  // @ts-ignore
  const Icon = LucideIcons[tool.icon] || LucideIcons.Tool;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group"
    >
      <Link to={`/tool/${tool.id}`} className="block">
        <div className={cn(
          "h-full p-6 neo-border neo-shadow neo-shadow-hover flex flex-col",
          tool.color
        )}>
          <div className="w-12 h-12 bg-white neo-border flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
            <Icon size={24} />
          </div>
          <h3 className="text-xl font-black mb-2">{tool.name}</h3>
          <p className="text-sm font-bold text-black/70 flex-1">{tool.description}</p>
          <div className="mt-4 pt-4 border-t-2 border-black/20 flex items-center justify-between">
            <span className="text-xs font-black uppercase tracking-tighter">{tool.category}</span>
            <LucideIcons.ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

interface ToolSectionProps {
  title: string;
  tools: Tool[];
  color: string;
}

export const ToolSection: React.FC<ToolSectionProps> = ({ title, tools, color }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex items-center gap-4 mb-8">
        <h2 className={cn("text-3xl font-black px-4 py-2 neo-border neo-shadow-sm", color)}>
          {title}
        </h2>
        <div className="flex-1 h-1 bg-black"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </section>
  );
};
