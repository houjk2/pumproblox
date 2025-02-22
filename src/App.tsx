import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import VideoBackground from './components/VideoBackground';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
        <VideoBackground />
        
        {/* Social Links */}
        <div className="absolute top-6 left-6 z-20">
          <motion.a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-8 h-8 opacity-70 hover:opacity-100 transition-opacity"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
              <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
              <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
            </svg>
          </motion.a>
        </div>

        <div className="absolute top-6 right-6 z-20">
          <motion.a
            href="https://telegram.org"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-8 h-8 opacity-70 hover:opacity-100 transition-opacity"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
              <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
            </svg>
          </motion.a>
        </div>
        
        {/* Navigation */}
        <nav className="absolute top-0 left-0 right-0 z-10 p-6">
          <div className="max-w-4xl mx-auto flex justify-center gap-8">
            <NavLink to="/">Page 1</NavLink>
            <NavLink to="/page2">Page 2</NavLink>
          </div>
        </nav>

        {/* Main Content */}
        <div className="relative z-10 min-h-screen">
          <Routes>
            <Route path="/" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link to={to}>
      <motion.div
        className="text-white text-lg font-medium px-4 py-2 rounded-full backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.div>
    </Link>
  );
}

export default App;