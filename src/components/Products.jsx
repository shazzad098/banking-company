import React, { useState } from 'react';
import { Briefcase, Store, School } from 'lucide-react'; // আইকনগুলো ইমপোর্ট
import Button from './Button';

const Products = () => {
  const [activeTab, setActiveTab] = useState('individuals');

  const products = [
    {
      icon: <Briefcase />,
      title: "Checking Accounts",
      desc: "Enjoy easy and convenient access to your funds with our range of checking account options."
    },
    {
      icon: <Store />,
      title: "Savings Accounts",
      desc: "Build your savings with our competitive interest rates and flexible savings account options."
    },
    {
      icon: <School />,
      title: "Loans and Mortgages",
      desc: "Realize your dreams with our flexible loan and mortgage options tailored to your needs."
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Header & Tabs */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-primary">Products</span>
          </h2>
          <p className="text-grey">
            Discover a range of comprehensive banking products catered to your financial needs.
          </p>
        </div>
        
        {/* Tab Switcher */}
        <div className="bg-darkLight p-1 rounded-full flex border border-white/5">
            <button 
                onClick={() => setActiveTab('individuals')}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${activeTab === 'individuals' ? 'bg-primary text-dark' : 'text-white hover:text-primary'}`}
            >
                For Individuals
            </button>
            <button 
                onClick={() => setActiveTab('business')}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${activeTab === 'business' ? 'bg-primary text-dark' : 'text-white hover:text-primary'}`}
            >
                For Businesses
            </button>
        </div>
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center p-8 bg-darkLight/30 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                    {React.cloneElement(item.icon, { size: 32 })}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-grey text-sm mb-6 leading-relaxed">{item.desc}</p>
            </div>
        ))}
      </div>
    </section>
  );
};

export default Products;