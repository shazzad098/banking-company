import React from 'react';
import { HandCoins, PiggyBank, GraduationCap, Home } from 'lucide-react';

const UseCases = () => {
  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-primary text-lg font-medium mb-2">Use Cases</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-white">
            At YourBank, we cater to various financial needs
        </h3>
      </div>

      {/* Row 1: For Individuals */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-20">
        
        {/* Left Side: 2x2 Grid Box */}
        <div className="bg-[#191919] p-6 rounded-3xl border border-white/5 grid grid-cols-2 gap-4">
            {[
                { icon: <HandCoins />, label: "Managing Personal Finances" },
                { icon: <PiggyBank />, label: "Saving for the Future" },
                { icon: <Home />, label: "Homeownership" },
                { icon: <GraduationCap />, label: "Education Funding" }
            ].map((item, idx) => (
                <div key={idx} className="bg-darkLight p-6 rounded-xl flex flex-col items-center text-center justify-center gap-4 border border-white/5">
                    <div className="bg-[#191919] p-3 rounded-full text-primary">
                        {React.cloneElement(item.icon, { size: 24 })}
                    </div>
                    <span className="text-sm font-medium">{item.label}</span>
                </div>
            ))}
        </div>

        {/* Right Side: Text & Stats */}
        <div className="flex flex-col justify-center space-y-8">
            <div>
                <h4 className="text-2xl font-bold mb-4">For Individuals</h4>
                <p className="text-grey leading-relaxed">
                    For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones.
                </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
                {[
                    { val: "78%", label: "Secure Retirement" },
                    { val: "63%", label: "Manage Debt" },
                    { val: "91%", label: "Reduce Transfers" }
                ].map((stat, idx) => (
                    <div key={idx}>
                        <h5 className="text-3xl md:text-5xl font-bold text-primary mb-2">{stat.val}</h5>
                        <p className="text-xs text-grey">{stat.label}</p>
                    </div>
                ))}
            </div>
            
            <button className="w-fit px-6 py-3 border border-darkLight rounded-full text-white hover:bg-darkLight transition">
                Learn More
            </button>
        </div>
      </div>
      
      {/* Note: ডিজাইনের 'For Business' অংশটি একই প্যাটার্নে নিচে যোগ করা যাবে, শুধু লেআউট উল্টে দিতে হবে (order-last) */}

    </section>
  );
};

export default UseCases;