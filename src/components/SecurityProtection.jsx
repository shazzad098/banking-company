import React from 'react';
import { Layers, Lock, ShieldCheck, Smartphone } from 'lucide-react';

const SecurityProtection = () => {
  const protections = [
    {
      icon: <Layers />,
      title: "Secure Online Banking Platform",
      desc: "Our online banking platform is built with multiple layers of security to safeguard your information. We utilize industry-standard encryption protocols."
    },
    {
      icon: <Lock />,
      title: "Multi-Factor Authentication",
      desc: "To enhance the security of your online banking experience, we employ multi-factor authentication. This provides an extra layer of protection."
    },
    {
      icon: <ShieldCheck />,
      title: "Fraud Monitoring",
      desc: "We have sophisticated fraud detection systems in place to monitor your accounts for any suspicious activities 24/7."
    },
    {
      icon: <Smartphone />,
      title: "Secure Mobile Banking",
      desc: "Our mobile banking app is designed with the same level of security as our online banking platform, ensuring your data is safe on the go."
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          How We <span className="text-primary">Protect You</span>
        </h2>
        <p className="text-grey max-w-2xl">
          At YourBank, we prioritize the security and confidentiality of your financial information. Our state-of-the-art encryption technology ensures your data is safe.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {protections.map((item, index) => (
            <div key={index} className="bg-darkLight p-8 rounded-2xl border border-white/5 flex flex-col md:flex-row gap-6 items-start hover:border-primary/30 transition-all">
                <div className="bg-[#191919] p-4 rounded-full text-primary border border-white/5 shrink-0">
                    {React.cloneElement(item.icon, { size: 28 })}
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-grey text-sm leading-relaxed">{item.desc}</p>
                </div>
            </div>
        ))}
      </div>
    </section>
  );
};

export default SecurityProtection;