import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { Home } from './pages/Home';
import { ToolDetail } from './pages/ToolDetail';

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tool/:id" element={<ToolDetail />} />
            <Route path="/category/:category" element={<Home />} />
            <Route path="/tools" element={<Home />} />
            <Route path="*" element={<div className="p-20 text-center font-black text-4xl">PAGE NOT FOUND</div>} />
          </Routes>
        </main>

        <footer className="bg-white border-t-4 border-black py-12 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-black mb-4">ONL9 TOOLKIT</h2>
              <p className="font-bold text-gray-600 max-w-md mb-6">
                The most powerful collection of online tools for developers, creators, and cloud engineers. 
                Built with a passion for neubrutalism and vintage design.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-neo-yellow neo-border neo-shadow-sm"></div>
                <div className="w-10 h-10 bg-neo-blue neo-border neo-shadow-sm"></div>
                <div className="w-10 h-10 bg-neo-pink neo-border neo-shadow-sm"></div>
                <div className="w-10 h-10 bg-neo-green neo-border neo-shadow-sm"></div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-black mb-4 uppercase">Quick Links</h3>
              <ul className="space-y-2 font-bold">
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">All Tools</a></li>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-black mb-4 uppercase">Categories</h3>
              <ul className="space-y-2 font-bold">
                <li><a href="#" className="hover:underline">Web Tools</a></li>
                <li><a href="#" className="hover:underline">Cloud Tools</a></li>
                <li><a href="#" className="hover:underline">AI Tools</a></li>
                <li><a href="#" className="hover:underline">SEO Tools</a></li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-12 pt-8 border-t-2 border-black/10 text-center font-black text-sm uppercase tracking-widest">
            &copy; 2026 ONL9 TOOLKIT. ALL RIGHTS RESERVED.
          </div>
        </footer>
      </div>
    </Router>
  );
}
