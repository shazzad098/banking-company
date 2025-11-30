import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import logo from '../assets/abcd-bank-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path
      ? "text-primary font-medium"
      : "hover:text-primary transition";
  };

  return (
    <nav className="fixed w-full z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto bg-[#1a1a1a]/70 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 shadow-lg">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => setIsOpen(false)}
          >
            <img src={logo} alt="ABCD Bank Logo" className="h-8 w-auto" />
          </Link>
          
          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex gap-8 text-sm text-grey absolute left-1/2 transform -translate-x-1/2">
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
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 mx-4 bg-[#1a1a1a]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">
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
          <div className="flex flex-col gap-4 mt-6 pt-6 border-t border-white/10">
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