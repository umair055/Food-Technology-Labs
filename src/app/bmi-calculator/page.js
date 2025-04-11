import BMICalculator from "@/app/components/BMICalculator/BMICalculator";
import React from "react";

export const metadata = {
  title: "BMI Calculator",
  description:
    "Calculate your Body Mass Index (BMI) based on height and weight.",
  alternates: {
    canonical: "https://www.foodtechnologylabs.com/bmi-calculator",
  },
  robots: "index, follow",
};
const page = () => {
  return <BMICalculator />;
};

export default page;
