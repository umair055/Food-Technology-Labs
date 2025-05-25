"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Collapse, IconButton } from "@mui/material";
import { Close, ExpandLess, ExpandMore } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { NAVIGATION_ROUTE } from "../../constants";

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
export default function CustomDrawer({ anchorElNav, setAnchorElNav }) {
  const navigate = useRouter();
  const toggleDrawer = (newOpen) => () => {
    setAnchorElNav(newOpen);
  };

  const [foodTechExpand, setFoodTechExpand] = React.useState(true);
  const [foodScienceExpand, setFoodScienceExpand] = React.useState(true);
  const [foodProcessExpand, setFoodProcessExpand] = React.useState(true);
  const [foodMgmntExpand, setFoodMgmntExpand] = React.useState(true);
  const [foodTutrsExpand, setFoodTutrsExpand] = React.useState(true);

  const handleOptionSelect = (category, name) => {
    setFoodTechExpand(true);
    setFoodScienceExpand(true);
    setFoodProcessExpand(true);
    setFoodMgmntExpand(true);
    setFoodTutrsExpand(true);
    document.title = name;
    if (name === "Home") navigate.push("/");
    else if (name === "ContactUs") navigate.push("/contact-us");
    else if (name === "AboutUs") navigate.push("/about-us");
    else if (name === "Food Services") navigate.push("/food-services");
    else if (name === "Food Tools") navigate.push("/tools");
    else {
      const formattedName = name.toLowerCase().split(" ").join("-");
      navigate.push(
        `${NAVIGATION_ROUTE.blogs}/${formattedName}?category=${category}`
      );
    }
    setAnchorElNav(false);
  };
  const handleFoodTechClick = () => {
    setFoodTechExpand(!foodTechExpand);
  };
  const handleFoodSciClick = () => {
    setFoodScienceExpand(!foodScienceExpand);
  };
  const handleFoodProcessClick = () => {
    setFoodProcessExpand(!foodProcessExpand);
  };
  const handleFoodMgmtClick = () => {
    setFoodMgmntExpand(!foodMgmntExpand);
  };
  const handleFoodTutsClick = () => {
    setFoodTutrsExpand(!foodTutrsExpand);
  };
  const DrawerList = (
    <Box
      sx={{ width: "90vw", height: "1000%", backgroundColor: "#3f3733" }}
      role="presentation"
    >
      <Box sx={{ display: "flex", pr: 2.5 }}>
        <IconButton sx={{ ml: "auto" }} onClick={() => setAnchorElNav(false)}>
          <Close sx={{ color: "#f5f2ee" }} />
        </IconButton>
      </Box>
      <List sx={{ width: "90%" }} component="nav">
        <ListItemButton
          onClick={() => handleOptionSelect(0, "Home")}
          sx={{ borderBottom: "1px solid #FFFFFF19", height: "70px", py: 0 }}
        >
          <ListItemText
            primaryTypographyProps={{
              sx: { fontSize: "20px", color: "#f5f2ee", fontStyle: "normal" },
            }}
            primary="Home"
          />
        </ListItemButton>
        <ListItemButton
          onClick={() => handleOptionSelect(0, "Food Services")}
          sx={{ borderBottom: "1px solid #FFFFFF19", height: "70px", py: 0 }}
        >
          <ListItemText
            primaryTypographyProps={{
              sx: { fontSize: "20px", color: "#f5f2ee", fontStyle: "normal" },
            }}
            primary="Food Services"
          />
        </ListItemButton>
        <ListItemButton sx={{ borderBottom: "1px solid #FFFFFF19", py: 0 }}>
          <ListItemText
            primaryTypographyProps={{
              sx: { fontSize: "20px", color: "#f5f2ee", fontStyle: "normal" },
            }}
            primary="Food Technology"
          />
          {foodTechExpand ? (
            <ExpandLess
              sx={{
                color: "#f5f2ee",
                borderLeft: "1px solid #FFFFFF19",
                height: "70px",
                pl: 1.5,
              }}
              onClick={handleFoodTechClick}
            />
          ) : (
            <ExpandMore
              sx={{
                color: "#f5f2ee",
                borderLeft: "1px solid #FFFFFF19",
                height: "70px",
                pl: 1.5,
              }}
              onClick={handleFoodTechClick}
            />
          )}
        </ListItemButton>
        <Collapse in={!foodTechExpand} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {foodTechnologyOptions.map((item) => (
              <ListItemButton
                onClick={() => handleOptionSelect(item.category, item.name)}
                key={item.value}
                sx={{
                  pl: 4,
                  borderBottom: "1px solid #FFFFFF19",
                  height: "70px",
                  py: 0,
                }}
              >
                <ListItemText
                  primaryTypographyProps={{
                    sx: {
                      fontSize: "20px",
                      color: "#f5f2ee",
                      fontStyle: "normal",
                    },
                  }}
                  primary={item.name}
                />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
        {/* <ListItemButton sx={{ borderBottom: "1px solid #FFFFFF19", py: 0 }}>
          <ListItemText
            primaryTypographyProps={{
              sx: { fontSize: "20px", color: "#f5f2ee", fontStyle: "normal" },
            }}
            primary="Food Science"
          />
          {foodScienceExpand ? (
            <ExpandLess
              sx={{
                color: "#f5f2ee",
                borderLeft: "1px solid #FFFFFF19",
                height: "70px",
                pl: 1.5,
              }}
              onClick={handleFoodSciClick}
            />
          ) : (
            <ExpandMore
              sx={{
                color: "#f5f2ee",
                borderLeft: "1px solid #FFFFFF19",
                height: "70px",
                pl: 1.5,
              }}
              onClick={handleFoodSciClick}
            />
          )}
        </ListItemButton>
        <Collapse in={!foodScienceExpand} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {foodScienceOptions.map((item) => (
              <ListItemButton
                onClick={() => handleOptionSelect(item.category, item.name)}
                key={item.value}
                sx={{
                  pl: 4,
                  borderBottom: "1px solid #FFFFFF19",
                  height: "70px",
                  py: 0,
                }}
              >
                <ListItemText
                  primaryTypographyProps={{
                    sx: {
                      fontSize: "20px",
                      color: "#f5f2ee",
                      fontStyle: "normal",
                    },
                  }}
                  primary={item.name}
                />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
        <ListItemButton sx={{ borderBottom: "1px solid #FFFFFF19", py: 0 }}>
          <ListItemText
            primaryTypographyProps={{
              sx: { fontSize: "20px", color: "#f5f2ee", fontStyle: "normal" },
            }}
            primary="Food Processing"
          />
          {foodProcessExpand ? (
            <ExpandLess
              sx={{
                color: "#f5f2ee",
                borderLeft: "1px solid #FFFFFF19",
                height: "70px",
                pl: 1.5,
              }}
              onClick={handleFoodProcessClick}
            />
          ) : (
            <ExpandMore
              sx={{
                color: "#f5f2ee",
                borderLeft: "1px solid #FFFFFF19",
                height: "70px",
                pl: 1.5,
              }}
              onClick={handleFoodProcessClick}
            />
          )}
        </ListItemButton>
        <Collapse in={!foodProcessExpand} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {foodProcessingOption.map((item) => (
              <ListItemButton
                onClick={() => handleOptionSelect(item.category, item.name)}
                key={item.value}
                sx={{
                  pl: 4,
                  borderBottom: "1px solid #FFFFFF19",
                  height: "70px",
                  py: 0,
                }}
              >
                <ListItemText
                  primaryTypographyProps={{
                    sx: {
                      fontSize: "20px",
                      color: "#f5f2ee",
                      fontStyle: "normal",
                    },
                  }}
                  primary={item.name}
                />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
        <ListItemButton sx={{ borderBottom: "1px solid #FFFFFF19", py: 0 }}>
          <ListItemText
            primaryTypographyProps={{
              sx: { fontSize: "20px", color: "#f5f2ee", fontStyle: "normal" },
            }}
            primary="Food Management"
          />
          {foodMgmntExpand ? (
            <ExpandLess
              sx={{
                color: "#f5f2ee",
                borderLeft: "1px solid #FFFFFF19",
                height: "70px",
                pl: 1.5,
              }}
              onClick={handleFoodMgmtClick}
            />
          ) : (
            <ExpandMore
              sx={{
                color: "#f5f2ee",
                borderLeft: "1px solid #FFFFFF19",
                height: "70px",
                pl: 1.5,
              }}
              onClick={handleFoodMgmtClick}
            />
          )}
        </ListItemButton>
        <Collapse in={!foodMgmntExpand} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {foodMangementOption.map((item) => (
              <ListItemButton
                onClick={() => handleOptionSelect(item.category, item.name)}
                key={item.value}
                sx={{
                  pl: 4,
                  borderBottom: "1px solid #FFFFFF19",
                  height: "70px",
                  py: 0,
                }}
              >
                <ListItemText
                  primaryTypographyProps={{
                    sx: {
                      fontSize: "20px",
                      color: "#f5f2ee",
                      fontStyle: "normal",
                    },
                  }}
                  primary={item.name}
                />
              </ListItemButton>
            ))}
          </List>
        </Collapse> */}
        <ListItemButton sx={{ borderBottom: "1px solid #FFFFFF19", py: 0 }}>
          <ListItemText
            primaryTypographyProps={{
              sx: { fontSize: "20px", color: "#f5f2ee", fontStyle: "normal" },
            }}
            primary="Food Tutorials"
          />
          {foodTutrsExpand ? (
            <ExpandLess
              sx={{
                color: "#f5f2ee",
                borderLeft: "1px solid #FFFFFF19",
                height: "70px",
                pl: 1.5,
              }}
              onClick={handleFoodTutsClick}
            />
          ) : (
            <ExpandMore
              sx={{
                color: "#f5f2ee",
                borderLeft: "1px solid #FFFFFF19",
                height: "70px",
                pl: 1.5,
              }}
              onClick={handleFoodTutsClick}
            />
          )}
        </ListItemButton>
        <Collapse in={!foodTutrsExpand} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {foodTutorialsOption.map((item) => (
              <ListItemButton
                onClick={() => handleOptionSelect(item.category, item.name)}
                key={item.value}
                sx={{
                  pl: 4,
                  borderBottom: "1px solid #FFFFFF19",
                  height: "70px",
                  py: 0,
                }}
              >
                <ListItemText
                  primaryTypographyProps={{
                    sx: {
                      fontSize: "20px",
                      color: "#f5f2ee",
                      fontStyle: "normal",
                    },
                  }}
                  primary={item.name}
                />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
        <ListItemButton
          onClick={() => handleOptionSelect(0, "Food Tools")}
          sx={{ borderBottom: "1px solid #FFFFFF19", height: "70px", py: 0 }}
        >
          <ListItemText
            primaryTypographyProps={{
              sx: { fontSize: "20px", color: "#f5f2ee", fontStyle: "normal" },
            }}
            primary="Food Tools"
          />
        </ListItemButton>
        <ListItemButton
          onClick={() => handleOptionSelect(0, "AboutUs")}
          sx={{ borderBottom: "1px solid #FFFFFF19", height: "70px", py: 0 }}
        >
          <ListItemText
            primaryTypographyProps={{
              sx: { fontSize: "20px", color: "#f5f2ee", fontStyle: "normal" },
            }}
            primary="About Us"
          />
        </ListItemButton>
        <ListItemButton
          onClick={() => handleOptionSelect(0, "ContactUs")}
          sx={{ borderBottom: "1px solid #FFFFFF19", height: "70px", py: 0 }}
        >
          <ListItemText
            primaryTypographyProps={{
              sx: { fontSize: "20px", color: "#f5f2ee", fontStyle: "normal" },
            }}
            primary="Contact Us"
          />
        </ListItemButton>
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer anchor={"right"} open={anchorElNav} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
