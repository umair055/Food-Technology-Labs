"use client";
import React from "react";
import { Calculator, Utensils, BookOpen } from "lucide-react";

import { useRouter } from "next/navigation";
const ServiceSection = () => {
  const router = useRouter();
  return (
    <section className="section service">
      <div className="container">
        <ul className="service-list">
          <li onClick={() => router.push("/tools")} className="service-item">
            <div className="item-icon">
              <Calculator className="w-10 h-10 text-orange-500" />
            </div>
            <h3 className="h3 item-title">Food Tools</h3>
          </li>

          <li
            onClick={() => router.push("/food-services")}
            className="service-item"
          >
            <div className="item-icon">
              <Utensils className="w-10 h-10 text-green-500" />
            </div>
            <h3 className="h3 item-title">Food Services</h3>
          </li>

          <li
            onClick={() => router.push("/blogs?page=1")}
            className="service-item"
          >
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
