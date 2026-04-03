import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { TOOLS } from '@/src/data/tools';
import * as LucideIcons from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

export const ToolDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const tool = TOOLS.find(t => t.id === id);

  if (!tool) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-6xl font-black mb-8">404</h1>
        <p className="text-2xl font-bold mb-8">Tool not found!</p>
        <Link to="/" className="neo-button bg-neo-yellow">Go Back Home</Link>
      </div>
    );
  }

  // @ts-ignore
  const Icon = LucideIcons[tool.icon] || LucideIcons.Tool;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Link to="/" className="flex items-center gap-2 font-bold hover:underline">
          <LucideIcons.ArrowLeft size={20} />
          Back to all tools
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <div className="bg-white neo-border p-8 neo-shadow mb-8">
            <div className="flex items-center gap-6 mb-8">
              <div className={cn("w-20 h-20 neo-border flex items-center justify-center", tool.color)}>
                <Icon size={40} />
              </div>
              <div>
                <h1 className="text-4xl font-black">{tool.name}</h1>
                <p className="text-lg font-bold text-gray-500">{tool.category} Tool</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl font-bold leading-relaxed">
                {tool.description} This is a placeholder for the actual tool implementation. 
                In a real app, this section would contain the interactive interface for {tool.name}.
              </p>
            </div>

            {/* Mock Tool Interface */}
            <div className="neo-border p-8 bg-gray-50">
              <div className="mb-6">
                <label className="block font-black mb-2 uppercase text-sm">Input Data</label>
                <textarea 
                  id="tool-input"
                  className="w-full h-40 neo-border p-4 font-mono focus:outline-none focus:neo-shadow-sm transition-all"
                  placeholder={tool.id === 'json-formatter' ? 'Paste your messy JSON here...' : 'Enter your data here...'}
                ></textarea>
              </div>
              <div className="flex gap-4">
                <button 
                  onClick={() => {
                    const input = document.getElementById('tool-input') as HTMLTextAreaElement;
                    if (tool.id === 'json-formatter') {
                      try {
                        const obj = JSON.parse(input.value);
                        input.value = JSON.stringify(obj, null, 2);
                      } catch (e) {
                        alert('Invalid JSON!');
                      }
                    } else {
                      alert('Processing started for ' + tool.name);
                    }
                  }}
                  className={cn("neo-button", tool.color)}
                >
                  {tool.id === 'json-formatter' ? 'Format JSON' : 'Process Data'}
                </button>
                <button 
                  onClick={() => {
                    const input = document.getElementById('tool-input') as HTMLTextAreaElement;
                    input.value = '';
                  }}
                  className="neo-button bg-white"
                >
                  Clear
                </button>
              </div>
            </div>
          </div>

          <div className="bg-neo-blue neo-border p-8 neo-shadow">
            <h3 className="text-2xl font-black mb-4">How to use {tool.name}?</h3>
            <ol className="list-decimal list-inside space-y-4 font-bold">
              <li>Enter your data in the input field above.</li>
              <li>Click the "Process Data" button.</li>
              <li>Wait for the magic to happen!</li>
              <li>Copy or download your results.</li>
            </ol>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white neo-border p-6 neo-shadow">
            <h3 className="text-xl font-black mb-4 border-b-4 border-black pb-2">Related Tools</h3>
            <div className="space-y-4">
              {TOOLS.filter(t => t.category === tool.category && t.id !== tool.id).slice(0, 4).map(related => (
                <Link 
                  key={related.id} 
                  to={`/tool/${related.id}`}
                  className="flex items-center gap-3 p-2 hover:bg-gray-100 transition-colors group"
                >
                  <div className={cn("w-10 h-10 neo-border flex items-center justify-center shrink-0", related.color)}>
                    {/* @ts-ignore */}
                    {React.createElement(LucideIcons[related.icon] || LucideIcons.Tool, { size: 18 })}
                  </div>
                  <span className="font-bold group-hover:underline">{related.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-neo-pink neo-border p-6 neo-shadow">
            <h3 className="text-xl font-black mb-4">Need Help?</h3>
            <p className="font-bold mb-4">Our support team is available 24/7 to help you with any tool-related issues.</p>
            <button className="w-full neo-button bg-black text-white">Contact Support</button>
          </div>
        </div>
      </div>
    </div>
  );
};
