import React from "react";

const Footer = () => {
  return (
    <footer className="bg-purple-800 text-white py-10 mt-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold">Mega Laundry Service</h2>
          <p className="mt-3 text-gray-300">Your trusted partner in professional laundry services.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Why Choose Us</a></li>
            <li><a href="#" className="hover:underline">Our Services</a></li>
            <li><a href="#" className="hover:underline">Pricing</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <p className="mt-3">📍 Nairobi, Kenya</p>
          <p>📞 +254 700 123 456</p>
          <p>📧 support@megalaundry.com</p>

          {/* Social Media Links */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-gray-300">🌍 Website</a>
            <a href="#" className="hover:text-gray-300">📘 Facebook</a>
            <a href="#" className="hover:text-gray-300">📸 Instagram</a>
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
