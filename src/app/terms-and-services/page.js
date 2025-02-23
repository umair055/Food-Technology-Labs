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
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GavelIcon from "@mui/icons-material/Gavel";
import EmailIcon from "@mui/icons-material/Email";

export const metadata = {
  title: "Terms And Services",
  description:
    "Learn about the terms and services governing your use of Food Technology Labs. Explore our policies and user agreements in detail.",
  alternates: {
    canonical: "https://www.foodtechnologylabs.com/terms-and-services",
  },
  robots: "index, follow",
};
export default function TermsAndServicePage() {
  const termsItems = [
    {
      title: "1. Acceptance of Terms",
      content: (
        <Typography component={"p"}>
          By accessing or using FoodTechnologyLabs.com, you confirm that you
          have read, understood, and agree to be bound by these Terms, as well
          as any other guidelines, policies, or terms posted on the Site. We
          reserve the right to modify these Terms at any time without prior
          notice. Your continued use of the Site following any changes
          constitutes your acceptance of the new Terms.
        </Typography>
      ),
    },
    {
      title: "2. Our Services",
      content: (
        <Typography component={"p"}>
          Food Technology Labs offers information, services, and tools related
          to food safety, quality consulting, meal planning, dietary planning
          for special needs, market research, recipe development, and more. Our
          services also include various food-related tools and calculators, as
          well as AI-driven solutions for food businesses.
        </Typography>
      ),
    },
    {
      title: "3. User Responsibilities",
      content: (
        <Typography component={"p"}>
          You agree to use our Site and services responsibly and not to engage
          in any activity that may:
          <ul>
            <li>
              Interfere with the proper functioning of the Site or services.
            </li>
            <li>Mislead or deceive other users.</li>
            <li>
              Violate any local, national, or international law or regulation.
            </li>
            <li>
              Harm the reputation or intellectual property of Food Technology
              Labs or its affiliates.
            </li>
          </ul>
        </Typography>
      ),
    },
    {
      title: "4. Account Registration",
      content: (
        <Typography component={"p"}>
          Some features on FoodTechnologyLabs.com may require account
          registration. By creating an account, you agree to provide accurate,
          complete, and current information. You are responsible for maintaining
          the confidentiality of your account information and for all activities
          that occur under your account. Please notify us immediately of any
          unauthorized access or breach of security.
        </Typography>
      ),
    },
    {
      title: "5. Intellectual Property",
      content: (
        <Typography component={"p"}>
          All content on FoodTechnologyLabs.com, including but not limited to
          text, images, logos, trademarks, service marks, and software, is the
          property of Food Technology Labs or its licensors and is protected by
          copyright and intellectual property laws. You may not reproduce,
          distribute, or use any content without prior written consent from Food
          Technology Labs.
        </Typography>
      ),
    },
    {
      title: "6. Prohibited Uses",
      content: (
        <Typography component={"p"}>
          You agree not to misuse the Site or its content. This includes, but is
          not limited to:
          <ul>
            <li>Engaging in unlawful or fraudulent activities.</li>
            <li>
              Attempting to gain unauthorized access to restricted areas of the
              Site.
            </li>
            <li>Using the Site to transmit harmful or malicious software.</li>
            <li>Harvesting data from the Site without consent.</li>
          </ul>
        </Typography>
      ),
    },
    {
      title: "7. Disclaimer of Warranties",
      content: (
        <Typography component={"p"}>
          FoodTechnologyLabs.com and all its content, services, and features are
          provided &quot;as is&quot; and &quot;as available&quot; without any
          warranties, either express or implied. We make no guarantees about the
          accuracy, reliability, or availability of the information provided on
          the Site. Your use of the Site is at your own risk, and Food
          Technology Labs disclaims any responsibility for any harm arising from
          such use.
        </Typography>
      ),
    },
    {
      title: "8. Limitation of Liability",
      content: (
        <Typography component={"p"}>
          To the maximum extent permitted by law, Food Technology Labs and its
          employees, partners, and affiliates shall not be liable for any
          direct, indirect, incidental, consequential, or punitive damages
          arising from your use or inability to use the Site, including but not
          limited to errors, omissions, interruptions, or delays in operation.
        </Typography>
      ),
    },
    {
      title: "9. Third-Party Links",
      content: (
        <Typography component={"p"}>
          FoodTechnologyLabs.com may include links to third-party websites for
          your convenience. These external sites are not under our control, and
          we are not responsible for their content, privacy practices, or terms.
          We encourage you to review the terms and policies of any third-party
          sites you visit.
        </Typography>
      ),
    },
    {
      title: "10. Termination",
      content: (
        <Typography component={"p"}>
          We reserve the right to terminate or suspend your access to
          FoodTechnologyLabs.com, with or without notice, if you violate these
          Terms or engage in any activity that may harm the Site, our users, or
          our reputation.
        </Typography>
      ),
    },
    {
      title: "11. Indemnification",
      content: (
        <Typography component={"p"}>
          You agree to indemnify and hold Food Technology Labs, its affiliates,
          partners, employees, and licensors harmless from any claims, damages,
          liabilities, or expenses arising from your use of the Site, violation
          of these Terms, or infringement of any third-party rights.
        </Typography>
      ),
    },
    {
      title: "12. Governing Law",
      content: (
        <Typography component={"p"}>
          These Terms are governed by and construed in accordance with the laws
          of [Your Jurisdiction]. Any legal action or proceeding arising from
          these Terms or your use of the Site shall be brought exclusively in
          the courts of [Your Jurisdiction].
        </Typography>
      ),
    },
    {
      title: "13. Changes to These Terms",
      content: (
        <Typography component={"p"}>
          Food Technology Labs reserves the right to modify or update these
          Terms at any time. When we make changes, we will update the
          &quot;Effective Date&quot; at the bottom of this page. Your continued
          use of the Site after any changes to these Terms will constitute
          acceptance of the revised Terms.
        </Typography>
      ),
    },
    {
      title: "14. Contact Us",
      content: (
        <Typography component={"p"}>
          If you have any questions or concerns about these Terms, please
          contact us using the button below.
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
            Terms of Service
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Welcome to Food Technology Labs! These Terms of Service govern your
            use of our website and services.
          </Typography>
        </Box>

        <Divider sx={{ mb: 4 }} />

        <Typography component={"p"}>
          By accessing or using our Site, you agree to comply with these Terms.
          If you do not agree with these Terms, please do not use our Site.
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

        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<EmailIcon />}
            href="mailto:contact@foodtechnologylabs.com"
          >
            Contact Us
          </Button>
        </Box>

        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ mt: 4, display: "block" }}
        >
          Note: This Terms of Service template covers key areas for a food
          services website like FoodTechnologyLabs.com. Consider consulting with
          a legal expert to ensure it meets all specific legal requirements and
          aligns with your business operations.
        </Typography>
      </Paper>
    </Container>
  );
}
