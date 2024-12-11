import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  MenuItem,
  Select,
  Button,
  Grid,
} from "@mui/material";

function NewItems() {
  const [salesEnabled, setSalesEnabled] = useState(true);
  const [purchaseEnabled, setPurchaseEnabled] = useState(true);
  const [selectedUnit, setSelectedUnit] = useState("");
  const [selectedSalesAccount, setSelectedSalesAccount] = useState("");
  const [selectedPurchaseAccount, setSelectedPurchaseAccount] = useState("");

  const units = [
    { label: "BOX", value: "box" },
    { label: "CMS", value: "cm" },
    { label: "DOZ", value: "dz" },
    { label: "FTS", value: "ft" },
    { label: "GMS", value: "g" },
    { label: "INC", value: "in" },
    { label: "KGS", value: "kg" },
    { label: "KME", value: "km" },
    { label: "LBS", value: "lb" },
    { label: "MGS", value: "mg" },
    { label: "MLT", value: "ml" },
    { label: "MTR", value: "m" },
    { label: "PCS", value: "pcs" },
  ];

  const salesAccounts = [
    "Income",
    "Discount",
    "General Income",
    "Interest Income",
    "Late Fee Income",
    "Other Charges",
    "Sales",
    "Shipping Charge",
  ];

  const purchaseAccounts = [
    "Salaries and Employee Wages",
    "Telephone Expense",
    "Transportation Expense",
    "Travel Expense",
    "Uncategorized",
    "Cost Of Goods Sold",
    "Job Costing",
    "Labor",
    "Materials",
    "Subcontractor",
  ];

  return (
    <Box
      sx={{
        width: 430, // Increased width for better usability
        mx: "auto",
        p: 2,
        border: "1px solid #ccc",
        borderRadius: 2,
        boxShadow: 1,
        backgroundColor: "#fff",
        overflowY: "auto",
        position:"relative",
        // top:"50px",
        right:"400px"
      }}
    >
      <Typography variant="subtitle1" gutterBottom>
        New Item
      </Typography>

      {/* Type Section */}
      <FormControl sx={{ mb: 1 }}>
        <Typography variant="body2">Type</Typography>
        <RadioGroup row>
          <FormControlLabel value="goods" control={<Radio size="small" />} label="Goods" />
          <FormControlLabel value="service" control={<Radio size="small" />} label="Service" />
        </RadioGroup>
      </FormControl>

      {/* Name and Unit Section */}
      <Grid container spacing={1} sx={{ mb: 1 }}>
        <Grid item xs={12}>
          <TextField
            label="Name"
            required
            fullWidth
            variant="outlined"
            size="small"
            placeholder="Item name"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <Select
              value={selectedUnit}
              onChange={(e) => setSelectedUnit(e.target.value)}
              displayEmpty
              size="small"
            >
              <MenuItem value="" disabled>
                Select unit
              </MenuItem>
              {units.map((unit, index) => (
                <MenuItem key={index} value={unit.value}>
                  {unit.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      {/* Sales Information */}
      <Box sx={{ border: "1px solid #ccc", borderRadius: 2, p: 1, mb: 2 }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={salesEnabled}
              onChange={(e) => setSalesEnabled(e.target.checked)}
              size="small"
            />
          }
          label="Sales Information"
        />
        {salesEnabled && (
          <Grid container spacing={1} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <TextField
                label="Selling Price"
                required
                fullWidth
                variant="outlined"
                size="small"
                placeholder="Price"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <Select
                  value={selectedSalesAccount}
                  onChange={(e) => setSelectedSalesAccount(e.target.value)}
                  displayEmpty
                  size="small"
                >
                  <MenuItem value="" disabled>
                    Select sales account
                  </MenuItem>
                  {salesAccounts.map((account, index) => (
                    <MenuItem key={index} value={account}>
                      {account}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        )}
      </Box>

      {/* Purchase Information */}
      <Box sx={{ border: "1px solid #ccc", borderRadius: 2, p: 1 }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={purchaseEnabled}
              onChange={(e) => setPurchaseEnabled(e.target.checked)}
              size="small"
            />
          }
          label="Purchase Information"
        />
        {purchaseEnabled && (
          <Grid container spacing={1} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <TextField
                label="Cost Price"
                required
                fullWidth
                variant="outlined"
                size="small"
                placeholder="Price"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <Select
                  value={selectedPurchaseAccount}
                  onChange={(e) => setSelectedPurchaseAccount(e.target.value)}
                  displayEmpty
                  size="small"
                >
                  <MenuItem value="" disabled>
                    Select purchase account
                  </MenuItem>
                  {purchaseAccounts.map((account, index) => (
                    <MenuItem key={index} value={account}>
                      {account}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        )}
      </Box>

      {/* Save and Cancel Buttons */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1, mt: 2 }}>
        <Button variant="contained" color="primary" size="small">
          Save
        </Button>
        <Button variant="outlined" color="secondary" size="small">
          Cancel
        </Button>
      </Box>
    </Box>
  );
}

export default NewItems;