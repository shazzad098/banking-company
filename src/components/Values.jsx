import React from 'react';

const Values = () => {
  const values = [
    {
      title: "Integrity",
      desc: "We conduct ourselves with highest integrity, ensuring transparency and honesty in all our interactions."
    },
    {
      title: "Customer Centricity",
      desc: "Our customers are at the heart of everything we do. We prioritize their needs and satisfaction above all else."
    },
    {
      title: "Collaboration",
      desc: "We believe in the power of teamwork. Together we achieve more and deliver exceptional results."
    },
    {
      title: "Innovation",
      desc: "We embrace change and constantly seek new ways to improve our services and stay ahead in the industry."
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Our <span className="text-primary">Values</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {values.map((item, index) => (
          <div key={index} className="p-8 border-l-2 border-primary bg-darkLight/20 rounded-r-2xl">
             <h3 className="text-2xl font-semibold mb-4 text-white">{item.title}</h3>
             <p className="text-grey text-sm leading-relaxed">
               {item.desc}
             </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Values;