import React from "react";
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CookieIcon from "@mui/icons-material/Cookie";

export const metadata = {
  title: "Cookie Policy",
  description:
    "Understand how Food Technology Labs uses cookies to enhance your browsing experience. Learn how to manage your cookie preferences.",
  alternates: { canonical: "https://www.foodtechnologylabs.com/cookie-policy" },
  robots: "index, follow",
};
export default function CookiePolicyPage() {
  const cookiePolicyItems = [
    {
      title: "1. What Are Cookies?",
      content: (
        <Typography component={"p"}>
          Cookies are small text files stored on your device (computer,
          smartphone, or tablet) when you visit a website. They help websites
          recognize users and remember information to improve user experience,
          provide personalized content, and gather analytics.
        </Typography>
      ),
    },
    {
      title: "2. Types of Cookies We Use",
      content: (
        <>
          <Typography component={"p"}>
            We use the following types of cookies on FoodTechnologyLabs.com:
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary="Essential Cookies"
                secondary="These cookies are necessary for the basic functionality of our website. They enable core features like page navigation and secure access to different parts of the site. Without these cookies, the site may not function properly."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Analytical/Performance Cookies"
                secondary="These cookies help us understand how visitors interact with our site by collecting information about page visits, traffic sources, and user behavior. We use this data to improve site functionality and enhance user experience."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Functionality Cookies"
                secondary="Functionality cookies allow us to remember choices you make on our site, such as language preferences and customizations. These cookies ensure a more personalized experience."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Targeting/Advertising Cookies"
                secondary="We may use cookies to display advertisements that are relevant to your interests. These cookies gather data about your browsing habits and help us show ads based on your preferences."
              />
            </ListItem>
          </List>
        </>
      ),
    },
    {
      title: "3. How We Use Cookies",
      content: (
        <>
          <Typography component={"p"}>
            We use cookies for several purposes, including:
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary="Improving Website Performance"
                secondary="Cookies help us understand how users navigate our website, allowing us to improve site design, speed, and overall user experience."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Personalization"
                secondary="Cookies allow us to remember your preferences and provide personalized content relevant to your interests."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Analytics"
                secondary="We use analytics tools, like Google Analytics, to collect data on user behavior and website performance. This helps us identify popular content and improve our offerings."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Advertising"
                secondary="Cookies allow us to serve targeted ads based on your browsing behavior and preferences."
              />
            </ListItem>
          </List>
        </>
      ),
    },
    {
      title: "4. Third-Party Cookies",
      content: (
        <Typography component={"p"}>
          Some cookies are placed by third-party providers on our website, such
          as advertising networks, social media platforms, and analytics
          services. These third parties may use cookies to gather data on your
          browsing habits to deliver targeted ads on our site or across other
          websites.
          <br />
          <br />
          Please note that we do not control these third-party cookies and
          recommend reviewing the respective privacy policies of these providers
          for further details on their practices.
        </Typography>
      ),
    },
    {
      title: "5. Managing Your Cookie Preferences",
      content: (
        <>
          <Typography component={"p"}>
            You have the option to accept or reject cookies on our website. When
            you first visit FoodTechnologyLabs.com, you will see a cookie
            consent banner that allows you to manage your preferences.
          </Typography>
          <Typography component={"p"}>
            You can also adjust your browser settings to block or delete
            cookies. Here&apos;s how to manage cookies in popular browsers:
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary="Google Chrome"
                secondary="Go to Settings > Privacy and Security > Cookies and other site data"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Mozilla Firefox"
                secondary="Go to Options > Privacy & Security > Cookies and Site Data"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Safari"
                secondary="Go to Preferences > Privacy > Manage Website Data"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Microsoft Edge"
                secondary="Go to Settings > Cookies and site permissions"
              />
            </ListItem>
          </List>
          <Typography component={"p"} sx={{ mt: 2 }}>
            Please note that disabling cookies may affect the functionality of
            certain features on our website.
          </Typography>
        </>
      ),
    },
    {
      title: "6. Changes to This Cookie Policy",
      content: (
        <Typography component={"p"}>
          We may update this Cookie Policy periodically to reflect changes in
          our practices or legal requirements. Any updates will be posted on
          this page with the effective date.
        </Typography>
      ),
    },
    {
      title: "7. Contact Us",
      content: (
        <Typography component={"p"}>
          If you have any questions or concerns about our use of cookies, please
          feel free to reach out to us.
          <br />
          <br />
          By continuing to use our website without adjusting your browser
          settings, you agree to our use of cookies as outlined in this policy.
        </Typography>
      ),
    },
  ];

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <CookieIcon sx={{ fontSize: 48, color: "#05c26a", mb: 2 }} />
          <Typography variant="h4" component="h1" gutterBottom color="#05c26a">
            Cookie Policy
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            At Food Technology Labs, we use cookies and similar tracking
            technologies to enhance your experience
          </Typography>
        </Box>

        <Divider sx={{ mb: 4 }} />

        <Box>
          {cookiePolicyItems.map((item, index) => (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index + 1}-content`}
                id={`panel${index + 1}-header`}
              >
                <Typography>{item.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>{item.content}</AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Paper>
    </Container>
  );
}
