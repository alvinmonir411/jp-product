// components/ContactSection.jsx
"use client"; // Important for client-side functionality in Next.js App Router

import React from "react";
// No longer need FaBuilding, FaHome, etc., as we're using image paths
// import { FaBuilding, FaHome, FaWarehouse, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
  // --- Our Branches Data ---
  const branches = [
    { img: "/assets/Frame-6.png", city: "COIMBATORE" }, //
    { img: "/assets/Frame-4.png", city: "CHENNAI" }, //
    { img: "/assets/Frame-3.png", city: "HYDERABAD" }, //
    { img: "/assets/Frame-2.png", city: "GOA" }, //
    { img: "/assets/Frame-1.png", city: "KOCHI" }, //
    { img: "/assets/Frame.png", city: "MUMBAI" }, //
  ];

  // The getBranchIconSvg function is no longer needed if you are using image files.
  // const getBranchIconSvg = (color) => `
  //   <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  //     <path d="M4 22H20V10L12 2L4 10V22ZM6 20V11.23L12 5.23L18 11.23V20H6ZM9 14H15V16H9V14ZM9 17H15V19H9V17Z" fill="${color}"/>
  //   </svg>
  // `;

  return (
    <section className="py-16 bg-gray-50 flex justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
        {/* --- Our Branches Section --- */}
        <div className="w-full flex flex-col items-center py-4 bg-white rounded-lg shadow-md mb-8 relative">
          {/* Green Bubble */}
          <div className="absolute -top-4 px-6 py-2 bg-[#8bc34a] rounded-full text-white font-semibold text-sm uppercase shadow-md">
            OUR BRANCHES
          </div>
          {/* Branch Items */}
          <div className="mt-8 flex flex-wrap justify-center gap-x-4 gap-y-6 sm:gap-x-8 md:gap-x-12 px-4">
            {branches.map((branch, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 border-dashed border-2 border-[#8bc34a]"
              >
                <div className="w-26 h-26 flex items-center justify-center bg-white   rounded-xl  mb-2 shadow-sm">
                  {/* Use an <img> tag for the branch icon */}
                  <img
                    src={branch.img}
                    alt={branch.city}
                    className="w-full h-full object-contain p-1"
                  />
                </div>

                <span className="text-gray-700 border-t border-dashed font-semibold text-sm whitespace-nowrap">
                  {branch.city}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* --- Contact Form and Map Section --- */}
        <div className="w-full flex flex-col lg:flex-row items-stretch gap-8 mt-4">
          {/* Contact Us Form */}
          <div className="bg-[#1a2d46] rounded-3xl p-8 lg:p-12 shadow-xl flex flex-col w-full lg:w-2/5 xl:w-[450px]">
            <h3 className="text-white text-3xl font-bold mb-8">Contact Us</h3>

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-[#2a415c] text-white placeholder-[#8bb4d4] p-4 rounded-xl mb-5 focus:outline-none focus:ring-2 focus:ring-[#8bb4d4]"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-[#2a415c] text-white placeholder-[#8bb4d4] p-4 rounded-xl mb-5 focus:outline-none focus:ring-2 focus:ring-[#8bb4d4]"
            />
            <input
              type="tel"
              placeholder="Phone *"
              className="w-full bg-[#2a415c] text-white placeholder-[#8bb4d4] p-4 rounded-xl mb-5 focus:outline-none focus:ring-2 focus:ring-[#8bb4d4]"
            />
            <textarea
              placeholder="Write message"
              rows="5"
              className="w-full bg-[#2a415c] text-white placeholder-[#8bb4d4] p-4 rounded-xl mb-8 resize-none focus:outline-none focus:ring-2 focus:ring-[#8bb4d4]"
            ></textarea>

            <button className="bg-[#8bc34a] hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-xl transition-colors duration-200 self-start">
              Submit
            </button>
          </div>

          {/* Map and Address */}
          <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-xl flex flex-col w-full lg:w-3/5">
            {/* Static Map Image Placeholder */}
            <div className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-full rounded-2xl overflow-hidden mb-6 flex-grow">
              <img
                src="/path/to/your/map-image.png" //
                alt="Location Map"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Address Card */}
            <div className="flex items-start bg-gray-100 p-5 rounded-xl shadow-inner border border-gray-200">
              {/* Custom Map Marker Icon for Address Card - using a static image */}
              <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4">
                {/* Use a specific image for the address marker, if available */}
                <img
                  src="/assets/map-marker-green.png"
                  alt="Map Marker"
                  className="w-full h-full object-contain p-1"
                />
                {/* If you don't have a specific image, you could uncomment the FaMapMarkerAlt from react-icons/fa again and style it:
                <FaMapMarkerAlt className="text-[#8bc34a] text-3xl" />
                */}
              </div>
              <p className="text-gray-800 text-lg font-medium">
                JRR Towers (2nd Floor), Patallamma Temple Rd,
                <br />
                Basavangudi, Bangalore, 560004
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
