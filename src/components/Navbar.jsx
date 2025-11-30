import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import logo from '../assets/abcd-bank-logo.png'; // ⚠️ ধাপ ১: লোগো ইমেজ ইমপোর্ট করুন (আপনার ফাইল পাথ ঠিক রাখুন)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path
      ? "text-primary font-medium"
      : "hover:text-primary transition";
  };

  return (
    <nav className="fixed w-full z-50 bg-[#191919]/90 backdrop-blur-md border-b border-darkLight px-4 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo (পরিবর্তন করা হয়েছে) */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => setIsOpen(false)}
        >
          {/* <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-dark font-bold">Y</span>
          </div>
          <span className="text-xl font-bold text-white">YourBank</span> */}
          
          <img src={logo} alt="ABCD Bank Logo" className="h-10 w-auto" /> {/* ইমেজ লোগো বসানো হয়েছে */}
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm text-grey">
          <Link to="/" className={isActive("/")}>
            Home
          </Link>
          <Link to="/careers" className={isActive("/careers")}>
            Careers
          </Link>
          <Link to="/about" className={isActive("/about")}>
            About
          </Link>
          <Link to="/security" className={isActive("/security")}>
            Security
          </Link>
        </div>
        
        {/* Auth Buttons */}
        <div className="hidden md:flex gap-4 items-center">
          {/* Sign Up Button Wrap with Link */}
          <Link to="/signup">
            <button className="text-white hover:text-primary transition">
              Sign Up
            </button>
          </Link>

          <Link to="/login">
            <Button variant="primary" className="px-5 py-2 text-sm">
              Login
            </Button>
          </Link>
        </div>
        
        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-primary transition"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-[73px] left-0 w-full bg-[#191919] p-6 flex flex-col gap-6 border-b border-darkLight shadow-2xl h-screen z-40">
          {/* Mobile Links */}
          <div className="flex flex-col gap-4 text-center text-lg">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={isActive("/")}
            >
              Home
            </Link>
            <Link
              to="/careers"
              onClick={() => setIsOpen(false)}
              className={isActive("/careers")}
            >
              Careers
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className={isActive("/about")}
            >
              About
            </Link>
            <Link
              to="/security"
              onClick={() => setIsOpen(false)}
              className={isActive("/security")}
            >
              Security
            </Link>
          </div>
          
          {/* Mobile Auth Buttons */}
          <div className="flex flex-col gap-4 mt-4 border-t border-white/10 pt-6">
            {/* Mobile Sign Up Button Wrap with Link */}
            <Link to="/signup" onClick={() => setIsOpen(false)}>
              <button className="text-white hover:text-primary py-2 transition w-full">
                Sign Up
              </button>
            </Link>

            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="w-full"
            >
              <Button variant="primary" className="w-full justify-center py-3">
                Login
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;