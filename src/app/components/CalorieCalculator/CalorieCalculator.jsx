"use client";

import { useState } from "react";

// MUI components
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  TextField,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  MenuItem,
  Select,
  InputLabel,
  Divider,
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
          maxWidth: 500,
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

export default function CalorieCalculator() {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("female");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("light");
  const [goal, setGoal] = useState("maintain");
  const [unit, setUnit] = useState("metric");
  const [calories, setCalories] = useState(null);

  const calculateCalories = () => {
    if (!age || !weight || !height) return;

    // Convert to metric if using imperial
    let weightKg = Number.parseFloat(weight);
    let heightCm = Number.parseFloat(height);

    if (unit === "imperial") {
      weightKg = Number.parseFloat(weight) * 0.453592; // lbs to kg
      heightCm = Number.parseFloat(height) * 2.54; // inches to cm
    }

    // Calculate BMR using Mifflin-St Jeor Equation
    let bmr;
    if (gender === "male") {
      bmr = 10 * weightKg + 6.25 * heightCm - 5 * Number.parseFloat(age) + 5;
    } else {
      bmr = 10 * weightKg + 6.25 * heightCm - 5 * Number.parseFloat(age) - 161;
    }

    // Apply activity factor
    let tdee;
    switch (activityLevel) {
      case "sedentary":
        tdee = bmr * 1.2;
        break;
      case "light":
        tdee = bmr * 1.375;
        break;
      case "moderate":
        tdee = bmr * 1.55;
        break;
      case "active":
        tdee = bmr * 1.725;
        break;
      case "veryActive":
        tdee = bmr * 1.9;
        break;
      default:
        tdee = bmr * 1.375;
    }

    // Adjust based on goal
    let goalCalories;
    switch (goal) {
      case "mildLose":
        goalCalories = tdee - 250;
        break;
      case "lose":
        goalCalories = tdee - 500;
        break;
      case "extremeLose":
        goalCalories = tdee - 1000;
        break;
      case "mildGain":
        goalCalories = tdee + 250;
        break;
      case "gain":
        goalCalories = tdee + 500;
        break;
      case "fastGain":
        goalCalories = tdee + 1000;
        break;
      default:
        goalCalories = tdee;
    }

    setCalories(Math.round(goalCalories));
  };

  const resetForm = () => {
    setAge("");
    setGender("female");
    setWeight("");
    setHeight("");
    setActivityLevel("light");
    setGoal("maintain");
    setCalories(null);
  };

  const handleUnitChange = (event) => {
    setUnit(event.target.value);
    setWeight("");
    setHeight("");
    setCalories(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "500px",
          padding: 2,
          backgroundColor: "#ffffff",
        }}
      >
        <Card>
          <CardHeader
            title="Calorie Calculator"
            subheader="Estimate your daily calorie needs"
          />
          <CardContent sx={{ pt: 3 }}>
            <FormControl component="fieldset" sx={{ mb: 2, width: "100%" }}>
              <FormLabel component="legend">Unit System</FormLabel>
              <RadioGroup row value={unit} onChange={handleUnitChange}>
                <FormControlLabel
                  value="metric"
                  control={<Radio />}
                  label="Metric (kg/cm)"
                />
                <FormControlLabel
                  value="imperial"
                  control={<Radio />}
                  label="Imperial (lb/in)"
                />
              </RadioGroup>
            </FormControl>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <TextField
                label="Age"
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                fullWidth
                variant="outlined"
                InputProps={{ inputProps: { min: 15, max: 80 } }}
              />

              <FormControl component="fieldset" sx={{ mb: 1 }}>
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
                label={`Weight ${unit === "metric" ? "(kg)" : "(lbs)"}`}
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                fullWidth
                variant="outlined"
              />

              <TextField
                label={`Height ${unit === "metric" ? "(cm)" : "(inches)"}`}
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                fullWidth
                variant="outlined"
              />

              <FormControl fullWidth variant="outlined" sx={{ mt: 1 }}>
                <InputLabel>Activity Level</InputLabel>
                <Select
                  value={activityLevel}
                  onChange={(e) => setActivityLevel(e.target.value)}
                  label="Activity Level"
                >
                  <MenuItem value="sedentary">
                    Sedentary (little or no exercise)
                  </MenuItem>
                  <MenuItem value="light">
                    Light (exercise 1-3 days/week)
                  </MenuItem>
                  <MenuItem value="moderate">
                    Moderate (exercise 3-5 days/week)
                  </MenuItem>
                  <MenuItem value="active">
                    Active (exercise 6-7 days/week)
                  </MenuItem>
                  <MenuItem value="veryActive">
                    Very Active (hard exercise daily)
                  </MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth variant="outlined" sx={{ mt: 1 }}>
                <InputLabel>Goal</InputLabel>
                <Select
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  label="Goal"
                >
                  <MenuItem value="maintain">Maintain weight</MenuItem>
                  <MenuItem value="mildLose">
                    Mild weight loss (0.25 kg/week)
                  </MenuItem>
                  <MenuItem value="lose">Weight loss (0.5 kg/week)</MenuItem>
                  <MenuItem value="extremeLose">
                    Extreme weight loss (1 kg/week)
                  </MenuItem>
                  <MenuItem value="mildGain">
                    Mild weight gain (0.25 kg/week)
                  </MenuItem>
                  <MenuItem value="gain">Weight gain (0.5 kg/week)</MenuItem>
                  <MenuItem value="fastGain">
                    Fast weight gain (1 kg/week)
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>

            {calories !== null && (
              <Box
                sx={{
                  mt: 3,
                  p: 2,
                  bgcolor: "rgba(0, 0, 0, 0.03)",
                  borderRadius: 1,
                }}
              >
                <Typography variant="h6" component="h3">
                  Your Daily Calorie Needs
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
                    {calories}
                  </Typography>
                  <Typography variant="h6" component="span" sx={{ ml: 1 }}>
                    calories/day
                  </Typography>
                </Box>
              </Box>
            )}
          </CardContent>
          <CardActions sx={{ p: 2, pt: 0 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={calculateCalories}
              sx={{ flex: 1, mr: 1 }}
            >
              Calculate
            </Button>
            <Button variant="outlined" onClick={resetForm} sx={{ flex: 1 }}>
              Reset
            </Button>
          </CardActions>
        </Card>
      </Box>
    </ThemeProvider>
  );
}
