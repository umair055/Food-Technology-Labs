"use client";

import { motion } from "framer-motion";
import {
  ChefHat,
  Fingerprint,
  Gauge,
  LightbulbIcon,
  Puzzle,
  Trophy,
} from "lucide-react";

const features = [
  {
    title: "Expertise You Can Trust",
    description:
      "With years of experience in the food industry, our team of professionals brings unparalleled knowledge and expertise to every project.",
    icon: <ChefHat className="h-6 w-6" />,
  },
  {
    title: "Tailored Solutions For Your Unique Needs",
    description:
      "We understand that every food business is different. That's why we offer customized services that are specifically designed to meet your individual needs.",
    icon: <Puzzle className="h-6 w-6" />,
  },
  {
    title: "Commitment To Quality And Safety",
    description:
      "At Food Technology Labs, quality and safety are at the heart of everything we do. We are dedicated to helping you meet the highest industry standards.",
    icon: <Fingerprint className="h-6 w-6" />,
  },
  {
    title: "Innovative And Creative Approaches",
    description:
      "From recipe development to food styling and packaging, we bring creativity and innovation to every aspect of your project.",
    icon: <LightbulbIcon className="h-6 w-6" />,
  },
  {
    title: "Collaborative Partnership",
    description:
      "We don't just work for you; we work with you. We see ourselves as an extension of your team, committed to your success.",
    icon: <Gauge className="h-6 w-6" />,
  },
  {
    title: "Proven Track Record",
    description:
      "Our success stories speak for themselves. We've helped numerous clients overcome challenges, launch successful products, and grow their businesses.",
    icon: <Trophy className="h-6 w-6" />,
  },
];

export default function EighthComponent() {
  // Change the component name here
  return (
    <div className="component-container">
      <div className="component-wrapper">
        <div className="text-center">
          <h2 className="title">Why Choose Food Technology Labs?</h2>
          <p className="subtitle">
            Innovating the future of food, one solution at a time.
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="feature-card"
            >
              <div className="feature-header">
                <div className="feature-icon">{feature.icon}</div>
                <div style={{ color: "#000" }} className="feature-title">
                  {feature.title}
                </div>
              </div>
              <div className="feature-content">
                <p className="feature-description">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        ></motion.div>
      </div>
    </div>
  );
}
