import React from 'react';

const MissionVision = () => {
  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary">
        Mission & Vision
      </h2>
      
      <div className="flex flex-col gap-20">
        
        {/* 1. Mission Section (Image Left, Text Right) */}
        <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Image Placeholder */}
            <div className="w-full md:w-1/2 h-[300px] md:h-[400px] bg-darkLight rounded-3xl rounded-tl-[4rem] border border-white/5 relative overflow-hidden flex items-center justify-center">
                 <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"></div>
                 <span className="text-grey">Mission Image Placeholder</span>
                 {/* Decorative plant shape mimic */}
                 <div className="absolute bottom-10 left-10 w-20 h-20 border-2 border-primary/30 rounded-full"></div>
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-2xl font-bold">Mission</h3>
                <p className="text-grey leading-relaxed border-l-2 border-primary pl-6">
                    At YourBank, our mission is to empower our customers to achieve financial success. We provide innovative banking solutions that cater to their unique needs and help them build a secure future.
                </p>
            </div>
        </div>

        {/* 2. Vision Section (Text Left, Image Right) */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-10">
            {/* Image Placeholder */}
            <div className="w-full md:w-1/2 h-[300px] md:h-[400px] bg-darkLight rounded-3xl rounded-br-[4rem] border border-white/5 relative overflow-hidden flex items-center justify-center">
                 <div className="absolute inset-0 bg-gradient-to-bl from-primary/10 to-transparent"></div>
                 <span className="text-grey">Vision Image Placeholder</span>
                 {/* Decorative eye shape mimic */}
                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-primary/50 rounded-full"></div>
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-2xl font-bold">Vision</h3>
                <p className="text-grey leading-relaxed border-l-2 border-primary pl-6">
                    Our vision is to be the most trusted and preferred banking partner for individuals and businesses globally. We strive to set new standards of excellence in the financial industry.
                </p>
            </div>
        </div>

      </div>
    </section>
  );
};

export default MissionVision;