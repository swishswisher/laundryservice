import React from "react";

const OurServices = () => {
  return (
    <section className="p-10 text-center">
      <h2 className="text-3xl font-bold text-purple-700">Our Services</h2>
      <div className="flex flex-wrap justify-center mt-6 gap-6">
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold">Dry Cleaning</h3>
          <p className="text-gray-500">We use advanced cleaning techniques.</p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold">Laundry</h3>
          <p className="text-gray-500">Professional washing, drying, and folding.</p>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
