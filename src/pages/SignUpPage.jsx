import React from 'react';
import SignUpForm from '../components/SignUpForm';
import Testimonials from '../components/Testimonials';

const SignUpPage = () => {
  return (
    <div className="min-h-screen">
      {/* সাইন আপ ফর্ম সেকশন */}
      <SignUpForm />
      
      {/* টেস্টিমনিয়াল সেকশন */}
      <div className="border-t border-white/5">
        <Testimonials />
      </div>
    </div>
  );
};

export default SignUpPage;