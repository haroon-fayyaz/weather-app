import React, { useState } from "react"
import { Box, Container, IconButton, InputAdornment, TextField } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"

function SearchBar({ onSearch }) {
  const [value, setValue] = useState("")

  const onChange = e => setValue(e.target.value)

  const handleSearch = e => {
    if (e.key !== "Enter" && e.type !== "click") return

    if (!value.trim()) return

    onSearch(value)
  }

  return (
    <Box marginTop={4}>
      <Container maxWidth="sm">
        <TextField
          variant="standard"
          type="text"
          fullWidth
          color="warning"
          placeholder="  Enter City..."
          onChange={onChange}
          value={value}
          onKeyPress={handleSearch}
          sx={{ input: { color: "black", fontSize: "24px" } }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  style={{ backgroundColor: "transparent" }}
                  disableRipple={true}
                  color="warning"
                  onClick={handleSearch}
                >
                  <SearchIcon fontSize="large" />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </Container>
    </Box>
  )
}

export default SearchBar
