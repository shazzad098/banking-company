import React from 'react';
import SecurityProtection from '../components/SecurityProtection';
import FAQ from '../components/FAQ'; // আগের তৈরি করা FAQ কম্পোনেন্ট রিইউজ করছি

const Security = () => {
  return (
    <div className="min-h-screen">
      
      {/* Security Hero Section */}
      <section className="pt-32 pb-10 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="bg-darkLight rounded-3xl p-8 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center gap-12 border border-white/5">
                <div className="md:w-1/2 relative z-10 space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        Your Security is Our <br/> <span className="text-primary">Top Priority</span>
                    </h1>
                    <p className="text-grey leading-relaxed">
                        At YourBank, we understand the importance of keeping your financial information secure. We employ robust security measures and advanced technologies to protect your personal and financial data.
                    </p>
                </div>
                
                {/* Image Area */}
                <div className="md:w-1/2 relative z-10 w-full">
                    <div className="bg-[#191919] h-[350px] rounded-2xl w-full border border-white/5 flex items-center justify-center overflow-hidden relative group">
                         {/* Abstract Shield Concept */}
                         <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
                         
                         {/* Shield Icon Placeholder */}
                         <div className="relative z-10 w-32 h-32 border-2 border-primary/30 rounded-full flex items-center justify-center">
                            <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center animate-pulse">
                                <span className="text-4xl">🛡️</span>
                            </div>
                         </div>

                         {/* Background Grid Lines */}
                         <div className="absolute inset-0 opacity-10" 
                            style={{backgroundImage: 'linear-gradient(#CAFF33 1px, transparent 1px), linear-gradient(90deg, #CAFF33 1px, transparent 1px)', backgroundSize: '40px 40px'}}>
                         </div>
                    </div>
                </div>
          </div>
      </section>

      <SecurityProtection />
      <FAQ /> {/* ডিজাইন অনুযায়ী এখানেও FAQ আছে */}
      
    </div>
  );
};

export default Security;