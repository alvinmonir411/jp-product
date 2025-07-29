import React from "react";
import { FaStar, FaSmileBeam, FaTruck } from "react-icons/fa"; // Importing icons from react-icons library

const Stat = () => {
  return (
    <div
      className="
        bg-[#0F285C] 
        rounded-3xl 
        p-12 
        text-center 
        text-white 
        font-sans 
container
        mx-auto 
        my-12 
        overflow-hidden
        subtle-blue-glow  
      "
    >
      <h2 className="text-4xl lg:text-5xl mb-12 font-bold leading-tight">
        Trusted by over 6K+ customers
      </h2>

      <div className="flex justify-around items-start flex-wrap gap-x-16 gap-y-8 md:gap-x-24">
        {/* Premium Products */}
        <div className="flex items-center min-w-[280px] max-w-xs">
          <div
            className="
              bg-white 
              rounded-full 
              p-4 
              flex 
              justify-center 
              items-center 
              mr-4 
              w-[80px] 
              h-[80px] 
              shadow-md 
              flex-shrink-0 
            "
          >
            <FaStar className="text-[#0F285C] text-5xl" />
          </div>
          <div className="text-left">
            <h3 className="text-xl md:text-2xl font-semibold m-0">Premium</h3>
            <p className="text-lg md:text-xl mt-1">Products</p>
          </div>
        </div>

        {/* 4000+ Google Review */}
        <div className="flex items-center min-w-[280px] max-w-xs">
          <div
            className="
              bg-white 
              rounded-full 
              p-4 
              flex 
              justify-center 
              items-center 
              mr-4 
              w-[80px] 
              h-[80px]
              shadow-md
              flex-shrink-0
            "
          >
            <FaSmileBeam className="text-[#0F285C] text-5xl" />
          </div>
          <div className="text-left">
            <h3 className="text-xl md:text-2xl font-semibold m-0">4000+</h3>
            <p className="text-lg md:text-xl mt-1">Google Review</p>
          </div>
        </div>

        {/* Delivery Across India */}
        <div className="flex items-center min-w-[280px] max-w-xs">
          <div
            className="
              bg-white 
              rounded-full 
              p-4 
              flex 
              justify-center 
              items-center 
              mr-4
              w-[80px] 
              h-[80px]
              shadow-md
              flex-shrink-0
            "
          >
            <FaTruck className="text-[#0F285C] text-5xl" />
          </div>
          <div className="text-left">
            <h3 className="text-xl md:text-2xl font-semibold m-0">Delivery</h3>
            <p className="text-lg md:text-xl mt-1">Across India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stat;
