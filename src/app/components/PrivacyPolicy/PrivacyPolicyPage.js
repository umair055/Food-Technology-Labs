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
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function PrivacyPolicyPage() {
  const policyItems = [
    {
      title: "1. Information We Collect",
      content: (
        <>
          <Typography paragraph>
            We may collect the following types of information:
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary="Personal Information"
                secondary="When you sign up for our services, participate in our programs, or reach out via contact forms, we may collect your name, email address, phone number, and other relevant details."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Usage Data"
                secondary="We automatically collect information on how you access and interact with our website, including IP addresses, browser types, pages visited, and the time spent on our site."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Cookies and Tracking Technologies"
                secondary="We use cookies and similar technologies to enhance your experience, analyze trends, and understand user behavior."
              />
            </ListItem>
          </List>
        </>
      ),
    },
    {
      title: "2. How We Use Your Information",
      content: (
        <>
          <Typography paragraph>
            We use the collected data in various ways to provide, improve, and
            customize our services:
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary="Service Delivery"
                secondary="We use personal data to offer and improve our services, including food safety consulting, meal planning, farm-to-table consulting, and other specialized services."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Communication"
                secondary="We use contact information to respond to inquiries, provide updates, and inform you about our services and promotional offerings."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Site Functionality"
                secondary="Cookies and tracking technologies help us enhance website performance, improve tools and calculators, and provide personalized content."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Marketing and Analytics"
                secondary="We analyze website data to improve our offerings, market effectively, and understand user needs."
              />
            </ListItem>
          </List>
        </>
      ),
    },
    {
      title: "3. Data Sharing and Disclosure",
      content: (
        <>
          <Typography paragraph>
            We respect your privacy and do not sell or rent your personal
            information. However, we may share data with trusted third parties:
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary="Service Providers"
                secondary="We partner with companies that help us operate our website, offer services, and analyze usage data."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Legal Requirements"
                secondary="We may disclose information if required by law, such as in response to legal processes or to protect our rights and safety."
              />
            </ListItem>
          </List>
        </>
      ),
    },
    {
      title: "4. Cookies and Tracking Technologies",
      content: (
        <Typography paragraph>
          Cookies help us understand user interactions and enhance the website
          experience. You may manage your cookie preferences through your
          browser settings. Disabling cookies may impact the functionality of
          certain features on our site.
        </Typography>
      ),
    },
    {
      title: "5. Data Security",
      content: (
        <Typography paragraph>
          We prioritize the security of your data and implement
          industry-standard practices to protect it. However, no transmission
          over the Internet or electronic storage method is 100% secure. We
          cannot guarantee absolute security but continuously work to enhance
          our data protection measures.
        </Typography>
      ),
    },
    {
      title: "6. Your Data Rights",
      content: (
        <Typography paragraph>
          Depending on your jurisdiction, you may have rights concerning your
          personal data, such as the right to access, correct, delete, or
          restrict its use. If you would like to exercise any of these rights,
          please contact us.
        </Typography>
      ),
    },
    {
      title: "7. Third-Party Links",
      content: (
        <Typography paragraph>
          Our website may contain links to other websites. We are not
          responsible for the privacy practices of external sites, and we
          recommend reviewing their privacy policies.
        </Typography>
      ),
    },
    {
      title: "8. Children's Privacy",
      content: (
        <Typography component={"p"}>
          Our services are not directed toward individuals under the age of 13.
          We do not knowingly collect personal information from children. If we
          become aware that a child&apos;s information has been collected, we
          will take steps to delete it.
        </Typography>
      ),
    },
    {
      title: "9. Changes to This Privacy Policy",
      content: (
        <Typography paragraph>
          We may update this Privacy Policy periodically to reflect changes in
          our practices or legal requirements. Any changes will be posted on
          this page, with the updated policy date noted.
        </Typography>
      ),
    },
    {
      title: "10. Contact Us",
      content: (
        <>
          <Typography component={"p"}>
            For questions, concerns, or to exercise your data rights, please
            contact us.
          </Typography>
          <Typography component={"p"}>
            By using FoodTechnologyLabs.com, you agree to the terms of this
            Privacy Policy.
          </Typography>
        </>
      ),
    },
  ];

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          align="center"
          color="#05c26a"
        >
          Privacy Policy
        </Typography>
        <Typography
          variant="subtitle1"
          paragraph
          align="center"
          color="text.secondary"
        >
          At Food Technology Labs, we value your privacy and are committed to
          protecting your personal information
        </Typography>
        <Box sx={{ mt: 4 }}>
          {policyItems.map((item, index) => (
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
