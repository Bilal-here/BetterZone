import React from "react";
import { motion } from "framer-motion";
import CEO from "../assets/CEO.jpg";

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
      {/* Services Section */}
      <h2 className="text-4xl font-semibold text-center mb-8">
        Our <span className="text-gold">Services</span>
      </h2>

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

      {/* About CEO Section */}
      <motion.h2
        className="text-4xl md:text-4xl font-semibold text-center text-gold mt-20"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Meet Our <span className="text-gold">Founder & CEO</span>
      </motion.h2>

      <motion.div
        className="flex flex-col md:flex-row items-center justify-center gap-10 mt-12 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Text Section */}
        <motion.div
          className="max-w-lg text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gold">Shabbir Ahmed Siddique</h3>
          <p className="text-lg opacity-80 mt-4">
            With over 20 years of expertise in Dubai's real estate market, 
            Shabbir Ahmed Siddique is the driving force behind Better Zone. 
            His deep market knowledge and commitment to excellence make him a 
            trusted name in the industry.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-64 h-64 md:w-80 md:h-80 bg-zinc-900 rounded-full overflow-hidden border-4 border-gold shadow-lg"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img src={CEO} alt="Founder & CEO" className="w-full h-full object-cover" />
        </motion.div>
      </motion.div>

      {/* Experience Highlights */}
      <motion.div
        className="grid md:grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.3 }}
        viewport={{ once: true }}
      >
        {/* Experience Box 1 */}
        <motion.div
          className="p-6 bg-zinc-900 border border-gold rounded-lg shadow-lg text-center"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold">20+ Years Experience</h3>
          <p className="opacity-80 mt-2">A deep understanding of Dubai’s evolving real estate market.</p>
        </motion.div>

        {/* Experience Box 2 */}
        <motion.div
          className="p-6 bg-zinc-900 border border-gold rounded-lg shadow-lg text-center"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold">1000+ Properties Sold</h3>
          <p className="opacity-80 mt-2">Successfully handled premium real estate transactions.</p>
        </motion.div>

        {/* Experience Box 3 */}
        <motion.div
          className="p-6 bg-zinc-900 border border-gold rounded-lg shadow-lg text-center"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold">Trusted by Clients</h3>
          <p className="opacity-80 mt-2">A reputation built on transparency, trust, and customer satisfaction.</p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Services;
