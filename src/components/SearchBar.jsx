import { useState } from "react";
import { useNavigate } from "react-router";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        type="text"
        placeholder="Search..."
        value=""
        onChange={() => {}}
        className="search-bar"
      />

      <IconButton type="submit" sx={{ p: 1, color: "#333" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
