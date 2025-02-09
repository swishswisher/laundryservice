"use client"

import React, { useState } from "react";

const Pricing = () => {
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [services, setServices] = useState([
    { name: "Suit", price: 250, quantity: 0, selected: false },
    { name: "Duvet", price: 300, quantity: 0, selected: false },
    { name: "Clothes per kilo", price: 200, quantity: 0, selected: false },
  ]);

  const totalAmount = services.reduce(
    (acc, service) => acc + (service.selected ? service.price * service.quantity : 0),
    0
  );

  return (
    <section className="p-10 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-purple-700">Pricing</h2>
      <input
        type="text"
        placeholder="Enter WhatsApp Number"
        value={whatsappNumber}
        onChange={(e) => setWhatsappNumber(e.target.value)}
        className="border p-2 mt-4 rounded-md"
      />
      <div className="flex flex-wrap justify-center mt-6 gap-6">
        {services.map((service, index) => (
          <div key={index} className="p-6 bg-white shadow-lg rounded-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold">{service.name}</h3>
            <p className="text-gray-500">Ksh. {service.price}</p>
          </div>
        ))}
      </div>
      <h3 className="text-xl font-bold text-purple-700 mt-4">Total: Ksh. {totalAmount}</h3>
    </section>
  );
};

export default Pricing;
