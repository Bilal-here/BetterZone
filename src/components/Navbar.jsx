import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import bg from "../assets/BetteZone.png";

function Navbar() {
  const [activeTab, setActiveTab] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const phoneNumber = "+971557150722"; // Your contact number

  return (
    <div className="w-full h-20 bg-zinc-900 px-4 py-2 sticky top-0 left-0 z-50">
      <nav className="flex justify-between items-center max-w-[1200px] mx-auto">
        {/* Logo */}
        <Link to="/" onClick={() => setActiveTab("home")}>
          <img src={bg} className="h-16 w-auto" alt="Better Zone Logo" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6">
          {["home", "about", "services"].map((tab) => (
            <Link
              key={tab}
              to={`/${tab}`}
              className={`cursor-pointer px-4 py-2 transition-all duration-300 ${
                activeTab === tab ? "text-gold bg-black rounded-md" : "text-white"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Link>
          ))}
        </div>

        {/* Call Us (Clickable) */}
        <a href={`tel:${phoneNumber}`} className="hidden md:block text-white hover:text-gold transition">
          Call Us: {phoneNumber}
        </a>

        {/* Mobile Menu Icon */}
        <div className="md:hidden cursor-pointer text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-zinc-900 flex flex-col items-center py-4">
          {["home", "about", "services"].map((tab) => (
            <Link
              key={tab}
              to={`/${tab}`}
              className={`cursor-pointer px-4 py-2 my-2 transition-all duration-300 ${
                activeTab === tab ? "text-white bg-black rounded-md" : "text-white"
              }`}
              onClick={() => {
                setActiveTab(tab);
                setMenuOpen(false);
              }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Link>
          ))}
          
          {/* Mobile Call Us Button */}
          <a href={`tel:${phoneNumber}`} className="text-white mt-4 hover:text-gold transition">
            Call Us: {phoneNumber}
          </a>
        </div>
      )}
    </div>
  );
}

export default Navbar;
