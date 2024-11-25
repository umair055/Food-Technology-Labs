import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Food Critic",
    content:
      "The flavors in their dishes are simply extraordinary. Each bite is a journey through exquisite tastes and textures.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    id: 2,
    name: "Mike Chen",
    role: "Chef",
    content:
      "As a chef myself, I'm impressed by the creativity and attention to detail in every dish. It's culinary artistry at its finest.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Food Blogger",
    content:
      "From the ambiance to the service to the food itself, every aspect of my dining experience was absolutely perfect.",
    image: "/placeholder.svg?height=100&width=100",
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
              <img
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                className="testimonial-image"
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
