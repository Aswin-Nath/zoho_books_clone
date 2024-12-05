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
    <Box sx={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <Typography variant="h5" gutterBottom>
        New Item
      </Typography>

      {/* Type Section */}
      <FormControl sx={{ marginBottom: "20px" }}>
        <Typography variant="subtitle1">Type</Typography>
        <RadioGroup row>
          <FormControlLabel value="goods" control={<Radio />} label="Goods" />
          <FormControlLabel value="service" control={<Radio />} label="Service" />
        </RadioGroup>
      </FormControl>

      {/* Name and Unit Section */}
      <Grid container spacing={2} sx={{ marginBottom: "20px" }}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Name"
            required
            fullWidth
            variant="outlined"
            placeholder="Enter item name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <Select
              value={selectedUnit}
              onChange={(e) => setSelectedUnit(e.target.value)}
              displayEmpty
            >
              <MenuItem value="" disabled>
                Select or type to add
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
      <Box sx={{ border: "1px solid #ccc", borderRadius: "8px", padding: "16px", marginBottom: "20px" }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={salesEnabled}
              onChange={(e) => setSalesEnabled(e.target.checked)}
            />
          }
          label="Sales Information"
        />
        {salesEnabled && (
          <Grid container spacing={2} sx={{ marginTop: "10px" }}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Selling Price (INR)"
                required
                fullWidth
                variant="outlined"
                placeholder="Enter selling price"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <Select
                  value={selectedSalesAccount}
                  onChange={(e) => setSelectedSalesAccount(e.target.value)}
                  displayEmpty
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
            <Grid item xs={12}>
              <TextField
                label="Description"
                multiline
                rows={3}
                fullWidth
                placeholder="Enter description"
              />
            </Grid>
          </Grid>
        )}
      </Box>

      {/* Purchase Information */}
      <Box sx={{ border: "1px solid #ccc", borderRadius: "8px", padding: "16px" }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={purchaseEnabled}
              onChange={(e) => setPurchaseEnabled(e.target.checked)}
            />
          }
          label="Purchase Information"
        />
        {purchaseEnabled && (
          <Grid container spacing={2} sx={{ marginTop: "10px" }}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Cost Price (INR)"
                required
                fullWidth
                variant="outlined"
                placeholder="Enter cost price"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <Select
                  value={selectedPurchaseAccount}
                  onChange={(e) => setSelectedPurchaseAccount(e.target.value)}
                  displayEmpty
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
            <Grid item xs={12}>
              <TextField
                label="Description"
                multiline
                rows={3}
                fullWidth
                placeholder="Enter description"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <Select
                  displayEmpty
                  defaultValue=""
                >
                  <MenuItem value="" disabled>
                    Select vendor
                  </MenuItem>
                  {/* Add vendor options here if necessary */}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        )}
      </Box>

      {/* Save and Cancel Buttons */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", gap: "16px", marginTop: "20px" }}>
        <Button variant="contained" color="primary">
          Save
        </Button>
        <Button variant="outlined" color="secondary">
          Cancel
        </Button>
      </Box>
    </Box>
  );
}

export default NewItems;
