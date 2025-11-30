import React from 'react';

const PressReleases = () => {
  const news = [
    {
      title: "YourBank Launches New Rewards Program",
      date: "01/01/2024",
      desc: "YourBank is excited to announce the launch of our new rewards program, offering customers exclusive benefits and discounts.",
      tag: "Rewards"
    },
    {
      title: "YourBank Expands Branch Network",
      date: "15/01/2024",
      desc: "We are pleased to announce the opening of 5 new branches across the country, bringing our services closer to you.",
      tag: "Expansion"
    },
    {
      title: "Partnering with Local NGOs for Education",
      date: "10/02/2024",
      desc: "YourBank partners with local NGOs to support financial literacy and education initiatives for underprivileged youth.",
      tag: "Community"
    },
    {
      title: "YourBank Launches Sustainable Banking",
      date: "28/02/2024",
      desc: "Introducing our new sustainable banking initiative, aimed at reducing our carbon footprint and promoting eco-friendly practices.",
      tag: "Sustainability"
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Press <span className="text-primary">Releases</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {news.map((item, index) => (
            <div key={index} className="bg-darkLight rounded-3xl p-6 border border-white/5 hover:border-primary/30 transition-all">
                {/* Image Placeholder Area */}
                <div className="h-48 bg-[#191919] rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center">
                    <span className="text-grey/30 text-4xl font-bold">NEWS</span>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-bold line-clamp-2">{item.title}</h3>
                    
                    <div className="flex gap-3 text-xs text-grey">
                        <span className="bg-[#191919] px-3 py-1 rounded-full border border-white/5">{item.tag}</span>
                        <span className="bg-[#191919] px-3 py-1 rounded-full border border-white/5">{item.date}</span>
                    </div>

                    <p className="text-grey text-sm leading-relaxed line-clamp-3">
                        {item.desc}
                    </p>
                </div>
            </div>
        ))}
      </div>
    </section>
  );
};

export default PressReleases;