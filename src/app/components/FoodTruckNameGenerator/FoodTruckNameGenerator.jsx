"use client";
import { useState } from "react";
import {
  Box,
  Paper,
  Tabs,
  Tab,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import { Refresh, Business, TrendingUp, History } from "@mui/icons-material";

import TabPanel from "./TabPanel";
import NameGeneratorForm from "./NameGeneratorForm";
import GeneratedNamesList from "./GeneratedNamesList";
import BusinessTools from "./BusinessTools";
import IndustryTrends from "./IndustryTrends";
import GenerationHistory from "./GenerationHistory";
import { generateFoodTruckNames } from "../../../../utils/name-generator";
export default function FoodTruckNameGenerator() {
  const [tabValue, setTabValue] = useState(0);
  const [generatedNames, setGeneratedNames] = useState([]);
  const [history, setHistory] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleGenerateNames = (formData) => {
    if (!formData.concept) {
      setSnackbarMessage("Please enter a food concept");
      setSnackbarOpen(true);
      return;
    }

    const newNames = generateFoodTruckNames(formData);
    setGeneratedNames(newNames);

    // Add to history
    const historyEntry = {
      concept: formData.concept,
      style: formData.nameStyle,
      names: newNames,
      timestamp: new Date().toLocaleString(),
    };

    setHistory((prevHistory) => [historyEntry, ...prevHistory]);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setSnackbarMessage("Copied to clipboard!");
    setSnackbarOpen(true);
  };

  const exportNames = () => {
    const text = generatedNames.join("\n");
    const blob = new Blob([text], { type: "text/plain" });
    const href = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = href;
    link.download = `food-truck-names.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(href);

    setSnackbarMessage("Names exported successfully!");
    setSnackbarOpen(true);
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 1200, mx: "auto", p: 2 }}>
      <Paper elevation={3} sx={{ borderRadius: 2, overflow: "hidden" }}>
        <Box sx={{ p: 3, bgcolor: "hsl(152, 95%, 39%)", color: "white" }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Food Truck Name Generator
          </Typography>
          <Typography variant="subtitle1">
            Create unique, catchy, and memorable food truck names for your
            business
          </Typography>
        </Box>

        <Box sx={{ borderBottom: 1, borderColor: "hsl(152, 95%, 39%)" }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            aria-label="food truck generator tabs"
            variant="scrollable"
            scrollButtons="auto"
            textColor="hsl(152, 95%, 39%)"
            TabIndicatorProps={{
              style: {
                backgroundColor: "hsl(152, 95%, 39%)", // Indicator color
              },
            }}
          >
            <Tab
              sx={{
                color: tabValue === 0 && "hsl(152, 95%, 39%)", // Text color
              }}
              label="Name Generator"
              icon={<Refresh />}
              iconPosition="start"
            />
            <Tab
              sx={{
                color: tabValue === 1 && "hsl(152, 95%, 39%)", // Text color
              }}
              label="Business Tools"
              icon={<Business />}
              iconPosition="start"
            />
            <Tab
              sx={{
                color: tabValue === 2 && "hsl(152, 95%, 39%)", // Text color
              }}
              label="Industry Trends"
              icon={<TrendingUp />}
              iconPosition="start"
            />
            <Tab
              sx={{
                color: tabValue === 3 && "hsl(152, 95%, 39%)", // Text color
              }}
              label="History"
              icon={<History />}
              iconPosition="start"
            />
          </Tabs>
        </Box>

        <TabPanel value={tabValue} index={0}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 3,
            }}
          >
            <Box sx={{ flex: 1 }}>
              <NameGeneratorForm onGenerateNames={handleGenerateNames} />
            </Box>
            <Box sx={{ flex: 1 }}>
              <GeneratedNamesList
                names={generatedNames}
                onCopyName={copyToClipboard}
                onExportNames={exportNames}
              />
            </Box>
          </Box>
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <BusinessTools />
        </TabPanel>

        <TabPanel value={tabValue} index={2}>
          <IndustryTrends />
        </TabPanel>

        <TabPanel value={tabValue} index={3}>
          <GenerationHistory history={history} onCopyName={copyToClipboard} />
        </TabPanel>
      </Paper>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}
