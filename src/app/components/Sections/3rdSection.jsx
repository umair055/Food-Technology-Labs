"use client";

import { motion } from "framer-motion";
import { Button, Container, Grid2, Typography, Box } from "@mui/material";
import { useRouter } from "next/navigation";
import Image from "next/image";
import imageBg from "./images/images/cta-bg.png";
import imageProduct from "./images/images/FOOD CONSULTANT (2).png";

export default function FoodSection() {
  const router = useRouter();

  return (
    <Box
      sx={{
        padding: "4rem 0",
        backgroundImage: `url(${imageBg.src})`,
        backgroundColor: "#ffffff",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box textAlign="center" mb={3}>
            <Typography
              variant="h2"
              sx={{ fontWeight: "bold", color: "green", mb: 2 }}
            >
              Your Food, Our Passion
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "black", fontSize: "20px" }}
            >
              Are You Facing Food Safety & Quality-Related Issues In Your Food
              Business?
            </Typography>
          </Box>
        </motion.div>

        <Grid2 sx={{ justifyContent: "center" }} container spacing={2}>
          <Grid2
            sx={{
              width: { xs: "100%", md: "40%" },
            }}
            xs={12}
            md={6}
            lg={6}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Typography
                variant="h4"
                sx={{ fontWeight: 600, color: "#2d3748", mb: 2 }}
              >
                Food Technology Labs Offers Unique Solutions For This!
              </Typography>
              <Typography variant="body1" sx={{ color: "#718096", mb: 3 }}>
                Our experts are ready to assist you with short-term needs or
                long-term projects. You're just one click away from the solution
                you've been searching for.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#38a169",
                  color: "white",
                  fontWeight: "bold",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "9999px",
                  boxShadow: 3,
                  transition: "background-color 0.3s ease, transform 0.3s ease",
                  "&:hover": {
                    backgroundColor: "emerald.main",
                    transform: "translateY(-0.25rem)",
                  },
                }}
                onClick={() => router.push("/food-services")}
              >
                HIRE A FOOD CONSULTANT
              </Button>
            </motion.div>
          </Grid2>

          <Grid2 xs={12} md={6} lg={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Box
                sx={{
                  position: "relative",
                  height: "24rem",
                  borderRadius: 1,
                  overflow: "hidden",
                  boxShadow: 3,
                }}
              >
                <Image
                  src={imageProduct}
                  alt="Product"
                  width="100%"
                  height="100%"
                />
              </Box>
            </motion.div>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}
