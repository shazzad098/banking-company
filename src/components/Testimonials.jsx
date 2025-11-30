import React from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: "Sara T",
      text: "YourBank has been instrumental in helping me manage my personal finances. The intuitive interface and tools make banking a breeze."
    },
    {
      name: "John D",
      text: "I love the mobile app! It lets me track my spending and savings goals with ease. Highly recommended for anyone looking for modern banking."
    },
    {
      name: "Emily R",
      text: "The security features give me peace of mind. I know my money is safe with YourBank. The customer support is also top-notch."
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-primary">Testimonials</span>
          </h2>
          <p className="text-grey">
            Discover how YourBank has transformed lives with innovative digital solutions.
          </p>
        </div>
        
        {/* Slider Buttons (Visual Only) */}
        <div className="flex gap-4">
            <button className="p-3 rounded-full border border-darkLight bg-darkLight hover:bg-primary hover:text-dark transition">
                <ChevronLeft size={20} />
            </button>
            <button className="p-3 rounded-full border border-darkLight bg-darkLight hover:bg-primary hover:text-dark transition">
                <ChevronRight size={20} />
            </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
            <div key={index} className="flex flex-col items-center text-center p-8 bg-darkLight/20 rounded-2xl border border-white/5 relative">
                {/* Quote Icon */}
                <div className="mb-6 text-primary">
                    <Quote size={40} fill="currentColor" className="opacity-50"/>
                </div>
                
                <p className="text-grey text-sm mb-6 leading-relaxed flex-grow">
                    "{review.text}"
                </p>
                
                <h4 className="text-primary font-semibold">{review.name}</h4>
            </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;