import React from "react";
import { FaTruck, FaClock, FaMoneyBillWave, FaTshirt, FaStar, FaBriefcase } from "react-icons/fa"; 

const WhyChooseUs = () => {
  return (
    <section className="p-14 bg-gray-100 text-center" id="about"> {/* Updated Background */}
      <h2 className="text-4xl font-bold text-[#33252c]">Why Choose Us?</h2>
      <p className="mt-4 text-lg text-[#33252c]">
        We offer premium laundry services designed to save you time and ensure the best quality for your clothes.
      </p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 max-w-7xl mx-auto">
        <div className="p-6 bg-white shadow-md rounded-lg flex flex-col items-center text-center">
          <FaTruck className="text-[#3ea3a8] text-4xl mb-3" />
          <h3 className="text-xl font-semibold">Free Pickup & Delivery</h3>
          <p className="text-[#33252c]">We pick up, clean, and deliver to your doorstep.</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg flex flex-col items-center text-center">
          <FaClock className="text-[#3ea3a8] text-4xl mb-3" />
          <h3 className="text-xl font-semibold">24-Hour Turnaround</h3>
          <p className="text-[#33252c]">Your clothes cleaned & delivered within 24 hours.</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg flex flex-col items-center text-center">
          <FaMoneyBillWave className="text-[#3ea3a8] text-4xl mb-3" />
          <h3 className="text-xl font-semibold">Affordable Pricing</h3>
          <p className="text-[#33252c]">No hidden costs. Pay with M-Pesa or other cashless options.</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg flex flex-col items-center text-center">
          <FaTshirt className="text-[#3ea3a8] text-4xl mb-3" />
          <h3 className="text-xl font-semibold">Premium Cleaning</h3>
          <p className="text-[#33252c]">Eco-friendly detergents & expert fabric care.</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg flex flex-col items-center text-center">
          <FaStar className="text-[#3ea3a8] text-4xl mb-3" />
          <h3 className="text-xl font-semibold">5-Star Customer Service</h3>
          <p className="text-[#33252c]">Friendly support & guaranteed satisfaction.</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg flex flex-col items-center text-center">
          <FaBriefcase className="text-[#3ea3a8] text-4xl mb-3" />
          <h3 className="text-xl font-semibold">Specialized Services</h3>
          <p className="text-[#33252c]">We clean everything – from suits to carpets.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
