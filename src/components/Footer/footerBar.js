import { Box, InputAdornment, OutlinedInput, Typography } from "@mui/material";
import React from "react";
import footerImage from "./hd-logo-white (1).png";
import { NavLink } from "react-router-dom";
import "./footerBar.css";
import { FooterNav } from "./footerNav";
import {
  FacebookRounded,
  LinkedIn,
  Mail,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
export const FooterBar = () => {
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
          <Box component="img" alt="footerImage" src={footerImage}></Box>
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
                sx={{
                  color: "hsl(0, 0%, 82%)",
                  fontSize: "1rem",
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
                sx={{
                  color: "hsl(0, 0%, 82%)",
                  fontSize: "1rem",
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
              <LinkedIn
                sx={{
                  color: "hsl(0, 0%, 82%)",
                  fontSize: "1rem",
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
                sx={{
                  color: "hsl(0, 0%, 82%)",
                  fontSize: "1rem",
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
          <NavLink style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                color: "hsl(0, 0%, 82%)",
                "&:hover": { color: "hsl(152, 95%, 39%)" },
              }}
            >
              Disclaimer
            </Typography>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                color: "hsl(0, 0%, 82%)",
                "&:hover": { color: "hsl(152, 95%, 39%)" },
              }}
            >
              Privacy Policy
            </Typography>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                color: "hsl(0, 0%, 82%)",
                "&:hover": { color: "hsl(152, 95%, 39%)" },
              }}
            >
              Cookie Policy
            </Typography>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                color: "hsl(0, 0%, 82%)",
                "&:hover": { color: "hsl(152, 95%, 39%)" },
              }}
            >
              Terms And Conditions
            </Typography>
          </NavLink>
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
          <NavLink style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                color: "hsl(0, 0%, 82%)",
                "&:hover": { color: "hsl(152, 95%, 39%)" },
              }}
            >
              Write For Us
            </Typography>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                color: "hsl(0, 0%, 82%)",
                "&:hover": { color: "hsl(152, 95%, 39%)" },
              }}
            >
              Free Guest Post
            </Typography>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                color: "hsl(0, 0%, 82%)",
                "&:hover": { color: "hsl(152, 95%, 39%)" },
              }}
            >
              About Us
            </Typography>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                color: "hsl(0, 0%, 82%)",
                "&:hover": { color: "hsl(152, 95%, 39%)" },
              }}
            >
              Contact Us
            </Typography>
          </NavLink>
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
