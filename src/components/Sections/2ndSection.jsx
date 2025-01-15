import React from "react";
import { Calculator, Utensils, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
const ServiceSection = () => {
  const navigate = useNavigate();
  return (
    <section className="section service">
      <div className="container">
        <ul className="service-list">
          <li onClick={() => navigate("/tools")} className="service-item">
            <div className="item-icon">
              <Calculator className="w-10 h-10 text-orange-500" />
            </div>
            <h3 className="h3 item-title">Food Tools</h3>
          </li>

          <li onClick={() => navigate("/food-services")} className="service-item">
            <div className="item-icon">
              <Utensils className="w-10 h-10 text-green-500" />
            </div>
            <h3 className="h3 item-title">Food Services</h3>
          </li>

          <li onClick={() => navigate("/blog")} className="service-item">
            <div className="item-icon">
              <BookOpen className="w-10 h-10 text-blue-500" />
            </div>
            <h3 className="h3 item-title">Our Blogs</h3>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ServiceSection;
