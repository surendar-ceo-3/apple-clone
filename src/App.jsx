import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      <ProductSection 
        title="iPhone 15"
        subtitle="Newphoria."
        description="Dynamic Island, 48MP camera, and USB-C in a durable design."
        image="https://www.apple.com/v/iphone-15/c/images/meta/iphone-15_overview__f8jz7aagka2q_og.png"
      />
      
      <ProductSection 
        title="iPad Pro"
        subtitle="Supercharged by M2."
        description="The ultimate iPad experience with the M2 chip and stunning Liquid Retina XDR display."
        image="https://www.apple.com/v/ipad-pro/ah/images/meta/ipad-pro_overview__f8jz7aagka2q_og.png"
        reverse={true}
      />
      
      <ProductSection 
        title="MacBook Pro"
        subtitle="Mind-blowing. Head-turning."
        description="Supercharged by M3 Pro and M3 Max chips, with up to 22 hours of battery life."
        image="https://www.apple.com/v/macbook-pro/ah/images/meta/macbook-pro_overview__f8jz7aagka2q_og.png"
      />
      
      <Footer />
    </div>
  );
}

export default App;