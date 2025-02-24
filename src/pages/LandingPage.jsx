import React, { useState } from "react";
import { motion } from "framer-motion";
import Bg from "../assets/bg.jpg";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import OurCommitment from "../components/OurCommitment";

export default function HomePage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    // <div className="bg-black text-white text-center">
    //   {/* 🔥 Hero Section */}
    //   <div
    //     id="home"
    //     className="relative h-screen flex flex-col items-center justify-center px-6 bg-cover bg-center"
    //     style={{ backgroundImage: `url(${Bg})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 1 }}
    //   >
    //     <motion.div
    //       className="relative z-10 backdrop-blur-lg p-6 rounded-lg"
    //       initial={{ opacity: 0, y: -50 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 0.8 }}
    //     >
    //       <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-600">
    //         Welcome to Better Zone
    //       </h1>
    //       <p className="text-lg opacity-80 mt-4 max-w-2xl mx-auto">
    //         Your trusted partner in real estate. Excellence, trust, and innovation in every deal.
    //       </p>
    //       <button className="mt-6 px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-700 text-black font-bold rounded-lg hover:from-yellow-600 hover:to-yellow-800 transition-all duration-300">
    //         Learn More
    //       </button>
    //     </motion.div>
    //   </div>

    //   {/* 🔥 About Us */}
    //   <motion.div
    //     id="about"
    //     className="max-w-6xl mx-auto py-20 px-6 backdrop-blur-lg p-6 rounded-lg"
    //     initial={{ opacity: 0, y: 50 }}
    //     whileInView={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 0.8 }}
    //     viewport={{ once: true }}
    //   >
    //     <h2 className="text-4xl font-bold text-yellow-400">Who We Are</h2>
    //     <p className="text-lg opacity-80 mt-4 max-w-3xl mx-auto">
    //       Better Zone is more than a real estate company. We create opportunities, connect people with their dream spaces, and build trust through transparency and excellence.
    //     </p>
    //   </motion.div>

    //   {/* 🔥 Why Choose Us? */}
    //   <motion.div
    //     className="max-w-6xl mx-auto py-20 px-6"
    //     initial={{ opacity: 0 }}
    //     whileInView={{ opacity: 1 }}
    //     transition={{ duration: 0.8 }}
    //     viewport={{ once: true }}
    //   >
    //     <h2 className="text-4xl font-bold text-center text-yellow-400">Why Choose Better Zone?</h2>
    //     <div className="grid md:grid-cols-2 gap-6 mt-10">
    //       <motion.div
    //         className="p-6 bg-black border border-yellow-500 rounded-lg shadow-lg text-center"
    //         initial={{ opacity: 0, y: 50 }}
    //         whileInView={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.8 }}
    //         viewport={{ once: true }}
    //       >
    //         <h3 className="text-2xl font-bold">Experienced Professionals</h3>
    //         <p className="opacity-80 mt-2">Our expert team ensures you get the best deals.</p>
    //       </motion.div>
    //       <motion.div
    //         className="p-6 bg-black border border-yellow-500 rounded-lg shadow-lg text-center"
    //         initial={{ opacity: 0, y: 50 }}
    //         whileInView={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.8, delay: 0.2 }}
    //         viewport={{ once: true }}
    //       >
    //         <h3 className="text-2xl font-bold">Customer-First Approach</h3>
    //         <p className="opacity-80 mt-2">We prioritize client needs with transparency and trust.</p>
    //       </motion.div>
    //     </div>
    //   </motion.div>

    //   {/* 🔥 Contact Form */}
    //   <motion.div
    //     id="contact"
    //     className="max-w-4xl mx-auto py-20 px-6 backdrop-blur-lg p-6 rounded-lg"
    //     initial={{ opacity: 0, y: 50 }}
    //     whileInView={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 0.8 }}
    //     viewport={{ once: true }}
    //   >
    //     <h2 className="text-4xl font-bold text-yellow-400">Get in Touch</h2>
    //     <p className="text-lg opacity-80 mt-4 max-w-3xl mx-auto">Have any questions? Contact us now!</p>
    //     <form onSubmit={handleSubmit} className="mt-6 space-y-4 max-w-2xl mx-auto">
    //       <input
    //         type="text"
    //         name="name"
    //         placeholder="Your Name"
    //         value={formData.name}
    //         onChange={handleChange}
    //         className="w-full p-3 border border-yellow-500 bg-black text-white rounded-lg"
    //         required
    //       />
    //       <input
    //         type="email"
    //         name="email"
    //         placeholder="Your Email"
    //         value={formData.email}
    //         onChange={handleChange}
    //         className="w-full p-3 border border-yellow-500 bg-black text-white rounded-lg"
    //         required
    //       />
    //       <textarea
    //         name="message"
    //         placeholder="Your Message"
    //         value={formData.message}
    //         onChange={handleChange}
    //         className="w-full p-3 border border-yellow-500 bg-black text-white rounded-lg"
    //         rows="4"
    //         required
    //       ></textarea>
    //       <button type="submit" className="px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600 transition-all duration-300">
    //         Send Message
    //       </button>
    //     </form>
    //   </motion.div>
      
    // </div>
    <div className="pt-20">
        <Hero/>
        <WhyChooseUs/>
        <OurCommitment/>
        </div>
     
  );


}
