import React from "react";
import { FaShieldAlt, FaUsers, FaShapes } from "react-icons/fa";

const WhyUs = () => {
  return (
    <div className="container mx-auto py-20">
      <h2 className="text-4xl font-bold text-center mb-10">Why Us</h2>
      <p className="text-center max-w-2xl mx-auto mb-16 text-gray-600 text-lg">
        We specialize in delivering durable and innovative fencing solutions
        built to last. With a focus on quality and trust, we help secure spaces
        across industries and communities.
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        {/* Card 1 */}
        <div className="w-[400px] h-[501px] rounded-[24px] p-6 bg-gradient-to-br from-white to-[#e2ecf6] shadow-md">
          <div className="text-4xl mb-6">
            <img
              src="/assets/Group1.png"
              alt="Description 1"
              className="w-20 h-20"
            />
          </div>
          <h3 className="text-xl font-semibold text-[#0F285C] mb-4">
            Unmatched Durability with Corrosion-Free Technology
          </h3>
          <p className="text-gray-700 text-base leading-relaxed">
            Our JF-270 barbed wire features a robust 270 GSM zinc coating,
            ensuring superior resistance against rust and corrosion. Paired with
            stainless steel binding wire, our fencing solutions are designed to
            withstand harsh environmental conditions, offering longevity and
            reliability.
          </p>
        </div>

        {/* Card 2 */}
        <div className="w-[400px] h-[501px] rounded-[24px] p-6 bg-[#002B55] text-white shadow-md -mt-10">
          <div className="text-4xl mb-6">
            <img
              src="/assets/Group2.png"
              alt="Description 2"
              className="w-20 h-20"
            />
          </div>
          <h3 className="text-xl font-semibold mb-4">
            Customer-Centric Approach
          </h3>
          <p className="text-base leading-relaxed">
            At JF Products, customer satisfaction is paramount. We pride
            ourselves on delivering timely services, maintaining transparent
            communication, ensuring a seamless purchasing experience. Our
            commitment to excellence is reflected in the positive feedback from
            our valued clients.
          </p>
        </div>

        {/* Card 3 */}
        <div className="w-[400px] h-[501px] rounded-[24px] p-6 bg-gradient-to-br from-white to-[#e2ecf6] shadow-md">
          <div className="text-4xl mb-6">
            <img
              src="/assets/Group3.png"
              alt="Description 3"
              className="w-20 h-20"
            />
          </div>
          <h3 className="text-xl font-semibold text-[#0F285C] mb-4">
            Innovative and Diverse Product Range
          </h3>
          <p className="text-gray-700 text-base leading-relaxed">
            We offer a wide array of fencing solutions, including Polyhex Mesh,
            Australian Trellis, and GI Poultry Mesh, catering to various needs
            from agricultural to residential applications. Our products combine
            functionality with aesthetic appeal, ensuring both security and
            style.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
