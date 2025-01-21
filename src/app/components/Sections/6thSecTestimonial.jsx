"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import Testimonial1 from "./images/images/testimonial-1.jpeg";
import Testimonial2 from "./images/images/testimonial-2.png";
import Testimonial3 from "./images/images/testimonial-3.jpeg";
const testimonials = [
  {
    id: 1,
    name: "John D.",
    role: "Food Manufacturer",
    content:
      "Food Technology Labs transformed our approach to food safety. Their consulting services are unmatched, and the team's expertise made compliance seamless.",
    image: Testimonial1,
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah K.",
    role: "Restaurant Owner",
    content:
      "Their meal planning services were a game-changer for my restaurant. The tailored dietary plans helped us attract a wider audience with diverse nutritional needs.",
    image: Testimonial2,
    rating: 5,
  },
  {
    id: 3,
    name: "Michael L.",
    role: "Food Tech Entrepreneur",
    content:
      "Thanks to their AI solutions, we optimized our food production process and saw a significant boost in efficiency. Highly recommended!",
    image: Testimonial3,
    rating: 5,
  },
  {
    id: 4,
    name: "Emily R.",
    role: "Product Developer",
    content:
      "Food Technology Labs is my go-to source for market research and recipe testing. They helped us launch a successful product line in record time!",
    image: Testimonial1,
    rating: 5,
  },
  {
    id: 5,
    name: "Dr. Rachel M.",
    role: "Food Scientist",
    content:
      "The tools and calculators available on their site are incredibly helpful. They’ve made my job as a food scientist so much easier!",
    image: Testimonial3,
    rating: 5,
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(""); // to track direction

  const nextTestimonial = () => {
    setDirection("next");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setDirection("prev");
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="testimonial-section">
      <div className="container">
        <h2 className="section-heading">What Our Customers Say</h2>
        <div className="testimonial-wrapper">
          <div
            key={currentIndex}
            className={`testimonial-card ${
              direction === "next" ? "slide-in-right" : "slide-in-left"
            }`}
          >
            <div className="testimonial-content">
              <Image
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                className="testimonial-image"
                width={100}
                height={100}
              />
              <div className="testimonial-info">
                <h3 className="testimonial-name">{currentTestimonial.name}</h3>
                <p className="testimonial-role">{currentTestimonial.role}</p>
                <div className="testimonial-rating">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="rating-icon" />
                  ))}
                </div>
              </div>
            </div>
            <blockquote className="testimonial-text">
              "{currentTestimonial.content}"
            </blockquote>
            <p className="verified-diner">- Verified Diner</p>
          </div>
          <div className="testimonial-navigation">
            <button onClick={prevTestimonial} className="navigation-button">
              <ChevronLeft className="navigation-icon" />
            </button>
            <button onClick={nextTestimonial} className="navigation-button">
              <ChevronRight className="navigation-icon" />
            </button>
          </div>
        </div>
      </div>
      <style>{`
  .testimonial-card {
    opacity: 1;
    transition: opacity 0.5s ease;
  }
  .slide-in-right {
    animation: slideInRight 0.5s forwards;
  }
  .slide-in-left {
    animation: slideInLeft 0.5s forwards;
  }
  @keyframes slideInRight {
    0% {
      opacity: 0;
      transform: translateX(100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes slideInLeft {
    0% {
      opacity: 0;
      transform: translateX(-100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`}</style>
    </section>
  );
}
