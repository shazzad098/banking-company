import React from 'react';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Button from './Button';

const Footer = () => {
  return (
    <footer className="pt-10 pb-6 px-4 md:px-8 max-w-7xl mx-auto">
      
      {/* CTA Banner */}
      <div className="bg-darkLight/30 border border-white/5 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8 mb-20 relative overflow-hidden">
        <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-2">
                Start your financial journey with <span className="text-primary">YourBank today!</span>
            </h2>
            <p className="text-grey">
                Ready to take control of your finances? Join YourBank now.
            </p>
        </div>
        <div className="relative z-10">
            <Button variant="primary">Open Account</Button>
        </div>
        
        {/* Decorative Grid Pattern Background */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#CAFF33 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      </div>

      {/* Main Footer Content */}
      <div className="text-center mb-8">
        <div className="flex justify-center items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
             <span className="text-dark font-bold">Y</span>
          </div>
          <span className="text-xl font-bold">YourBank</span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm mb-8 border-b border-darkLight pb-8">
            <a href="#" className="hover:text-primary transition">Home</a>
            <a href="#" className="hover:text-primary transition">Careers</a>
            <a href="#" className="hover:text-primary transition">About</a>
            <a href="#" className="hover:text-primary transition">Security</a>
        </div>

        {/* Contact Info & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-grey">
            <div className="flex gap-4">
                <span className="flex items-center gap-1"><Mail size={16} className="text-primary"/> hello@yourbank.com</span>
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
            &copy; 2024 YourBank. All rights reserved. Privacy Policy | Terms of Service
        </div>
      </div>
    </footer>
  );
};

export default Footer;