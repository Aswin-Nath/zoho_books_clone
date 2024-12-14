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
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CancelIcon from "@mui/icons-material/Cancel";

function Bills() {
  const [vendor, setVendor] = useState("");
  const [billNumber, setBillNumber] = useState("");
  const [orderNumber, setOrderNumber] = useState("");
  const [billDate, setBillDate] = useState("");
  const [dueDate, setDueDate] = useState("2024-12-14");
  const [subject, setSubject] = useState("");
  const [discountType, setDiscountType] = useState("item"); // "item" or "transaction"
  const [rows, setRows] = useState([
    { itemDetails: "", account: "", quantity: 1, rate: 0, discount: 0, customerDetails: "", amount: 0 },
  ]);
  const [adjustment, setAdjustment] = useState(0);
  const [vendorAddress, setVendorAddress] = useState("");

  const itemOptions = ["Item 1", "Item 2", "Item 3"];
  const accountOptions = ["Account 1", "Account 2", "Account 3"];
  const customerOptions = ["Customer 1", "Customer 2", "Customer 3"];

  const handleVendorChange = (value) => {
    setVendor(value);
    if (value === "Vendor 1") {
      setVendorAddress("123 Vendor St, Vendor City");
    } else if (value === "Vendor 2") {
      setVendorAddress("456 Supplier Rd, Supplier Town");
    } else {
      setVendorAddress("");
    }
  };

  const handleAddRow = () => {
    setRows([...rows, { itemDetails: "", account: "", quantity: 1, rate: 0, discount: 0, customerDetails: "", amount: 0 }]);
  };

  const handleRemoveRow = (index) => {
    setRows(rows.filter((_, i) => i !== index));
  };

  const handleRowChange = (index, field, value) => {
    const updatedRows = rows.map((row, i) =>
      i === index ? { ...row, [field]: value, amount: row.quantity * row.rate * (1 - row.discount / 100) } : row
    );
    setRows(updatedRows);
  };

  const calculateSubtotal = () => rows.reduce((sum, row) => sum + row.amount, 0);

  return (
    <Box p={4}>
      <Typography variant="h5" mb={3}>New Bill</Typography>

      {/* Vendor Section */}
      <Box display="flex" alignItems="center" mb={2}>
        <Typography sx={{ width: "20%" }}>Vendor Name*</Typography>
        <FormControl fullWidth sx={{ flex: 1, mr: 2 }}>
          <Select
            value={vendor}
            onChange={(e) => handleVendorChange(e.target.value)}
            displayEmpty
          >
            <MenuItem value="">
              <em>Select a Vendor</em>
            </MenuItem>
            <MenuItem value="Vendor 1">Vendor 1</MenuItem>
            <MenuItem value="Vendor 2">Vendor 2</MenuItem>
          </Select>
        </FormControl>
        <IconButton>
          <SearchIcon />
        </IconButton>
      </Box>

      {vendorAddress && (
        <Box mb={2}>
          <Typography variant="body1" fontWeight="bold">Vendor Address:</Typography>
          <Typography>{vendorAddress}</Typography>
        </Box>
      )}

      {/* Details Section */}
      <Box display="flex" flexDirection="column" mb={2}>
        <TextField
          label="Bill#"
          value={billNumber}
          onChange={(e) => setBillNumber(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Bill Date"
          type="date"
          InputLabelProps={{ shrink: true }}
          value={billDate}
          onChange={(e) => setBillDate(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Due Date"
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Order Number"
          value={orderNumber}
          onChange={(e) => setOrderNumber(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          fullWidth
          margin="normal"
        />
      </Box>

      {/* Discount Type Toggle */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <ToggleButtonGroup
          value={discountType}
          exclusive
          onChange={(e, value) => value && setDiscountType(value)}
          sx={{ marginBottom: 2 }}
        >
          <ToggleButton value="item">At Line Item Level</ToggleButton>
          <ToggleButton value="transaction">At Transaction Level</ToggleButton>
        </ToggleButtonGroup>
      </Box>

      {/* Item Table Section */}
      <Box mb={2}>
        <Box display="grid" gridTemplateColumns="2fr 2fr 1fr 1fr 1fr 2fr 1fr 50px" gap={1} fontWeight="bold" mb={1} borderBottom="1px solid #ccc" p={1}>
          <Typography>ITEM DETAILS</Typography>
          <Typography>ACCOUNT</Typography>
          <Typography>QUANTITY</Typography>
          <Typography>RATE</Typography>
          {discountType === "item" && <Typography>DISCOUNT (%)</Typography>}
          <Typography>CUSTOMER DETAILS</Typography>
          <Typography>AMOUNT</Typography>
          <Typography></Typography>
        </Box>
        {rows.map((row, index) => (
          <Box display="grid" gridTemplateColumns="2fr 2fr 1fr 1fr 1fr 2fr 1fr 50px" gap={1} alignItems="center" mb={1} key={index}>
            <FormControl fullWidth>
              <Select
                value={row.itemDetails}
                onChange={(e) => handleRowChange(index, "itemDetails", e.target.value)}
                displayEmpty
              >
                <MenuItem value="">
                  <em>Select Item</em>
                </MenuItem>
                {itemOptions.map((item, i) => (
                  <MenuItem key={i} value={item}>{item}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <Select
                value={row.account}
                onChange={(e) => handleRowChange(index, "account", e.target.value)}
                displayEmpty
              >
                <MenuItem value="">
                  <em>Select Account</em>
                </MenuItem>
                {accountOptions.map((account, i) => (
                  <MenuItem key={i} value={account}>{account}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              type="number"
              value={row.quantity}
              onChange={(e) => handleRowChange(index, "quantity", parseFloat(e.target.value) || 0)}
              placeholder="Quantity"
              fullWidth
            />
            <TextField
              type="number"
              value={row.rate}
              onChange={(e) => handleRowChange(index, "rate", parseFloat(e.target.value) || 0)}
              placeholder="Rate"
              fullWidth
            />
            {discountType === "item" && (
              <TextField
                type="number"
                value={row.discount}
                onChange={(e) => handleRowChange(index, "discount", parseFloat(e.target.value) || 0)}
                placeholder="Discount (%)"
                fullWidth
              />
            )}
            <FormControl fullWidth>
              <Select
                value={row.customerDetails}
                onChange={(e) => handleRowChange(index, "customerDetails", e.target.value)}
                displayEmpty
              >
                <MenuItem value="">
                  <em>Select Customer</em>
                </MenuItem>
                {customerOptions.map((customer, i) => (
                  <MenuItem key={i} value={customer}>{customer}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <Typography>{row.amount.toFixed(2)}</Typography>
            <IconButton onClick={() => handleRemoveRow(index)}>
              <CancelIcon />
            </IconButton>
          </Box>
        ))}
        <Button variant="contained" onClick={handleAddRow} sx={{ mt: 2 }}>Add Row</Button>
      </Box>

      {/* Summary Section */}
      <Box>
        <Typography>Subtotal: {calculateSubtotal().toFixed(2)}</Typography>
        {discountType === "transaction" && (
          <TextField
            label="Transaction Discount (%)"
            type="number"
            fullWidth
            margin="normal"
          />
        )}
        <TextField
          label="Adjustment"
          type="number"
          value={adjustment}
          onChange={(e) => setAdjustment(parseFloat(e.target.value) || 0)}
          fullWidth
          margin="normal"
        />
        <Typography>Total: {(calculateSubtotal() + adjustment).toFixed(2)}</Typography>
      </Box>

      {/* Notes and File Upload Section */}
      <Box display="flex" justifyContent="space-between" alignItems="flex-start" mt={4}>
        <TextField
          label="Notes"
          placeholder="Enter notes here"
          multiline
          rows={3}
          fullWidth
          sx={{ flex: 0.7, mr: 2 }}
        />
        <Box flex={0.3}>
          <Button variant="outlined" component="label" fullWidth>
            Upload Files
            <input type="file" hidden multiple />
          </Button>
          <Typography variant="caption" display="block" mt={1}>
            Maximum 5 files, 10MB each
          </Typography>
        </Box>
      </Box>

      {/* Actions */}
      <Box display="flex" justifyContent="space-between" mt={3}>
        <Button variant="outlined">Save as Draft</Button>
        <Button variant="contained" color="primary">Save</Button>
        <Button variant="text" color="error">Cancel</Button>
      </Box>
    </Box>
  );
}

export default Bills;
