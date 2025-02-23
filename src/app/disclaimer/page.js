import React from "react";
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Paper,
  Divider,
  Alert,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

export const metadata = {
  title: "Disclaimer",
  description:
    "Read our disclaimer to understand the limitations of liability and user responsibilities when using Food Technology Labs' content and services.",
  alternates: { canonical: "https://www.foodtechnologylabs.com/disclaimer" },
  robots: "index, follow",
};
export default function DisclaimerPage() {
  const disclaimerItems = [
    {
      title: "1. Professional Advice",
      content: (
        <Typography paragraph>
          The information and services on FoodTechnologyLabs.com, including but
          not limited to food consulting, dietary planning, meal planning, and
          AI solutions for food businesses, are provided for informational
          purposes only. They do not constitute professional advice and are not
          a substitute for advice from a licensed professional, such as a
          nutritionist, food safety consultant, or healthcare provider. Always
          seek the advice of qualified professionals before making decisions
          related to health, safety, or other professional matters.
        </Typography>
      ),
    },
    {
      title: "2. No Liability for Errors or Omissions",
      content: (
        <Typography paragraph>
          While we strive to provide accurate and up-to-date information, Food
          Technology Labs does not guarantee that any content or service on our
          Site is free of errors, omissions, or outdated information. We assume
          no responsibility or liability for any mistakes or inaccuracies that
          may be present.
        </Typography>
      ),
    },
    {
      title: "3. Use at Your Own Risk",
      content: (
        <Typography paragraph>
          Any reliance you place on the information or services provided on our
          Site is strictly at your own risk. Food Technology Labs shall not be
          liable for any loss or damage, direct or indirect, arising from your
          use of the Site, reliance on its content, or any information you
          obtain through our services.
        </Typography>
      ),
    },
    {
      title: "4. External Links Disclaimer",
      content: (
        <Typography paragraph>
          Our Site may contain links to third-party websites or content. These
          links are provided for convenience only, and we do not endorse or take
          responsibility for the accuracy or reliability of the content on these
          sites. We recommend reviewing the terms and privacy policies of any
          third-party sites you visit, as Food Technology Labs is not
          responsible for their practices or content.
        </Typography>
      ),
    },
    {
      title: "5. Health-Related Information",
      content: (
        <Typography paragraph>
          Our Site may include content related to health, nutrition, and dietary
          recommendations. This information is provided solely for general
          information and should not be considered as medical advice. Always
          consult a licensed healthcare provider before making dietary changes
          or using any new health products or services.
        </Typography>
      ),
    },
    {
      title: "6. Limitation of Liability",
      content: (
        <Typography paragraph>
          To the fullest extent permitted by law, Food Technology Labs and its
          affiliates, partners, and employees shall not be liable for any
          indirect, incidental, consequential, or punitive damages, including
          loss of profits, data, or other intangible losses, resulting from (a)
          your use or inability to use the Site, (b) any unauthorized access to
          or alteration of your transmissions or data, or (c) any errors,
          omissions, or inaccuracies in the Site content or services.
        </Typography>
      ),
    },
    {
      title: "7. Changes to This Disclaimer",
      content: (
        <Typography paragraph>
          Food Technology Labs reserves the right to update or modify this
          Disclaimer at any time. Any changes will be posted on this page, and
          continued use of the Site after such changes constitutes acceptance of
          the updated Disclaimer.
        </Typography>
      ),
    },
    {
      title: "8. Contact Us",
      content: (
        <Typography paragraph>
          If you have any questions or concerns regarding this Disclaimer,
          please contact us.
        </Typography>
      ),
    },
  ];

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <WarningAmberIcon
            sx={{ fontSize: 48, color: "warning.main", mb: 2 }}
          />
          <Typography variant="h4" component="h1" gutterBottom color="#05c26a">
            Disclaimer
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            The information provided by Food Technology Labs on
            FoodTechnologyLabs.com is for general informational purposes only
          </Typography>
        </Box>

        <Alert severity="warning" sx={{ mb: 4 }}>
          All information on the Site is provided in good faith; however, we
          make no representation or warranty of any kind, express or implied,
          regarding the accuracy, adequacy, validity, reliability, availability,
          or completeness of any information on the Site.
        </Alert>

        <Divider sx={{ mb: 4 }} />

        <Box>
          {disclaimerItems.map((item, index) => (
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
          Note: This Disclaimer is a general template and may need adjustments
          based on your specific services and legal requirements. We recommend
          consulting with a legal professional to ensure comprehensive
          compliance with applicable regulations.
        </Typography>
      </Paper>
    </Container>
  );
}
