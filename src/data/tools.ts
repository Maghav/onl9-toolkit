export interface Tool {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: 'Web' | 'Cloud' | 'AI' | 'SEO' | 'Dev';
  color: string;
}

export const TOOLS: Tool[] = [
  {
    id: 'ai-writer',
    name: 'AI Content Writer',
    description: 'Generate high-quality content using Gemini AI.',
    icon: 'PenTool',
    category: 'AI',
    color: 'bg-neo-yellow',
  },
  {
    id: 'json-formatter',
    name: 'JSON Formatter',
    description: 'Clean and format your JSON data instantly.',
    icon: 'Code',
    category: 'Web',
    color: 'bg-neo-blue',
  },
  {
    id: 'image-optimizer',
    name: 'Image Optimizer',
    description: 'Compress and optimize images for the web.',
    icon: 'Image',
    category: 'Web',
    color: 'bg-neo-pink',
  },
  {
    id: 'password-gen',
    name: 'Secure Password Generator',
    description: 'Create strong, unhackable passwords.',
    icon: 'Lock',
    category: 'Dev',
    color: 'bg-neo-green',
  },
  {
    id: 'dns-lookup',
    name: 'DNS Lookup',
    description: 'Check DNS records for any domain.',
    icon: 'Globe',
    category: 'Cloud',
    color: 'bg-neo-orange',
  },
  {
    id: 'keyword-research',
    name: 'Keyword Researcher',
    description: 'Find the best keywords for your SEO strategy.',
    icon: 'Search',
    category: 'SEO',
    color: 'bg-neo-yellow',
  },
  {
    id: 'unit-converter',
    name: 'Unit Converter',
    description: 'Convert between different units of measurement.',
    icon: 'RefreshCw',
    category: 'Web',
    color: 'bg-neo-blue',
  },
  {
    id: 'color-picker',
    name: 'Neo Color Picker',
    description: 'Pick and convert colors between formats.',
    icon: 'Palette',
    category: 'Dev',
    color: 'bg-neo-pink',
  }
];

export const CATEGORIES = ['Web', 'Cloud', 'AI', 'SEO', 'Dev',] as const;
