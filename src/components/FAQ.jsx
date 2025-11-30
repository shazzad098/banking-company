import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      q: "How do I open an account with YourBank?",
      a: "Opening an account is easy! You can do it directly through our website by clicking 'Open Account' or visit any of our branches."
    },
    {
      q: "What documents do I need to provide?",
      a: "Generally, you need a valid government-issued ID, proof of address, and your Social Security Number or Tax ID."
    },
    {
      q: "How can I access my accounts online?",
      a: "Once registered, you can log in via our website or mobile app using your secure credentials."
    },
    {
      q: "Are my transactions secure?",
      a: "Yes, we use 256-bit encryption and multi-factor authentication to ensure your data and money are safe."
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-primary">Frequently</span> Asked Questions
        </h2>
        <p className="text-grey">
          Still you have any questions? Contact our Team via support@yourbank.com
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {faqs.map((item, index) => (
            <div key={index} className="bg-darkLight p-8 rounded-2xl border border-white/5 relative overflow-hidden">
                <h3 className="text-xl font-semibold mb-4 border-b border-white/10 pb-4">
                    {item.q}
                </h3>
                <p className="text-grey text-sm leading-relaxed">
                    {item.a}
                </p>
                {/* Decorative glow */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 blur-2xl rounded-full pointer-events-none"></div>
            </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="px-6 py-3 border border-darkLight rounded-full text-white hover:bg-darkLight transition">
            Load All FAQ's
        </button>
      </div>
    </section>
  );
};

export default FAQ;