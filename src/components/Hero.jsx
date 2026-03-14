import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#1a1a1a] to-[#000000] text-white overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517336714731-489689fd1ca4?q=80&w=1000')] bg-cover bg-center opacity-10"></div>
      
      {/* Animated gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 pt-32 md:pt-40">
        <div className="text-center">
          {/* Floating badge */}
          <div className="inline-block mb-6 animate-bounce">
            <span className="bg-white/10 backdrop-blur-md text-blue-400 px-4 py-2 rounded-full text-sm font-medium border border-white/20">
              ✨ New Arrival
            </span>
          </div>
          
          {/* Main headline with gradient */}
          <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-white via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
            iPhone 15 Pro
          </h1>
          
          {/* Subheadline with glow */}
          <p className="text-3xl md:text-4xl font-light mb-8 text-white/90 drop-shadow-lg">
            Titanium. So strong. So light. So Pro.
          </p>
          
          {/* Description with elegant styling */}
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed">
            The first iPhone to feature an aerospace‑grade titanium design, 
            using the same alloy as spacecraft. <span className="text-blue-400 font-semibold">Meet the new standard.</span>
          </p>
          
          {/* CTA Buttons with WORKING LINKS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://www.apple.com/iphone-15-pro/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden"
            >
              <span className="relative z-10">Learn more →</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a 
              href="https://www.apple.com/shop/buy-iphone/iphone-15-pro" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative border-2 border-white/30 hover:border-blue-400 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm overflow-hidden"
            >
              <span className="relative z-10">View pricing</span>
              <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors duration-300"></div>
            </a>
          </div>
          
          {/* Animated scroll indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-2 bg-white/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;