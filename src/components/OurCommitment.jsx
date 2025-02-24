import React from "react";
import { motion } from "framer-motion";

function OurCommitment() {
  return (
    <div className="py-20 px-6 md:px-14 border-x-[14px] border-b-[14px] border-zinc-900">
      {/* Title */}
      <h2 className="text-4xl md:text-4xl font-semibold text-center text-gold">
        Our <span className="text-gold">Commitment</span> to You
      </h2>

      {/* Content Grid */}
      <motion.div 
        className="grid md:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Card 1 */}
        <motion.div
          className="p-6 bg-zinc-900 border border-gold rounded-lg shadow-lg text-center cursor-pointer transition-transform duration-300 hover:scale-105"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold">Trust & Transparency</h3>
          <p className="opacity-80 mt-2">
            We believe in complete honesty in every deal we make.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="p-6 bg-zinc-900 border border-yellow-500 rounded-lg shadow-lg text-center cursor-pointer transition-transform duration-300 hover:scale-105"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold">Quality Assurance</h3>
          <p className="opacity-80 mt-2">
            We ensure high-quality properties that meet all expectations.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="p-6 bg-zinc-900 border border-yellow-500 rounded-lg shadow-lg text-center cursor-pointer transition-transform duration-300 hover:scale-105"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold">Hassle-Free Process</h3>
          <p className="opacity-80 mt-2">
            From paperwork to possession, we make it easy for you.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default OurCommitment;
