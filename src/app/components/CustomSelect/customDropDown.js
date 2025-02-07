"use client";
import React, { useState } from "react";
import { ArrowDropDownOutlined } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";

export default function CustomDropDown({ options, defaultValue, onClick }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div>
        <Button
          sx={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "6px 12px",
            fontSize: "0.8rem",
            fontWeight: 600,
            lineHeight: 1.75,
            color: "text.primary",
            backgroundColor: "background.paper",
            "&:hover": {
              backgroundColor: "action.hover",
              color: "black",
            },
            "& .MuiSvgIcon-root": {
              marginLeft: 1,
            },
          }}
        >
          {defaultValue}
          <ArrowDropDownOutlined aria-hidden="true" />
        </Button>
      </div>

      {isOpen && (
        <Box sx={{ position: "absolute", background: "#ffffff", zIndex: 100 }}>
          <Box
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option) => (
              <Typography
                sx={{
                  borderBottom: "1px solid #eeeeee",
                  paddingTop: 1,
                  paddingLeft: 1,
                  paddingRight: 1,
                  fontSize: "16px",
                  fontWeight: 500,
                  minHeight: "35px",
                  minWidth: "200px",
                  height: "auto",
                  color: "#3f3733",
                  cursor: "pointer",
                  "&:hover": {
                    color: "#05c26a",
                  },
                }}
                key={option.value}
                role="menuitem"
                onClick={() => onClick(option.category, option.name)}
              >
                {option.name}
              </Typography>
            ))}
          </Box>
        </Box>
      )}
    </div>
  );
}
