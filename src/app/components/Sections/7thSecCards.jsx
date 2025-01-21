"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Component() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.5,
      },
    },
  };

  return (
    <div className="component-container">
      <div className="component-wrapper">
        <div className="component-grid">
          <motion.div
            className="card"
            variants={cardVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            whileHover={{ scale: 1.05, rotate: -1 }}
          >
            <motion.div
              className="card-highlight blue-to-purple"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
            <motion.div variants={contentVariants}>
              <h2 className="card-title">Our Mission</h2>
              <h3 className="card-subtitle">To Empower Food Businesses</h3>
              <p className="card-text">
                At Food Technology Labs, our mission is to empower food
                businesses to achieve excellence. We are passionate about
                helping our clients succeed by providing expert guidance,
                innovative solutions, and unwavering support.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="card"
            variants={cardVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            whileHover={{ scale: 1.05, rotate: 1 }}
          >
            <motion.div
              className="card-highlight purple-to-pink"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            />
            <motion.div variants={contentVariants}>
              <h2 className="card-title">Our Vision</h2>
              <h3 className="card-subtitle">
                To Be a Leader in Food Innovation
              </h3>
              <p className="card-text">
                We strive to be a leader in food innovation, constantly pushing
                the boundaries of what's possible in the industry. Our vision is
                to create a world where food businesses can thrive with the help
                of our cutting-edge solutions.
              </p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="call-to-action"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <h2 className="call-to-action-title">Ready to innovate?</h2>
          <button
            onClick={() => {
              router.push("/food-services");
            }}
            className="cta-button"
          >
            Get Started
            <ArrowRight className="cta-arrow" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}
