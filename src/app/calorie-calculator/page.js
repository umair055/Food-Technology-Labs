import CalorieCalculator from "@/app/components/CalorieCalculator/CalorieCalculator";
import React from "react";

export const metadata = {
  title: "Calorie Calculator",
  description: "Calculate your daily caloric needs based on activity level.",
  alternates: {
    canonical: "https://www.foodtechnologylabs.com/calorie-calculator",
  },
  robots: "index, follow",
};
const page = () => {
  return <CalorieCalculator />;
};

export default page;
