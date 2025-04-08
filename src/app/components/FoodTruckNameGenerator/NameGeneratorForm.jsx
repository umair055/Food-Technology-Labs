import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Slider,
  Switch,
  FormControlLabel,
  Paper,
} from "@mui/material";
import { Refresh } from "@mui/icons-material";

export default function NameGeneratorForm({ onGenerateNames }) {
  const [concept, setConcept] = useState("");
  const [nameStyle, setNameStyle] = useState("creative");
  const [nameCount, setNameCount] = useState(5);
  const [advancedOptions, setAdvancedOptions] = useState(false);
  const [alliteration, setAlliteration] = useState(false);
  const [wordLength, setWordLength] = useState([3, 12]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerateNames({
      concept,
      nameStyle,
      nameCount,
      advancedOptions,
      alliteration,
      wordLength,
    });
  };

  return (
    <Paper elevation={1} sx={{ p: 3, borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom>
        Generate Your Food Truck Name
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <TextField
          fullWidth
          label="Food Truck Concept"
          placeholder="e.g., pizza, tacos, ice cream"
          value={concept}
          onChange={(e) => setConcept(e.target.value)}
          margin="normal"
          variant="outlined"
          required
          sx={{
            "& label.Mui-focused": {
              color: "hsl(152, 95%, 39%)",
            },
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "hsl(152, 95%, 39%)",
              },
            },
          }}
        />

        <FormControl fullWidth margin="normal">
          <InputLabel
            sx={{
              "&.Mui-focused": {
                color: "hsl(152, 95%, 39%)",
              },
            }}
          >
            Name Style
          </InputLabel>
          <Select
            value={nameStyle}
            label="Name Style"
            onChange={(e) => setNameStyle(e.target.value)}
            sx={{
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "hsl(152, 95%, 39%)",
              },
            }}
          >
            <MenuItem value="creative">Creative & Catchy</MenuItem>
            <MenuItem value="professional">Professional</MenuItem>
            <MenuItem value="fun">Fun & Playful</MenuItem>
            <MenuItem value="quirky">Quirky & Unique</MenuItem>
          </Select>
        </FormControl>

        <Box sx={{ mt: 3 }}>
          <Typography gutterBottom>Number of Names: {nameCount}</Typography>
          <Slider
            sx={{
              color: "hsl(152, 95%, 39%)", // Main slider color (thumb + track)
              "& .MuiSlider-thumb": {
                "&:hover, &.Mui-focusVisible, &.Mui-active": {
                  boxShadow: "0px 0px 0px 8px rgba(0, 128, 0, 0.16)",
                },
              },
              "& .MuiSlider-valueLabel": {
                backgroundColor: "hsl(152, 95%, 39%)",
              },
            }}
            value={nameCount}
            onChange={(e, newValue) => setNameCount(newValue)}
            min={1}
            max={20}
            marks={[
              { value: 1, label: "1" },
              { value: 10, label: "10" },
              { value: 20, label: "20" },
            ]}
          />
        </Box>

        <Box sx={{ mt: 3 }}>
          <FormControlLabel
            control={
              <Switch
                sx={{
                  "& .MuiSwitch-switchBase.Mui-checked": {
                    color: "hsl(152, 95%, 39%)",
                  },
                  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                    backgroundColor: "hsl(152, 95%, 39%)",
                  },
                }}
                checked={advancedOptions}
                onChange={(e) => setAdvancedOptions(e.target.checked)}
              />
            }
            label="Advanced Options"
          />

          {advancedOptions && (
            <Box sx={{ mt: 2, pl: 2, borderLeft: 1, borderColor: "grey.300" }}>
              <FormControlLabel
                control={
                  <Switch
                    sx={{
                      "& .MuiSwitch-switchBase.Mui-checked": {
                        color: "hsl(152, 95%, 39%)",
                      },
                      "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":
                        {
                          backgroundColor: "hsl(152, 95%, 39%)",
                        },
                    }}
                    checked={alliteration}
                    onChange={(e) => setAlliteration(e.target.checked)}
                  />
                }
                label="Use Alliteration"
              />

              <Box sx={{ mt: 2 }}>
                <Typography gutterBottom>
                  Name Length: {wordLength[0]} - {wordLength[1]} characters
                </Typography>
                <Slider
                  sx={{
                    color: "hsl(152, 95%, 39%)", // Main slider color (thumb + track)
                    "& .MuiSlider-thumb": {
                      "&:hover, &.Mui-focusVisible, &.Mui-active": {
                        boxShadow: "0px 0px 0px 8px rgba(0, 128, 0, 0.16)",
                      },
                    },
                    "& .MuiSlider-valueLabel": {
                      backgroundColor: "hsl(152, 95%, 39%)",
                    },
                  }}
                  value={wordLength}
                  onChange={(e, newValue) => setWordLength(newValue)}
                  min={3}
                  max={30}
                  marks={[
                    { value: 3, label: "3" },
                    { value: 15, label: "15" },
                    { value: 30, label: "30" },
                  ]}
                  valueLabelDisplay="auto"
                />
              </Box>
            </Box>
          )}
        </Box>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          sx={{ mt: 3, backgroundColor: "hsl(152, 95%, 39%)" }}
          fullWidth
          startIcon={<Refresh />}
        >
          Generate Names
        </Button>
      </Box>
    </Paper>
  );
}
