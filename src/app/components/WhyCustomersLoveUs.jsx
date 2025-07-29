// components/WhyCustomersLoveUs.jsx
"use client"; // Important for client-side functionality in Next.js App Router

import React from "react";

const WhyCustomersLoveUs = () => {
  return (
    <section className="py-16 bg-gray-50 flex justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 text-center mb-16">
          Why Customers Love<span className="ml-1">Us?</span>
        </h2>

        {/* Content Wrapper for Cards */}
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8">
          {/* Testimonial Card */}
          <div className="bg-white rounded-3xl shadow-lg p-8 sm:p-10 lg:w-1/2 flex flex-col justify-between overflow-hidden">
            {/* Quote Icon */}
            <span className="text-green-500 text-[6rem] leading-[0.7] mb-6 block font-serif -mt-4">
              “
            </span>

            {/* Testimonial Text */}
            <p className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-8 flex-grow">
              I had initial issue with stock availability and delivery. Once the
              product arrived on site the work has completed very fast(400ft.)
              Value for money and easy to install. Happy with the product
            </p>

            {/* Author and Navigation */}
            <div className="flex justify-between items-center bg-gray-100 p-5 rounded-2xl mt-auto pt-4">
              {" "}
              {/* mt-auto and pt-4 to push it to the bottom */}
              <p className="text-gray-800 font-semibold text-lg sm:text-xl">
                - Samuel Varughese
              </p>
              <div className="flex space-x-3">
                <button className="flex items-center justify-center w-11 h-11 rounded-full bg-gray-100 text-gray-600 border border-gray-200 hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300">
                  &larr; {/* Left arrow HTML entity */}
                </button>
                <button className="flex items-center justify-center w-11 h-11 rounded-full bg-gray-100 text-gray-600 border border-gray-200 hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300">
                  &rarr; {/* Right arrow HTML entity */}
                </button>
              </div>
            </div>
          </div>

          {/* Image Card */}
          <div className="relative bg-white rounded-3xl shadow-lg lg:w-1/2 flex justify-center items-center overflow-hidden min-h-[400px]">
            {/* Customer Image */}
            <img
              src="/assets/whychoseus.jpg"
              alt="Satisfied Customer"
              className="w-full h-full object-cover"
            />

            <div className="absolute top-6 right-6 bg-white bg-opacity-80 px-4 py-2 rounded-lg font-bold text-gray-800 text-xl shadow-md flex items-center justify-center">
              <img
                src="/assets/logo.png"
                alt="logo"
                className="reletive  w-10 h-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCustomersLoveUs;
