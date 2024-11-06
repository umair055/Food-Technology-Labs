import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import foodTechLogo from './cropped-Foodtechnologylabs-logo.png';  // Adjust the path according to your folder structure

// Navigation items data (you can replace the placeholder icons with actual icons)
const navItems = [
  { title: "SERVICES", icon: foodTechLogo, learnMoreLink: "#services" },
  { title: "FOOD TOOLS", icon: foodTechLogo, learnMoreLink: "#food-tools" },
  { title: "MINERALS", icon: foodTechLogo, learnMoreLink: "#minerals" },
  { title: "OUR BLOG", icon: foodTechLogo, learnMoreLink: "#our-blog" },
];

function NavigationBar() {
  const [activeService, setActiveService] = useState(null);

  // Handle the click to toggle service display
  const handleServiceClick = (title) => {
    // If the clicked title is "SERVICES", just toggle activeService state
    if (title === "SERVICES") {
      setActiveService(activeService === "SERVICES" ? null : "SERVICES");
    }
  };

  return (
    <div className="w-full bg-white shadow-md">
      {/* Navigation bar container */}
      <nav className="container mx-auto px-4 py-6">
        <ul className="flex justify-between items-center">
          {navItems.map((item) => (
            <li key={item.title} className="flex flex-col items-center">
              <button
                onClick={() => handleServiceClick(item.title)}
                className="flex flex-col items-center focus:outline-none"
              >
                {/* Display icon and title */}
                <img src={item.icon} alt={item.title} width={60} height={60} className="mb-2" />
                <span className="text-lg font-semibold text-green-700">{item.title}</span>
              </button>
              {/* Link to the section */}
              <Link to={item.learnMoreLink} className="text-sm text-gray-500 hover:text-green-700">
                learn more
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Conditional rendering of the "Our Services" section */}
      {activeService === "SERVICES" && (
        <div className="container mx-auto px-4 py-6 bg-gray-100">
          <h2 className="text-2xl font-bold mb-4">Our Services</h2>
          <ul className="list-disc list-inside">
            <li>Eco-Friendly Packaging Solutions</li>
            <li>Nutritional Analysis</li>
            <li>Quality Testing for Food and Minerals</li>
            <li>Supply Chain Optimization</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavigationBar;
