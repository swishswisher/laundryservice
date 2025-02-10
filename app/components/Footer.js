"use client";

import React from "react";

const Footer = () => {
  // Function to scroll smoothly to the correct section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-[#33252c] text-white py-10 mt-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold">Mega Laundry Service</h2>
          <p className="mt-3 text-gray-300">Your trusted partner in professional laundry services.</p>
        </div>

        {/* Quick Links with Smooth Scrolling */}
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li><button onClick={() => scrollToSection("home")} className="hover:text-[#e2ba2c]">Home</button></li>
            <li><button onClick={() => scrollToSection("about")} className="hover:text-[#e2ba2c]">About</button></li>
            <li><button onClick={() => scrollToSection("services")} className="hover:text-[#e2ba2c]">Our Services</button></li>
            <li><button onClick={() => scrollToSection("pricing")} className="hover:text-[#e2ba2c]">Pricing</button></li>
          </ul>
        </div>

        {/* Contact Info (Far Right) */}
        <div>
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <p className="mt-3">📍 Kakamega, Kenya</p>
          <p>📞 +254 705 864 283</p>
          <p>📧 support@megalaundry.com</p>

          {/* Social Media Links */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-[#e2ba2c]">🌍 Website</a>
            <a href="#" className="hover:text-[#e2ba2c]">📘 Facebook</a>
            <a href="#" className="hover:text-[#e2ba2c]">📸 Instagram</a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="mt-6 text-center text-gray-400 border-t border-gray-500 pt-4">
        <p>&copy; {new Date().getFullYear()} Mega Laundry Service. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
