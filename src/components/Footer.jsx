import React from 'react';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Button from './Button';
import { Link } from 'react-router-dom'; // Footer এ লোগোতে লিংক দেওয়ার জন্য
import logo from '../assets/abcd-bank-logo.png'; // আপনার লোগোর ফাইল পাথ অনুযায়ী এটি যোগ করুন

const Footer = () => {
  return (
    <footer className="pt-10 pb-6 px-4 md:px-8 max-w-7xl mx-auto">
      
      {/* CTA Banner */}
      <div className="bg-darkLight/30 border border-white/5 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8 mb-20 relative overflow-hidden">
        <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-2">
                Start your financial journey with <span className="text-primary">ABCD Bank today!</span>
            </h2>
            <p className="text-grey">
                Ready to take control of your finances? Join ABCD Bank now.
            </p>
        </div>
        <div className="relative z-10">
            <Link to="/signup"> {/* CTA Button */}
                <Button variant="primary">Open Account</Button>
            </Link>
        </div>
        
        {/* Decorative Grid Pattern Background */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#CAFF33 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      </div>

      {/* Main Footer Content */}
      <div className="text-center mb-8">
        <Link to="/" className="flex justify-center items-center gap-2 mb-8"> {/* লোগোতে ক্লিক করলে হোম পেজে যাবে */}
          <img src={logo} alt="ABCD Bank Logo" className="h-10 w-auto" /> {/* লোগো ইমেজ */}
        </Link>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm mb-8 border-b border-darkLight pb-8">
            <Link to="/" className="hover:text-primary transition">Home</Link>
            <Link to="/careers" className="hover:text-primary transition">Careers</Link>
            <Link to="/about" className="hover:text-primary transition">About</Link>
            <Link to="/security" className="hover:text-primary transition">Security</Link>
        </div>

        {/* Contact Info & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-grey">
            <div className="flex gap-4">
                <span className="flex items-center gap-1"><Mail size={16} className="text-primary"/> hello@abcdbank.com</span> {/* ইমেইল আপডেট করা হয়েছে */}
                <span className="flex items-center gap-1"><Phone size={16} className="text-primary"/> +91 91813 23 2309</span>
                <span className="flex items-center gap-1"><MapPin size={16} className="text-primary"/> Somewhere, World</span>
            </div>
            
            <div className="flex gap-4">
                <div className="p-2 bg-darkLight rounded-full hover:bg-primary hover:text-dark transition cursor-pointer"><Facebook size={18}/></div>
                <div className="p-2 bg-darkLight rounded-full hover:bg-primary hover:text-dark transition cursor-pointer"><Twitter size={18}/></div>
                <div className="p-2 bg-darkLight rounded-full hover:bg-primary hover:text-dark transition cursor-pointer"><Linkedin size={18}/></div>
            </div>
        </div>
        
        <div className="mt-8 text-xs text-grey/50">
            &copy; 2024 ABCD Bank. All rights reserved. Privacy Policy | Terms of Service {/* কপিরাইট আপডেট করা হয়েছে */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;