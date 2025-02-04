"use client";
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
import GavelIcon from "@mui/icons-material/Gavel";

export default function TermsAndConditionsPage() {
  const termsItems = [
    {
      title: "1. Definitions",
      content: (
        <Typography component={"p"}>
          &quot;We,&quot; &quot;Us,&quot; and &quot;Our&quot; refer to Food
          Technology Labs and its owners, affiliates, and partners.
          <br />
          &quot;You,&quot; or &quot;Your&quot; refers to the user or visitor of
          our website.
          <br />
          &quot;Services&quot; include all food-related consulting, calculators,
          tools, and informational content offered on FoodTechnologyLabs.com.
        </Typography>
      ),
    },
    {
      title: "2. Eligibility",
      content: (
        <Typography component={"p"}>
          Our website and services are intended for individuals who are 18 years
          of age or older. By using our website, you affirm that you are at
          least 18 years old or possess legal parental/guardian consent, and you
          are fully able and competent to enter into these Terms.
        </Typography>
      ),
    },
    {
      title: "3. Use of Services",
      content: (
        <>
          <Typography component={"p"}>
            You may use our website and services for lawful purposes only. You
            agree not to:
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Violate any applicable laws or regulations." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Misuse our services or interfere with other users' access to our website." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Copy, distribute, or modify any content from our site without permission." />
            </ListItem>
          </List>
        </>
      ),
    },
    {
      title: "4. Intellectual Property",
      content: (
        <Typography component={"p"}>
          All content on FoodTechnologyLabs.com, including text, images, logos,
          and design elements, is the property of Food Technology Labs or our
          licensors and is protected by intellectual property laws. You may not
          reproduce, distribute, or use any part of the website without our
          explicit consent.
        </Typography>
      ),
    },
    {
      title: "5. Services Provided",
      content: (
        <>
          <Typography component={"p"}>
            Food Technology Labs provides a variety of food-related services,
            including but not limited to:
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary="Food Consulting Services"
                secondary="Food Safety & Quality Consulting, Meal Planning, Farm-to-Table Consulting, Dietary Planning, and more."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Tools and Calculators"
                secondary="Food-related tools to assist with calculations related to dietary needs, meal planning, and other areas."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Content"
                secondary="Informative food blogs and articles designed for educational and informational purposes."
              />
            </ListItem>
          </List>
        </>
      ),
    },
    {
      title: "6. Disclaimer of Warranties",
      content: (
        <Typography component={"p"}>
          All information and services on FoodTechnologyLabs.com are provided
          &quot;as is&quot; without any warranties, express or implied. While we
          strive to provide accurate and up-to-date information, we do not
          guarantee the completeness or accuracy of content. The use of our
          website is at your own risk, and we are not liable for any reliance
          you place on the information provided.
        </Typography>
      ),
    },
    {
      title: "7. Limitation of Liability",
      content: (
        <Typography component={"p"}>
          To the fullest extent permitted by law, Food Technology Labs and its
          affiliates shall not be liable for any indirect, incidental,
          consequential, or punitive damages arising from your use of our
          website or services. This includes but is not limited to damages for
          errors, omissions, interruptions, or delays in our services.
        </Typography>
      ),
    },
    {
      title: "8. User Accounts",
      content: (
        <Typography component={"p"}>
          If you create an account on FoodTechnologyLabs.com, you agree to
          provide accurate and complete information and to update it as
          necessary. You are responsible for maintaining the confidentiality of
          your account details and are liable for all activities under your
          account. We reserve the right to terminate accounts at our discretion.
        </Typography>
      ),
    },
    {
      title: "9. Third-Party Links",
      content: (
        <Typography component={"p"}>
          Our website may contain links to third-party websites. We do not
          endorse or control these external sites and are not responsible for
          their content, practices, or privacy policies. Visiting external links
          is at your own risk.
        </Typography>
      ),
    },
    {
      title: "10. Modification of Services and Terms",
      content: (
        <Typography component={"p"}>
          Food Technology Labs reserves the right to update or modify our
          services and these Terms at any time without prior notice. Any changes
          will be posted on this page, and continued use of the website after
          such changes indicates your acceptance of the updated Terms.
        </Typography>
      ),
    },
    {
      title: "11. Governing Law",
      content: (
        <Typography component={"p"}>
          These Terms shall be governed by and construed in accordance with the
          laws of [Your Jurisdiction]. Any disputes arising from or related to
          the use of our website or services shall be subject to the exclusive
          jurisdiction of the courts in [Your Jurisdiction].
        </Typography>
      ),
    },
    {
      title: "12. Termination",
      content: (
        <Typography component={"p"}>
          We reserve the right to suspend or terminate access to our website or
          services at our sole discretion, without prior notice or liability, if
          you violate these Terms or engage in harmful conduct.
        </Typography>
      ),
    },
    {
      title: "13. Contact Us",
      content: (
        <Typography component={"p"}>
          If you have any questions or concerns regarding these Terms, please
          reach out to us.
        </Typography>
      ),
    },
  ];

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <GavelIcon sx={{ fontSize: 48, color: "#05c26a", mb: 2 }} />
          <Typography variant="h4" component="h1" gutterBottom color="#05c26a">
            Terms and Conditions
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Welcome to Food Technology Labs! These Terms and Conditions govern
            your access to and use of our website and services.
          </Typography>
        </Box>

        <Divider sx={{ mb: 4 }} />

        <Typography component={"p"}>
          By accessing or using our website, you agree to comply with these
          Terms. If you disagree with any part of the Terms, you may not access
          our website or services.
        </Typography>

        <Box sx={{ mt: 4 }}>
          {termsItems.map((item, index) => (
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

        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ mt: 4, display: "block" }}
        >
          Disclaimer: This document is a general template and may not cover all
          legal requirements for your jurisdiction or industry. It&apos;s
          recommended to consult with a legal professional to ensure your Terms
          and Conditions fully address your business needs and comply with local
          laws.
        </Typography>
      </Paper>
    </Container>
  );
}
