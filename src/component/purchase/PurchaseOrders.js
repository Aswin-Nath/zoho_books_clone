import React, { useState } from "react";
import {
  Box,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Typography,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const PurchaseOrders = () => {
  const [items, setItems] = useState([
    {
      itemDetails: "",
      account: "",
      quantity: 1,
      rate: 0,
      discount: 0,
      amount: 0,
    },
  ]);
  const [discountType, setDiscountType] = useState("transaction");
  const [vendorAddress, setVendorAddress] = useState("Tamil Nadu, India");
  const [transactionDiscount, setTransactionDiscount] = useState(0);
  const [adjustment, setAdjustment] = useState(0);

  const handleAddRow = () => {
    setItems([
      ...items,
      { itemDetails: "", account: "", quantity: 1, rate: 0, discount: 0, amount: 0 },
    ]);
  };

  const handleRemoveRow = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const handleInputChange = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index][field] = value;
    if (field === "quantity" || field === "rate" || field === "discount") {
      const discount = (updatedItems[index].rate * updatedItems[index].discount) / 100;
      updatedItems[index].amount =
        (updatedItems[index].quantity * updatedItems[index].rate) - discount;
    }
    setItems(updatedItems);
  };

  const handleVendorChange = (vendor) => {
    const addressMapping = {
      "Vendor A": "Address A, Tamil Nadu",
      "Vendor B": "Address B, Karnataka",
      "Vendor C": "Address C, Maharashtra",
    };
    setVendorAddress(addressMapping[vendor] || "Tamil Nadu, India");
  };

  const calculateTotal = () => {
    const subtotal = items.reduce((sum, item) => sum + item.amount, 0);
    let total = subtotal;
    if (discountType === "transaction") {
      const discount = (subtotal * transactionDiscount) / 100;
      total -= discount;
    }
    total += adjustment;
    return total;
  };

  return (
    <div className="h-full overflow-y-auto">
          <Box sx={{ p: 4 }}>
      <Typography variant="h4" mb={2}>
        New Purchase Order
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel>Vendor Name</InputLabel>
            <Select
              onChange={(e) => handleVendorChange(e.target.value)}
              defaultValue=""
            >
              <MenuItem value="">Select a Vendor</MenuItem>
              <MenuItem value="Vendor A">Vendor A</MenuItem>
              <MenuItem value="Vendor B">Vendor B</MenuItem>
              <MenuItem value="Vendor C">Vendor C</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <Typography>Delivery Address:</Typography>
          <Typography>{vendorAddress}</Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            label="Purchase Order#"
            value="PO-00003"
            fullWidth
            disabled
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField label="Reference#" fullWidth />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            label="Date"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel>Shipment Preference</InputLabel>
            <Select>
              <MenuItem value="">Select Shipment Preference</MenuItem>
              <MenuItem value="Air">Air</MenuItem>
              <MenuItem value="Sea">Sea</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel>Payment Terms</InputLabel>
            <Select>
              <MenuItem value="Due On Receipt">Due On Receipt</MenuItem>
              <MenuItem value="Net 30">Net 30</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <Typography>Discount Type</Typography>
          <RadioGroup
            row
            value={discountType}
            onChange={(e) => setDiscountType(e.target.value)}
          >
            <FormControlLabel
              value="transaction"
              control={<Radio />}
              label="Transaction Level"
            />
            <FormControlLabel
              value="item"
              control={<Radio />}
              label="Item Level"
            />
          </RadioGroup>
        </Grid>

        {discountType === "transaction" && (
          <Grid item xs={12} md={6}>
            <TextField
              label="Transaction Discount (%)"
              type="number"
              value={transactionDiscount}
              onChange={(e) => setTransactionDiscount(+e.target.value)}
              fullWidth
            />
          </Grid>
        )}

        <Grid item xs={12}>
          <Typography>Item Table</Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Item Details</TableCell>
                  <TableCell>Account</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Rate</TableCell>
                  <TableCell>Discount (%)</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <FormControl fullWidth>
                        <Select
                          value={item.itemDetails}
                          onChange={(e) =>
                            handleInputChange(index, "itemDetails", e.target.value)
                          }
                        >
                          <MenuItem value="">Select Item</MenuItem>
                          <MenuItem value="Item A">Item A</MenuItem>
                          <MenuItem value="Item B">Item B</MenuItem>
                        </Select>
                      </FormControl>
                    </TableCell>
                    <TableCell>
                      <FormControl fullWidth>
                        <Select
                          value={item.account}
                          onChange={(e) =>
                            handleInputChange(index, "account", e.target.value)
                          }
                        >
                          <MenuItem value="">Select Account</MenuItem>
                          <MenuItem value="Account A">Account A</MenuItem>
                          <MenuItem value="Account B">Account B</MenuItem>
                        </Select>
                      </FormControl>
                    </TableCell>
                    <TableCell>
                      <TextField
                        type="number"
                        value={item.quantity}
                        onChange={(e) =>
                          handleInputChange(index, "quantity", +e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        type="number"
                        value={item.rate}
                        onChange={(e) =>
                          handleInputChange(index, "rate", +e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        type="number"
                        value={item.discount}
                        onChange={(e) =>
                          handleInputChange(index, "discount", +e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell>{item.amount.toFixed(2)}</TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleRemoveRow(index)}>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Button onClick={handleAddRow} variant="contained" color="primary" sx={{ mt: 2 }}>
            Add Row
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6" align="right">
            Subtotal: {items.reduce((sum, item) => sum + item.amount, 0).toFixed(2)}
          </Typography>
          <TextField
            label="Adjustment"
            type="number"
            value={adjustment}
            onChange={(e) => setAdjustment(+e.target.value)}
            fullWidth
            sx={{ mt: 2, mb: 2 }}
          />
          <Typography variant="h6" align="right">
            Total: {calculateTotal().toFixed(2)}
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            label="Customer Notes"
            fullWidth
            multiline
            rows={3}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Terms & Conditions"
            fullWidth
            multiline
            rows={3}
          />
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" color="primary" sx={{ mr: 2 }}>
            Save
          </Button>
          <Button variant="outlined" color="error">
            Cancel
          </Button>
        </Grid>
      </Grid>
    </Box>
    </div>

  );
};

export default PurchaseOrders;
