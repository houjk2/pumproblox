import React from 'react';
import { motion } from 'framer-motion';

const Page2 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <motion.div 
        className="max-w-2xl text-center space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-white mb-8">
          The Technical Marvel
        </h1>
        
        <div className="space-y-6 text-white text-lg leading-relaxed">
          <p>
            At its core, Solana's architecture is built on eight key innovations, 
            with Proof of History (PoH) being the most groundbreaking. This 
            revolutionary approach creates a historical record that proves that an 
            event has occurred at a specific moment in time.
          </p>
          
          <p>
            Unlike traditional blockchain networks that rely on synchronous consensus 
            mechanisms, Solana's unique design allows for asynchronous processing, 
            enabling the network to handle up to 65,000 transactions per second 
            with sub-second finality.
          </p>
          
          <p>
            The network's efficiency is further enhanced by its Gulf Stream 
            mempool-less transaction forwarding protocol and Turbine block 
            propagation protocol, ensuring that Solana remains at the forefront 
            of blockchain scalability.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Page2;