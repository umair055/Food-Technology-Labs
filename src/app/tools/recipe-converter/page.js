import AdvancedRecipeConverter from "@/app/components/RecipeConverter/RecipeConverter";
import React from "react";

export const metadata = {
  title: "Recipe Converter",
  description:
    "Convert recipes between different units of measurement and serving sizes.",
  alternates: {
    canonical: "https://www.foodtechnologylabs.com/tools/recipe-converter",
  },
  robots: "index, follow",
};
function page() {
  return <AdvancedRecipeConverter />;
}

export default page;
