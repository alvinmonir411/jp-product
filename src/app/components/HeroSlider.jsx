"use client";

import React, { useEffect, useRef } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";

const HeroSlider = () => {
  const splideRef = useRef(null);

  useEffect(() => {
    if (splideRef.current) {
      const splide = new Splide(splideRef.current, {
        type: "loop",
        padding: "5rem",
        height: "678px",
        width: "1280px",
        perPage: 1,
        arrows: true,
        pagination: false,
      });

      splide.mount();
    }
  }, []);

  // You can duplicate this object 4 times for initial 4 slides
  const slides = [
    { id: 1, image: "/assets/grass1.jpg" },
    { id: 2, image: "/assets/slider2.jpg" },
  ];

  return (
    <div className="mx-auto my-12 container  flex justify-center items-center">
      <div
        ref={splideRef}
        className="splide"
        style={{ width: "1280px", height: "678px" }}
      >
        <div className="splide__track h-full">
          <ul className="splide__list">
            {slides.map((slide) => (
              <li className="splide__slide" key={slide.id}>
                <div
                  className="flex w-[305px] h-[383px] md:w-full md:h-full rounded-xl overflow-hidden bg-white shadow-md"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                >
                  {/* Left: Image */}
                  <div className="w-1/2 h-full">
                    <img
                      src={slide.image}
                      alt="Grass Wall"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Right: Content */}
                  <div className="w-1/2 flex bg-[rgb(242,244,246)] flex-col justify-center items-start p-8">
                    <h2 className="text-3xl font-bold mb-2 text-gray-800">
                      JF Privezy Grass Wall
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                      The perfect Blend of Greenery
                    </p>
                    <button
                      className="text-white px-6 py-3 text-base font-medium"
                      style={{
                        backgroundColor: "rgb(176, 221, 29)",
                        borderRadius: "100px",
                      }}
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
