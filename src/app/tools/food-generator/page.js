import AdvancedFoodGenerator from "@/app/components/FoodGenerator/FoodGenerator";
import React from "react";

export const metadata = {
  title: "Food Generator",
  description:
    "Generate random food suggestions to inspire your next meal or recipe.",
  alternates: {
    canonical: "https://www.foodtechnologylabs.com/tools/food-generator",
  },
  robots: "index, follow",
};
const page = () => {
  return <AdvancedFoodGenerator />;
};

export default page;
