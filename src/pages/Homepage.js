import React from "react";
import "./homepage.css";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./homepage.css";
import HeroBanner from "./hero-banner.png";
import { ArrowForwardIos } from "@mui/icons-material";

function HomePage() {
  return (
    <Box className="hero">
      <Box className="container">
        <Box sx={{ pl: 3 }} className="hero-content">
          <Typography className="hero-subtitle">
            25% off all services.
          </Typography>

          <Typography className="h1 hero-title">
            Qualityful <span className="span">organic</span>
            fruit & <span className="span">vegetables.</span>
          </Typography>

          <Typography className="hero-text">
            It has survived not only five centuries also there leaped.
          </Typography>

          <Button className="btn btn-primary" variant="contained">
            <Link style={{ textDecoration: "none", color: "white" }} y>
              <span className="span">Get Started</span>
              <ArrowForwardIos sx={{ fontSize: "1.6rem" }} />
            </Link>
          </Button>
        </Box>

        <figure className="hero-banner">
          <img
            component={"img"}
            src={HeroBanner}
            width="603"
            height="634"
            loading="lazy"
            alt="Vegetables"
            className="w-100"
          />
        </figure>
      </Box>
    </Box>
  );
}

export default HomePage;
