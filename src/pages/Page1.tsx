import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Page1 = () => {
  const [text] = useState('CA: Not released yet');
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full space-y-8 text-center">
        <h1 className="text-4xl font-bold text-white mb-8">
          The Future of Digital Finance
        </h1>
        
        <p className="text-white text-lg mb-12 leading-relaxed">
          Solana represents a breakthrough in blockchain technology, offering lightning-fast 
          transactions and minimal fees. With its innovative proof-of-history consensus mechanism, 
          Solana has revolutionized the way we think about scalability in blockchain networks.
        </p>

        <div className="flex items-center justify-center space-x-4">
          <motion.div
            className="flex-1 max-w-md bg-white/10 backdrop-blur-md rounded-full overflow-hidden ring-2 ring-white/30 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-shadow"
            whileHover={{ scale: 1.02 }}
          >
            <input
              type="text"
              value={text}
              readOnly
              className="w-full px-6 py-3 bg-transparent text-white focus:outline-none"
            />
          </motion.div>
          
          <motion.button
            onClick={handleCopy}
            className="relative w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-all ring-2 ring-white/30 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence>
              {!copied ? (
                <motion.img
                  key="copy"
                  src="https://static-00.iconduck.com/assets.00/copy-icon-2021x2048-5n8s57wy.png"
                  alt="Copy"
                  className="w-6 h-6 opacity-80"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              ) : (
                <motion.div
                  key="check"
                  className="text-green-400 font-medium"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                >
                  ✓
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Page1;