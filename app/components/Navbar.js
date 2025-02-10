"use client";

import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#33252c]">Mega Laundry</h1>
        <div className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection("home")} className="hover:text-[#e2ba2c] text-[#33252c]">Home</button>
          <button onClick={() => scrollToSection("about")} className="hover:text-[#e2ba2c] text-[#33252c]">About</button>
          <button onClick={() => scrollToSection("services")} className="hover:text-[#e2ba2c] text-[#33252c]">Services</button>
          <button onClick={() => scrollToSection("pricing")} className="hover:text-[#e2ba2c] text-[#33252c]">Pricing</button>
        </div>
        <button className="md:hidden text-[#33252c] text-3xl" onClick={toggleMenu}>☰</button>
      </div>
      {menuOpen && (
        <div className="fixed top-0 right-0 h-full w-4/5 bg-[#872334] text-white flex flex-col p-6 transition-transform">
          <button className="self-end text-2xl" onClick={toggleMenu}>✖</button>
          <button onClick={() => scrollToSection("home")} className="py-3 text-lg text-[#e2ba2c]">Home</button>
          <button onClick={() => scrollToSection("about")} className="py-3 text-lg text-[#e2ba2c]">About</button>
          <button onClick={() => scrollToSection("services")} className="py-3 text-lg text-[#e2ba2c]">Services</button>
          <button onClick={() => scrollToSection("pricing")} className="py-3 text-lg text-[#e2ba2c]">Pricing</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
