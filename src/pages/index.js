import React, { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setMessage('Email submitted successfully. Thank you.');
      setEmail('');  // Clear the input
    }
  };

  return (
    <div className='flex flex-col bg-cover bg-center bg-no-repeat'>
        <section className="mt-12">
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
              <div className="inline-flex justify-between items-center py-1 px-1 pe-4 mb-7 text-sm text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800">
                  <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 me-3">New</span> <span className="text-sm font-medium">Hello we are launching soon!</span> 
                  <svg className="w-2.5 h-2.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
              </div>
              <h1 className="mb-4 mt-6 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white ">
                <span className='bg-gradient-to-r from-indigo-500 via-purple-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
                  Tricista Enterprise
                </span>
              </h1>
              <p className="mb-8 text-xl font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
                We're working on something awesome!
              </p>
              <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">   
                  <div className="relative">
                      <input type="email" name="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} 
                          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                          required />
                      <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          Subscribe
                      </button>
                  </div>
              </form>

              {message && <p className="mt-2 text-gray-400 text-sm">{message}</p>}
          </div>
        </section>
    </div>
  );
}
