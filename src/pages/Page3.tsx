import React from 'react';
import { motion } from 'framer-motion';

const Page3 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <motion.div 
        className="max-w-2xl text-center space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-white mb-8">
          The Ecosystem Impact
        </h1>
        
        <div className="space-y-6 text-white text-lg leading-relaxed">
          <p>
            Solana's vibrant ecosystem has become a breeding ground for innovation 
            in decentralized finance (DeFi), non-fungible tokens (NFTs), and 
            Web3 applications. The network's high performance and low transaction 
            costs have attracted developers and users alike, creating a flourishing 
            community of builders and creators.
          </p>
          
          <p>
            From decentralized exchanges processing billions in daily volume to 
            NFT marketplaces revolutionizing digital ownership, Solana's impact 
            on the blockchain landscape continues to grow. The network's ability 
            to handle complex computations while maintaining low fees has made it 
            particularly attractive for gaming and metaverse applications.
          </p>
          
          <p>
            As we look to the future, Solana's commitment to scaling blockchain 
            technology while maintaining decentralization positions it as a key 
            player in the evolution of Web3 and the broader digital economy.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Page3;