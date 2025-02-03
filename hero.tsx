import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative w-full h-[120vh] bg-gray-50">
      <img
        src="/hero.jpg"
        alt="Hero Image"
        className="w-full h-full object-cover" // Ensures the image covers the entire container
      />
      <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-left text-white px-8">
      <h4 className="text-2xl mb-2">Summer 2025</h4>
        <h1 className="text-8xl font-bold mb-4">NEW COLLECTION</h1>
        <h3 className="text-lg">We know how large objects will act,
            <br/>
            but things on a small scale.
        </h3>
        <button className="bg-green-500 text-white py-2 px-6 rounded-squre-full text-lg hover:bg-green-600 transition">
      Shop Now
    </button>
      </div>
    </div>
  );
};

export default Hero;
