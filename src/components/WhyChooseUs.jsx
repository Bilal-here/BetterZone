import React from "react";
import { motion } from "framer-motion";

function WhyChooseUs() {
  return (
    <div className="py-20 px-6 md:px-14 border-x-[14px] border-b-[14px] border-zinc-900">
      {/* Title */}
      <h2 className="text-4xl md:text-4xl font-semibold text-center text-gold">
        Why Choose <span className="text-gold">Better Zone?</span>
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
          <div>
            <h3 className="text-2xl font-bold">Experienced Professionals</h3>
            <p className="opacity-80 mt-2">
              Our expert team ensures you get the best deals.
            </p>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="p-6 bg-zinc-900 border border-yellow-500 rounded-lg shadow-lg text-center cursor-pointer transition-transform duration-300 hover:scale-105"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-2xl font-bold">Customer-First Approach</h3>
            <p className="opacity-80 mt-2">
              We prioritize client needs with transparency and trust.
            </p>
          </div>
        </motion.div>

        {/* Card 3 - New Addition */}
        <motion.div
          className="p-6 bg-zinc-900 border border-yellow-500 rounded-lg shadow-lg text-center cursor-pointer transition-transform duration-300 hover:scale-105"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-2xl font-bold">Seamless Property Transactions</h3>
            <p className="opacity-80 mt-2">
              Enjoy a smooth, hassle-free property buying experience.
            </p>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}

export default WhyChooseUs;
