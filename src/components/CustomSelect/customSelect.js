import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const CustomSelect = ({ defaultValue, options, open, onClick }) => {
  return (
    <Select
      labelId="demo-controlled-open-select-label"
      id="demo-controlled-open-select"
      value={0}
      sx={{
        fontFamily: "Cabin, sans-serif",
        fontSize: "20px",
        fontWeight: 500,
        border: "none",
        "& .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
      }}
      MenuProps={{
        PaperProps: {
          sx: {
            boxShadow: "none", // Remove the drop shadow
          },
        },
      }}
      IconComponent={KeyboardArrowDownIcon}
    >
      <MenuItem sx={{ display: "none", color: "#3f3733" }} value={0}>
        {defaultValue}
      </MenuItem>
      {options.map((item) => (
        <MenuItem
          onClick={() => onClick(item.category, item.name)}
          sx={{
            borderBottom: "1px solid #eeeeee",
            fontFamily: "Cabin, sans-serif",
            fontSize: "20px",
            fontWeight: 500,
            height: "50px",
            color: "#3f3733",
            "&:hover": {
              backgroundColor: "#61995f",
              color: "white",
            },
          }}
          key={item.value}
          value={item.value}
        >
          {item.name}
        </MenuItem>
      ))}
    </Select>
  );
};
export default CustomSelect;