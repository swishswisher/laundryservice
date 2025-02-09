import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="p-10 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-purple-700">Why Choose Us?</h2>
      <p className="mt-4 text-lg text-gray-600">We provide the best quality laundry services with convenient pickup and delivery.</p>
      <div className="flex flex-wrap justify-center mt-6 gap-6">
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-semibold">Affordable Prices</h3>
          <p className="text-gray-500">Competitive rates for top-notch service.</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-semibold">Fast Service</h3>
          <p className="text-gray-500">Quick turnaround time for your laundry.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
