import React from 'react';
import Navbar from '../components/Navbar';
import Values from '../components/Values';
import Benefits from '../components/Benefits';
import Jobs from '../components/Jobs';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Careers = () => {
  return (
    <div className="min-h-screen font-sans bg-dark text-white selection:bg-primary selection:text-black overflow-x-hidden">
       {/* Background Decoration */}
       <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"></div>
      </div>

      <Navbar />

      <main>
        {/* Careers Hero Section */}
        <section className="pt-32 pb-10 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="bg-darkLight rounded-3xl p-8 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
                 <div className="md:w-1/2 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Welcome to <span className="text-primary">YourBank Careers!</span>
                    </h1>
                    <p className="text-grey leading-relaxed mb-8">
                        Join our team and embark on a rewarding journey in the banking industry. 
                        We offer a dynamic work environment where innovation and collaboration thrive.
                    </p>
                 </div>
                 
                 {/* Image Placeholder (Abstract Layout as per design) */}
                 <div className="md:w-1/2 relative z-10">
                     <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#191919] h-[300px] flex items-center justify-center text-grey">
                        {/* Replace this with an actual <img> tag */}
                        <span className="text-sm">Team Image Placeholder</span>
                        
                        {/* Abstract shapes from design */}
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
                     </div>
                 </div>

                 {/* Background Pattern */}
                 <div className="absolute top-0 right-0 w-full h-full opacity-30" 
                      style={{backgroundImage: 'radial-gradient(#CAFF33 1px, transparent 1px)', backgroundSize: '30px 30px'}}>
                 </div>
            </div>
        </section>

        <Values />
        <Benefits />
        <Jobs />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
};

export default Careers;