import React, { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setMessage('Email submitted successfully!');
      setEmail('');  // Clear the input
    }
  };

  return (
    <div className="bg-gray-900 h-screen flex flex-col items-center justify-center text-center">
      <div className="text-white">
        <h1 className="text-4xl font-bold">Coming Soon</h1>
        <p className="mt-4 text-lg">We're working on something awesome!</p>
        {/* <p className="mt-6 text-lg">We are a dynamic team of web development experts dedicated to crafting stunning, 
          responsive, and user-friendly websites. Specializing in modern web technologies, 
          we build innovative digital solutions tailored to meet your unique needs. From sleek 
          front-end designs to robust back-end systems, we transform your vision into a seamless 
          online experience.</p> */}
      </div>
      <div className="mt-8">
        <form className="flex items-center" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="py-2 px-4 bg-gray-800 text-white rounded-l-md focus:outline-none"
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <button
            type="submit"
            className="bg-blue-500 py-2 px-4 text-white rounded-r-md hover:bg-blue-600 focus:outline-none"
          >
            Subscribe
          </button>
        </form>
        <p className="mt-2 text-gray-400 text-sm">Be the first to know when we launch!</p>
        <br />
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}
