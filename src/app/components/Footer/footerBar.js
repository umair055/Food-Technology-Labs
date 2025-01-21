"use client";
import { Box, InputAdornment, OutlinedInput, Typography } from "@mui/material";
import React from "react";
import footerImage from "./hd-logo-white (1).png";
import Link from "next/link";
import "./footerBar.css";
import { FooterNav } from "./footerNav";
import {
  FacebookRounded,
  Instagram,
  Mail,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import Image from "next/image";
export const FooterBar = () => {
  const OpenWindow = (url) => {
    if (typeof window !== "undefined") {
      window.open("url", "_blank");
    }
  };
  return (
    <>
      <Box
        className="footerContainer"
        sx={{
          bgcolor: "hsl(206, 20%, 14%)",
          py: 8,
          px: 6,
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Box sx={{ width: "25rem" }}>
          <Image component="img" alt="footerImage" src={footerImage} />
          <Typography sx={{ color: "hsl(0, 0%, 82%)" }}>
            Foodtechnologylabs participates in the Amazon Services LLC
            Associates Program, an affiliate advertising program designed to
            provide a means for sites to earn advertising fees by advertising
            and linking to Amazon.com. Amazon logos are trademarks of
            Amazon.com, Inc. or its affiliates.
          </Typography>
          <Box>
            <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
              <FacebookRounded
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/foodtechnologylabs?mibextid=ZbWKwL",
                    "_blank"
                  )
                }
                sx={{
                  color: "hsl(0, 0%, 82%)",
                  fontSize: "2rem",
                  border: "1px solid hsl(0, 0%, 82%)",
                  borderRadius: "50%",
                  cursor: "pointer",
                  padding: 1,
                  "&:hover": {
                    color: "hsl(152, 95%, 39%)",
                    border: "1px solid hsl(152, 95%, 39%)",
                  },
                }}
              />

              <Twitter
                onClick={() =>
                  window.open("https://x.com/foodtechnology0?s=09", "_blank")
                }
                sx={{
                  color: "hsl(0, 0%, 82%)",
                  fontSize: "2rem",
                  border: "1px solid hsl(0, 0%, 82%)",
                  borderRadius: "50%",
                  cursor: "pointer",
                  padding: 1,
                  "&:hover": {
                    color: "hsl(152, 95%, 39%)",
                    border: "1px solid hsl(152, 95%, 39%)",
                  },
                }}
              />
              <Instagram
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/food_technology_labs?igsh=bnNibnpodnM1aDBt",
                    "_blank"
                  )
                }
                sx={{
                  color: "hsl(0, 0%, 82%)",
                  fontSize: "2rem",
                  border: "1px solid hsl(0, 0%, 82%)",
                  borderRadius: "50%",
                  cursor: "pointer",
                  padding: 1,
                  "&:hover": {
                    color: "hsl(152, 95%, 39%)",
                    border: "1px solid hsl(152, 95%, 39%)",
                  },
                }}
              />

              <WhatsApp
                onClick={() =>
                  window.open(
                    "https://whatsapp.com/channel/0029VaJYBj08kyyD6pUdW31p",
                    "_blank"
                  )
                }
                sx={{
                  color: "hsl(0, 0%, 82%)",
                  fontSize: "2rem",
                  border: "1px solid hsl(0, 0%, 82%)",
                  borderRadius: "50%",
                  cursor: "pointer",
                  padding: 1,
                  "&:hover": {
                    color: "hsl(152, 95%, 39%)",
                    border: "1px solid hsl(152, 95%, 39%)",
                  },
                }}
              />
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 2 }}>
          <Typography
            sx={{
              color: "hsl(0, 0%, 82%)",
              fontWeight: 700,
              fontSize: "1.4rem",
            }}
          >
            Useful Links
          </Typography>
          <Link href="/disclaimer" style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                color: "hsl(0, 0%, 82%)",
                "&:hover": { color: "hsl(152, 95%, 39%)" },
              }}
            >
              Disclaimer
            </Typography>
          </Link>
          <Link href="/privacy-policy" style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                color: "hsl(0, 0%, 82%)",
                "&:hover": { color: "hsl(152, 95%, 39%)" },
              }}
            >
              Privacy Policy
            </Typography>
          </Link>
          <Link href="/cookie-policy" style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                color: "hsl(0, 0%, 82%)",
                "&:hover": { color: "hsl(152, 95%, 39%)" },
              }}
            >
              Cookie Policy
            </Typography>
          </Link>
          <Link href="/terms-and-conditions" style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                color: "hsl(0, 0%, 82%)",
                "&:hover": { color: "hsl(152, 95%, 39%)" },
              }}
            >
              Terms And Conditions
            </Typography>
          </Link>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 2 }}>
          <Typography
            sx={{
              color: "hsl(0, 0%, 82%)",
              fontWeight: 700,
              fontSize: "1.4rem",
            }}
          >
            More Info
          </Typography>
          <Link href="/write-for-us" style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                color: "hsl(0, 0%, 82%)",
                "&:hover": { color: "hsl(152, 95%, 39%)" },
              }}
            >
              Write For Us
            </Typography>
          </Link>
          <Link href="/food-services" style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                color: "hsl(0, 0%, 82%)",
                "&:hover": { color: "hsl(152, 95%, 39%)" },
              }}
            >
              Food Services
            </Typography>
          </Link>
          <Link href="/about-us" style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                color: "hsl(0, 0%, 82%)",
                "&:hover": { color: "hsl(152, 95%, 39%)" },
              }}
            >
              About Us
            </Typography>
          </Link>
          <Link href="/contact-us" style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                color: "hsl(0, 0%, 82%)",
                "&:hover": { color: "hsl(152, 95%, 39%)" },
              }}
            >
              Contact Us
            </Typography>
          </Link>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Typography
            sx={{
              color: "hsl(0, 0%, 82%)",
              fontWeight: 700,
              fontSize: "1.4rem",
            }}
          >
            NewsLetter
          </Typography>
          <Typography
            sx={{
              color: "hsl(0, 0%, 82%)",
              width: "18rem",
              mt: 1,
            }}
          >
            You will be notified when something new will happen.
          </Typography>
          <OutlinedInput
            placeholder="Email Address *"
            sx={{ background: "white", mt: 2 }}
            endAdornment={
              <InputAdornment position="end">
                <Mail sx={{ color: "hsl(152, 95%, 39%)" }} />
              </InputAdornment>
            }
          />
        </Box>
      </Box>
      <FooterNav />
    </>
  );
};
