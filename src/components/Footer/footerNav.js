import { Box, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

export const FooterNav = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "hsl(207, 21%, 17%)",
        height: "3rem",
        px: 2,
      }}
    >
      <Typography sx={{ color: "hsl(0, 0%, 82%)" }}>
        © 2024
        <span style={{ color: "hsl(152, 95%, 39%)" }}>
          {" "}
          Foodtechnologylabs.{" "}
        </span>
        All Rights Reserved.
      </Typography>
      <Box sx={{ display: "flex", ml: "auto", gap: 2 }}>
        <NavLink style={{ textDecoration: "none" }}>
          <Typography
            sx={{
              color: "hsl(0, 0%, 82%)",
              "&:hover": { color: "hsl(152, 95%, 39%)" },
            }}
          >
            Term and Service
          </Typography>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }}>
          <Typography
            sx={{
              color: "hsl(0, 0%, 82%)",
              "&:hover": { color: "hsl(152, 95%, 39%)" },
            }}
          >
            Privacy Policy
          </Typography>
        </NavLink>
      </Box>
    </Box>
  );
};
