import React from 'react';
import { Monitor, HeartPulse, Briefcase, GraduationCap } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Monitor />,
      title: "Competitive Compensation",
      desc: "We offer a competitive salary package along with performance-based bonuses."
    },
    {
      icon: <HeartPulse />,
      title: "Health and Wellness",
      desc: "Comprehensive health insurance plans to keep you and your family healthy and safe."
    },
    {
      icon: <Briefcase />,
      title: "Retirement Plans",
      desc: "We help you secure your future with our generous retirement savings plans."
    },
    {
      icon: <GraduationCap />,
      title: "Work-Life Balance",
      desc: "Flexible working hours and paid time off to ensure you maintain a healthy work-life balance."
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-12">
         <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-primary">Benefits</span>
         </h2>
         <p className="text-grey max-w-2xl">
            At YourBank, we value our employees and offer a comprehensive benefits package.
         </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {benefits.map((item, index) => (
            <div key={index} className="bg-darkLight p-8 rounded-2xl border border-white/5 flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-[#191919] p-4 rounded-full text-primary border border-white/5">
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

export default Benefits;