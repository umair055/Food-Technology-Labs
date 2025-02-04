"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import {
  Facebook,
  Instagram,
  Twitter,
  Message,
  Send,
  Science,
  MenuBook,
  Edit,
  Restaurant,
  Mail,
  WhatsApp,
} from "@mui/icons-material";
import { toast, Toaster } from "sonner";
import emailjs from "@emailjs/browser";
// Create a dark theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#05C26A",
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          borderColor: "#05C26A",
          boxShadow: "0 0 15px rgba(5,194,106,0.3)",
          "&:hover": {
            boxShadow: "0 0 25px rgba(5,194,106,0.5)",
          },
          transition: "box-shadow 0.3s ease-in-out",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#05C26A",
          color: "white",
          "&:hover": {
            backgroundColor: "#04A55A",
          },
        },
      },
    },
  },
});

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const services = [
  {
    icon: <Science />,
    title: "Food Consulting",
    description: "Expert advice on food science, technology, and innovation.",
  },
  {
    icon: <Restaurant />,
    title: "Food Services",
    description: "Comprehensive solutions for all your food-related needs.",
  },
  {
    icon: <MenuBook />,
    title: "Food Blog",
    description: "Stay updated with the latest in food technology and trends.",
  },
  {
    icon: <Edit />,
    title: "Write for Us",
    description: "Share your food expertise with our growing community.",
  },
  {
    icon: <Mail />,
    title: "Email Us",
    description: "Reach out directly to our team.",
    email: "foodtechnolgylabs@gmail.com",
  },
];

const socialLinks = [
  {
    icon: <Facebook />,
    href: "https://www.facebook.com/foodtechnologylabs?mibextid=ZbWKwL",
  },
  {
    icon: <Instagram />,
    href: "https://www.instagram.com/food_technology_labs?igsh=bnNibnpodnM1aDBt",
  },
  { icon: <Twitter />, href: "https://x.com/foodtechnology0?s=09" },
  {
    icon: <WhatsApp />,
    href: "https://whatsapp.com/channel/0029VaJYBj08kyyD6pUdW31p",
  },
];

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    subject: "",
    from_email: "",
    body: "",
    from_name: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    setIsSubmitting(true);
    e.preventDefault();

    const { subject, from_email, body, from_name } = formData;

    emailjs
      .send(
        "Asimbaba113310@",
        "template_68i426o",
        {
          subject: subject,
          from_email: from_email,
          body: body,
          from_name: from_name,
        },
        "dl0Z3wZ2ppRm6HxyP"
      )
      .then((response) => {
        toast.success("Message sent successfully!", response);
        setIsSubmitting(false);
      })
      .catch((error) => {
        toast.error("An error occurred, please try again.", error);
        setIsSubmitting(false);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Toaster />
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "background.default",
          color: "text.primary",
          fontFamily: "Roboto, sans-serif",
        }}
      >
        <Box sx={{ maxWidth: "1200px", mx: "auto", px: 4, py: 12 }}>
          {/* Header Section */}
          <motion.div initial="initial" animate="animate" variants={fadeInUp}>
            <Typography
              variant="h2"
              component="h1"
              align="center"
              sx={{ color: "primary.main", mb: 2 }}
            >
              Connect with Food Technology Labs
            </Typography>
            <Typography
              variant="body1"
              align="center"
              sx={{
                color: "text.secondary",
                maxWidth: "800px",
                mx: "auto",
                mb: 6,
              }}
            >
              Whether you're seeking food consulting, interested in our
              services, want to contribute to our blog, or have any questions,
              we're here to help!
            </Typography>
          </motion.div>

          {/* Services Grid */}
          <motion.div variants={stagger} initial="initial" animate="animate">
            <Grid container spacing={3} sx={{ mb: 6 }}>
              {services.map((service, index) => (
                <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
                  <motion.div variants={fadeInUp}>
                    <Card>
                      <CardContent
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          textAlign: "center",
                        }}
                      >
                        <Box
                          sx={{
                            width: 48,
                            height: 48,
                            borderRadius: "50%",
                            bgcolor: "primary.main",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mb: 2,
                          }}
                        >
                          {React.cloneElement(service.icon, {
                            sx: { color: "black" },
                          })}
                        </Box>
                        <Typography
                          variant="h6"
                          component="h3"
                          sx={{ color: "primary.main", mb: 1 }}
                        >
                          {service.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "text.secondary" }}
                        >
                          {service.description}
                        </Typography>
                        {service.email && (
                          <Typography
                            variant="body2"
                            component="a"
                            href={`mailto:${service.email}`}
                            sx={{
                              color: "primary.main",
                              mt: 1,
                              "&:hover": { textDecoration: "underline" },
                            }}
                          >
                            {service.email}
                          </Typography>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial="initial" animate="animate" variants={fadeInUp}>
            <Card>
              <CardContent sx={{ p: 4 }}>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        name="from_name"
                        label="Name"
                        variant="outlined"
                        placeholder="Your name"
                        value={formData.from_name}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        label="Email"
                        variant="outlined"
                        name="from_email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.from_email}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl fullWidth variant="outlined">
                        <InputLabel>Subject</InputLabel>
                        <Select
                          label="Subject"
                          defaultValue="consulting"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                        >
                          <MenuItem value="Consulting">
                            Food Consulting
                          </MenuItem>
                          <MenuItem value="Product Development">
                            Product Development
                          </MenuItem>
                          <MenuItem value="Quality Assurance">
                            Quality Assurance
                          </MenuItem>
                          <MenuItem value="Food Safety">Food Safety</MenuItem>
                          <MenuItem value="Nutritional Analysis">
                            Nutritional Analysis
                          </MenuItem>
                          <MenuItem value="Packaging Solutions">
                            Packaging Solutions
                          </MenuItem>
                          <MenuItem value="Blog Contribution">
                            Blog Contribution
                          </MenuItem>
                          <MenuItem value="Write For Us">Write for Us</MenuItem>
                          <MenuItem value="Partnership">
                            Partnership Opportunities
                          </MenuItem>
                          <MenuItem value="Other">Other</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        value={formData.body}
                        onChange={handleChange}
                        required
                        fullWidth
                        name="body"
                        label="Message"
                        variant="outlined"
                        multiline
                        rows={4}
                        placeholder="Your message..."
                      />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sx={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <Button
                        type="submit"
                        variant="contained"
                        disabled={isSubmitting}
                        startIcon={isSubmitting ? <Message /> : <Send />}
                        sx={{
                          px: 4,
                          py: 1,
                          transition: "all 0.3s ease-in-out",
                          "&:hover": { transform: "scale(1.05)" },
                        }}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Social Media Links */}
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "2rem",
            }}
          >
            {socialLinks.map((social, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <IconButton
                  component="a"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    width: 48,
                    height: 48,
                    bgcolor: "background.paper",
                    border: "1px solid",
                    borderColor: "primary.main",
                    color: "primary.main",
                    mx: 1,
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      bgcolor: "primary.main",
                      color: "background.paper",
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              </motion.div>
            ))}
          </motion.div>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
