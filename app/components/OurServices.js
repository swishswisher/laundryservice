import React from "react";
import Image from "next/image";

const services = [
  {
    id: "01",
    title: "Dry Cleaning",
    image: "/dryCleaning.jpg",
    description: "Professional dry cleaning services to remove tough stains while preserving fabric quality.",
  },
  {
    id: "02",
    title: "Wash and Fold",
    image: "/folding.jpg",
    description: "We wash, dry, and fold your clothes with care so they are fresh and ready to wear.",
  },
  {
    id: "03",
    title: "Ironing and Pressing",
    image: "/ironing.jpg",
    description: "Expert ironing and pressing services for crisp, wrinkle-free clothing.",
  },
  {
    id: "04",
    title: "Pickup and Delivery",
    image: "/laundryDelivery.jpg",
    description: "Convenient pickup and delivery service to save you time and effort.",
  },
];

const OurServices = () => {
  return (
    <section className="p-14 text-center bg-white" id="services">
      <h2 className="text-4xl font-bold text-[#33252c]">Our Services</h2>
      <p className="mt-4 text-lg text-gray-600">We provide top-quality laundry services designed to make your life easier.</p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 max-w-7xl mx-auto">
        {services.map((service) => (
          <div key={service.id} className="p-6 bg-gray-100 shadow-lg rounded-lg text-center">
            <div className="relative w-full h-48">
              <Image
                src={service.image}
                alt={service.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold mt-4">{service.id}. {service.title}</h3>
            <p className="text-gray-500 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
