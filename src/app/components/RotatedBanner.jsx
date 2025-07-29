"use client";
import React, { useRef, useEffect } from "react";
import { FaWarehouse } from "react-icons/fa";

const RotatedBanner = () => {
  const containerRef = useRef(null);

  const items = [
    { text: "Quality Product" },
    { text: "Shipping Across India" },
  ];

  const duplicatedItems = [
    ...items,
    ...items,
    ...items,
    ...items,
    ...items,
    ...items,
    ...items,
    ...items,
    ...items,
    ...items,
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId;
    let scrollPosition = 0;
    const speed = 0.8;

    const step = () => {
      scrollPosition += speed;
      const singleSetWidth =
        (container.scrollWidth / duplicatedItems.length) * items.length;

      if (scrollPosition >= singleSetWidth) {
        scrollPosition = 0;
      }

      container.scrollLeft = scrollPosition;
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [duplicatedItems]);

  return (
    <div
      className="relative w-full overflow-hidden bg-blue-100 py-6"
      style={{
        transform: "rotate(-6deg)",
        transformOrigin: "center center",
        marginTop: "40px",
        marginBottom: "40px",
      }}
    >
      <div
        ref={containerRef}
        className="flex items-center gap-12 px-8"
        style={{
          // ADDING !important HERE TEMPORARILY FOR DEBUGGING
          transform: "rotate(6deg) !important", // Ensure counter-rotation is applied
          transformOrigin: "center center",
          overflowX: "hidden",
          whiteSpace: "nowrap",
          width: "max-content",
          minWidth: "200%",
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-6 text-blue-900 font-semibold text-xl min-w-max"
          >
            <FaWarehouse className="text-3xl" />
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RotatedBanner;
