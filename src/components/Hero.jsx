import React from 'react';
import { CheckCircle } from 'lucide-react';
import Button from './Button';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      {/* Left Content */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 bg-darkLight w-fit px-3 py-1 rounded-full text-xs md:text-sm">
          <CheckCircle size={16} className="text-primary" />
          <span>No LLC Required, No Credit Check.</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Welcome to YourBank <br />
          Empowering Your <span className="text-primary">Financial Journey</span>
        </h1>
        
        <p className="text-grey text-sm md:text-base leading-relaxed">
          At YourBank, our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals.
        </p>

        <div className="pt-4">
          <Button>Open Account</Button>
        </div>
      </div>

      {/* Right Image/UI Mockup */}
      <div className="relative">
        <div className="bg-darkLight p-6 rounded-2xl border border-white/10 relative z-10 overflow-hidden">
             {/* Mockup decoration mimicking the image */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary blur-[80px] opacity-20"></div>
             
             <div className="flex justify-between items-start mb-8">
                <div>
                    <p className="text-sm text-grey">Your Balance</p>
                    <h3 className="text-2xl font-bold">$12,450.00</h3>
                </div>
                <div className="bg-[#191919] p-2 rounded-lg flex gap-2">
                    {/* Fake Chart Bars */}
                    <div className="w-1 h-4 bg-primary rounded"></div>
                    <div className="w-1 h-6 bg-primary/50 rounded"></div>
                    <div className="w-1 h-3 bg-primary/30 rounded"></div>
                </div>
             </div>
             
             <div className="space-y-3">
                <div className="flex justify-between items-center bg-[#191919] p-3 rounded-lg">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-900/50 flex items-center justify-center text-primary">$</div>
                        <div>
                            <p className="text-sm font-medium">Income</p>
                            <p className="text-xs text-grey">Salary Oct</p>
                        </div>
                    </div>
                    <span className="text-primary">+$4,200</span>
                </div>
                 <div className="flex justify-between items-center bg-[#191919] p-3 rounded-lg">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-red-900/50 flex items-center justify-center text-red-400">P</div>
                        <div>
                            <p className="text-sm font-medium">Netflix</p>
                            <p className="text-xs text-grey">Subscription</p>
                        </div>
                    </div>
                    <span className="text-white">-$15.00</span>
                </div>
             </div>
        </div>
        
        {/* Background Abstract Lines (Optional Decoration) */}
        <div className="absolute -top-10 -right-10 w-full h-full border border-primary/20 rounded-2xl -z-0"></div>
      </div>
    </section>
  );
};

export default Hero;