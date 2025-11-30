import React from 'react';
import Navbar from '../components/Navbar';
import MissionVision from '../components/MissionVision';
import PressReleases from '../components/PressReleases';

const About = () => {
  return (
    <div className="min-h-screen"> 
      {/* Note: Navbar & Footer are in App.jsx */}
      
      {/* About Hero Section */}
      <section className="pt-32 pb-10 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="bg-darkLight rounded-3xl p-8 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center gap-12 border border-white/5">
                <div className="md:w-1/2 relative z-10 space-y-4">
                    <span className="text-primary font-medium tracking-wider">Welcome to YourBank</span>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        Where Banking Meets <br/> <span className="text-primary">Excellence!</span>
                    </h1>
                    <p className="text-grey leading-relaxed pt-4">
                        At YourBank, we believe that banking should be more than just transactions. It should be an experience that empowers you to achieve your financial goals.
                    </p>
                </div>
                
                {/* Image Area */}
                <div className="md:w-1/2 relative z-10 w-full">
                    <div className="bg-[#191919] h-[350px] rounded-2xl w-full border border-white/5 flex items-center justify-center overflow-hidden relative">
                         {/* Mockup Team Image */}
                         <div className="absolute inset-0 bg-primary/5"></div>
                         <span className="text-white/20 text-lg">Team Photo Placeholder</span>
                         
                         {/* Abstract square dots decoration */}
                         <div className="absolute top-4 right-4 grid grid-cols-4 gap-1">
                             {[...Array(16)].map((_,i) => <div key={i} className="w-1 h-1 bg-primary rounded-full"></div>)}
                         </div>
                    </div>
                </div>

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20 pointer-events-none" 
                    style={{backgroundImage: 'radial-gradient(#CAFF33 0.5px, transparent 0.5px)', backgroundSize: '24px 24px'}}>
                </div>
          </div>
      </section>

      <MissionVision />
      <PressReleases />
      
    </div>
  );
};

export default About;