import React from 'react';
import { CheckCircle, TrendingUp, DollarSign, ArrowUpRight } from 'lucide-react';
import Button from './Button';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Animated Background Dots Pattern - Top Left */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-30">
        <div className="grid grid-cols-8 gap-2 animate-pulse">
          {[...Array(64)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-primary rounded-full"></div>
          ))}
        </div>
      </div>

      {/* Animated Background Arrows - Right Side */}
      <div className="absolute top-32 right-0 opacity-20">
        <ArrowUpRight size={200} className="text-primary animate-pulse" strokeWidth={0.5} />
        <ArrowUpRight size={150} className="text-primary absolute top-20 right-10 animate-pulse delay-150" strokeWidth={0.5} />
        <ArrowUpRight size={100} className="text-primary absolute top-40 right-20 animate-pulse delay-300" strokeWidth={0.5} />
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 bg-darkLight w-fit px-4 py-2 rounded-full text-xs md:text-sm border border-white/10">
            <CheckCircle size={16} className="text-primary" />
            <span>No LLC Required, No Credit Check.</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Welcome to YourBank <br />
            Empowering Your <span className="text-primary">Financial Journey</span>
          </h1>
          
          <p className="text-grey text-sm md:text-base leading-relaxed max-w-lg">
            At YourBank, our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our customers' needs.
          </p>

          <div className="pt-4">
            <Button variant="primary" className="px-8 py-3">Open Account</Button>
          </div>
        </div>

        {/* Right Side - Dashboard Cards */}
        <div className="relative">
          {/* Main Card - Your Transactions */}
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-6 rounded-3xl border border-white/10 relative z-20 backdrop-blur-xl">
            {/* Top Section */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <DollarSign size={18} className="text-dark" />
              </div>
              <div>
                <p className="text-primary text-sm font-medium">+ $5000.00</p>
                <p className="text-xs text-grey">Monthly Income</p>
              </div>
              <TrendingUp size={48} className="text-primary/20 ml-auto" />
            </div>

            <h3 className="text-lg font-semibold mb-4">Your Transactions</h3>

            {/* Transaction List */}
            <div className="space-y-3">
              <div className="flex justify-between items-center bg-[#0a0a0a] p-3 rounded-xl border border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <span className="text-lg">💰</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Transaction</p>
                    <p className="text-xs text-grey">Joel Kenley</p>
                  </div>
                </div>
                <span className="text-white font-medium">-$68.00</span>
              </div>

              <div className="flex justify-between items-center bg-[#0a0a0a] p-3 rounded-xl border border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                    <span className="text-lg">💳</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Transaction</p>
                    <p className="text-xs text-grey">Mark Smith</p>
                  </div>
                </div>
                <span className="text-white font-medium">-$68.00</span>
              </div>

              <div className="flex justify-between items-center bg-[#0a0a0a] p-3 rounded-xl border border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <span className="text-lg">✅</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Transaction</p>
                    <p className="text-xs text-grey">Lenen Ray</p>
                  </div>
                </div>
                <span className="text-white font-medium">-$68.00</span>
              </div>
            </div>
          </div>

          {/* Floating Money Exchange Card */}
          <div className="absolute -bottom-8 -right-4 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-5 rounded-3xl border border-white/10 w-72 z-30 backdrop-blur-xl">
            <h4 className="text-sm font-semibold mb-4">Money Exchange</h4>
            
            <div className="flex justify-between mb-4">
              <div className="text-center">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl">🇮🇳</span>
                  <span className="text-xs font-medium">INR</span>
                </div>
                <p className="text-xs text-grey">Indian Rupees</p>
                <p className="font-bold mt-1">5,0000</p>
              </div>

              <div className="text-center">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl">🇺🇸</span>
                  <span className="text-xs font-medium">USD</span>
                </div>
                <p className="text-xs text-grey">United States Dollar</p>
                <p className="font-bold mt-1">12.00</p>
              </div>
            </div>

            <button className="w-full bg-primary text-dark font-medium py-2 rounded-full text-sm hover:bg-primary/90 transition">
              Exchange
            </button>

            <div className="flex items-center justify-center gap-4 mt-3 pt-3 border-t border-white/10">
              <p className="text-xs text-grey">Supported Currency</p>
              <div className="flex gap-2">
                <span className="text-xs">💵</span>
                <span className="text-xs">💶</span>
                <span className="text-xs">💷</span>
                <span className="text-xs">💴</span>
              </div>
            </div>
          </div>

          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-pulse delay-150"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;