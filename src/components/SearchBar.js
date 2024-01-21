import React, { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ width, onSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event) => {
    const newSearchValue = event.target.value;
    setSearchValue(newSearchValue);
    onSearch(newSearchValue); // Calls the onSearch prop with the updated value
  };

  return (
    <div>
      <TextField
        onChange={handleSearchChange}
        value={searchValue}
        label="Search"
        variant="outlined"
        style={{ width: width || "100%" }}
        placeholder="Courses...."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default SearchBar;
