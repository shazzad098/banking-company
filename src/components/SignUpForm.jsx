import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { FaGoogle, FaFacebookF, FaApple } from 'react-icons/fa';
import Button from './Button';
import { Link } from 'react-router-dom';

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  // ইনপুট ফিল্ডের সাধারণ স্টাইল (লগইন ফর্মের মতোই)
  const inputStyles = "w-full bg-[#191919] border border-white/10 rounded-full px-5 py-3 text-white placeholder:text-grey focus:outline-none focus:border-primary/50 transition-all";

  return (
    <section className="py-28 px-4">
      {/* কার্ডের প্রস্থ লগইনের চেয়ে একটু বেশি রাখা হলো (max-w-2xl) যাতে ডেস্কটপে নামগুলো পাশাপাশি ধরে */}
      <div className="max-w-2xl mx-auto relative">
        
        {/* Sign Up Card */}
        <div className="bg-darkLight/30 p-8 md:p-12 rounded-3xl border border-white/5 relative overflow-hidden z-10 backdrop-blur-sm">
           
           {/* Background Pattern decoration */}
           <div className="absolute inset-0 opacity-10 pointer-events-none" 
                style={{backgroundImage: 'radial-gradient(circle at center, #CAFF33 0.5px, transparent 0.5px)', backgroundSize: '16px 16px'}}>
           </div>
           <div className="absolute top-[-50%] left-[-50%] w-full h-full bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>


          {/* Header */}
          <div className="text-center mb-10 relative z-10">
            <h1 className="text-3xl font-bold mb-2">
              <span className="text-primary">Sign Up</span>
            </h1>
            <p className="text-grey text-sm">
              Join our community today! Create an account to unlock exclusive features.
            </p>
          </div>

          {/* Form Fields */}
          <form className="space-y-6 relative z-10">
            
            {/* First Name & Last Name (Grid Layout for Desktop) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Enter First Name" 
                    className={inputStyles}
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="Enter Last Name" 
                    className={inputStyles}
                  />
                </div>
            </div>

            {/* Email Input */}
            <div>
              <input 
                type="email" 
                placeholder="Enter your Email" 
                className={inputStyles}
              />
            </div>

            {/* Password Input with Toggle */}
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Enter your Password" 
                className={`${inputStyles} pr-12`}
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-grey hover:text-primary transition"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Buttons */}
            <div className="space-y-4 pt-4">
                <Button variant="primary" className="w-full justify-center py-3 text-base">
                    Sign Up
                </Button>
                
                {/* Link back to Login Page */}
                <Link to="/login" className="block w-full">
                    <button type="button" className="w-full py-3 rounded-full border border-white/10 bg-[#191919] text-white hover:bg-darkLight transition font-medium">
                        Login
                    </button>
                </Link>
            </div>
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center gap-4 relative z-10">
            <div className="h-px bg-white/10 flex-1"></div>
            <span className="text-sm text-grey">Or Continue with</span>
            <div className="h-px bg-white/10 flex-1"></div>
          </div>

          {/* Social Login Buttons */}
          <div className="flex justify-center gap-4 relative z-10">
            <button className="p-3 bg-[#191919] rounded-full border border-white/10 hover:border-primary/50 hover:text-primary transition">
                <FaGoogle size={20} />
            </button>
            <button className="p-3 bg-[#191919] rounded-full border border-white/10 hover:border-primary/50 hover:text-primary transition">
                <FaFacebookF size={20} />
            </button>
            <button className="p-3 bg-[#191919] rounded-full border border-white/10 hover:border-primary/50 hover:text-primary transition">
                <FaApple size={22} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpForm;