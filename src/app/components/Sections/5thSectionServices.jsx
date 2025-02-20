"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Utensils,
  Clipboard,
  Apple,
  UserPlus,
  TrendingUp,
  Cookie,
  Camera,
  Package,
  Cpu,
} from "lucide-react";
import { Button } from "@mui/material";
import Link from "next/link";
import { ArrowForwardIos } from "@mui/icons-material";
// import './FoodServices.css'; // Import the custom CSS

const services = [
  {
    title: "Food Safety & Quality Consulting",
    description:
      "Ensuring compliance with food safety regulations and maintaining high-quality standards.",
    icon: Utensils,
  },
  {
    title: "Meal Planning",
    description:
      "Creating nutritious and delicious meal plans for individuals and groups.",
    icon: Clipboard,
  },
  {
    title: "Dietary Planning For Special Needs",
    description:
      "Tailored dietary plans for individuals with specific dietary requirements.",
    icon: UserPlus,
  },
  {
    title: "Market Research And Trends Analysis",
    description:
      "Staying ahead of the curve with in-depth market research and trend analysis.",
    icon: TrendingUp,
  },
  {
    title: "Food Photography And Styling",
    description:
      "Capturing your food's beauty with professional photography and styling.",
    icon: Camera,
  },
  {
    title: "Food Packaging Solutions",
    description: "Finding the perfect packaging for your food products.",
    icon: Package,
  },
  {
    title: "Enhance Your Food Business With AI Solutions",
    description:
      "Enhance quality and satisfaction through intelligent solutions!",
    icon: Cpu,
  },
  {
    title: "Food Blogging and Influencer Services",
    description:
      " Offering guidance on starting food blogs, social media content creation, or influencer marketing.",
    icon: Package,
  },
];

const ServiceCard = ({ title, description, icon: Icon, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: index * 0.1 },
        },
        hidden: { opacity: 0, y: 50 },
      }}
      className="service-card"
    >
      <motion.div
        className="service-card-content"
        whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Link
          style={{ textDecoration: "none" }}
          href="/food-services"
          className="service-card-inner"
        >
          <motion.div
            className="service-icon"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Icon size={64} />
          </motion.div>
          <h3 className="service-title">{title}</h3>
          <p className="service-description">{description}</p>
        </Link>
      </motion.div>
    </motion.div>
  );
};

const FoodServices = () => {
  return (
    <div className="food-services-container">
      <div className="food-services-content">
        <motion.h1
          className="services-heading"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-subtitle-blog-p">
            {" "}
            -- Food Technology Labs Services --
          </p>
        </motion.h1>
        <motion.h2
          className="services-subheading"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Your Success In Food Starts Here
        </motion.h2>
        <motion.p
          className="services-description"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Our team of food experts offers a wide range of services to help you
          achieve food excellence, from safety and quality consulting to recipe
          development and market analysis.
        </motion.p>
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodServices;
