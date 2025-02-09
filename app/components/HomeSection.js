import React from "react";
import Image from "next/image";

const HomeSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section - Text with Custom Background Color */}
      <div className="md:w-1/2 w-full flex flex-col justify-center px-10" style={{ backgroundColor: "#996558", color: "white" }}>
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

export default HomeSection;
