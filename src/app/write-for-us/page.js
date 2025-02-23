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
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CreateIcon from "@mui/icons-material/Create";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export const metadata = {
  title: "Write For Us",
  description:
    "Join Food Technology Labs as a contributor! Share your expertise in food science and technology with our global audience. Submit your articles today.",
  alternates: { canonical: "https://www.foodtechnologylabs.com/write-for-us" },
  robots: "index, follow",
};
export default function WriteForUsPage() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <CreateIcon sx={{ fontSize: 48, color: "#05c26a", mb: 2 }} />
          <Typography variant="h4" component="h1" gutterBottom color="#05c26a">
            Write for Us
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Join our community of contributors at Food Technology Labs
          </Typography>
        </Box>

        <Typography component={"p"}>
          Are you passionate about food, technology, health, or the science
          behind what we eat? At Food Technology Labs, we are always on the
          lookout for fresh, informative, and innovative content to share with
          our audience. Whether you&apos;re a food scientist, nutritionist,
          chef, or an enthusiastic food blogger, we welcome you to join our
          community of contributors!
        </Typography>

        <Divider sx={{ my: 4 }} />

        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">What We&apos;re Looking For</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component={"p"}>
              We publish articles that inform, inspire, and provide value to our
              readers. We are especially interested in topics that align with
              our mission and cover areas such as:
            </Typography>
            <List>
              {[
                "Food Safety & Quality: Best practices, industry standards, and new trends.",
                "Diet and Nutrition: Meal planning, dietary tips, and health-related insights.",
                "Technology in Food: AI applications, food tech innovations, and sustainable practices.",
                "Recipe Development and Testing: Creative, tested recipes with unique flavor profiles.",
                "Market Research & Trends: Insights into emerging trends in the food industry.",
                "Food Photography and Styling Tips: Techniques to present food in an engaging way.",
                "Pet Food and Nutrition: Articles on safe, healthy options for pets.",
              ].map((item, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="#05c26a" />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
            <Typography>
              We also welcome how-to guides, in-depth research, case studies,
              and opinion pieces related to food science and the food industry.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Contributor Guidelines</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component={"p"}>
              To maintain high-quality, valuable content for our readers, we ask
              that submissions meet the following guidelines:
            </Typography>
            <List>
              {[
                "Original Content: We only accept original articles that have not been published elsewhere. Please do not submit duplicate or spun content.",
                "Well-Researched and Accurate: Provide credible sources to back up any data, statistics, or health-related information.",
                "Professional Tone: Our readers are food enthusiasts, professionals, and industry experts, so a clear, professional tone is preferred.",
                "Length: Articles should be between 800-1,500 words.",
                "Formatting: Use subheadings, bullet points, and concise paragraphs to enhance readability. Images (with proper attribution) are encouraged.",
                "Bio and Links: Include a short bio (50-70 words) with one link to your personal website or social media. Relevant links to high-quality sources are permitted in the article.",
              ].map((item, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="#05c26a" />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">How to Submit</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component={"p"}>
              To submit an article for consideration, please email us at
              foodtechnologylabs@gmail.com with the following:
            </Typography>
            <List>
              {[
                "A short pitch or summary of your article idea.",
                "An outline or draft of your article (Word or Google Docs format).",
                "Your bio, photo, and any relevant links.",
              ].map((item, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="#05c26a" />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
            <Typography component={"p"}>
              Our editorial team will review your submission and respond within
              1-2 weeks. Please note that we reserve the right to edit
              submissions for clarity, tone, and formatting. If your article is
              accepted, we&apos;ll notify you before it goes live.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">
              Why Write for Food Technology Labs?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              {[
                "Grow Your Portfolio: Your work will be published on a site dedicated to food technology and innovation, reaching a professional audience.",
                "Establish Authority: Position yourself as an expert in food, technology, and health by sharing valuable insights.",
                "Backlink Opportunities: Approved contributors may include a link to their personal blog or portfolio, enhancing your online presence.",
                "Connect with a Like-Minded Community: Be part of a platform that brings together food scientists, tech enthusiasts, chefs, and industry experts.",
              ].map((item, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="#05c26a" />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 4 }}>
          Thank you for considering Food Technology Labs as a platform for your
          work. Let&apos;s inspire and educate together!
        </Typography>
      </Paper>
    </Container>
  );
}
