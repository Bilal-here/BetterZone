import React from "react";
import { motion } from "framer-motion";
import HI from "../assets/Hero.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="h-screen flex flex-col md:flex-row border-b-[14px] border-zinc-900">
      {/* Left Section */}
    
      <motion.div
        className="w-full md:w-1/2 flex flex-col justify-center p-6 md:p-14"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.p
          className="text-4xl md:text-5xl font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Discover Your Dream Property with{" "}
          <span className="text-gold">Better Zone.</span>
        </motion.p>
        <motion.p
          className="text-gray-300 py-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Your journey to find perfect properties begins here. Explore our listings to find the home that matches your dreams.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-lg mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <Link to='/services' className="px-6 py-2 border-gray-700 border-2 rounded-xl hover:border-gold hover:text-gold">
            Learn more
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
        className="flex flex-wrap gap-6 mt-10 justify-center md:justify-start"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
        }}
           >
        {[
          { num: "500+", text: "Happy Customers." },
          { num: "3000+", text: "Properties Sold." },
          { num: "1000+", text: "Properties Rented." }
        ].map((stat, index) => (
          <motion.div
            key={index}
            className="bg-zinc-900 p-4 md:p-6 rounded-lg text-center w-full sm:w-[48%] lg:w-auto flex-1"
            variants={{ hidden: { scale: 0.8, opacity: 0 }, visible: { scale: 1, opacity: 1 } }}
          >
            <strong className="text-xl">{stat.num}</strong>
            <p className="text-gray-300">{stat.text}</p>
          </motion.div>
        ))}
      </motion.div>



      </motion.div>

      {/* Right Section */}
      <motion.div
        className="w-full md:w-1/2 bg-zinc-900 border-r-8 border-b-2  border-solid border-zinc-900"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <img src={HI} className="w-full h-full object-cover bg-transparent" alt="Hero Image" />
      </motion.div>
    </div>
  );
}

export default Hero;
