"use client";

import React, { useEffect, useRef } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";

const Agricultural = () => {
  const splideRef = useRef(null);

  useEffect(() => {
    if (splideRef.current) {
      const splide = new Splide(splideRef.current, {
        perPage: 4,
        gap: "1rem",
        height: "auto",
        breakpoints: {
          1024: { perPage: 2 },
          640: { perPage: 1 },
        },
      });

      splide.mount();
    }
  }, []);

  const products = [
    {
      image: "/assets/fence1.jpg",
      title: "Organic Fencing",
      price: "$120",
    },
    {
      image: "/assets/slider1.png",
      title: "Farm Tools Set",
      price: "$85",
    },
    {
      image: "/assets/grass1.jpg",
      title: "Premium Grass Seeds",
      price: "$25",
    },
    {
      image: "/assets/slider1.png",
      title: "Farm Tools Set",
      price: "$85",
    },
    {
      image: "/assets/grass1.jpg",
      title: "Premium Grass Seeds",
      price: "$25",
    },
    {
      image: "/assets/slider2.jpg",
      title: "Advanced Sprayer",
      price: "$60",
    },
  ];

  return (
    <div className="my-10 container mx-auto px-4">
      <h1 className="text-[42px] font-semibold  mb-6">Agricultural Products</h1>

      <div ref={splideRef} className="splide">
        <div className="splide__track">
          <ul className="splide__list">
            {products.map((product, idx) => (
              <li className="splide__slide" key={idx}>
                <div
                  className="bg-white shadow-md rounded-lg flex flex-col items-center overflow-hidden"
                  style={{ width: "305px", height: "383px" }}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 text-center flex flex-col justify-between  items-start">
                    <h2 className="text-lg font-bold mb-2">{product.title}</h2>
                    <p className="text-base font-semibold text-gray-800 mb-4">
                      {product.price}
                    </p>
                    <button
                      className="text-sm font-medium px-6 py-2 text-white"
                      style={{
                        backgroundColor: "rgb(176, 221, 29)",
                        borderRadius: "100px",
                      }}
                    >
                      Buy Now
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

export default Agricultural;
