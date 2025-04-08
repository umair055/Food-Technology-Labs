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
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  InputAdornment,
  Tabs,
  Tab,
  Slider,
  Divider,
  Paper,
  Grid,
  Tooltip,
  createTheme,
  ThemeProvider,
} from "@mui/material";

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

// BMI classification data
const bmiClassifications = {
  adult: [
    {
      range: [0, 16],
      class: "Severe Thinness",
      color: "#d32f2f",
      risk: "Very high risk of health problems",
    },
    {
      range: [16, 17],
      class: "Moderate Thinness",
      color: "#ff5722",
      risk: "High risk of health problems",
    },
    {
      range: [17, 18.5],
      class: "Mild Thinness",
      color: "#ff9800",
      risk: "Moderate risk of health problems",
    },
    {
      range: [18.5, 25],
      class: "Normal",
      color: "hsl(152, 95%, 39%)",
      risk: "Low risk of health problems",
    },
    {
      range: [25, 30],
      class: "Overweight",
      color: "#ff9800",
      risk: "Increased risk of health problems",
    },
    {
      range: [30, 35],
      class: "Obese Class I",
      color: "#f44336",
      risk: "High risk of health problems",
    },
    {
      range: [35, 40],
      class: "Obese Class II",
      color: "#d32f2f",
      risk: "Very high risk of health problems",
    },
    {
      range: [40, 100],
      class: "Obese Class III",
      color: "#b71c1c",
      risk: "Extremely high risk of health problems",
    },
  ],
  // Adjusted for children - these are simplified percentiles
  children: [
    {
      range: [0, 5],
      class: "Underweight",
      color: "#ff5722",
      risk: "May indicate malnutrition or other health issues",
    },
    {
      range: [5, 85],
      class: "Healthy weight",
      color: "hsl(152, 95%, 39%)",
      risk: "Healthy range for growth and development",
    },
    {
      range: [85, 95],
      class: "Overweight",
      color: "#ff9800",
      risk: "May lead to health issues if trend continues",
    },
    {
      range: [95, 100],
      class: "Obese",
      color: "#f44336",
      risk: "Higher risk for health problems",
    },
  ],
  // Adjusted for seniors (65+)
  senior: [
    {
      range: [0, 18.5],
      class: "Underweight",
      color: "#ff5722",
      risk: "Higher risk of bone fractures and weakened immune system",
    },
    {
      range: [18.5, 27],
      class: "Normal",
      color: "hsl(152, 95%, 39%)",
      risk: "Lowest risk of health problems",
    },
    {
      range: [27, 30],
      class: "Mildly Overweight",
      color: "#ff9800",
      risk: "Slightly increased risk of health problems",
    },
    {
      range: [30, 100],
      class: "Obese",
      color: "#f44336",
      risk: "High risk of health problems",
    },
  ],
};

// Health tips based on BMI category
const healthTips = {
  "Severe Thinness": [
    "Consult with a healthcare provider immediately",
    "Work with a dietitian to create a healthy weight gain plan",
    "Focus on nutrient-dense foods",
    "Consider strength training to build muscle mass",
  ],
  "Moderate Thinness": [
    "Consult with a healthcare provider",
    "Increase caloric intake with healthy, nutrient-dense foods",
    "Add strength training to your exercise routine",
    "Track your progress with a healthcare provider",
  ],
  "Mild Thinness": [
    "Gradually increase caloric intake",
    "Focus on balanced nutrition with adequate protein",
    "Incorporate strength training exercises",
    "Regular health check-ups to monitor progress",
  ],
  Normal: [
    "Maintain a balanced diet rich in fruits, vegetables, and whole grains",
    "Regular physical activity (150+ minutes per week)",
    "Regular health check-ups",
    "Focus on overall wellness and stress management",
  ],
  Overweight: [
    "Aim for gradual weight loss of 1-2 pounds per week",
    "Increase physical activity to 150-300 minutes per week",
    "Focus on portion control and mindful eating",
    "Reduce intake of processed foods and added sugars",
  ],
  "Obese Class I": [
    "Consult with healthcare provider about weight management",
    "Set realistic weight loss goals (5-10% of body weight)",
    "Increase physical activity gradually",
    "Consider working with a dietitian for a personalized plan",
  ],
  "Obese Class II": [
    "Work with healthcare providers for a comprehensive weight management plan",
    "Consider structured weight loss programs",
    "Regular monitoring of health markers",
    "Focus on sustainable lifestyle changes",
  ],
  "Obese Class III": [
    "Comprehensive medical evaluation recommended",
    "Work with a specialized healthcare team",
    "Structured weight management program",
    "Regular monitoring of health conditions",
  ],
  Underweight: [
    "Consult with a pediatrician or healthcare provider",
    "Focus on nutrient-dense foods",
    "Monitor growth regularly",
    "Ensure adequate protein and healthy fats in diet",
  ],
  "Healthy weight": [
    "Maintain balanced nutrition with plenty of fruits and vegetables",
    "Encourage regular physical activity and play",
    "Limit screen time and processed foods",
    "Regular check-ups to monitor growth",
  ],
  Overweight: [
    "Focus on maintaining current weight while growing taller",
    "Increase physical activity to 60+ minutes daily",
    "Improve diet quality with more fruits, vegetables, and whole foods",
    "Limit sugary beverages and processed foods",
  ],
  Obese: [
    "Consult with a pediatrician or healthcare provider",
    "Focus on slowing weight gain while growing taller",
    "Structured approach to improving diet quality",
    "Family-based approach to increasing physical activity",
  ],
};

export default function AdvancedBMICalculator() {
  // State variables
  const [userType, setUserType] = useState("adult");
  const [gender, setGender] = useState("female");
  const [age, setAge] = useState("");
  const [heightCm, setHeightCm] = useState("");
  const [heightFt, setHeightFt] = useState("");
  const [heightIn, setHeightIn] = useState("");
  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState("metric");
  const [activityLevel, setActivityLevel] = useState("moderate");
  const [bmiResult, setBmiResult] = useState(null);
  const [bmiCategory, setBmiCategory] = useState(null);
  const [bodyFatPercentage, setBodyFatPercentage] = useState(null);
  const [idealWeightRange, setIdealWeightRange] = useState(null);
  const [showResults, setShowResults] = useState(false);

  // Reset fields when unit system changes
  useEffect(() => {
    setHeightCm("");
    setHeightFt("");
    setHeightIn("");
    setWeight("");
    setBmiResult(null);
    setShowResults(false);
  }, [unit]);

  // Reset fields when user type changes
  useEffect(() => {
    setAge("");
    setHeightCm("");
    setHeightFt("");
    setHeightIn("");
    setWeight("");
    setBmiResult(null);
    setShowResults(false);
  }, [userType]);

  // Calculate BMI
  const calculateBMI = () => {
    // Validate inputs
    if (
      (unit === "metric" && (!heightCm || !weight)) ||
      (unit === "imperial" && (!heightFt || !weight)) ||
      !age
    ) {
      alert("Please fill in all required fields");
      return;
    }

    // Convert height to meters
    let heightInMeters;
    if (unit === "metric") {
      heightInMeters = Number.parseFloat(heightCm) / 100;
    } else {
      // Convert feet and inches to meters
      const totalInches =
        Number.parseFloat(heightFt) * 12 + (Number.parseFloat(heightIn) || 0);
      heightInMeters = totalInches * 0.0254;
    }

    // Convert weight to kg
    let weightInKg;
    if (unit === "metric") {
      weightInKg = Number.parseFloat(weight);
    } else {
      weightInKg = Number.parseFloat(weight) * 0.453592;
    }

    // Calculate BMI
    const bmi = weightInKg / (heightInMeters * heightInMeters);
    setBmiResult(Number.parseFloat(bmi.toFixed(1)));

    // Determine BMI category based on age and user type
    let categoryType = "adult";
    const ageNum = Number.parseInt(age);

    if (userType === "child") {
      categoryType = "children";
    } else if (ageNum >= 65) {
      categoryType = "senior";
    }

    // Find BMI category
    let category;
    if (userType === "child") {
      // For children, we would normally use percentiles based on age and gender
      // This is a simplified version - in reality, you'd use CDC or WHO growth charts
      // Here we're using the percentile as the BMI value for simplification
      const percentile = calculateChildPercentile(bmi, ageNum, gender);

      for (const cat of bmiClassifications.children) {
        if (percentile >= cat.range[0] && percentile < cat.range[1]) {
          category = cat;
          break;
        }
      }
    } else {
      for (const cat of bmiClassifications[categoryType]) {
        if (bmi >= cat.range[0] && bmi < cat.range[1]) {
          category = cat;
          break;
        }
      }
    }

    setBmiCategory(category);

    // Calculate body fat percentage (estimate using BMI, age, gender)
    let bodyFat;
    if (gender === "male") {
      bodyFat = 1.2 * bmi + 0.23 * ageNum - 16.2;
    } else {
      bodyFat = 1.2 * bmi + 0.23 * ageNum - 5.4;
    }
    setBodyFatPercentage(Number.parseFloat(bodyFat.toFixed(1)));

    // Calculate ideal weight range (based on BMI 18.5-25 for adults, adjusted for others)
    let lowerBMI, upperBMI;

    if (userType === "child") {
      // For children, ideal weight is based on percentiles (simplified)
      lowerBMI = 5; // 5th percentile
      upperBMI = 85; // 85th percentile
    } else if (categoryType === "senior") {
      lowerBMI = 18.5;
      upperBMI = 27;
    } else {
      lowerBMI = 18.5;
      upperBMI = 25;
    }

    const lowerWeight = lowerBMI * (heightInMeters * heightInMeters);
    const upperWeight = upperBMI * (heightInMeters * heightInMeters);

    let lowerWeightDisplay, upperWeightDisplay;

    if (unit === "metric") {
      lowerWeightDisplay = `${lowerWeight.toFixed(1)} kg`;
      upperWeightDisplay = `${upperWeight.toFixed(1)} kg`;
    } else {
      const lowerWeightLbs = lowerWeight * 2.20462;
      const upperWeightLbs = upperWeight * 2.20462;
      lowerWeightDisplay = `${lowerWeightLbs.toFixed(1)} lbs`;
      upperWeightDisplay = `${upperWeightLbs.toFixed(1)} lbs`;
    }

    setIdealWeightRange({
      lower: lowerWeightDisplay,
      upper: upperWeightDisplay,
    });
    setShowResults(true);
  };

  // Simplified function to calculate child BMI percentile
  // In a real application, this would use CDC or WHO growth charts
  const calculateChildPercentile = (bmi, age, gender) => {
    // This is a very simplified approximation
    // In reality, you would use lookup tables based on age and gender

    // Simplified percentile calculation
    let percentile;

    if (gender === "male") {
      if (age < 5) {
        percentile = (bmi - 14) * 10; // Rough approximation
      } else if (age < 10) {
        percentile = (bmi - 14.5) * 9; // Rough approximation
      } else if (age < 15) {
        percentile = (bmi - 15) * 8; // Rough approximation
      } else {
        percentile = (bmi - 16) * 7; // Rough approximation
      }
    } else {
      if (age < 5) {
        percentile = (bmi - 13.5) * 10; // Rough approximation
      } else if (age < 10) {
        percentile = (bmi - 14) * 9; // Rough approximation
      } else if (age < 15) {
        percentile = (bmi - 15) * 8; // Rough approximation
      } else {
        percentile = (bmi - 16) * 7; // Rough approximation
      }
    }

    // Clamp percentile between 0 and 100
    percentile = Math.max(0, Math.min(100, percentile));

    return percentile;
  };

  const resetCalculator = () => {
    setAge("");
    setHeightCm("");
    setHeightFt("");
    setHeightIn("");
    setWeight("");
    setBmiResult(null);
    setBmiCategory(null);
    setBodyFatPercentage(null);
    setIdealWeightRange(null);
    setShowResults(false);
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
            title="Advanced BMI Calculator"
            subheader="For Men, Women, Kids, by Age & More"
          />
          <CardContent>
            <Tabs
              value={userType}
              onChange={(e, newValue) => setUserType(newValue)}
              variant="fullWidth"
              sx={{ mb: 3 }}
            >
              <Tab value="adult" label="Adults" />
              <Tab value="child" label="Children & Teens" />
            </Tabs>

            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    p: 2,
                    border: "1px solid rgba(0,0,0,0.1)",
                    borderRadius: 1,
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    Personal Information
                  </Typography>

                  <FormControl
                    component="fieldset"
                    sx={{ mb: 2, width: "100%" }}
                  >
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup
                      row
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
                    </RadioGroup>
                  </FormControl>

                  <TextField
                    label="Age"
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    InputProps={{
                      inputProps: {
                        min: userType === "child" ? 2 : 18,
                        max: userType === "child" ? 17 : 120,
                      },
                    }}
                    helperText={userType === "child" ? "Ages 2-17" : "Ages 18+"}
                  />

                  <FormControl
                    component="fieldset"
                    sx={{ mt: 2, mb: 2, width: "100%" }}
                  >
                    <FormLabel component="legend">Unit System</FormLabel>
                    <RadioGroup
                      row
                      value={unit}
                      onChange={(e) => setUnit(e.target.value)}
                    >
                      <FormControlLabel
                        value="metric"
                        control={<Radio />}
                        label="Metric (kg/cm)"
                      />
                      <FormControlLabel
                        value="imperial"
                        control={<Radio />}
                        label="Imperial (lb/ft)"
                      />
                    </RadioGroup>
                  </FormControl>

                  {unit === "metric" ? (
                    <TextField
                      label="Height"
                      type="number"
                      value={heightCm}
                      onChange={(e) => setHeightCm(e.target.value)}
                      fullWidth
                      variant="outlined"
                      margin="normal"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">cm</InputAdornment>
                        ),
                        inputProps: { min: 50, max: 250 },
                      }}
                    />
                  ) : (
                    <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                      <TextField
                        label="Feet"
                        type="number"
                        value={heightFt}
                        onChange={(e) => setHeightFt(e.target.value)}
                        variant="outlined"
                        sx={{ flex: 1 }}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">ft</InputAdornment>
                          ),
                          inputProps: { min: 1, max: 8 },
                        }}
                      />
                      <TextField
                        label="Inches"
                        type="number"
                        value={heightIn}
                        onChange={(e) => setHeightIn(e.target.value)}
                        variant="outlined"
                        sx={{ flex: 1 }}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">in</InputAdornment>
                          ),
                          inputProps: { min: 0, max: 11 },
                        }}
                      />
                    </Box>
                  )}

                  <TextField
                    label="Weight"
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          {unit === "metric" ? "kg" : "lbs"}
                        </InputAdornment>
                      ),
                      inputProps: {
                        min: unit === "metric" ? 10 : 22,
                        max: unit === "metric" ? 300 : 660,
                      },
                    }}
                  />

                  <FormControl
                    component="fieldset"
                    sx={{ mt: 2, mb: 2, width: "100%" }}
                  >
                    <FormLabel component="legend">Activity Level</FormLabel>
                    <RadioGroup
                      value={activityLevel}
                      onChange={(e) => setActivityLevel(e.target.value)}
                    >
                      <FormControlLabel
                        value="sedentary"
                        control={<Radio />}
                        label="Sedentary (little or no exercise)"
                      />
                      <FormControlLabel
                        value="light"
                        control={<Radio />}
                        label="Light (light exercise 1-3 days/week)"
                      />
                      <FormControlLabel
                        value="moderate"
                        control={<Radio />}
                        label="Moderate (moderate exercise 3-5 days/week)"
                      />
                      <FormControlLabel
                        value="active"
                        control={<Radio />}
                        label="Active (hard exercise 6-7 days/week)"
                      />
                      <FormControlLabel
                        value="veryActive"
                        control={<Radio />}
                        label="Very Active (very hard exercise, physical job or training)"
                      />
                    </RadioGroup>
                  </FormControl>

                  <Box sx={{ mt: 2, display: "flex", gap: 2 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={calculateBMI}
                      fullWidth
                    >
                      Calculate BMI
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={resetCalculator}
                      fullWidth
                    >
                      Reset
                    </Button>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                {showResults ? (
                  <Box
                    sx={{
                      p: 2,
                      border: "1px solid rgba(0,0,0,0.1)",
                      borderRadius: 1,
                      height: "100%",
                    }}
                  >
                    <Typography variant="h6" gutterBottom>
                      Your Results
                    </Typography>

                    <Paper
                      elevation={0}
                      sx={{ p: 2, bgcolor: "rgba(0,0,0,0.03)", mb: 2 }}
                    >
                      <Typography variant="subtitle1">BMI Value</Typography>
                      <Typography
                        variant="h3"
                        sx={{
                          color: bmiCategory?.color || "text.primary",
                          fontWeight: "bold",
                        }}
                      >
                        {bmiResult}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: bmiCategory?.color || "text.primary",
                          fontWeight: "medium",
                        }}
                      >
                        {bmiCategory?.class}
                      </Typography>
                      <Typography variant="body2" sx={{ mt: 1 }}>
                        {bmiCategory?.risk}
                      </Typography>
                    </Paper>

                    <Grid container spacing={2} sx={{ mb: 2 }}>
                      <Grid item xs={6}>
                        <Paper
                          elevation={0}
                          sx={{
                            p: 2,
                            bgcolor: "rgba(0,0,0,0.03)",
                            height: "100%",
                          }}
                        >
                          <Typography variant="subtitle2">
                            Body Fat (est.)
                          </Typography>
                          <Typography
                            variant="h5"
                            sx={{ color: "primary.main" }}
                          >
                            {bodyFatPercentage}%
                          </Typography>
                        </Paper>
                      </Grid>
                      <Grid item xs={6}>
                        <Paper
                          elevation={0}
                          sx={{
                            p: 2,
                            bgcolor: "rgba(0,0,0,0.03)",
                            height: "100%",
                          }}
                        >
                          <Typography variant="subtitle2">
                            Ideal Weight Range
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{ color: "primary.main" }}
                          >
                            {idealWeightRange?.lower} -{" "}
                            {idealWeightRange?.upper}
                          </Typography>
                        </Paper>
                      </Grid>
                    </Grid>

                    <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                      Health Tips
                    </Typography>

                    <Box component="ul" sx={{ pl: 2 }}>
                      {healthTips[bmiCategory?.class]?.map((tip, index) => (
                        <Typography
                          component="li"
                          key={index}
                          variant="body2"
                          sx={{ mb: 1 }}
                        >
                          {tip}
                        </Typography>
                      ))}
                    </Box>
                  </Box>
                ) : (
                  <Box
                    sx={{
                      p: 2,
                      border: "1px solid rgba(0,0,0,0.1)",
                      borderRadius: 1,
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <Typography variant="h6" gutterBottom>
                      BMI Calculator Features
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="body1" sx={{ mb: 1 }}>
                        ✅ Calculate BMI using standard BMI formula
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 1 }}>
                        ✅ Accurate for adults, children, teens, and seniors
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 1 }}>
                        ✅ Ideal for fitness tracking and health monitoring
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 1 }}>
                        ✅ Custom BMI classification chart
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 1 }}>
                        ✅ Built-in health tips and ideal weight range
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 1 }}>
                        ✅ BMI to Body Fat % estimation
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      Fill in your details on the left to calculate your BMI
                    </Typography>
                  </Box>
                )}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </ThemeProvider>
  );
}
