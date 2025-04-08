"use client";

import { useState, useEffect, useRef } from "react";

// MUI components
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Button,
  Tabs,
  Tab,
  Chip,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  IconButton,
  Grid,
  Paper,
  Divider,
  Switch,
  FormControlLabel,
  Tooltip,
  CircularProgress,
  Slider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Snackbar,
  Alert,
  createTheme,
  ThemeProvider,
} from "@mui/material";

// Icons
const DiceIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
    <circle cx="8.5" cy="8.5" r="1.5"></circle>
    <circle cx="15.5" cy="8.5" r="1.5"></circle>
    <circle cx="15.5" cy="15.5" r="1.5"></circle>
    <circle cx="8.5" cy="15.5" r="1.5"></circle>
  </svg>
);

const ListIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="8" y1="6" x2="21" y2="6"></line>
    <line x1="8" y1="12" x2="21" y2="12"></line>
    <line x1="8" y1="18" x2="21" y2="18"></line>
    <line x1="3" y1="6" x2="3.01" y2="6"></line>
    <line x1="3" y1="12" x2="3.01" y2="12"></line>
    <line x1="3" y1="18" x2="3.01" y2="18"></line>
  </svg>
);

const FastFoodIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 11v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3"></path>
    <path d="M12 19H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3.83"></path>
    <path d="m3 11 7.77-6.04a2 2 0 0 1 2.46 0L21 11H3Z"></path>
    <path d="M12.97 19.77 7 15h12.5l-3.75 4.5a2 2 0 0 1-2.78.27Z"></path>
  </svg>
);

const SpinWheelIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M12 2a10 10 0 0 1 10 10"></path>
    <path d="M12 12V2"></path>
  </svg>
);

const DinnerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path>
    <path d="M7 2v20"></path>
    <path d="M21 15V2"></path>
    <path d="M18 15V2"></path>
    <path d="M21 15a3 3 0 1 1-6 0"></path>
  </svg>
);

const IngredientsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 7h-9"></path>
    <path d="M14 17H5"></path>
    <circle cx="17" cy="17" r="3"></circle>
    <circle cx="7" cy="7" r="3"></circle>
  </svg>
);

const PlacesIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const HeartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
  </svg>
);

const ShoppingCartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="8" cy="21" r="1"></circle>
    <circle cx="19" cy="21" r="1"></circle>
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
  </svg>
);

const RefreshIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
    <path d="M21 3v5h-5"></path>
    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
    <path d="M3 21v-5h5"></path>
  </svg>
);

const ChevronDownIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m6 9 6 6 6-6"></path>
  </svg>
);

// Create a theme with the specified green color
const theme = createTheme({
  palette: {
    primary: {
      main: "hsl(152, 95%, 39%)",
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          borderRadius: 12,
          maxWidth: 1000,
          width: "100%",
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          backgroundColor: "hsl(152, 95%, 39%)",
          color: "#ffffff",
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          padding: "24px 16px",
        },
        title: {
          fontSize: "1.5rem",
          fontWeight: 700,
          textAlign: "center",
        },
        subheader: {
          color: "rgba(255, 255, 255, 0.9)",
          textAlign: "center",
        },
      },
    },
  },
});

// Food database
const foodDatabase = {
  cuisines: [
    { id: "italian", name: "Italian" },
    { id: "chinese", name: "Chinese" },
    { id: "indian", name: "Indian" },
    { id: "american", name: "American" },
    { id: "thai", name: "Thai" },
    { id: "mediterranean", name: "Mediterranean" },
    { id: "mexican", name: "Mexican" },
    { id: "japanese", name: "Japanese" },
    { id: "french", name: "French" },
    { id: "korean", name: "Korean" },
    { id: "vietnamese", name: "Vietnamese" },
    { id: "greek", name: "Greek" },
    { id: "spanish", name: "Spanish" },
    { id: "middle_eastern", name: "Middle Eastern" },
    { id: "caribbean", name: "Caribbean" },
  ],

  dietaryPreferences: [
    { id: "vegan", name: "Vegan" },
    { id: "vegetarian", name: "Vegetarian" },
    { id: "gluten_free", name: "Gluten-Free" },
    { id: "keto", name: "Keto" },
    { id: "paleo", name: "Paleo" },
    { id: "halal", name: "Halal" },
    { id: "organic", name: "Organic" },
    { id: "dairy_free", name: "Dairy-Free" },
    { id: "nut_free", name: "Nut-Free" },
    { id: "low_carb", name: "Low-Carb" },
  ],

  moods: [
    { id: "comfort", name: "Comfort Food" },
    { id: "healthy", name: "Light & Healthy" },
    { id: "quick", name: "Quick Bites" },
    { id: "romantic", name: "Romantic Dinner" },
    { id: "party", name: "Party Food" },
    { id: "indulgent", name: "Indulgent" },
    { id: "energizing", name: "Energizing" },
    { id: "refreshing", name: "Refreshing" },
  ],

  seasons: [
    { id: "spring", name: "Spring" },
    { id: "summer", name: "Summer" },
    { id: "fall", name: "Fall" },
    { id: "winter", name: "Winter" },
  ],

  prepTimes: [
    { id: "under_10", name: "Under 10 minutes" },
    { id: "under_30", name: "Under 30 minutes" },
    { id: "under_60", name: "Under 60 minutes" },
    { id: "over_60", name: "Over 60 minutes" },
  ],

  meals: [
    {
      id: 1,
      name: "Spaghetti Carbonara",
      cuisine: "italian",
      dietary: ["halal"],
      mood: ["comfort", "romantic"],
      season: ["all"],
      prepTime: "under_30",
      isEcoFriendly: true,
      isFastFood: false,
      isDinner: true,
      ingredients: [
        "pasta",
        "eggs",
        "bacon",
        "parmesan cheese",
        "black pepper",
      ],
      regions: ["rome", "italy"],
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.8,
      chefNotes: "Use freshly grated Pecorino Romano for authentic flavor.",
    },
    {
      id: 2,
      name: "Vegetable Stir Fry",
      cuisine: "chinese",
      dietary: ["vegan", "vegetarian", "gluten_free", "dairy_free"],
      mood: ["healthy", "quick"],
      season: ["all"],
      prepTime: "under_30",
      isEcoFriendly: true,
      isFastFood: false,
      isDinner: true,
      ingredients: [
        "broccoli",
        "carrots",
        "bell peppers",
        "tofu",
        "soy sauce",
        "ginger",
        "garlic",
      ],
      regions: ["china", "asia"],
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.5,
      chefNotes: "Cut vegetables into similar sizes for even cooking.",
    },
    {
      id: 3,
      name: "Butter Chicken",
      cuisine: "indian",
      dietary: ["halal"],
      mood: ["comfort", "indulgent"],
      season: ["all"],
      prepTime: "over_60",
      isEcoFriendly: false,
      isFastFood: false,
      isDinner: true,
      ingredients: [
        "chicken",
        "butter",
        "cream",
        "tomato sauce",
        "garam masala",
        "fenugreek",
      ],
      regions: ["punjab", "india"],
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.9,
      chefNotes: "Marinate the chicken overnight for best results.",
    },
    {
      id: 4,
      name: "Cheeseburger",
      cuisine: "american",
      dietary: ["halal"],
      mood: ["comfort", "indulgent", "quick"],
      season: ["summer"],
      prepTime: "under_30",
      isEcoFriendly: false,
      isFastFood: true,
      isDinner: true,
      ingredients: [
        "ground beef",
        "cheese",
        "lettuce",
        "tomato",
        "onion",
        "burger bun",
      ],
      regions: ["usa", "north america"],
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.3,
      chefNotes: "Use 80/20 ground beef for juicy burgers.",
    },
    {
      id: 5,
      name: "Pad Thai",
      cuisine: "thai",
      dietary: ["halal"],
      mood: ["comfort", "quick"],
      season: ["all"],
      prepTime: "under_30",
      isEcoFriendly: true,
      isFastFood: false,
      isDinner: true,
      ingredients: [
        "rice noodles",
        "shrimp",
        "tofu",
        "bean sprouts",
        "peanuts",
        "eggs",
        "fish sauce",
      ],
      regions: ["thailand", "asia"],
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.7,
      chefNotes:
        "Soak noodles in cold water instead of hot for better texture.",
    },
    {
      id: 6,
      name: "Greek Salad",
      cuisine: "mediterranean",
      dietary: ["vegetarian", "gluten_free", "keto", "paleo"],
      mood: ["healthy", "refreshing"],
      season: ["summer"],
      prepTime: "under_10",
      isEcoFriendly: true,
      isFastFood: false,
      isDinner: false,
      ingredients: [
        "cucumber",
        "tomato",
        "red onion",
        "feta cheese",
        "olives",
        "olive oil",
        "oregano",
      ],
      regions: ["greece", "mediterranean"],
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.6,
      chefNotes: "Use authentic Greek feta made from sheep's milk.",
    },
    {
      id: 7,
      name: "Chicken Tacos",
      cuisine: "mexican",
      dietary: ["halal", "gluten_free"],
      mood: ["party", "quick"],
      season: ["all"],
      prepTime: "under_30",
      isEcoFriendly: true,
      isFastFood: true,
      isDinner: true,
      ingredients: [
        "chicken",
        "corn tortillas",
        "avocado",
        "lime",
        "cilantro",
        "onion",
      ],
      regions: ["mexico", "latin america"],
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.5,
      chefNotes: "Toast tortillas on an open flame for authentic flavor.",
    },
    {
      id: 8,
      name: "Sushi Rolls",
      cuisine: "japanese",
      dietary: ["gluten_free"],
      mood: ["healthy", "party"],
      season: ["all"],
      prepTime: "over_60",
      isEcoFriendly: false,
      isFastFood: false,
      isDinner: true,
      ingredients: [
        "sushi rice",
        "nori",
        "fish",
        "avocado",
        "cucumber",
        "soy sauce",
        "wasabi",
      ],
      regions: ["japan", "asia"],
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.8,
      chefNotes: "Use short-grain Japanese rice for best results.",
    },
    {
      id: 9,
      name: "Croissant",
      cuisine: "french",
      dietary: ["vegetarian"],
      mood: ["indulgent", "comfort"],
      season: ["all"],
      prepTime: "over_60",
      isEcoFriendly: true,
      isFastFood: false,
      isDinner: false,
      ingredients: ["flour", "butter", "yeast", "sugar", "salt"],
      regions: ["france", "europe"],
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.9,
      chefNotes: "Keep the dough cold throughout the lamination process.",
    },
    {
      id: 10,
      name: "Bibimbap",
      cuisine: "korean",
      dietary: ["halal"],
      mood: ["healthy", "comfort"],
      season: ["all"],
      prepTime: "under_60",
      isEcoFriendly: true,
      isFastFood: false,
      isDinner: true,
      ingredients: [
        "rice",
        "beef",
        "spinach",
        "carrots",
        "bean sprouts",
        "egg",
        "gochujang",
      ],
      regions: ["korea", "asia"],
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.7,
      chefNotes: "Serve in a hot stone bowl for crispy rice on the bottom.",
    },
    {
      id: 11,
      name: "Pho",
      cuisine: "vietnamese",
      dietary: ["halal", "dairy_free"],
      mood: ["comfort", "healthy"],
      season: ["winter", "fall"],
      prepTime: "over_60",
      isEcoFriendly: true,
      isFastFood: false,
      isDinner: true,
      ingredients: [
        "rice noodles",
        "beef",
        "bean sprouts",
        "herbs",
        "lime",
        "beef broth",
      ],
      regions: ["vietnam", "asia"],
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.8,
      chefNotes: "Simmer the broth for at least 6 hours for deep flavor.",
    },
    {
      id: 12,
      name: "Avocado Toast",
      cuisine: "american",
      dietary: ["vegetarian", "vegan", "halal"],
      mood: ["healthy", "quick"],
      season: ["all"],
      prepTime: "under_10",
      isEcoFriendly: true,
      isFastFood: false,
      isDinner: false,
      ingredients: [
        "bread",
        "avocado",
        "lemon juice",
        "salt",
        "red pepper flakes",
      ],
      regions: ["usa", "australia"],
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.2,
      chefNotes: "Use sourdough bread for extra flavor.",
    },
    {
      id: 13,
      name: "Pizza Margherita",
      cuisine: "italian",
      dietary: ["vegetarian", "halal"],
      mood: ["comfort", "party"],
      season: ["all"],
      prepTime: "under_60",
      isEcoFriendly: true,
      isFastFood: true,
      isDinner: true,
      ingredients: [
        "pizza dough",
        "tomatoes",
        "mozzarella",
        "basil",
        "olive oil",
      ],
      regions: ["naples", "italy"],
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.9,
      chefNotes: "Cook at the highest temperature your oven can reach.",
    },
    {
      id: 14,
      name: "Chicken Tikka Masala",
      cuisine: "indian",
      dietary: ["halal", "gluten_free"],
      mood: ["comfort", "indulgent"],
      season: ["all"],
      prepTime: "over_60",
      isEcoFriendly: false,
      isFastFood: false,
      isDinner: true,
      ingredients: [
        "chicken",
        "yogurt",
        "cream",
        "tomato sauce",
        "garam masala",
      ],
      regions: ["uk", "india"],
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.7,
      chefNotes: "Grill the marinated chicken before adding to the sauce.",
    },
    {
      id: 15,
      name: "Caesar Salad",
      cuisine: "american",
      dietary: ["halal"],
      mood: ["healthy", "quick"],
      season: ["all"],
      prepTime: "under_30",
      isEcoFriendly: true,
      isFastFood: false,
      isDinner: false,
      ingredients: [
        "romaine lettuce",
        "croutons",
        "parmesan cheese",
        "caesar dressing",
        "chicken",
      ],
      regions: ["usa", "mexico"],
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.5,
      chefNotes: "Make your own dressing with anchovies for authentic flavor.",
    },
    {
      id: 16,
      name: "Beef Bourguignon",
      cuisine: "french",
      dietary: ["halal"],
      mood: ["comfort", "romantic"],
      season: ["winter", "fall"],
      prepTime: "over_60",
      isEcoFriendly: false,
      isFastFood: false,
      isDinner: true,
      ingredients: [
        "beef",
        "red wine",
        "carrots",
        "onions",
        "mushrooms",
        "bacon",
        "herbs",
      ],
      regions: ["burgundy", "france"],
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.8,
      chefNotes: "Use a full-bodied red wine like Burgundy or Pinot Noir.",
    },
    {
      id: 17,
      name: "Falafel Wrap",
      cuisine: "middle_eastern",
      dietary: ["vegetarian", "vegan", "halal"],
      mood: ["healthy", "quick"],
      season: ["all"],
      prepTime: "under_30",
      isEcoFriendly: true,
      isFastFood: true,
      isDinner: false,
      ingredients: [
        "chickpeas",
        "herbs",
        "spices",
        "flatbread",
        "tahini",
        "lettuce",
        "tomato",
      ],
      regions: ["middle east", "mediterranean"],
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.6,
      chefNotes: "Use dried chickpeas soaked overnight, not canned.",
    },
    {
      id: 18,
      name: "Paella",
      cuisine: "spanish",
      dietary: ["halal"],
      mood: ["party", "romantic"],
      season: ["summer"],
      prepTime: "over_60",
      isEcoFriendly: true,
      isFastFood: false,
      isDinner: true,
      ingredients: [
        "rice",
        "saffron",
        "chicken",
        "seafood",
        "bell peppers",
        "peas",
      ],
      regions: ["valencia", "spain"],
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.7,
      chefNotes: "Don't stir the rice once you add the liquid.",
    },
    {
      id: 19,
      name: "Açaí Bowl",
      cuisine: "brazilian",
      dietary: ["vegetarian", "vegan", "gluten_free", "halal"],
      mood: ["healthy", "energizing", "refreshing"],
      season: ["summer"],
      prepTime: "under_10",
      isEcoFriendly: true,
      isFastFood: false,
      isDinner: false,
      ingredients: ["açaí puree", "banana", "granola", "berries", "honey"],
      regions: ["brazil", "south america"],
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.5,
      chefNotes: "Freeze fruit beforehand for a thicker consistency.",
    },
    {
      id: 20,
      name: "Ramen",
      cuisine: "japanese",
      dietary: ["halal"],
      mood: ["comfort", "energizing"],
      season: ["winter", "fall"],
      prepTime: "over_60",
      isEcoFriendly: false,
      isFastFood: false,
      isDinner: true,
      ingredients: [
        "ramen noodles",
        "pork",
        "egg",
        "green onions",
        "nori",
        "broth",
      ],
      regions: ["japan", "asia"],
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.9,
      chefNotes: "Simmer the broth for at least 8 hours for authentic flavor.",
    },
    {
      id: 21,
      name: "Quinoa Salad",
      cuisine: "mediterranean",
      dietary: ["vegetarian", "vegan", "gluten_free", "halal", "dairy_free"],
      mood: ["healthy", "energizing"],
      season: ["spring", "summer"],
      prepTime: "under_30",
      isEcoFriendly: true,
      isFastFood: false,
      isDinner: false,
      ingredients: [
        "quinoa",
        "cucumber",
        "tomato",
        "red onion",
        "lemon juice",
        "olive oil",
        "herbs",
      ],
      regions: ["mediterranean"],
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.4,
      chefNotes: "Rinse quinoa thoroughly before cooking to remove bitterness.",
    },
    {
      id: 22,
      name: "Fish and Chips",
      cuisine: "british",
      dietary: ["halal"],
      mood: ["comfort", "indulgent"],
      season: ["all"],
      prepTime: "under_60",
      isEcoFriendly: false,
      isFastFood: true,
      isDinner: true,
      ingredients: ["white fish", "potatoes", "flour", "beer", "tartar sauce"],
      regions: ["uk", "europe"],
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.6,
      chefNotes:
        "Use a light beer for the batter and make sure the oil is very hot.",
    },
    {
      id: 23,
      name: "Mushroom Risotto",
      cuisine: "italian",
      dietary: ["vegetarian", "gluten_free", "halal"],
      mood: ["comfort", "romantic"],
      season: ["fall", "winter"],
      prepTime: "under_60",
      isEcoFriendly: true,
      isFastFood: false,
      isDinner: true,
      ingredients: [
        "arborio rice",
        "mushrooms",
        "onion",
        "white wine",
        "parmesan cheese",
        "butter",
        "vegetable broth",
      ],
      regions: ["northern italy", "europe"],
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.7,
      chefNotes:
        "Stir constantly and add broth gradually for the creamiest texture.",
    },
    {
      id: 24,
      name: "Chicken Shawarma",
      cuisine: "middle_eastern",
      dietary: ["halal"],
      mood: ["comfort", "quick"],
      season: ["all"],
      prepTime: "under_60",
      isEcoFriendly: true,
      isFastFood: true,
      isDinner: true,
      ingredients: [
        "chicken thighs",
        "yogurt",
        "spices",
        "flatbread",
        "garlic sauce",
        "pickles",
      ],
      regions: ["middle east", "mediterranean"],
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.8,
      chefNotes: "Marinate the chicken overnight for maximum flavor.",
    },
  ],

  regions: [
    { id: "usa", name: "United States" },
    { id: "italy", name: "Italy" },
    { id: "china", name: "China" },
    { id: "india", name: "India" },
    { id: "japan", name: "Japan" },
    { id: "france", name: "France" },
    { id: "mexico", name: "Mexico" },
    { id: "thailand", name: "Thailand" },
    { id: "spain", name: "Spain" },
    { id: "middle_east", name: "Middle East" },
    { id: "uk", name: "United Kingdom" },
    { id: "korea", name: "Korea" },
    { id: "vietnam", name: "Vietnam" },
    { id: "greece", name: "Greece" },
    { id: "caribbean", name: "Caribbean" },
  ],
};

// Wheel colors for spin wheel mode
const wheelColors = [
  "#FF6384",
  "#36A2EB",
  "#FFCE56",
  "#4BC0C0",
  "#9966FF",
  "#FF9F40",
  "#8AC249",
  "#EA526F",
  "#49C5B6",
  "#9A6FB0",
];

export default function AdvancedFoodGenerator() {
  // State variables
  const [mode, setMode] = useState("random");
  const [selectedCuisines, setSelectedCuisines] = useState([]);
  const [selectedDietary, setSelectedDietary] = useState([]);
  const [selectedMood, setSelectedMood] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState([]);
  const [selectedPrepTime, setSelectedPrepTime] = useState([]);
  const [isEcoFriendly, setIsEcoFriendly] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [availableIngredients, setAvailableIngredients] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const [results, setResults] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinResult, setSpinResult] = useState(null);
  const [showSpinDialog, setShowSpinDialog] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [groceryList, setGroceryList] = useState([]);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const canvasRef = useRef(null);
  const wheelItems = useRef([]);

  // Set up wheel items when mode changes to spin
  useEffect(() => {
    if (mode === "spin") {
      // Filter meals based on current filters
      const filteredMeals = filterMeals();

      // Take up to 10 random meals for the wheel
      const randomMeals = [...filteredMeals]
        .sort(() => 0.5 - Math.random())
        .slice(0, 10);

      wheelItems.current = randomMeals.map((meal) => meal.name);

      if (wheelItems.current.length > 0) {
        drawWheel();
      }
    }
  }, [mode]);

  // Filter meals based on selected criteria
  const filterMeals = () => {
    return foodDatabase.meals.filter((meal) => {
      // Filter by cuisine
      if (
        selectedCuisines.length > 0 &&
        !selectedCuisines.includes(meal.cuisine)
      ) {
        return false;
      }

      // Filter by dietary preferences
      if (
        selectedDietary.length > 0 &&
        !selectedDietary.some((diet) => meal.dietary.includes(diet))
      ) {
        return false;
      }

      // Filter by mood
      if (
        selectedMood.length > 0 &&
        !selectedMood.some((mood) => meal.mood.includes(mood))
      ) {
        return false;
      }

      // Filter by season
      if (
        selectedSeason.length > 0 &&
        !selectedSeason.some(
          (season) =>
            meal.season.includes(season) || meal.season.includes("all")
        )
      ) {
        return false;
      }

      // Filter by prep time
      if (
        selectedPrepTime.length > 0 &&
        !selectedPrepTime.includes(meal.prepTime)
      ) {
        return false;
      }

      // Filter by eco-friendly
      if (isEcoFriendly && !meal.isEcoFriendly) {
        return false;
      }

      // Filter by mode
      if (mode === "fastfood" && !meal.isFastFood) {
        return false;
      }

      if (mode === "dinner" && !meal.isDinner) {
        return false;
      }

      // Filter by region
      if (
        mode === "places" &&
        selectedRegion &&
        !meal.regions.includes(selectedRegion)
      ) {
        return false;
      }

      // Filter by ingredients
      if (mode === "ingredients" && availableIngredients.length > 0) {
        const hasRequiredIngredients = availableIngredients.some((ingredient) =>
          meal.ingredients.some((mealIngredient) =>
            mealIngredient.toLowerCase().includes(ingredient.toLowerCase())
          )
        );
        if (!hasRequiredIngredients) {
          return false;
        }
      }

      // Filter by search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          meal.name.toLowerCase().includes(query) ||
          meal.cuisine.toLowerCase().includes(query) ||
          meal.ingredients.some((ingredient) =>
            ingredient.toLowerCase().includes(query)
          )
        );
      }

      return true;
    });
  };

  // Generate random food suggestions
  const generateFood = () => {
    setIsLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      const filteredMeals = filterMeals();

      if (filteredMeals.length === 0) {
        setSnackbarMessage(
          "No meals match your criteria. Try adjusting your filters."
        );
        setSnackbarSeverity("warning");
        setShowSnackbar(true);
        setResults([]);
      } else {
        // For random mode, select one random meal
        if (mode === "random") {
          const randomIndex = Math.floor(Math.random() * filteredMeals.length);
          setResults([filteredMeals[randomIndex]]);
          setSelectedFood(filteredMeals[randomIndex]);
        }
        // For list mode, show multiple results
        else if (mode === "list") {
          // Shuffle and take up to 6 meals
          const shuffled = [...filteredMeals].sort(() => 0.5 - Math.random());
          setResults(shuffled.slice(0, 6));
        }
        // For other modes, show all matching results
        else {
          setResults(filteredMeals);
        }
      }

      setIsLoading(false);
    }, 800);
  };

  // Draw the spin wheel
  const drawWheel = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 10;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const items = wheelItems.current;
    const totalItems = items.length;

    if (totalItems === 0) return;

    const arc = (2 * Math.PI) / totalItems;

    for (let i = 0; i < totalItems; i++) {
      const angle = i * arc;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, angle, angle + arc);
      ctx.closePath();

      ctx.fillStyle = wheelColors[i % wheelColors.length];
      ctx.fill();

      // Add text
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(angle + arc / 2);
      ctx.textAlign = "right";
      ctx.fillStyle = "#fff";
      ctx.font = "bold 14px Arial";

      // Truncate text if too long
      let text = items[i];
      if (text.length > 12) {
        text = text.substring(0, 10) + "...";
      }

      ctx.fillText(text, radius - 20, 5);
      ctx.restore();
    }

    // Draw center circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, 20, 0, 2 * Math.PI);
    ctx.fillStyle = "hsl(152, 95%, 39%)";
    ctx.fill();

    // Draw arrow
    ctx.beginPath();
    ctx.moveTo(centerX + 30, centerY);
    ctx.lineTo(centerX + 10, centerY - 10);
    ctx.lineTo(centerX + 10, centerY + 10);
    ctx.closePath();
    ctx.fillStyle = "#fff";
    ctx.fill();
  };

  // Spin the wheel
  const spinWheel = () => {
    if (isSpinning || wheelItems.current.length === 0) return;

    setIsSpinning(true);
    setSpinResult(null);
    setShowSpinDialog(true);

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    let currentAngle = 0;
    const totalItems = wheelItems.current.length;
    const spinAngle = 2 * Math.PI * (5 + Math.random() * 5); // 5-10 full rotations
    const spinTime = 3000; // 3 seconds
    const startTime = Date.now();

    const spin = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / spinTime, 1);

      // Easing function for natural slowdown
      const easeOut = (t) => 1 - Math.pow(1 - t, 3);
      const angle = spinAngle * easeOut(progress);

      // Rotate canvas and redraw
      ctx.save();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.translate(centerX, centerY);
      ctx.rotate(angle);
      ctx.translate(-centerX, -centerY);

      // Redraw wheel
      drawWheel();

      ctx.restore();

      currentAngle = angle;

      if (progress < 1) {
        requestAnimationFrame(spin);
      } else {
        // Determine the winning segment
        const arc = (2 * Math.PI) / totalItems;
        const normalizedAngle =
          ((currentAngle % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
        const winningIndex = totalItems - 1 - Math.floor(normalizedAngle / arc);

        const winningFood = wheelItems.current[winningIndex % totalItems];
        const winningMeal = foodDatabase.meals.find(
          (meal) => meal.name === winningFood
        );

        setSpinResult(winningMeal);
        setIsSpinning(false);
      }
    };

    requestAnimationFrame(spin);
  };

  // Add to favorites
  const addToFavorites = (meal) => {
    if (!favorites.some((fav) => fav.id === meal.id)) {
      setFavorites([...favorites, meal]);
      setSnackbarMessage(`${meal.name} added to favorites!`);
      setSnackbarSeverity("success");
      setShowSnackbar(true);
    } else {
      setSnackbarMessage(`${meal.name} is already in your favorites!`);
      setSnackbarSeverity("info");
      setShowSnackbar(true);
    }
  };

  // Add to grocery list
  const addToGroceryList = (meal) => {
    const newIngredients = meal.ingredients.filter(
      (ingredient) => !groceryList.includes(ingredient)
    );

    if (newIngredients.length > 0) {
      setGroceryList([...groceryList, ...newIngredients]);
      setSnackbarMessage(`Ingredients for ${meal.name} added to grocery list!`);
      setSnackbarSeverity("success");
      setShowSnackbar(true);
    } else {
      setSnackbarMessage("All ingredients are already in your grocery list!");
      setSnackbarSeverity("info");
      setShowSnackbar(true);
    }
  };

  // Handle mode change
  const handleModeChange = (event, newMode) => {
    if (newMode !== null) {
      setMode(newMode);
      setResults([]);
      setSelectedFood(null);
    }
  };

  // Render food card
  const renderFoodCard = (meal) => {
    return (
      <Paper
        elevation={3}
        sx={{
          p: 2,
          borderRadius: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          transition: "transform 0.2s",
          "&:hover": {
            transform: "translateY(-5px)",
          },
        }}
      >
        <Box
          component="img"
          src={meal.image}
          alt={meal.name}
          sx={{
            width: "100%",
            height: 150,
            objectFit: "cover",
            borderRadius: 1,
            mb: 2,
          }}
        />

        <Typography variant="h6" gutterBottom>
          {meal.name}
        </Typography>

        <Box sx={{ mb: 1 }}>
          <Typography variant="body2" color="text.secondary">
            {foodDatabase.cuisines.find((c) => c.id === meal.cuisine)?.name ||
              meal.cuisine}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", mt: 0.5 }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Box
                key={i}
                component="span"
                sx={{
                  color:
                    i < Math.floor(meal.rating)
                      ? "primary.main"
                      : "text.disabled",
                  fontSize: "18px",
                }}
              >
                ★
              </Box>
            ))}
            <Typography variant="body2" sx={{ ml: 0.5 }}>
              {meal.rating.toFixed(1)}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mb: 1 }}>
          {meal.dietary.slice(0, 2).map((diet) => (
            <Chip
              key={diet}
              label={
                foodDatabase.dietaryPreferences.find((d) => d.id === diet)
                  ?.name || diet
              }
              size="small"
              sx={{ fontSize: "0.7rem" }}
            />
          ))}
          {meal.dietary.length > 2 && (
            <Chip
              label={`+${meal.dietary.length - 2}`}
              size="small"
              variant="outlined"
              sx={{ fontSize: "0.7rem" }}
            />
          )}
        </Box>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          Prep time:{" "}
          {foodDatabase.prepTimes.find((p) => p.id === meal.prepTime)?.name ||
            meal.prepTime}
        </Typography>

        <Box
          sx={{ mt: "auto", display: "flex", justifyContent: "space-between" }}
        >
          <Button
            size="small"
            onClick={() => setSelectedFood(meal)}
            variant="outlined"
          >
            Details
          </Button>

          <Box>
            <Tooltip title="Add to favorites">
              <IconButton
                size="small"
                onClick={() => addToFavorites(meal)}
                sx={{
                  color: favorites.some((fav) => fav.id === meal.id)
                    ? "#ff6d75"
                    : "inherit",
                }}
              >
                <HeartIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Add to grocery list">
              <IconButton size="small" onClick={() => addToGroceryList(meal)}>
                <ShoppingCartIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </Paper>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 2,
          backgroundColor: "#ffffff",
        }}
      >
        <Card>
          <CardHeader
            title="Random Food Generator"
            subheader="Smart & Personalized Meal Ideas"
          />
          <CardContent>
            <Tabs
              value={mode}
              onChange={handleModeChange}
              variant="scrollable"
              scrollButtons="auto"
              sx={{ mb: 3 }}
            >
              <Tab
                value="random"
                label="Random"
                icon={<DiceIcon />}
                iconPosition="start"
              />
              <Tab
                value="list"
                label="List"
                icon={<ListIcon />}
                iconPosition="start"
              />
              <Tab
                value="fastfood"
                label="Fast Food"
                icon={<FastFoodIcon />}
                iconPosition="start"
              />
              <Tab
                value="spin"
                label="Spin Wheel"
                icon={<SpinWheelIcon />}
                iconPosition="start"
              />
              <Tab
                value="dinner"
                label="Dinner"
                icon={<DinnerIcon />}
                iconPosition="start"
              />
              <Tab
                value="ingredients"
                label="Ingredients"
                icon={<IngredientsIcon />}
                iconPosition="start"
              />
              <Tab
                value="places"
                label="Places"
                icon={<PlacesIcon />}
                iconPosition="start"
              />
            </Tabs>

            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 2,
                    border: "1px solid rgba(0,0,0,0.1)",
                    borderRadius: 1,
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    Filters
                  </Typography>

                  <Accordion defaultExpanded>
                    <AccordionSummary expandIcon={<ChevronDownIcon />}>
                      <Typography>Cuisine</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                        {foodDatabase.cuisines.map((cuisine) => (
                          <Chip
                            key={cuisine.id}
                            label={cuisine.name}
                            clickable
                            color={
                              selectedCuisines.includes(cuisine.id)
                                ? "primary"
                                : "default"
                            }
                            onClick={() => {
                              if (selectedCuisines.includes(cuisine.id)) {
                                setSelectedCuisines(
                                  selectedCuisines.filter(
                                    (id) => id !== cuisine.id
                                  )
                                );
                              } else {
                                setSelectedCuisines([
                                  ...selectedCuisines,
                                  cuisine.id,
                                ]);
                              }
                            }}
                            sx={{ m: 0.5 }}
                          />
                        ))}
                      </Box>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion>
                    <AccordionSummary expandIcon={<ChevronDownIcon />}>
                      <Typography>Dietary Preferences</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                        {foodDatabase.dietaryPreferences.map((diet) => (
                          <Chip
                            key={diet.id}
                            label={diet.name}
                            clickable
                            color={
                              selectedDietary.includes(diet.id)
                                ? "primary"
                                : "default"
                            }
                            onClick={() => {
                              if (selectedDietary.includes(diet.id)) {
                                setSelectedDietary(
                                  selectedDietary.filter((id) => id !== diet.id)
                                );
                              } else {
                                setSelectedDietary([
                                  ...selectedDietary,
                                  diet.id,
                                ]);
                              }
                            }}
                            sx={{ m: 0.5 }}
                          />
                        ))}
                      </Box>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion>
                    <AccordionSummary expandIcon={<ChevronDownIcon />}>
                      <Typography>Mood</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                        {foodDatabase.moods.map((mood) => (
                          <Chip
                            key={mood.id}
                            label={mood.name}
                            clickable
                            color={
                              selectedMood.includes(mood.id)
                                ? "primary"
                                : "default"
                            }
                            onClick={() => {
                              if (selectedMood.includes(mood.id)) {
                                setSelectedMood(
                                  selectedMood.filter((id) => id !== mood.id)
                                );
                              } else {
                                setSelectedMood([...selectedMood, mood.id]);
                              }
                            }}
                            sx={{ m: 0.5 }}
                          />
                        ))}
                      </Box>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion>
                    <AccordionSummary expandIcon={<ChevronDownIcon />}>
                      <Typography>Season</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                        {foodDatabase.seasons.map((season) => (
                          <Chip
                            key={season.id}
                            label={season.name}
                            clickable
                            color={
                              selectedSeason.includes(season.id)
                                ? "primary"
                                : "default"
                            }
                            onClick={() => {
                              if (selectedSeason.includes(season.id)) {
                                setSelectedSeason(
                                  selectedSeason.filter(
                                    (id) => id !== season.id
                                  )
                                );
                              } else {
                                setSelectedSeason([
                                  ...selectedSeason,
                                  season.id,
                                ]);
                              }
                            }}
                            sx={{ m: 0.5 }}
                          />
                        ))}
                      </Box>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion>
                    <AccordionSummary expandIcon={<ChevronDownIcon />}>
                      <Typography>Prep Time</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                        {foodDatabase.prepTimes.map((time) => (
                          <Chip
                            key={time.id}
                            label={time.name}
                            clickable
                            color={
                              selectedPrepTime.includes(time.id)
                                ? "primary"
                                : "default"
                            }
                            onClick={() => {
                              if (selectedPrepTime.includes(time.id)) {
                                setSelectedPrepTime(
                                  selectedPrepTime.filter(
                                    (id) => id !== time.id
                                  )
                                );
                              } else {
                                setSelectedPrepTime([
                                  ...selectedPrepTime,
                                  time.id,
                                ]);
                              }
                            }}
                            sx={{ m: 0.5 }}
                          />
                        ))}
                      </Box>
                    </AccordionDetails>
                  </Accordion>

                  {mode === "places" && (
                    <FormControl fullWidth sx={{ mt: 2 }}>
                      <InputLabel>Region/Location</InputLabel>
                      <Select
                        value={selectedRegion}
                        onChange={(e) => setSelectedRegion(e.target.value)}
                        label="Region/Location"
                      >
                        <MenuItem value="">Any Location</MenuItem>
                        {foodDatabase.regions.map((region) => (
                          <MenuItem key={region.id} value={region.id}>
                            {region.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  )}

                  {mode === "ingredients" && (
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="subtitle2" gutterBottom>
                        Available Ingredients
                      </Typography>
                      <TextField
                        fullWidth
                        placeholder="Type ingredient and press Enter"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && searchQuery.trim()) {
                            setAvailableIngredients([
                              ...availableIngredients,
                              searchQuery.trim(),
                            ]);
                            setSearchQuery("");
                          }
                        }}
                        sx={{ mb: 1 }}
                      />
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                        {availableIngredients.map((ingredient, index) => (
                          <Chip
                            key={index}
                            label={ingredient}
                            onDelete={() => {
                              setAvailableIngredients(
                                availableIngredients.filter(
                                  (_, i) => i !== index
                                )
                              );
                            }}
                            sx={{ m: 0.5 }}
                          />
                        ))}
                      </Box>
                    </Box>
                  )}

                  <FormControlLabel
                    control={
                      <Switch
                        checked={isEcoFriendly}
                        onChange={(e) => setIsEcoFriendly(e.target.checked)}
                      />
                    }
                    label="Eco-Friendly Only"
                    sx={{ mt: 2, display: "block" }}
                  />

                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={generateFood}
                    disabled={
                      isLoading ||
                      (mode === "ingredients" &&
                        availableIngredients.length === 0)
                    }
                    sx={{ mt: 2 }}
                  >
                    {isLoading ? (
                      <CircularProgress size={24} color="inherit" />
                    ) : (
                      "Generate Food Ideas"
                    )}
                  </Button>
                </Paper>
              </Grid>

              <Grid item xs={12} md={8}>
                {mode === "spin" ? (
                  <Box sx={{ textAlign: "center", p: 2 }}>
                    <Typography variant="h6" gutterBottom>
                      Spin the Wheel for a Random Meal
                    </Typography>
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        maxWidth: 400,
                        mx: "auto",
                      }}
                    >
                      <canvas
                        ref={canvasRef}
                        width={400}
                        height={400}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </Box>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={spinWheel}
                      disabled={isSpinning || wheelItems.current.length === 0}
                      sx={{ mt: 2 }}
                    >
                      {isSpinning ? "Spinning..." : "Spin the Wheel"}
                    </Button>
                    {wheelItems.current.length === 0 && (
                      <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                        No meals match your criteria. Try adjusting your
                        filters.
                      </Typography>
                    )}
                  </Box>
                ) : (
                  <Box>
                    {results.length > 0 ? (
                      mode === "random" ? (
                        <Box sx={{ p: 2 }}>
                          <Typography variant="h6" gutterBottom>
                            Your Random Meal Suggestion
                          </Typography>
                          {renderFoodCard(results[0])}
                        </Box>
                      ) : (
                        <Box sx={{ p: 2 }}>
                          <Typography variant="h6" gutterBottom>
                            {results.length} Meal Suggestions
                          </Typography>
                          <Grid container spacing={2}>
                            {results.map((meal) => (
                              <Grid item xs={12} sm={6} md={4} key={meal.id}>
                                {renderFoodCard(meal)}
                              </Grid>
                            ))}
                          </Grid>
                        </Box>
                      )
                    ) : (
                      <Box
                        sx={{
                          p: 4,
                          textAlign: "center",
                          border: "1px dashed rgba(0,0,0,0.1)",
                          borderRadius: 1,
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Typography variant="h6" gutterBottom>
                          Ready to discover your next meal?
                        </Typography>
                        <Typography
                          variant="body1"
                          color="text.secondary"
                          sx={{ mb: 2 }}
                        >
                          Set your preferences and click "Generate Food Ideas"
                        </Typography>
                        <Box sx={{ maxWidth: 400, width: "100%" }}>
                          <img
                            src="/food-illustration.jpg?height=200&width=400"
                            alt="Food illustration"
                            style={{ width: "100%", hegight: "auto" }}
                          />
                        </Box>
                      </Box>
                    )}
                  </Box>
                )}
              </Grid>
            </Grid>

            {/* Food Details Dialog */}
            {selectedFood && (
              <Dialog
                open={!!selectedFood}
                onClose={() => setSelectedFood(null)}
                maxWidth="md"
                fullWidth
              >
                <DialogTitle>
                  {selectedFood.name}
                  <IconButton
                    aria-label="close"
                    onClick={() => setSelectedFood(null)}
                    sx={{ position: "absolute", right: 8, top: 8 }}
                  >
                    ✕
                  </IconButton>
                </DialogTitle>
                <DialogContent dividers>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Box
                        component="img"
                        src={selectedFood.image}
                        alt={selectedFood.name}
                        sx={{
                          width: "100%",
                          borderRadius: 1,
                          mb: 2,
                        }}
                      />

                      <Typography variant="subtitle1" gutterBottom>
                        Cuisine:{" "}
                        {
                          foodDatabase.cuisines.find(
                            (c) => c.id === selectedFood.cuisine
                          )?.name
                        }
                      </Typography>

                      <Box
                        sx={{ display: "flex", alignItems: "center", mb: 1 }}
                      >
                        <Typography variant="subtitle1" sx={{ mr: 1 }}>
                          Rating:
                        </Typography>
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Box
                            key={i}
                            component="span"
                            sx={{
                              color:
                                i < Math.floor(selectedFood.rating)
                                  ? "primary.main"
                                  : "text.disabled",
                              fontSize: "20px",
                            }}
                          >
                            ★
                          </Box>
                        ))}
                        <Typography variant="body1" sx={{ ml: 0.5 }}>
                          {selectedFood.rating.toFixed(1)}
                        </Typography>
                      </Box>

                      <Typography variant="subtitle1" gutterBottom>
                        Dietary:
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 0.5,
                          mb: 2,
                        }}
                      >
                        {selectedFood.dietary.map((diet) => (
                          <Chip
                            key={diet}
                            label={
                              foodDatabase.dietaryPreferences.find(
                                (d) => d.id === diet
                              )?.name || diet
                            }
                            size="small"
                          />
                        ))}
                      </Box>

                      <Typography variant="subtitle1" gutterBottom>
                        Mood:
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 0.5,
                          mb: 2,
                        }}
                      >
                        {selectedFood.mood.map((mood) => (
                          <Chip
                            key={mood}
                            label={
                              foodDatabase.moods.find((m) => m.id === mood)
                                ?.name || mood
                            }
                            size="small"
                          />
                        ))}
                      </Box>

                      <Typography variant="subtitle1" gutterBottom>
                        Prep Time:{" "}
                        {
                          foodDatabase.prepTimes.find(
                            (p) => p.id === selectedFood.prepTime
                          )?.name
                        }
                      </Typography>

                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        sx={{ mt: 1 }}
                      >
                        {selectedFood.isEcoFriendly
                          ? "✅ Eco-Friendly"
                          : "❌ Not Eco-Friendly"}
                      </Typography>
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <Typography variant="h6" gutterBottom>
                        Ingredients
                      </Typography>
                      <Box component="ul" sx={{ pl: 2, mb: 3 }}>
                        {selectedFood.ingredients.map((ingredient, index) => (
                          <Typography
                            component="li"
                            key={index}
                            variant="body1"
                            sx={{ mb: 0.5 }}
                          >
                            {ingredient}
                          </Typography>
                        ))}
                      </Box>

                      <Typography variant="h6" gutterBottom>
                        Chef's Notes
                      </Typography>
                      <Typography variant="body1" paragraph>
                        {selectedFood.chefNotes}
                      </Typography>

                      <Typography variant="h6" gutterBottom>
                        Origin
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 0.5,
                          mb: 2,
                        }}
                      >
                        {selectedFood.regions.map((region, index) => (
                          <Chip
                            key={index}
                            label={
                              foodDatabase.regions.find((r) => r.id === region)
                                ?.name || region
                            }
                            size="small"
                          />
                        ))}
                      </Box>

                      <Box sx={{ mt: 3 }}>
                        <Typography variant="subtitle2" gutterBottom>
                          AI-Based Suggestions
                        </Typography>
                        <Typography variant="body2" paragraph>
                          People who enjoyed {selectedFood.name} also liked
                          dishes with {selectedFood.ingredients[0]} and{" "}
                          {selectedFood.ingredients[1]}.
                        </Typography>

                        <Typography variant="subtitle2" gutterBottom>
                          Ingredient Substitutions
                        </Typography>
                        <Typography variant="body2" paragraph>
                          {selectedFood.ingredients[0]} can be substituted with{" "}
                          {selectedFood.ingredients[0] === "chicken"
                            ? "tofu"
                            : selectedFood.ingredients[0] === "beef"
                            ? "mushrooms"
                            : "a similar alternative"}{" "}
                          for a vegetarian option.
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </DialogContent>
                <DialogActions>
                  <Button
                    onClick={() => addToFavorites(selectedFood)}
                    startIcon={<HeartIcon />}
                  >
                    Add to Favorites
                  </Button>
                  <Button
                    onClick={() => addToGroceryList(selectedFood)}
                    startIcon={<ShoppingCartIcon />}
                  >
                    Add to Grocery List
                  </Button>
                </DialogActions>
              </Dialog>
            )}

            {/* Spin Result Dialog */}
            <Dialog
              open={showSpinDialog && spinResult}
              onClose={() => setShowSpinDialog(false)}
              maxWidth="sm"
              fullWidth
            >
              <DialogTitle sx={{ textAlign: "center" }}>
                Your Wheel Result
              </DialogTitle>
              <DialogContent>
                <Box sx={{ textAlign: "center", p: 2 }}>
                  <Typography
                    variant="h4"
                    gutterBottom
                    sx={{ color: "primary.main" }}
                  >
                    {spinResult?.name}
                  </Typography>
                  <Box
                    component="img"
                    src={spinResult?.image}
                    alt={spinResult?.name}
                    sx={{
                      width: "100%",
                      maxWidth: 300,
                      borderRadius: 1,
                      mb: 2,
                      mx: "auto",
                    }}
                  />
                  <Typography variant="body1">
                    {
                      foodDatabase.cuisines.find(
                        (c) => c.id === spinResult?.cuisine
                      )?.name
                    }{" "}
                    cuisine
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Prep time:{" "}
                    {
                      foodDatabase.prepTimes.find(
                        (p) => p.id === spinResult?.prepTime
                      )?.name
                    }
                  </Typography>
                </Box>
              </DialogContent>
              <DialogActions
                sx={{ justifyContent: "space-between", px: 3, pb: 2 }}
              >
                <Button
                  onClick={() => setShowSpinDialog(false)}
                  variant="outlined"
                >
                  Close
                </Button>
                <Button
                  onClick={() => {
                    setSelectedFood(spinResult);
                    setShowSpinDialog(false);
                  }}
                  variant="contained"
                >
                  View Details
                </Button>
              </DialogActions>
            </Dialog>

            {/* Snackbar for notifications */}
            <Snackbar
              open={showSnackbar}
              autoHideDuration={4000}
              onClose={() => setShowSnackbar(false)}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
              <Alert
                onClose={() => setShowSnackbar(false)}
                severity={snackbarSeverity}
                sx={{ width: "100%" }}
              >
                {snackbarMessage}
              </Alert>
            </Snackbar>
          </CardContent>
        </Card>
      </Box>
    </ThemeProvider>
  );
}
