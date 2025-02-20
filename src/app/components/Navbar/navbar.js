"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Search } from "@mui/icons-material";
import CustomDrawer from "../Drawer/drawer";
import { useRouter } from "next/navigation";
import { NAVIGATION_ROUTE } from "../../constants";
import FoodTechLogo from "./cropped-Foodtechnologylabs-logo.png";
import CustomDropDown from "../CustomSelect/customDropDown";
import Image from "next/image";

const foodTechnologyOptions = [
  { name: "Dairy Technology", value: 1, category: 24 },
  { name: "Sugar Technology", value: 2, category: 25 },
  { name: "Baking Technology", value: 3, category: 27 },
  { name: "Beverage Technology", value: 4, category: 26 },
  { name: "Fat & Oil Technology", value: 5, category: 29 },
  { name: "Cereal Technology", value: 6, category: 30 },
  { name: "Meat Technology", value: 7, category: 28 },
  { name: "Food Packaging", value: 8, category: 38 },
];

const foodScienceOptions = [
  { name: "Food Chemistry", value: 1, category: 31 },
  { name: "Food Microbiology", value: 2, category: 32 },
  { name: "Food Biotechnology", value: 3, category: 33 },
];
const foodProcessingOption = [
  {
    name: "Food Processing & Preservation",
    value: 1,
    category: 34,
  },
  {
    name: "Fruits & Vegetables Porcessing",
    value: 2,
    category: 37,
  },
  {
    name: "Poultry & Egg Processing",
    value: 3,
    category: 36,
  },
  { name: "Seafood Processing", value: 4, category: 35 },
];

const foodMangementOption = [
  {
    name: "Food Safety & Quality Mangement",
    value: 1,
    category: 39,
  },
  {
    name: "Food Law & Regulation",
    value: 2,
    category: 42,
  },
  {
    name: "Food Analysis & Instrumentation",
    value: 3,
    category: 41,
  },
  { name: "Food Waste Mangement", value: 4, category: 40 },
];

const foodTutorialsOption = [
  { name: "Food Guide", value: 1, category: 43 },
  { name: "Food Tips", value: 2, category: 44 },
  { name: "Food Recipes", value: 3, category: 46 },
  { name: "Food News", value: 4, category: 45 },
];
function ResponsiveAppBar() {
  const navigate = useRouter();
  const [anchorElNav, setAnchorElNav] = React.useState(false);

  const handleOptionSelect = (category, name) => {
    const formattedName = name.toLowerCase().split(" ").join("-");

    return navigate.push(
      `${NAVIGATION_ROUTE.blogs}/${formattedName}?category=${category}`
    );
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(true);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "white", boxShadow: "none" }}
    >
      <CustomDrawer anchorElNav={anchorElNav} setAnchorElNav={setAnchorElNav} />
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image src={FoodTechLogo} alt="Logo" height={80} width={150} />
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              onClick={handleOpenNavMenu}
              sx={{ marginLeft: "auto" }}
              aria-label="Open navigation menu"
            >
              <MenuIcon sx={{ fontSize: "2.5rem" }} />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              paddingLeft: 2,
            }}
          >
            <Box
              sx={{
                flexGrow: 0.1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              <Button
                href={"/"}
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "6px 12px",
                  fontSize: "0.8rem",
                  fontWeight: 800,
                  lineHeight: 1.75,
                  color: "text.primary",
                  backgroundColor: "background.paper",
                  "&:hover": {
                    backgroundColor: "action.hover",
                    color: "black",
                  },
                  "& .MuiSvgIcon-root": {
                    marginLeft: 1,
                  },
                }}
              >
                Home
              </Button>
            </Box>
            <Box
              sx={{
                flexGrow: 0,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              <Button
                href={"/food-services"}
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "6px 12px",
                  fontSize: "0.8rem",
                  fontWeight: 800,
                  lineHeight: 1.75,
                  color: "text.primary",
                  backgroundColor: "background.paper",
                  "&:hover": {
                    backgroundColor: "action.hover",
                    color: "black",
                  },
                }}
              >
                Food Services
              </Button>
            </Box>
            <Box
              sx={{
                flexGrow: 0.1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              <CustomDropDown
                defaultValue={"Food Technology"}
                options={foodTechnologyOptions}
                onClick={handleOptionSelect}
              />
            </Box>
            <Box
              sx={{
                flexGrow: 0.1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              <CustomDropDown
                defaultValue={"Food Science"}
                options={foodScienceOptions}
                onClick={handleOptionSelect}
              />
            </Box>
            <Box
              sx={{
                flexGrow: 0.1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              <CustomDropDown
                defaultValue={"Food Processing"}
                options={foodProcessingOption}
                onClick={handleOptionSelect}
              />
            </Box>
            <Box
              sx={{
                flexGrow: 0.1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              <CustomDropDown
                defaultValue={"Food Management"}
                options={foodMangementOption}
                onClick={handleOptionSelect}
              />
            </Box>
            <Box
              sx={{
                flexGrow: 0.1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              <CustomDropDown
                defaultValue={"Food Tutorials"}
                options={foodTutorialsOption}
                onClick={handleOptionSelect}
              />
            </Box>
            <Box
              sx={{
                flexGrow: 0,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              <Button
                href={"/tools"}
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "6px 12px",
                  fontSize: "0.8rem",
                  fontWeight: 800,
                  lineHeight: 1.75,
                  color: "text.primary",
                  backgroundColor: "background.paper",
                  "&:hover": {
                    backgroundColor: "action.hover",
                    color: "black",
                  },
                }}
              >
                Food Tools
              </Button>
            </Box>
            <Box
              sx={{
                flexGrow: 0,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              <Button
                href={"/about-us"}
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "6px 12px",
                  fontSize: "0.8rem",
                  fontWeight: 800,
                  lineHeight: 1.75,
                  color: "text.primary",
                  backgroundColor: "background.paper",
                  "&:hover": {
                    backgroundColor: "action.hover",
                    color: "black",
                  },
                }}
              >
                About Us
              </Button>
            </Box>
            <Box
              sx={{
                flexGrow: 0,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              <Button
                href={"/contact-us"}
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "6px 12px",
                  fontSize: "0.8rem",
                  fontWeight: 800,
                  lineHeight: 1.75,
                  color: "text.primary",
                  backgroundColor: "background.paper",
                  "&:hover": {
                    backgroundColor: "action.hover",
                    color: "black",
                  },
                }}
              >
                Contact Us
              </Button>
            </Box>
          </Box>
          <Box sx={{ paddingRight: 2, display: { xs: "none", md: "flex" } }}>
            <Search sx={{ color: "black", fontSize: "1.7rem" }} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
