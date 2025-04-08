"use client";

import { useState, useEffect } from "react";

// MUI components
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Tabs,
  Tab,
  IconButton,
  Tooltip,
  Grid,
  Paper,
  Divider,
  Autocomplete,
  createTheme,
  ThemeProvider,
} from "@mui/material";

// Icons
const SwapHorizIcon = () => (
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
    <path d="M8 3L4 7l4 4"></path>
    <path d="M4 7h16"></path>
    <path d="M16 21l4-4-4-4"></path>
    <path d="M20 17H4"></path>
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
          maxWidth: 800,
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

// Conversion data
const conversionData = {
  // Weight conversions
  weight: {
    mg: { name: "Milligram (mg)", base: 0.001 },
    g: { name: "Gram (g)", base: 1 },
    kg: { name: "Kilogram (kg)", base: 1000 },
    oz: { name: "Ounce (oz)", base: 28.3495 },
    lb: { name: "Pound (lb)", base: 453.592 },
  },

  // Volume conversions - normalized to milliliters
  volume: {
    // US System
    us_tsp: { name: "US Teaspoon", base: 4.92892 },
    us_tbsp: { name: "US Tablespoon", base: 14.7868 },
    us_floz: { name: "US Fluid Ounce", base: 29.5735 },
    us_cup: { name: "US Cup", base: 236.588 },
    us_pint: { name: "US Pint", base: 473.176 },
    us_quart: { name: "US Quart", base: 946.353 },
    us_gallon: { name: "US Gallon", base: 3785.41 },

    // UK System
    uk_tsp: { name: "UK Teaspoon", base: 5.91939 },
    uk_tbsp: { name: "UK Tablespoon", base: 17.7582 },
    uk_floz: { name: "UK Fluid Ounce", base: 28.4131 },
    uk_cup: { name: "UK Cup", base: 284.131 },
    uk_pint: { name: "UK Pint", base: 568.261 },
    uk_quart: { name: "UK Quart", base: 1136.52 },
    uk_gallon: { name: "UK Gallon", base: 4546.09 },

    // Metric System
    ml: { name: "Milliliter (ml)", base: 1 },
    cl: { name: "Centiliter (cl)", base: 10 },
    dl: { name: "Deciliter (dl)", base: 100 },
    l: { name: "Liter (L)", base: 1000 },
  },

  // Temperature conversions
  temperature: {
    celsius: {
      name: "Celsius (°C)",
      convert: (val, to) => {
        if (to === "fahrenheit") return (val * 9) / 5 + 32;
        if (to === "gas") return celsiusToGasMark(val);
        return val;
      },
    },
    fahrenheit: {
      name: "Fahrenheit (°F)",
      convert: (val, to) => {
        if (to === "celsius") return ((val - 32) * 5) / 9;
        if (to === "gas") return celsiusToGasMark(((val - 32) * 5) / 9);
        return val;
      },
    },
    gas: {
      name: "Gas Mark",
      convert: (val, to) => {
        const celsius = gasMarkToCelsius(val);
        if (to === "celsius") return celsius;
        if (to === "fahrenheit") return (celsius * 9) / 5 + 32;
        return val;
      },
    },
  },
};

// Ingredient density data (grams per cup)
const ingredientData = {
  // Flours
  "all-purpose-flour": { name: "All-purpose Flour", density: 125 },
  "bread-flour": { name: "Bread Flour", density: 127 },
  "cake-flour": { name: "Cake Flour", density: 112 },
  "whole-wheat-flour": { name: "Whole Wheat Flour", density: 120 },
  "almond-flour": { name: "Almond Flour", density: 96 },
  "coconut-flour": { name: "Coconut Flour", density: 112 },

  // Sugars
  "granulated-sugar": { name: "Granulated Sugar", density: 200 },
  "brown-sugar": { name: "Brown Sugar (packed)", density: 220 },
  "powdered-sugar": { name: "Powdered Sugar", density: 125 },
  honey: { name: "Honey", density: 340 },
  "maple-syrup": { name: "Maple Syrup", density: 322 },

  // Fats
  butter: { name: "Butter", density: 227 },
  "vegetable-oil": { name: "Vegetable Oil", density: 218 },
  "olive-oil": { name: "Olive Oil", density: 216 },
  "coconut-oil": { name: "Coconut Oil", density: 218 },

  // Dairy
  milk: { name: "Milk", density: 245 },
  "heavy-cream": { name: "Heavy Cream", density: 238 },
  yogurt: { name: "Yogurt", density: 245 },
  "cream-cheese": { name: "Cream Cheese", density: 232 },

  // Nuts & Seeds
  "chopped-nuts": { name: "Chopped Nuts", density: 120 },
  "ground-nuts": { name: "Ground Nuts", density: 100 },
  "chia-seeds": { name: "Chia Seeds", density: 170 },
  "flax-seeds": { name: "Flax Seeds", density: 150 },

  // Grains
  "rice-white": { name: "White Rice (uncooked)", density: 185 },
  "rice-brown": { name: "Brown Rice (uncooked)", density: 190 },
  "oats-rolled": { name: "Rolled Oats", density: 85 },
  "oats-steel-cut": { name: "Steel-cut Oats", density: 176 },

  // Other
  "cocoa-powder": { name: "Cocoa Powder", density: 85 },
  "baking-powder": { name: "Baking Powder", density: 192 },
  salt: { name: "Salt", density: 288 },
  cornstarch: { name: "Cornstarch", density: 128 },
};

// Helper functions for temperature conversions
function celsiusToGasMark(celsius) {
  if (celsius < 135) return 0;
  if (celsius < 150) return 1;
  if (celsius < 165) return 2;
  if (celsius < 180) return 3;
  if (celsius < 190) return 4;
  if (celsius < 200) return 5;
  if (celsius < 220) return 6;
  if (celsius < 230) return 7;
  if (celsius < 240) return 8;
  if (celsius < 260) return 9;
  return 10;
}

function gasMarkToCelsius(gasMark) {
  const gasMarkValues = {
    0: 135,
    1: 140,
    2: 150,
    3: 170,
    4: 180,
    5: 190,
    6: 200,
    7: 220,
    8: 230,
    9: 240,
    10: 260,
  };
  return gasMarkValues[gasMark] || 180;
}

// Common conversion reference data
const commonConversions = {
  volume: [
    { from: "us_cup", to: "us_tbsp", value: "1 cup = 16 tablespoons" },
    { from: "us_tbsp", to: "us_tsp", value: "1 tablespoon = 3 teaspoons" },
    { from: "us_cup", to: "us_floz", value: "1 cup = 8 fluid ounces" },
    { from: "us_cup", to: "ml", value: "1 cup = 237 ml" },
    { from: "l", to: "us_cup", value: "1 liter = 4.23 cups" },
  ],
  weight: [
    { from: "lb", to: "oz", value: "1 pound = 16 ounces" },
    { from: "kg", to: "g", value: "1 kilogram = 1000 grams" },
    { from: "oz", to: "g", value: "1 ounce = 28.35 grams" },
    { from: "lb", to: "kg", value: "1 pound = 0.454 kg" },
  ],
  temperature: [
    {
      from: "fahrenheit",
      to: "celsius",
      value: "350°F = 175°C (moderate oven)",
    },
    {
      from: "fahrenheit",
      to: "celsius",
      value: "375°F = 190°C (moderate/hot oven)",
    },
    { from: "fahrenheit", to: "celsius", value: "400°F = 200°C (hot oven)" },
    { from: "fahrenheit", to: "celsius", value: "425°F = 220°C (hot oven)" },
    {
      from: "fahrenheit",
      to: "celsius",
      value: "450°F = 230°C (very hot oven)",
    },
  ],
};

export default function AdvancedRecipeConverter() {
  const [conversionType, setConversionType] = useState("volume");
  const [value, setValue] = useState("");
  const [fromUnit, setFromUnit] = useState("");
  const [toUnit, setToUnit] = useState("");
  const [ingredient, setIngredient] = useState("all-purpose-flour");
  const [result, setResult] = useState(null);
  const [measurementSystem, setMeasurementSystem] = useState("us");
  const [isDryIngredient, setIsDryIngredient] = useState(true);

  // Set default units when conversion type or measurement system changes
  useEffect(() => {
    if (conversionType === "volume") {
      if (measurementSystem === "us") {
        setFromUnit("us_cup");
        setToUnit("ml");
      } else if (measurementSystem === "uk") {
        setFromUnit("uk_cup");
        setToUnit("ml");
      } else {
        setFromUnit("ml");
        setToUnit("us_cup");
      }
    } else if (conversionType === "weight") {
      if (measurementSystem === "us") {
        setFromUnit("oz");
        setToUnit("g");
      } else {
        setFromUnit("g");
        setToUnit("oz");
      }
    } else if (conversionType === "temperature") {
      if (measurementSystem === "us") {
        setFromUnit("fahrenheit");
        setToUnit("celsius");
      } else {
        setFromUnit("celsius");
        setToUnit("fahrenheit");
      }
    } else if (conversionType === "ingredients") {
      if (measurementSystem === "us") {
        setFromUnit("us_cup");
      } else if (measurementSystem === "uk") {
        setFromUnit("uk_cup");
      } else {
        setFromUnit("g");
      }
    }
    setResult(null);
    setValue("");
  }, [conversionType, measurementSystem]);

  const handleConvert = () => {
    if (!value || isNaN(Number.parseFloat(value))) return;

    const inputValue = Number.parseFloat(value);
    let convertedValue;

    if (conversionType === "temperature") {
      convertedValue = conversionData.temperature[fromUnit].convert(
        inputValue,
        toUnit
      );
    } else if (conversionType === "ingredients") {
      // For ingredients, we're converting between volume and weight
      const ingredientDensity = ingredientData[ingredient].density;

      if (fromUnit.includes("cup")) {
        // Convert from cups to grams
        const cupSize = fromUnit.includes("us")
          ? conversionData.volume.us_cup.base
          : conversionData.volume.uk_cup.base;
        const volumeInMl = inputValue * cupSize;
        // For dry ingredients, use density. For liquids, 1ml ≈ 1g
        convertedValue = isDryIngredient
          ? (volumeInMl / 237) * ingredientDensity
          : volumeInMl;
      } else {
        // Convert from grams to cups
        const cupSize =
          measurementSystem === "us"
            ? conversionData.volume.us_cup.base
            : conversionData.volume.uk_cup.base;
        // For dry ingredients, use density. For liquids, 1g ≈ 1ml
        convertedValue = isDryIngredient
          ? (inputValue / ingredientDensity) * (237 / cupSize)
          : inputValue / cupSize;
      }
    } else {
      // Standard conversion using base units
      const fromBase = conversionData[conversionType][fromUnit].base;
      const toBase = conversionData[conversionType][toUnit].base;
      convertedValue = (inputValue * fromBase) / toBase;
    }

    setResult(convertedValue);
  };

  const handleSwapUnits = () => {
    if (conversionType !== "ingredients") {
      const temp = fromUnit;
      setFromUnit(toUnit);
      setToUnit(temp);
      setResult(null);
    }
  };

  const formatResult = (value) => {
    if (value === null) return "";

    // Format based on the magnitude of the number
    if (value < 0.01) return value.toExponential(2);
    if (value < 0.1) return value.toFixed(3);
    if (value < 1) return value.toFixed(2);
    if (value < 10) return value.toFixed(2);
    if (value < 100) return value.toFixed(1);
    return value.toFixed(0);
  };

  const getUnitLabel = () => {
    if (conversionType === "ingredients") {
      return fromUnit.includes("cup")
        ? "g"
        : measurementSystem === "us"
        ? "US cups"
        : "UK cups";
    }
    return conversionData[conversionType][toUnit]?.name || toUnit;
  };

  const getFilteredVolumeUnits = () => {
    const allUnits = Object.entries(conversionData.volume);

    if (measurementSystem === "us") {
      return allUnits.filter(
        ([key]) => key.startsWith("us_") || key === "ml" || key === "l"
      );
    } else if (measurementSystem === "uk") {
      return allUnits.filter(
        ([key]) => key.startsWith("uk_") || key === "ml" || key === "l"
      );
    } else {
      return allUnits;
    }
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
            title="Recipe Converter"
            subheader="Convert Any Cooking Measurement Easily"
          />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Tabs
                  value={conversionType}
                  onChange={(e, newValue) => setConversionType(newValue)}
                  variant="fullWidth"
                  sx={{ mb: 3 }}
                >
                  <Tab value="volume" label="Volume" />
                  <Tab value="weight" label="Weight" />
                  <Tab value="temperature" label="Temperature" />
                  <Tab value="ingredients" label="Ingredients" />
                </Tabs>

                <Box sx={{ mb: 3, display: "flex", justifyContent: "center" }}>
                  <Button
                    variant={
                      measurementSystem === "us" ? "contained" : "outlined"
                    }
                    onClick={() => setMeasurementSystem("us")}
                    sx={{ mx: 1 }}
                  >
                    US System
                  </Button>
                  <Button
                    variant={
                      measurementSystem === "uk" ? "contained" : "outlined"
                    }
                    onClick={() => setMeasurementSystem("uk")}
                    sx={{ mx: 1 }}
                  >
                    UK System
                  </Button>
                  <Button
                    variant={
                      measurementSystem === "metric" ? "contained" : "outlined"
                    }
                    onClick={() => setMeasurementSystem("metric")}
                    sx={{ mx: 1 }}
                  >
                    Metric
                  </Button>
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    border: "1px solid rgba(0,0,0,0.1)",
                    borderRadius: 1,
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    Conversion
                  </Typography>

                  {conversionType === "ingredients" && (
                    <>
                      <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
                        <InputLabel>Ingredient</InputLabel>
                        <Select
                          value={ingredient}
                          onChange={(e) => setIngredient(e.target.value)}
                          label="Ingredient"
                        >
                          <MenuItem value="" disabled>
                            <em>Select an ingredient</em>
                          </MenuItem>
                          <MenuItem
                            disabled
                            sx={{
                              backgroundColor: "rgba(0,0,0,0.05)",
                              fontWeight: "bold",
                            }}
                          >
                            Flours
                          </MenuItem>
                          {Object.entries(ingredientData)
                            .filter(([key]) => key.includes("flour"))
                            .map(([key, { name }]) => (
                              <MenuItem key={key} value={key}>
                                {name}
                              </MenuItem>
                            ))}
                          <MenuItem
                            disabled
                            sx={{
                              backgroundColor: "rgba(0,0,0,0.05)",
                              fontWeight: "bold",
                            }}
                          >
                            Sugars & Sweeteners
                          </MenuItem>
                          {Object.entries(ingredientData)
                            .filter(
                              ([key]) =>
                                key.includes("sugar") ||
                                key.includes("honey") ||
                                key.includes("syrup")
                            )
                            .map(([key, { name }]) => (
                              <MenuItem key={key} value={key}>
                                {name}
                              </MenuItem>
                            ))}
                          <MenuItem
                            disabled
                            sx={{
                              backgroundColor: "rgba(0,0,0,0.05)",
                              fontWeight: "bold",
                            }}
                          >
                            Fats & Oils
                          </MenuItem>
                          {Object.entries(ingredientData)
                            .filter(
                              ([key]) =>
                                key.includes("butter") || key.includes("oil")
                            )
                            .map(([key, { name }]) => (
                              <MenuItem key={key} value={key}>
                                {name}
                              </MenuItem>
                            ))}
                          <MenuItem
                            disabled
                            sx={{
                              backgroundColor: "rgba(0,0,0,0.05)",
                              fontWeight: "bold",
                            }}
                          >
                            Dairy
                          </MenuItem>
                          {Object.entries(ingredientData)
                            .filter(
                              ([key]) =>
                                key.includes("milk") ||
                                key.includes("cream") ||
                                key.includes("yogurt")
                            )
                            .map(([key, { name }]) => (
                              <MenuItem key={key} value={key}>
                                {name}
                              </MenuItem>
                            ))}
                          <MenuItem
                            disabled
                            sx={{
                              backgroundColor: "rgba(0,0,0,0.05)",
                              fontWeight: "bold",
                            }}
                          >
                            Other Ingredients
                          </MenuItem>
                          {Object.entries(ingredientData)
                            .filter(
                              ([key]) =>
                                !key.includes("flour") &&
                                !key.includes("sugar") &&
                                !key.includes("honey") &&
                                !key.includes("syrup") &&
                                !key.includes("butter") &&
                                !key.includes("oil") &&
                                !key.includes("milk") &&
                                !key.includes("cream") &&
                                !key.includes("yogurt")
                            )
                            .map(([key, { name }]) => (
                              <MenuItem key={key} value={key}>
                                {name}
                              </MenuItem>
                            ))}
                        </Select>
                      </FormControl>

                      <FormControl
                        component="fieldset"
                        sx={{
                          mb: 2,
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <Typography variant="body2" sx={{ mr: 2 }}>
                          Ingredient Type:
                        </Typography>
                        <Button
                          variant={isDryIngredient ? "contained" : "outlined"}
                          onClick={() => setIsDryIngredient(true)}
                          size="small"
                          sx={{ mr: 1 }}
                        >
                          Dry
                        </Button>
                        <Button
                          variant={!isDryIngredient ? "contained" : "outlined"}
                          onClick={() => setIsDryIngredient(false)}
                          size="small"
                        >
                          Liquid
                        </Button>
                      </FormControl>
                    </>
                  )}

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 2,
                    }}
                  >
                    <TextField
                      label="Value"
                      type="number"
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                      fullWidth
                      variant="outlined"
                    />

                    <FormControl fullWidth variant="outlined">
                      <InputLabel>From</InputLabel>
                      <Select
                        value={fromUnit}
                        onChange={(e) => setFromUnit(e.target.value)}
                        label="From"
                      >
                        {conversionType === "ingredients" ? (
                          measurementSystem === "metric" ? (
                            <MenuItem value="g">Grams (g)</MenuItem>
                          ) : measurementSystem === "us" ? (
                            <MenuItem value="us_cup">US Cup</MenuItem>
                          ) : (
                            <MenuItem value="uk_cup">UK Cup</MenuItem>
                          )
                        ) : conversionType === "volume" ? (
                          getFilteredVolumeUnits().map(([key, { name }]) => (
                            <MenuItem key={key} value={key}>
                              {name}
                            </MenuItem>
                          ))
                        ) : conversionType === "temperature" ? (
                          Object.entries(conversionData.temperature).map(
                            ([key, { name }]) => (
                              <MenuItem key={key} value={key}>
                                {name}
                              </MenuItem>
                            )
                          )
                        ) : (
                          Object.entries(conversionData.weight).map(
                            ([key, { name }]) => (
                              <MenuItem key={key} value={key}>
                                {name}
                              </MenuItem>
                            )
                          )
                        )}
                      </Select>
                    </FormControl>

                    {conversionType !== "ingredients" && (
                      <>
                        <Tooltip title="Swap units">
                          <IconButton
                            onClick={handleSwapUnits}
                            sx={{ color: "primary.main" }}
                          >
                            <SwapHorizIcon />
                          </IconButton>
                        </Tooltip>

                        <FormControl fullWidth variant="outlined">
                          <InputLabel>To</InputLabel>
                          <Select
                            value={toUnit}
                            onChange={(e) => setToUnit(e.target.value)}
                            label="To"
                          >
                            {conversionType === "volume"
                              ? getFilteredVolumeUnits().map(
                                  ([key, { name }]) => (
                                    <MenuItem key={key} value={key}>
                                      {name}
                                    </MenuItem>
                                  )
                                )
                              : conversionType === "temperature"
                              ? Object.entries(conversionData.temperature).map(
                                  ([key, { name }]) => (
                                    <MenuItem key={key} value={key}>
                                      {name}
                                    </MenuItem>
                                  )
                                )
                              : Object.entries(conversionData.weight).map(
                                  ([key, { name }]) => (
                                    <MenuItem key={key} value={key}>
                                      {name}
                                    </MenuItem>
                                  )
                                )}
                          </Select>
                        </FormControl>
                      </>
                    )}
                  </Box>

                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleConvert}
                    fullWidth
                    sx={{ mt: 1 }}
                  >
                    Convert
                  </Button>

                  {result !== null && (
                    <Box
                      sx={{
                        mt: 3,
                        p: 2,
                        bgcolor: "rgba(0,0,0,0.03)",
                        borderRadius: 1,
                        textAlign: "center",
                      }}
                    >
                      <Typography variant="h6" component="h3">
                        Result
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mt: 1,
                        }}
                      >
                        <Typography
                          variant="h3"
                          component="span"
                          sx={{
                            fontWeight: "bold",
                            color: "hsl(152, 95%, 39%)",
                          }}
                        >
                          {formatResult(result)}
                        </Typography>
                        <Typography
                          variant="h6"
                          component="span"
                          sx={{ ml: 1 }}
                        >
                          {getUnitLabel()}
                        </Typography>
                      </Box>
                      {conversionType === "ingredients" && (
                        <Typography
                          variant="body2"
                          sx={{ mt: 1, fontStyle: "italic" }}
                        >
                          {fromUnit.includes("cup")
                            ? `1 ${
                                fromUnit.includes("us") ? "US" : "UK"
                              } cup of ${ingredientData[ingredient].name} ≈ ${
                                ingredientData[ingredient].density
                              }g`
                            : `${ingredientData[ingredient].density}g of ${
                                ingredientData[ingredient].name
                              } ≈ 1 ${
                                measurementSystem === "us" ? "US" : "UK"
                              } cup`}
                        </Typography>
                      )}
                    </Box>
                  )}
                </Paper>
              </Grid>

              <Grid item xs={12} md={6}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    border: "1px solid rgba(0,0,0,0.1)",
                    borderRadius: 1,
                    height: "100%",
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    Common Conversions
                  </Typography>

                  <Box sx={{ mb: 3 }}>
                    {commonConversions[conversionType]?.map(
                      (conversion, index) => (
                        <Typography key={index} variant="body2" sx={{ mb: 1 }}>
                          • {conversion.value}
                        </Typography>
                      )
                    )}
                  </Box>

                  {conversionType === "ingredients" && (
                    <>
                      <Divider sx={{ my: 2 }} />
                      <Typography variant="subtitle1" gutterBottom>
                        Ingredient Densities (grams per cup)
                      </Typography>
                      <Grid container spacing={1}>
                        {Object.entries(ingredientData)
                          .filter((_, index) => index < 8) // Show only a few examples
                          .map(([key, { name, density }]) => (
                            <Grid item xs={6} key={key}>
                              <Typography variant="body2">
                                {name}: {density}g
                              </Typography>
                            </Grid>
                          ))}
                      </Grid>

                      <Box sx={{ mt: 2 }}>
                        <Typography variant="body2" color="text.secondary">
                          Note: Ingredient densities can vary based on how
                          ingredients are measured (packed, sifted, etc.)
                        </Typography>
                      </Box>
                    </>
                  )}

                  {conversionType === "temperature" && (
                    <>
                      <Divider sx={{ my: 2 }} />
                      <Typography variant="subtitle1" gutterBottom>
                        Common Oven Temperatures
                      </Typography>
                      <Grid container spacing={1}>
                        <Grid item xs={4}>
                          <Typography variant="body2" fontWeight="bold">
                            Fahrenheit
                          </Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography variant="body2" fontWeight="bold">
                            Celsius
                          </Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography variant="body2" fontWeight="bold">
                            Gas Mark
                          </Typography>
                        </Grid>

                        <Grid item xs={4}>
                          <Typography variant="body2">325°F</Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography variant="body2">165°C</Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography variant="body2">3</Typography>
                        </Grid>

                        <Grid item xs={4}>
                          <Typography variant="body2">350°F</Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography variant="body2">175°C</Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography variant="body2">4</Typography>
                        </Grid>

                        <Grid item xs={4}>
                          <Typography variant="body2">375°F</Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography variant="body2">190°C</Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography variant="body2">5</Typography>
                        </Grid>

                        <Grid item xs={4}>
                          <Typography variant="body2">400°F</Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography variant="body2">200°C</Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography variant="body2">6</Typography>
                        </Grid>

                        <Grid item xs={4}>
                          <Typography variant="body2">425°F</Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography variant="body2">220°C</Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography variant="body2">7</Typography>
                        </Grid>
                      </Grid>
                    </>
                  )}

                  <Box sx={{ mt: 3 }}>
                    <Typography variant="subtitle1" gutterBottom>
                      Features
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 1 }}>
                      ✅ Convert between weight units: grams, ounces, pounds,
                      kilograms
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 1 }}>
                      ✅ Convert between volume units: cups, tablespoons,
                      teaspoons, milliliters
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 1 }}>
                      ✅ Smart ingredient-based conversion for accurate results
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 1 }}>
                      ✅ Supports U.S., U.K., and metric measurement systems
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 1 }}>
                      ✅ Convert oven temperatures between °F, °C, and Gas Mark
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </ThemeProvider>
  );
}
