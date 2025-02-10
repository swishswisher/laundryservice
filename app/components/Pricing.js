"use client";

import React, { useState, useEffect } from "react";

const Pricing = () => {
  const [userName, setUserName] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [services, setServices] = useState([
    { name: "Suit", price: 250, quantity: 0, selected: false, label: "Number of Pieces" },
    { name: "Duvet", price: 300, quantity: 0, selected: false, label: "Number of Pieces" },
    { name: "Clothes per kilo", price: 200, quantity: 0, selected: false, label: "Weight in Kilograms" },
  ]);

  // Load stored values from localStorage on component mount
  useEffect(() => {
    setUserName(localStorage.getItem("userName") || "");
    setWhatsappNumber(localStorage.getItem("whatsappNumber") || "");
    setPickupLocation(localStorage.getItem("pickupLocation") || "");
    const storedServices = localStorage.getItem("selectedServices");
    if (storedServices) {
      setServices(JSON.parse(storedServices));
    }
  }, []);

  // Save inputs to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("userName", userName);
    localStorage.setItem("whatsappNumber", whatsappNumber);
    localStorage.setItem("pickupLocation", pickupLocation);
    localStorage.setItem("selectedServices", JSON.stringify(services));
  }, [userName, whatsappNumber, pickupLocation, services]);

  // Calculate total price dynamically
  const totalAmount = services.reduce(
    (acc, service) => acc + (service.selected ? service.price * service.quantity : 0),
    0
  );

  // Handle input change
  const handleQuantityChange = (index, value) => {
    const updatedServices = [...services];
    updatedServices[index].quantity = value;
    updatedServices[index].selected = value > 0;
    setServices(updatedServices);
  };

  // Clear selected service
  const handleClear = (index) => {
    const updatedServices = [...services];
    updatedServices[index].quantity = 0;
    updatedServices[index].selected = false;
    setServices(updatedServices);
  };

  // Handle Checkout - Send data via WhatsApp and trigger M-Pesa payment
  const handleCheckout = () => {
    if (!whatsappNumber || !userName || !pickupLocation) {
      alert("Please fill out all required fields before proceeding.");
      return;
    }

    // Prepare order summary
    const selectedServices = services
      .filter((service) => service.selected)
      .map((service) => `${service.name}: ${service.quantity} ${service.label} - Ksh. ${service.price * service.quantity}`)
      .join("\n");

    const orderDetails = `🧺 *Laundry Order Summary* 🧺\n\n👤 Name: ${userName}\n📍 Pickup Location: ${pickupLocation}\n📱 WhatsApp: ${whatsappNumber}\n\n🛒 Selected Services:\n${selectedServices}\n\n💰 *Total: Ksh. ${totalAmount}*\n\n✅ Proceeding to M-Pesa Checkout...`;

    // Open WhatsApp with pre-filled message to automatically send
    const recipient = "254705864283"; // The business WhatsApp number
    const whatsappURL = `https://api.whatsapp.com/send?phone=${recipient}&text=${encodeURIComponent(orderDetails)}`;
    
    window.location.href = whatsappURL; // Redirect to WhatsApp to send the message

    // Clear localStorage after checkout
    localStorage.clear();
  };

  return (
    <section className="p-10 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-[#33252c]">Pricing</h2>

      {/* User Input Fields */}
      <div className="max-w-4xl mx-auto mt-6">
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Enter Your Name"
          className="border p-2 rounded-md w-full mb-4"
        />
        <input
          type="text"
          value={whatsappNumber}
          onChange={(e) => setWhatsappNumber(e.target.value)}
          placeholder="Enter WhatsApp Number"
          className="border p-2 rounded-md w-full mb-4"
        />
        <input
          type="text"
          value={pickupLocation}
          onChange={(e) => setPickupLocation(e.target.value)}
          placeholder="Enter Laundry Pick-up Location"
          className="border p-2 rounded-md w-full mb-6"
        />
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">{service.name}</h3>
            <p className="text-gray-500">Ksh. {service.price}</p>
            <label className="block mt-2">{service.label}</label>
            <input
              type="number"
              min="0"
              value={service.quantity}
              onChange={(e) => handleQuantityChange(index, Number(e.target.value))}
              className="border p-2 w-full rounded-md"
            />
            <button
              onClick={() => handleClear(index)}
              className="mt-2 bg-red-500 text-white px-4 py-2 rounded-md"
            >
              Clear
            </button>
          </div>
        ))}
      </div>

      {/* Total & Checkout */}
      <h3 className="text-xl font-bold text-[#33252c] mt-6">Total: Ksh. {totalAmount}</h3>
      <button
        onClick={handleCheckout}
        className="mt-4 bg-[#3ea3a8] text-white px-6 py-2 rounded-lg hover:bg-[#2c7d7e] transition"
      >
        Continue to Checkout
      </button>
    </section>
  );
};

export default Pricing;
