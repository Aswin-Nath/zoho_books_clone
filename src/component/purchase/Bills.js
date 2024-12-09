import React, { useState } from "react";
import {
  TextField,
  MenuItem,
  Select,
  FormControl,
  Typography,
  IconButton,
  Box,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CancelIcon from "@mui/icons-material/Cancel";

function Bills() {
  const [vendor, setVendor] = useState("");
  const [paymentTerm, setPaymentTerm] = useState("Due On Receipt");
  const [billDate, setBillDate] = useState("");
  const [billNumber, setBillNumber] = useState("");
  const [orderNumber, setOrderNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [creditNoteNumber, setCreditNoteNumber] = useState("");
  const [vendorCreditDate, setVendorCreditDate] = useState("");
  const [viewMode, setViewMode] = useState("Line Item Level");

  const [rows, setRows] = useState([
    { itemDetails: "", account: "", quantity: 1, rate: 0, customerDetails: "", amount: 0 },
  ]);
  const [discount, setDiscount] = useState(0);
  const [taxType, setTaxType] = useState("TDS");
  const [taxValue, setTaxValue] = useState(0);
  const [adjustment, setAdjustment] = useState(0);

  const paymentOptions = [
    "Net 15",
    "Net 30",
    "Net 45",
    "Net 60",
    "Due On Receipt",
    "Due end of the month",
    "Due end of next month",
  ];

  const vendorOptions = ["Vendor 1", "Vendor 2", "Vendor 3"];
  const customerOptions = ["Customer 1", "Customer 2", "Customer 3"];
  const accountOptions = ["Account 1", "Account 2", "Account 3"];

  // Add new row function
  const handleAddRow = () => {
    setRows([
      ...rows,
      { itemDetails: "", account: "", quantity: 1, rate: 0, customerDetails: "", amount: 0 },
    ]);
  };

  // Remove row function
  const handleRemoveRow = (index) => {
    setRows(rows.filter((_, i) => i !== index));
  };

  // Update row function
  const handleRowChange = (index, field, value) => {
    const updatedRows = rows.map((row, i) =>
      i === index
        ? { ...row, [field]: value, amount: (row.quantity || 0) * (row.rate || 0) }
        : row
    );
    setRows(updatedRows);
  };

  // Calculate subtotal
  const calculateSubtotal = () => {
    return rows.reduce((sum, row) => sum + row.amount, 0);
  };

  // Calculate total after discount and tax
  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const discountAmount = (subtotal * discount) / 100;
    const taxAmount = taxType === "TDS" ? -taxValue : taxValue;
    return subtotal - discountAmount + taxAmount + adjustment;
  };

  const renderLineItemLevel = () => (
    <Box>
      {rows.map((row, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #ddd",
            paddingBottom: "10px",
            marginBottom: "10px",
          }}
        >
          <TextField
            placeholder="Type or click to select an item"
            fullWidth
            value={row.itemDetails}
            onChange={(e) => handleRowChange(index, "itemDetails", e.target.value)}
            sx={{ flex: 2, marginRight: "10px" }}
          />
          <FormControl fullWidth sx={{ flex: 1, marginRight: "10px" }}>
            <Select
              value={row.account}
              onChange={(e) => handleRowChange(index, "account", e.target.value)}
              displayEmpty
            >
              <MenuItem value="">
                <em>Select an Account</em>
              </MenuItem>
              {accountOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            type="number"
            value={row.quantity}
            onChange={(e) => handleRowChange(index, "quantity", parseFloat(e.target.value) || 0)}
            sx={{ flex: 0.5, marginRight: "10px" }}
          />
          <TextField
            type="number"
            value={row.rate}
            onChange={(e) => handleRowChange(index, "rate", parseFloat(e.target.value) || 0)}
            sx={{ flex: 0.5, marginRight: "10px" }}
          />
          <FormControl fullWidth sx={{ flex: 1, marginRight: "10px" }}>
            <Select
              value={row.customerDetails}
              onChange={(e) => handleRowChange(index, "customerDetails", e.target.value)}
              displayEmpty
            >
              <MenuItem value="">
                <em>Select a Customer</em>
              </MenuItem>
              {customerOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Typography sx={{ flex: 0.5 }}>{row.amount.toFixed(2)}</Typography>
          <IconButton onClick={() => handleRemoveRow(index)}>
            <CancelIcon />
          </IconButton>
        </Box>
      ))}

      <Button variant="outlined" onClick={handleAddRow} sx={{ marginBottom: "20px" }}>
        Add New Row
      </Button>
    </Box>
  );

  const renderTransactionLevel = () => (
    <Box>
      <Typography>Transaction Level Component Placeholder</Typography>
      {/* Add Transaction Level Details Here */}
    </Box>
  );

  return (
    <Box sx={{ padding: "20px", maxWidth: "1000px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <div>
        {/* Upper Section */}
        <Box sx={{ marginBottom: "20px" }}>
          <Typography variant="h6" gutterBottom>
            New Bill or Credit Note
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
            <Typography sx={{ width: "30%", fontWeight: "bold", color: "red" }}>Vendor Name*</Typography>
            <Box sx={{ display: "flex", alignItems: "center", width: "70%" }}>
              <FormControl fullWidth sx={{ marginRight: "10px" }}>
                <Select
                  value={vendor}
                  onChange={(e) => setVendor(e.target.value)}
                  displayEmpty
                  fullWidth
                >
                  <MenuItem value="">
                    <em>Select a Vendor</em>
                  </MenuItem>
                  {vendorOptions.map((vendor) => (
                    <MenuItem key={vendor} value={vendor}>
                      {vendor}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <IconButton>
                <SearchIcon />
              </IconButton>
              <IconButton>
                <CancelIcon />
              </IconButton>
            </Box>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
            <Typography sx={{ width: "30%" }}>Credit Note#</Typography>
            <TextField
              fullWidth
              value={creditNoteNumber}
              onChange={(e) => setCreditNoteNumber(e.target.value)}
              placeholder="Enter Credit Note Number"
              sx={{ width: "70%" }}
            />
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
            <Typography sx={{ width: "30%" }}>Vendor Credit Date</Typography>
            <TextField
              type="date"
              value={vendorCreditDate}
              onChange={(e) => setVendorCreditDate(e.target.value)}
              sx={{ width: "70%" }}
            />
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
            <Typography sx={{ width: "30%" }}>Order Number</Typography>
            <TextField
              fullWidth
              value={orderNumber}
              onChange={(e) => setOrderNumber(e.target.value)}
              placeholder="Enter Order Number"
              sx={{ width: "70%" }}
            />
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
            <Typography sx={{ width: "30%" }}>Subject</Typography>
            <TextField
              fullWidth
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Enter Subject"
              sx={{ width: "70%" }}
            />
          </Box>
        </Box>
      </div>

      <div>
        {/* Lower Section */}
        <Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end", marginBottom: "20px" }}>
            <Button
              variant="outlined"
              onClick={() => setViewMode(viewMode === "Line Item Level" ? "Transaction Level" : "Line Item Level")}
            >
              Switch to {viewMode === "Line Item Level" ? "Transaction Level" : "Line Item Level"}
            </Button>
          </Box>

          {viewMode === "Line Item Level" ? renderLineItemLevel() : renderTransactionLevel()}
        </Box>

        {/* Subtotal Section */}
        <Box sx={{ display: "flex", justifyContent: "space-between", padding: "20px", border: "1px solid #ddd" }}>
          <Box sx={{ flex: 1 }}>
            <Typography>Sub Total</Typography>
            <Typography sx={{ fontWeight: "bold" }}>{calculateSubtotal().toFixed(2)}</Typography>

            <TextField
              label="Discount"
              type="number"
              value={discount}
              onChange={(e) => setDiscount(parseFloat(e.target.value) || 0)}
              sx={{ marginTop: "10px", marginBottom: "10px", width: "100%" }}
              InputProps={{
                endAdornment: <Typography>%</Typography>,
              }}
            />

            <RadioGroup
              row
              value={taxType}
              onChange={(e) => setTaxType(e.target.value)}
              sx={{ marginTop: "10px" }}
            >
              <FormControlLabel value="TDS" control={<Radio />} label="TDS" />
              <FormControlLabel value="TCS" control={<Radio />} label="TCS" />
            </RadioGroup>

            <Select
              value={taxValue}
              onChange={(e) => setTaxValue(parseFloat(e.target.value) || 0)}
              displayEmpty
              sx={{ width: "100%", marginTop: "10px" }}
            >
              <MenuItem value="">
                <em>Select a Tax</em>
              </MenuItem>
              <MenuItem value={10}>10%</MenuItem>
              <MenuItem value={20}>20%</MenuItem>
            </Select>

            <TextField
              label="Adjustment"
              type="number"
              value={adjustment}
              onChange={(e) => setAdjustment(parseFloat(e.target.value) || 0)}
              fullWidth
              sx={{ marginTop: "10px" }}
            />

            <Typography sx={{ fontWeight: "bold", marginTop: "10px" }}>
              Total (₹) {calculateTotal().toFixed(2)}
            </Typography>
          </Box>
        </Box>

        {/* Notes and Upload Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginTop: "20px",
          }}
        >
          <TextField
            placeholder="Notes"
            multiline
            rows={2}
            fullWidth
            sx={{ flex: 0.7, marginRight: "20px" }}
          />
          <Box sx={{ flex: 0.3 }}>
            <Button
              variant="outlined"
              component="label"
              fullWidth
              sx={{ marginBottom: "10px" }}
            >
              Upload File
              <input type="file" hidden />
            </Button>
            <Typography>You can upload a maximum of 5 files, 10MB each.</Typography>
          </Box>
        </Box>

        {/* Action Buttons */}
        <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
          <Button variant="outlined">Save as Draft</Button>
          <Button variant="contained" sx={{ backgroundColor: "#007bff", color: "#fff" }}>
            Save as Open
          </Button>
          <Button variant="text" color="error">
            Cancel
          </Button>
        </Box>
      </div>
    </Box>
  );
}

export default Bills;