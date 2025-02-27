import React, { useEffect } from "react";
import { motion } from "framer-motion";
import CEO from "../assets/CEO.jpg";
import SM from "../assets/SalesManager.jpg";
import SO from "../assets/salesOfficer.jpg";

const teamMembers = [
  {
    name: "Mohammed Imran",
    role: "Sales Manager",
    contact: "+971 55 991 5671",
    email: "imran@betterzonerealestate.com",
    responsibilities: "Manages sales operations while building strong client relationships for sustained success.",
    image: SM,
  },
  {
    name: "Irfan Alam Siddiqui",
    role: "Sales Officer",
    contact: "+971 52 340 0118",
    email: "irfan@betterzonerealestate.com",
    responsibilities: "Handles client queries and supports sales activities.",
    image: SO,
  },
];


function AboutUS() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  

  return (
    <div className="py-20 min-h-full px-6 md:px-14 border-[14px] border-zinc-900">
      
      {/* About CEO Section */}
      <motion.h2
        className="text-4xl md:text-4xl font-semibold text-center text-gold mt-5"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Meet Our <span className="text-gold">Founder & CEO</span>
      </motion.h2>

      <motion.div
        className="flex flex-col md:flex-row items-center justify-center gap-10 mt-6 max-w-6xl mx-auto"
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
          <h3 className="text-3xl font-bold text-gold">Shabbir Ahmed Siddiqui</h3>
          <h4 className="text-lg font-medium mt-2"><span className="text-gold">Phone:</span>+971 55 7150 722</h4>
          <h4 className="text-lg font-medium"><span className="text-gold">Email:</span>shabbir@betterzonerealestate.com</h4>
          <p className="text-lg opacity-80 mt-2">
            With over 20 years of expertise in Dubai's real estate market, 
            Shabbir Ahmed Siddique is the driving force behind Better Zone. 
            His deep market knowledge and commitment to excellence make him a 
            trusted name in the industry.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-64 h-auto md:w-80 md:h-auto bg-zinc-900 rounded-full overflow-hidden border-4 border-gold shadow-lg"
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
          className="p-6 bg-zinc-900 border border-gold rounded-lg shadow-lg text-center cursor-pointer transition-transform hover:scale-105 hover:shadow-xl hover:shadow-gold"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold">20+ Years Experience</h3>
          <p className="opacity-80 mt-2">A deep understanding of Dubai’s evolving real estate market.</p>
        </motion.div>

        {/* Experience Box 2 */}
        <motion.div
          className="p-6 bg-zinc-900 border border-gold rounded-lg shadow-lg text-center cursor-pointer transition-transform hover:scale-105 hover:shadow-xl hover:shadow-gold"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold">3000+ Properties Sold</h3>
          <p className="opacity-80 mt-2">Successfully handled premium real estate transactions.</p>
        </motion.div>

        {/* Experience Box 3 */}
        <motion.div
          className="p-6 bg-zinc-900 border border-gold rounded-lg shadow-lg text-center cursor-pointer transition-transform hover:scale-105 hover:shadow-xl hover:shadow-gold"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold">Trusted by Clients</h3>
          <p className="opacity-80 mt-2">A reputation built on transparency, trust, and customer satisfaction.</p>
        </motion.div>
      </motion.div> 



      {/* Meet Our Team Section */}
      <motion.h2
        className="text-4xl font-semibold text-center text-gold mt-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Meet Our <span className="text-gold">Sales Team</span>
      </motion.h2>

      <motion.div
        className="grid md:grid-cols-2 gap-6 mt-10 max-w-3xl mx-auto"
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.3 }}
        viewport={{ once: true }}
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="p-6 bg-zinc-900 border border-gold rounded-lg shadow-lg text-center transition-transform hover:scale-105 hover:shadow-xl hover:shadow-gold"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8 }}
          >
            {/* Image Section */}
            <div className="w-44 h-52  md:min-h-44 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gold shadow-md">
              <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
            </div>

            {/* Text Details */}
            <h3 className="text-2xl font-bold text-gold">{member.name}</h3>
            <p className="text-lg opacity-90">{member.role}</p>
            <p className="text-sm mt-2 opacity-90"><span className="text-gold font-semibold">Phone:</span> {member.contact}</p>
            <p className="text-sm mt-2 opacity-90"><span className="text-gold font-semibold">Email:</span>{member.email}</p>
            <p className="text-sm mt-4 opacity-100">{member.responsibilities}</p>
          </motion.div>
        ))}
      </motion.div>

    </div>  
  );
}

export default AboutUS;
