"use client"

import React, { useState } from "react";
import Image from "next/image";

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

const HomeSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section - Text & Gradient */}
      <div className="md:w-1/2 w-full flex flex-col justify-center px-10 bg-gradient-to-r from-purple-700 to-white text-white">
        <h1 className="text-7xl font-bold">Premium Laundry Services</h1>
        <p className="mt-4 text-2xl">
          Affordable, fast, and reliable laundry service at your convenience.
        </p>
        <a
          href="#pricing"
          className="mt-6 inline-block bg-white text-purple-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Get a Service
        </a>
      </div>

      {/* Right Section - Full-Height Image */}
      <div className="md:w-1/2 w-full h-screen relative">
        <Image
          src="/laundry1.jpg"
          alt="Laundry Service"
          layout="fill" // ✅ Makes the image cover the entire right section
          objectFit="cover" // ✅ Ensures the image fully covers the section
          className="rounded-lg"
        />
      </div>
    </section>
  );
};

export { Navbar, HomeSection };
