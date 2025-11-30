import React, { useState } from 'react';
import { ArrowUpRight, ShieldCheck, Smartphone, Wallet, Globe, Lock } from 'lucide-react';

const Features = () => {
  const [activeTab, setActiveTab] = useState('online');

  // ফিচার ডাটাবেস
  const featuresData = {
    online: [
      { title: "24/7 Account Access", desc: "Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform." },
      { title: "Mobile Banking App", desc: "Stay connected to your finances on the go with our user-friendly mobile banking app." },
      { title: "Secure Transactions", desc: "Rest assured knowing that your transactions are protected by industry-leading security measures." },
      { title: "Bill Pay and Transfers", desc: "Save time and avoid late fees with our convenient bill pay service. Set up recurring payments." }
    ],
    tools: [
        { title: "Budget Planner", desc: "Track your spending and manage your budget effectively." },
        { title: "Savings Goal", desc: "Set targets and visualize your progress towards financial freedom." },
        { title: "Investment Tracker", desc: "Monitor your portfolio performance in real-time." },
        { title: "Financial Calculator", desc: "Calculate loans, mortgages, and savings interest easily." }
    ]
  };

  const tabs = [
    { id: 'online', label: 'Online Banking' },
    { id: 'tools', label: 'Financial Tools' },
    { id: 'support', label: 'Customer Support' } 
  ];

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our <span className="text-primary">Features</span>
        </h2>
        <p className="text-grey max-w-2xl">
          Experience a host of powerful features at YourBank, including seamless online banking, secure transactions, and personalized financial insights.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Side: Tabs */}
        <div className="bg-darkLight p-6 rounded-2xl h-fit lg:w-1/4 flex flex-col gap-4">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`text-left px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                        activeTab === tab.id 
                        ? 'bg-[#191919] text-primary border border-white/5 shadow-lg' 
                        : 'text-grey hover:text-white hover:bg-[#191919]/50'
                    }`}
                >
                    {tab.label}
                </button>
            ))}
        </div>

        {/* Right Side: Grid */}
        <div className="lg:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-6">
            {(featuresData[activeTab] || featuresData['online']).map((feature, idx) => (
                <div key={idx} className="bg-darkLight p-8 rounded-2xl border border-white/5 flex flex-col justify-between group hover:border-primary/30 transition-all">
                    <div>
                        <div className="flex justify-between items-start mb-6">
                            <h4 className="text-lg font-semibold">{feature.title}</h4>
                            <ArrowUpRight className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
                        </div>
                        <p className="text-grey text-sm leading-relaxed">
                            {feature.desc}
                        </p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Features;