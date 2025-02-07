"use client";
import React from "react";
import ToolsGrid from "../../components/Tools/ToolsGrid";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import theme from "../../theme";

export default function ToolsPage() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "100vh",
          background:
            "linear-gradient(180deg, rgba(5,194,106,0.05) 0%, rgba(255,255,255,1) 100%)",
        }}
      >
        <ToolsGrid />
      </Box>
    </ThemeProvider>
  );
}
