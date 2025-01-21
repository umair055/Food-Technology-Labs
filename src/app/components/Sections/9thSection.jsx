"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Utensils, Coffee, Pizza, Carrot, Apple, IceCream } from "lucide-react";

const foodPartners = [
  { name: "Gourmet Grills", icon: Utensils, color: "#FF6B6B" },
  { name: "Bean Brewers", icon: Coffee, color: "#4ECDC4" },
  { name: "Pizza Paradise", icon: Pizza, color: "#FFD93D" },
  { name: "Veggie Delight", icon: Carrot, color: "#6BCB77" },
  { name: "Fruit Fusion", icon: Apple, color: "#4D96FF" },
  { name: "Sweet Scoops", icon: IceCream, color: "#FF9999" },
];

const useScrollAnimation = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    // Ensure this code runs only in the browser
    if (typeof window !== "undefined") {
      setScrollWidth(window.innerWidth * 2); // or any other logic you need
    }
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  useEffect(() => {
    const updateScrollWidth = () => {
      const container = document.querySelector(".scrolling-items");
      if (container) {
        setScrollWidth(container.scrollWidth / 2);
      }
    };

    updateScrollWidth(); // Set initial width
    window.addEventListener("resize", updateScrollWidth);

    const animateScroll = () => {
      setScrollPosition((prevPosition) => (prevPosition + 0.5) % scrollWidth);
    };

    const animationId = setInterval(animateScroll, 20);
    return () => {
      clearInterval(animationId);
      window.removeEventListener("resize", updateScrollWidth);
    };
  }, [scrollWidth]);

  return scrollPosition;
};

export default function FoodPartners() {
  const scrollPosition = useScrollAnimation();
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <div className="food-partners-section">
      <div className="background-elements">
        <div className="bg-circle red-circle"></div>
        <div className="bg-circle green-circle"></div>
        <div className="bg-circle yellow-circle"></div>
      </div>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="content-container"
      >
        <h2 className="section-title">Our Delicious Partners</h2>
        <div className="scroll-container">
          <div
            className="scrolling-items"
            style={{ transform: `translateX(-${scrollPosition}px)` }}
          >
            {[...foodPartners, ...foodPartners].map((partner, index) => (
              <motion.div
                key={index}
                className="partner-card"
                whileHover={{ scale: 1.05, rotate: -2 }}
              >
                <div className="partner-content">
                  <partner.icon size={40} color={partner.color} />
                  <span
                    className="partner-name"
                    style={{ color: partner.color }}
                  >
                    {partner.name}
                  </span>
                </div>
                <div
                  className="partner-bg-hover"
                  style={{
                    background: `radial-gradient(circle, ${partner.color}, transparent)`,
                  }}
                ></div>
              </motion.div>
            ))}
          </div>
          <div className="gradient-overlay left-gradient"></div>
          <div className="gradient-overlay right-gradient"></div>
        </div>
      </motion.div>
    </div>
  );
}
