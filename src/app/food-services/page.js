"use client";
import { motion } from "framer-motion";
import {
  Agriculture,
  Fastfood,
  Scale,
  Insights,
  RestaurantMenu,
  PhotoCamera,
  Inventory,
  SmartToy,
  MobileFriendly,
  RssFeed,
  Pets,
  MoreHoriz,
} from "@mui/icons-material";
import {
  Button,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { darken } from "@mui/material/styles";

const services = [
  { name: "Food Safety & Quality Consulting", icon: Agriculture },
  { name: "Meal Planning", icon: Fastfood },
  { name: "Farm-to-Table Consulting", icon: Agriculture },
  { name: "Dietary Planning For Special Needs", icon: Scale },
  { name: "Market Research And Trends Analysis", icon: Insights },
  { name: "Recipe Development And Testing", icon: RestaurantMenu },
  { name: "Food Photography And Styling", icon: PhotoCamera },
  { name: "Food Packaging Solutions", icon: Inventory },
  { name: "Enhance Your Food Business With AI Solutions", icon: SmartToy },
  { name: "Diet and Lifestyle Apps Development", icon: MobileFriendly },
  { name: "Food Blogging and Influencer Services", icon: RssFeed },
  { name: "Pet Food Consulting", icon: Pets },
  { name: "Other Food-Related Services", icon: MoreHoriz },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function ServicesPage() {
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "grey.100", py: 8, px: 2 }}>
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h2" fontWeight="bold" gutterBottom>
            Our Services
          </Typography>
          <Typography variant="h5" color="text.secondary">
            Empowering the food industry with cutting-edge solutions
          </Typography>
        </motion.div>
      </Box>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: 2,
            boxShadow: 3,
            p: 4,
            mb: 8,
          }}
        >
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Food Consulting
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Our flagship service offers comprehensive food consulting solutions
            to help your business thrive in the competitive food industry. From
            concept development to market launch, we provide expert guidance
            every step of the way.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#05c26a",
              "&:hover": {
                backgroundColor: darken("#05c26a", 0.2), // Darken by 20%
              },
            }}
            href="/contact-us"
          >
            Get Started with Food Consulting
          </Button>
        </Box>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div variants={itemVariants}>
                <Card
                  sx={{
                    height: "100%",
                    transition: "box-shadow 0.3s",
                    "&:hover": { boxShadow: 6 },
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mb: 2,
                      }}
                    >
                      <service.icon sx={{ fontSize: 48, color: "green" }} />
                    </Box>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {service.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Elevate your food business with our specialized{" "}
                      {service.name.toLowerCase()} services.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>

      <Box sx={{ textAlign: "center", mt: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Need a Custom Solution?
          </Typography>
          <Typography variant="h6" color="text.secondary" paragraph>
            We offer tailored services to meet your unique food business needs.
            Contact us to discuss your specific requirements.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#05c26a",
              "&:hover": {
                backgroundColor: darken("#05c26a", 0.2), // Darken by 20%
              },
            }}
            href="/contact-us"
          >
            Contact Us
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
}
