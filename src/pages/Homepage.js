import React from "react";
import "./homepage.css";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import HeroBanner from "./FoodTech 3D.png";
import { ArrowForwardIos, ImportExport } from "@mui/icons-material";
import NavigationBar from "../components/Navbar/NavigationBar";
import ServiceSection from "../components/Sections/2ndSection"
import FoodSection from '../components/Sections/3rdSection'
import BlogSection from '../components/Sections/4rthSectionBlog'
import FoodServices from '../components/Sections/5thSectionServices'
import AnimatedTestimonialSection from '../components/Sections/6thSecTestimonial'
import Component from '../components/Sections/7thSecCards'
import EighthComponent from '../components/Sections/8thSecComponents'
import FoodPartners from '../components/Sections/9thSection'
import FAQSection from '../components/Sections/10thFAQs'
import CrazyFoodChatbot from '../components/Sections/Section11ChatBot'
import NavComponent from '../components/Sections/NavBar'

function HomePage() {
  return (
    <>
      {/* Main Hero Section */}
      <Box className="hero">
        <Box className="container">
          <Box sx={{ pl: 3 }} className="hero-content">
            <Typography className="hero-subtitle">25% off all services.</Typography>

            <Typography variant="h1" className="hero-title">
              From <span className="span">Farm</span> To{" "}
              <span className="span">Fork,</span> We've Got You Covered
            </Typography>

            <Typography className="hero-text">
              Our team of food expert offers a wide range of services to help you achieve food excellence, from safety and quality consulting to recipe development and market analysis.
            </Typography>

            <Button className="btn btn-primary" variant="contained">
              <Link to="/get-started" style={{ textDecoration: "none", color: "white" }}>
                <span className="span">Get Started</span>
                <ArrowForwardIos sx={{ fontSize: "1.6rem" }} />
              </Link>
            </Button>
          </Box>

          {/* Hero Image Section */}
          <figure className="hero-banner">
            <img
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

      {/* Additional Section */}
      <Box>
        <NavComponent />
        <ServiceSection />
        <FoodSection />
        <FoodServices />
        <BlogSection />
        <AnimatedTestimonialSection />
        <Component />
        <EighthComponent />
        <FoodPartners />
        <FAQSection />


        <CrazyFoodChatbot />
      </Box>

    </>
  );
}

export default HomePage;
