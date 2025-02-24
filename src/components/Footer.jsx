import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="p-6 bg-zinc-900 text-center text-white text-sm">
      <div className="text-lg mb-4 space-y-2">
        <p className="flex items-center justify-center gap-2">
          <FaPhone className="text-yellow-500" /> +971-55-715-0722
        </p>
        <p className="flex items-center justify-center gap-2">
          <FaEnvelope className="text-yellow-500" /> shabbir@betterzonerealestate.com
        </p>
        <p className="flex items-center justify-center gap-2">
          <FaMapMarkerAlt className="text-yellow-500" /> Invox Buisness Center, West Burry Tower(3rd floor), Buisness Bay (Down-Town) , Dubai-UAE

        </p>
      </div>
      <p>&copy; {new Date().getFullYear()} Better Zone. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
