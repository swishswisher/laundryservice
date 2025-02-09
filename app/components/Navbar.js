"use client"; // Ensure this runs on the client side

import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-purple-700">Mega Laundry</h1>
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-purple-700">Home</a>
          <a href="#about" className="hover:text-purple-700">About</a>
          <a href="#services" className="hover:text-purple-700">Services</a>
          <a href="#pricing" className="hover:text-purple-700">Pricing</a>
        </div>
        <button className="md:hidden" onClick={toggleMenu}>☰</button>
      </div>
      {menuOpen && (
        <div className="fixed top-0 right-0 h-full w-4/5 bg-purple-700 text-white flex flex-col p-6 transition-transform">
          <button className="self-end text-2xl" onClick={toggleMenu}>✖</button>
          <a href="#home" className="py-3 text-lg" onClick={toggleMenu}>Home</a>
          <a href="#about" className="py-3 text-lg" onClick={toggleMenu}>About</a>
          <a href="#services" className="py-3 text-lg" onClick={toggleMenu}>Services</a>
          <a href="#pricing" className="py-3 text-lg" onClick={toggleMenu}>Pricing</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
