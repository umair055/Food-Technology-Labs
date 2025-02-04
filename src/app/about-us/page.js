import React from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid2,
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import EmailIcon from "@mui/icons-material/Email";
import ScienceIcon from "@mui/icons-material/Science";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PetsIcon from "@mui/icons-material/Pets";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import CalculateIcon from "@mui/icons-material/Calculate";
import { Agriculture } from "@mui/icons-material";
import Head from "next/head";

export default function AboutUsPage() {
  const services = [
    {
      title: "Food Safety & Quality Consulting",
      icon: <ScienceIcon />,
      description:
        "Ensuring your products meet the highest industry standards.",
    },
    {
      title: "Meal Planning & Dietary Consulting",
      icon: <RestaurantIcon />,
      description:
        "Customized plans for special needs, from nutrition-focused diets to specialized health requirements.",
    },
    {
      title: "Farm-to-Table Consulting",
      icon: <Agriculture />,
      description:
        "Helping businesses embrace sustainable, fresh food sourcing.",
    },
    {
      title: "Market Research & Trends Analysis",
      icon: <TrendingUpIcon />,
      description:
        "Uncovering valuable insights to stay ahead in a competitive market.",
    },
    {
      title: "AI Solutions for Food Businesses",
      icon: <CalculateIcon />,
      description:
        "Leveraging artificial intelligence to optimize processes and improve customer experiences.",
    },
    {
      title: "Recipe Development & Testing",
      icon: <RestaurantIcon />,
      description:
        "Bringing innovation to your product line with new flavors and formulations.",
    },
    {
      title: "Food Photography & Styling",
      icon: <CameraAltIcon />,
      description:
        "Showcasing your products in the best light for brand-building and engagement.",
    },
    {
      title: "Pet Food Consulting",
      icon: <PetsIcon />,
      description:
        "Dedicated to creating safe, nutritious options for our furry friends.",
    },
  ];

  return (
    <>
      <Head>
        <title>About Us</title>
        <meta name="About Us" content="This is an example page." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              color="#05c26a"
            >
              About Food Technology Labs
            </Typography>
            <Typography variant="h6" color="text.secondary" paragraph>
              Your trusted partner in innovative food solutions and consultancy
            </Typography>
          </Box>

          <Grid2 container spacing={4}>
            <Grid2 xs={12} md={6}>
              <Typography variant="body1" paragraph>
                Welcome to Food Technology Labs, where we are passionate about
                transforming the way food businesses operate by bringing
                science, technology, and creativity together. Our team of
                experts specializes in a wide array of services, from food
                safety and quality consulting to dietary planning, market
                research, AI solutions, and beyond.
              </Typography>
              <Typography variant="body1" paragraph>
                At Food Technology Labs, we believe that every food journey is
                unique and that quality and safety are paramount. Our mission is
                to empower food businesses, from startups to established brands,
                with tailored solutions that enhance both product quality and
                customer satisfaction.
              </Typography>
            </Grid2>
            <Grid2 xs={12} md={6}>
              <Card>
                <CardHeader title="Our Vision" />
                <CardContent>
                  <Typography variant="body1" paragraph>
                    We envision a food industry that embraces innovation and
                    adapts quickly to ever-changing demands. Our goal is to
                    support businesses in making smarter, safer, and more
                    sustainable choices, while always keeping the
                    consumer&apos;s health and satisfaction at the core.
                  </Typography>
                </CardContent>
              </Card>
            </Grid2>
          </Grid2>

          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ mt: 6, mb: 4 }}
          >
            What We Offer
          </Typography>
          <Grid2 container spacing={3}>
            {services.map((service, index) => (
              <Grid2 xs={12} sm={6} md={4} key={index}>
                <Card sx={{ height: "100%" }}>
                  <CardHeader avatar={service.icon} title={service.title} />
                  <CardContent>
                    <Typography variant="body2">
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid2>
            ))}
          </Grid2>

          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ mt: 6, mb: 4 }}
          >
            Our Tools & Resources
          </Typography>
          <Typography variant="body1" paragraph>
            In addition to our services, we offer a collection of food-related
            calculators and tools to make decision-making easier, as well as a
            blog packed with insights, tips, and the latest industry news. From
            nutritional calculators to recipe tools, our resources are designed
            to support food professionals and enthusiasts alike.
          </Typography>

          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ mt: 6, mb: 4 }}
          >
            Why Choose Us?
          </Typography>
          <List>
            {[
              "Team deeply rooted in food science, technology, and culinary arts",
              "Uniquely positioned to guide you on your journey toward excellence",
              "Commitment to quality and client-focused solutions",
              "Forward-thinking approach that sets us apart",
            ].map((item, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <CheckCircleOutlineIcon color="#05c26a" />
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>

          <Box sx={{ mt: 6, textAlign: "center" }}>
            <Typography variant="h5" gutterBottom>
              Connect with Us
            </Typography>
            <Typography variant="body1" component={"p"}>
              Thank you for choosing Food Technology Labs. Let&apos;s elevate
              your food business together.
            </Typography>
            <Button
              variant="contained"
              sx={{ background: "#05c26a" }}
              size="large"
              startIcon={<EmailIcon />}
              href="mailto:foodtechnologylabs@gmail.com"
            >
              Contact Us
            </Button>
          </Box>
        </Paper>
      </Container>
    </>
  );
}
