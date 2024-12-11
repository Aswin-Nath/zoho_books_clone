import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";

function Banking() {
  const [accountType, setAccountType] = useState("Bank");

  const handleAccountTypeChange = (event) => {
    setAccountType(event.target.value);
  };

  const creditCardForm = (
    <Box>
      <TextField
        label="Account Name*"
        variant="outlined"
        fullWidth
        margin="dense"
        size="small"
        required
      />
      <TextField
        label="Account Code"
        variant="outlined"
        fullWidth
        margin="dense"
        size="small"
      />
      <FormControl fullWidth margin="dense" size="small">
        <FormLabel>Currency*</FormLabel>
        <Select defaultValue="INR" variant="outlined">
          <MenuItem value="INR">INR</MenuItem>
          <MenuItem value="USD">USD</MenuItem>
          <MenuItem value="EUR">EUR</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Bank Name"
        variant="outlined"
        fullWidth
        margin="dense"
        size="small"
      />
      <TextField
        label="Description"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        margin="dense"
        size="small"
        placeholder="Max. 500 characters"
      />
    </Box>
  );

  const bankForm = (
    <Box>
      <TextField
        label="Account Name*"
        variant="outlined"
        fullWidth
        margin="dense"
        size="small"
        required
      />
      <TextField
        label="Account Code"
        variant="outlined"
        fullWidth
        margin="dense"
        size="small"
      />
      <FormControl fullWidth margin="dense" size="small">
        <FormLabel>Currency*</FormLabel>
        <Select defaultValue="INR" variant="outlined">
          <MenuItem value="INR">INR</MenuItem>
          <MenuItem value="USD">USD</MenuItem>
          <MenuItem value="EUR">EUR</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Account Number"
        variant="outlined"
        fullWidth
        margin="dense"
        size="small"
      />
      <TextField
        label="Bank Name"
        variant="outlined"
        fullWidth
        margin="dense"
        size="small"
      />
      <TextField
        label="IFSC"
        variant="outlined"
        fullWidth
        margin="dense"
        size="small"
      />
      <TextField
        label="Description"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        margin="dense"
        size="small"
        placeholder="Max. 500 characters"
      />
    </Box>
  );

  return (
    <Box
      sx={{
        width: 450, // Adjusted for sidebar width
        height: 700, // Dynamic height
        mx: "auto",
        mt: 2,
        p: 2,
        border: "1px solid #ccc",
        borderRadius: 1,
        boxShadow: 1,
        backgroundColor: "#fff",
        overflowY: "auto", // Enable scrolling if content overflows
        position:"relative",
        right:"390px",
        bottom:"15px"
      }}
    >
      <Typography variant="subtitle1" gutterBottom>
        Add Bank or Credit Card
      </Typography>
      <FormControl component="fieldset" sx={{ mb: 2 }}>
        <FormLabel component="legend">Select Account Type*</FormLabel>
        <RadioGroup
          row
          value={accountType}
          onChange={handleAccountTypeChange}
        >
          <FormControlLabel value="Bank" control={<Radio size="small" />} label="Bank" />
          <FormControlLabel
            value="Credit Card"
            control={<Radio size="small" />}
            label="Card"
          />
        </RadioGroup>
      </FormControl>
      <form>
        {accountType === "Bank" ? bankForm : creditCardForm}
        <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end", gap: 1 }}>
          <Button type="submit" variant="contained" color="primary" size="small">
            Save
          </Button>
          <Button type="button" variant="outlined" color="secondary" size="small">
            Cancel
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default Banking;
