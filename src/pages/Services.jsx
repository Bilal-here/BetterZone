import React from "react";
import { motion } from "framer-motion";

const services = [
  { title: "Property Maintenance", description: "We take care of your property with top-notch maintenance services." },
  { title: "Property Selling", description: "Sell your property hassle-free with our expert assistance." },
  { title: "Property Investments", description: "Invest wisely in real estate with our trusted guidance." },
  { title: "Golden Visa with Investments", description: "Secure a golden visa through real estate investments." },
  { title: "Property Renting", description: "Find the best rental properties tailored to your needs." },
];

function Services() {
  return (
    <div className="py-20 min-h-full px-6 md:px-14 border-[14px] border-zinc-900">
      <h2 className="text-4xl font-semibold text-center mb-8">
        Our <span className="text-gold">Services</span>
      </h2>

      {/* Services Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-zinc-800 p-6 rounded-xl shadow-lg cursor-pointer transition-transform hover:scale-105 hover:shadow-xl hover:shadow-gold"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-300">{service.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Closing Statement */}
      <div className="text-center mt-16 px-4 md:px-20">
        <h3 className="text-3xl font-semibold">
          Your Dream Property, <span className="text-gold">Our Expertise!</span>
        </h3>
        <p className="text-gray-300 mt-4 text-lg">
          At <span className="text-gold">Better Zone</span>, we don’t just deal in properties – we build trust. Whether you're buying, selling, or investing, we make the process smooth and stress-free. Let's turn your real estate dreams into reality.
        </p>
      </div>
    </div>
  );
}

export default Services;
