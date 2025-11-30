import React from 'react';
import LoginForm from '../components/LoginForm';
import Testimonials from '../components/Testimonials'; // আগের তৈরি করা টেস্টিমনিয়াল কম্পোনেন্ট

const LoginPage = () => {
  return (
    <div className="min-h-screen">
      {/* লগইন ফর্ম সেকশন */}
      <LoginForm />
      
      {/* ডিজাইনে লগইন পেজের নিচে টেস্টিমনিয়াল আছে */}
      <div className="border-t border-white/5">
        <Testimonials />
      </div>
    </div>
  );
};

export default LoginPage;