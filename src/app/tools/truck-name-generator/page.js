import FoodTruckNameGenerator from "@/app/components/FoodTruckNameGenerator/FoodTruckNameGenerator";
import React from "react";
export const metadata = {
  title: "Truck Name Generator",
  description:
    "Generate creative and catchy names for your food truck business.",
  alternates: {
    canonical: "https://www.foodtechnologylabs.com/tools/truck-name-generator",
  },
  robots: "index, follow",
};
const page = () => {
  return <FoodTruckNameGenerator />;
};

export default page;
