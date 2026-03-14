import React from 'react';

const ProductSection = ({ title, subtitle, description, image, reverse }) => {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16`}>
          
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <span className="text-blue-600 font-semibold text-sm tracking-wider bg-blue-50 px-3 py-1 rounded-full inline-block mb-4">
              NEW
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
              {title}
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-4">{subtitle}</p>
            <p className="text-gray-500 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
              {description}
            </p>
            
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="#" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition transform hover:scale-105 shadow-lg hover:shadow-xl">
                Learn more
              </a>
              <a href="#" className="border-2 border-gray-300 px-6 py-3 rounded-full hover:border-blue-600 hover:text-blue-600 transition">
                Buy
              </a>
            </div>
          </div>
          
          {/* Image */}
          <div className="flex-1">
            <img 
              src={image} 
              alt={title}
              className="w-full max-w-md mx-auto drop-shadow-2xl hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;