// components/Footer.js
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#00254f] rounded-t-[24px] text-white overflow-hidden">
      {/* Top Grid */}
      <div className="container  mx-auto px-10 pt-16 pb-8 grid grid-cols-1 justify-between items-center md:grid-cols-3 gap-10">
        {/* Newsletter */}
        <div>
          <h2 className="text-[28px] font-bold mb-2">
            Join Our <span className="text-white">JF Products</span>
          </h2>
          <p className="text-gray-300 mb-4">
            We’ll tell you about store updates and discounts
          </p>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-[#1d3a5a] text-white placeholder:text-gray-400 rounded-[20px] py-3 px-5 outline-none"
          />

          <div className="flex items-center mt-4 mb-4">
            <input
              type="checkbox"
              id="subscribe"
              className="mr-2 w-[16px] h-[16px]"
            />
            <label htmlFor="subscribe" className="text-gray-400 text-sm">
              Yes, subscribe me to your newsletter.
            </label>
          </div>

          <button className="w-full bg-white text-black font-semibold py-3 rounded-full">
            Join Now
          </button>
        </div>

        {/* Information */}
        <div className="text-white">
          <h3 className="font-bold text-2xl mb-4">Information</h3>
          <ul className="space-y-3 text-gray-200">
            <li className="text-xl">Home</li>
            <li className="text-xl">Shop</li>
            <li className="text-xl">Our Story</li>
            <li className="text-xl">Blogs</li>
            <li className="text-xl">Contact</li>
          </ul>
        </div>

        {/* Helpful */}
        <div className="text-white">
          <h3 className="font-bold text-2xl mb-4">Helpful</h3>
          <ul className="space-y-3 text-gray-200">
            <li className="text-xl">FAQs</li>
            <li className="text-xl">Terms & Conditions</li>
            <li className="text-xl">Privacy Policy</li>
            <li className="text-xl">Shipping Policy</li>
            <li className="text-xl">My Account</li>
          </ul>
        </div>
      </div>

      {/* Bottom Box Section */}
      <div className="bg-[#01294d] container mx-auto py-6 px-10">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo & Branches */}
          <div className="flex items-center gap-5">
            <div className="bg-white rounded-full p-2 w-[100px] h-[100px]">
              <Image
                src="/assets/logo.png"
                alt="JF Logo"
                width={100}
                height={100}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <p className="font-semibold text-white text-lg">Our Branches</p>
              <p className="text-gray-300 text-sm">
                Coimbatore, Chennai, Hyderabad, Goa, Kochi
              </p>
            </div>
          </div>

          {/* Contact Us Button */}
          <button className="bg-[#c1e52f]   text-black px-8 py-3 rounded-full font-medium hover:bg-[#b6d72e] transition">
            Contact Us
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-100 text-center py-4 text-gray-400 text-sm border-t border-white/10">
        Copyright © 2025 JF Products. All rights reserved
      </div>
    </footer>
  );
}
