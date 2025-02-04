import React, { useState } from "react";
import {
  Grid,
  TextField,
  MenuItem,
  Typography,
  Tabs,
  Tab,
  Box,
} from "@mui/material";
import ToolCard from "./ToolCard";
import { tools } from "../../data/tools";
const ToolsGrid = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [favorites, setFavorites] = useState([]);
  const [tabValue, setTabValue] = useState(0);

  const filteredTools = tools
    .filter((tool) => {
      const matchesSearch =
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = category === "all" || tool.category === category;
      const matchesFavorites =
        tabValue === 1 ? favorites.includes(tool.id) : true;
      return matchesSearch && matchesCategory && matchesFavorites;
    })
    .map((tool) => ({
      ...tool,
      favorite: favorites.includes(tool.id),
    }));

  const handleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const handleToolClick = (id) => {
    console.log(`Opening tool: ${id}`);
  };

  return (
    <Box sx={{ maxWidth: 1200, margin: "auto", padding: 3 }}>
      <Typography
        variant="h2"
        component="h1"
        gutterBottom
        align="center"
        color="primary"
      >
        Food Technology Tools
      </Typography>
      <Typography
        variant="h5"
        gutterBottom
        align="center"
        color="text.secondary"
      >
        Discover our comprehensive collection of professional food technology
        calculators and tools
      </Typography>

      <Tabs
        value={tabValue}
        onChange={(_, newValue) => setTabValue(newValue)}
        centered
        sx={{ mb: 3 }}
      >
        <Tab label="All Tools" />
        <Tab label="Favorites" />
      </Tabs>

      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Search tools"
            variant="outlined"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            select
            label="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            variant="outlined"
          >
            <MenuItem value="all">All Categories</MenuItem>
            <MenuItem value="calculator">Calculators</MenuItem>
            <MenuItem value="generator">Generators</MenuItem>
            <MenuItem value="converter">Converters</MenuItem>
          </TextField>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        {filteredTools.map((tool) => (
          <Grid item xs={12} sm={6} md={4} key={tool.id}>
            <ToolCard
              tool={tool}
              onFavorite={handleFavorite}
              onClick={handleToolClick}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ToolsGrid;
