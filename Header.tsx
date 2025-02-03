import React from 'react'
import Image from 'next/image'
import { useState } from "react";



const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-6 bg-black-700">
     
      {/* Logo and Branding */}
      <div className="flex items-center space-x-4">
        <img
          src="/logo.png"
          alt="Logo"
          className="h-10 w-auto"
        />
        {/* <div>
          <span className="text-lg font-bold text-white">Bandage</span>
          <span className="text-sm block text-gray-300">Maaz Raza</span>
        </div> */}
      </div>

      {/* Navigation Links */}
      <nav className="space-x-4">
        <a href="#" className="text-black hover:text-gray-300">Home</a>

        <a href="#" className="text-black hover:text-gray-300">Shop</a>

        <a href="#" className="text-black hover:text-gray-300">About</a>

        <a href="#" className="text-black hover:text-gray-300">Blog</a>

        <a href="#" className="text-black hover:text-gray-300">Contact</a>
      </nav>

      
      {/* Login and User Avatar */}
      <div className="flex items-center space-x-4">
      <button className="text-blue-500 ">Login / Register</button>
        
      </div>

      <div className="flex items-center space-x-4">


    
  {/* Icons */}
  <a href="#" className="text-white hover:text-gray-300">
    <img src="/search.png" alt="Search" className="h-12 w-12" />
  </a>
  <a href="#" className="text-white hover:text-gray-300">
    <img src="/cart.png" alt="Cart" className="h-12 w-12" />
  </a>
  <a href="#" className="text-white hover:text-gray-300">
    <img src="/like.png" alt="Like" className="h-12 w-12" />
  </a>
  
  
</div>

    </header>
  );
};

export default Header;

