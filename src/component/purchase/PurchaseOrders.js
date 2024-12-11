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
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const PurchaseOrders = () => {
  const [items, setItems] = useState([
    {
      itemDetails: "",
      account: "",
      quantity: 1,
      rate: 0,
      amount: 0,
    },
  ]);

  const handleAddRow = () => {
    setItems([
      ...items,
      { itemDetails: "", account: "", quantity: 1, rate: 0, amount: 0 },
    ]);
  };

  const handleRemoveRow = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const handleInputChange = (index, field, value) => {
    const updatedItems = [...items];
    let selectedItem = null;
    updatedItems[index][field] = value;
    if (field === "itemDetails") {
      selectedItem = value;
      const rate = selectedItem.getAttribute("data-rate");
      updatedItems[index].rate = parseFloat(rate) || 0;
    }
    updatedItems[index].amount =
      updatedItems[index].quantity * updatedItems[index].rate;
    setItems(updatedItems);
  };

  return (
    <div className="h-full overflow-y-auto">
      <Box mt={4}>
        <Typography variant="h6" mb={2} fontWeight="bold">
          New Purchase Order
        </Typography>
        <Grid container spacing={3}>
          {/* Vendor Name Dropdown */}
          <Grid item xs={12} md={6}>
            <FormControl fullWidth variant="outlined" size="medium">
              <InputLabel>Vendor Name</InputLabel>
              <Select label="Vendor Name">
                <MenuItem value="">Select a Vendor</MenuItem>
                <MenuItem value="Vendor A">Vendor A</MenuItem>
                <MenuItem value="Vendor B">Vendor B</MenuItem>
                <MenuItem value="Vendor C">Vendor C</MenuItem>
                <MenuItem value="Vendor D">Vendor D</MenuItem>
                <MenuItem value="Vendor E">Vendor E</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Delivery Address */}
          <Grid item xs={12}>
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Delivery Address*
            </Typography>
            <Box mb={2}>
              <Box mt={2}>
                <Typography variant="body1">Aswinnath TE</Typography>
                <Typography variant="body2">
                  Tamil Nadu
                  <br />
                  India,
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Purchase Order Number */}
          <Grid item xs={12} md={5}>
            <TextField
              label="Purchase Order#"
              value="PO-00001"
              disabled
              fullWidth
              variant="outlined"
              size="medium"
            />
          </Grid>

          {/* Reference Number */}
          <Grid item xs={12} md={5}>
            <TextField
              label="Reference#"
              fullWidth
              variant="outlined"
              size="medium"
            />
          </Grid>

          {/* Date */}
          <Grid item xs={12} md={5}>
            <TextField
              label="Date"
              type="date"
              value="2024-12-06"
              InputLabelProps={{ shrink: true }}
              fullWidth
              variant="outlined"
              size="medium"
            />
          </Grid>

          {/* Shipment Preference */}
          <Grid item xs={12} md={5}>
            <FormControl fullWidth variant="outlined" size="medium">
              <InputLabel>Shipment Preference</InputLabel>
              <Select label="Shipment Preference">
                <MenuItem value="">
                  Choose the shipment preference or type to add
                </MenuItem>
                <MenuItem value="Air">Air</MenuItem>
                <MenuItem value="Sea">Sea</MenuItem>
                <MenuItem value="Road">Road</MenuItem>
                <MenuItem value="Express">Express</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Payment Terms */}
          <Grid item xs={12} md={5}>
            <FormControl fullWidth variant="outlined" size="medium">
              <InputLabel>Payment Terms</InputLabel>
              <Select label="Payment Terms" value="Due On Receipt">
                <MenuItem value="Due On Receipt">Due On Receipt</MenuItem>
                <MenuItem value="Net 30">Net 30</MenuItem>
                <MenuItem value="Net 60">Net 60</MenuItem>
                <MenuItem value="Prepaid">Prepaid</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Item Table */}
          <Grid item xs={12}>
            <Typography variant="h6" fontWeight="bold">
              Item Table
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Item Details</TableCell>
                    <TableCell>Account</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Rate</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {items.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <FormControl fullWidth variant="outlined" size="medium">
                          <InputLabel>Item Details</InputLabel>
                          <Select
                            label="Item Details"
                            value={item.itemDetails}
                            onChange={(e) =>
                              handleInputChange(
                                index,
                                "itemDetails",
                                e.target.value,
                              )
                            }
                          >
                            <MenuItem value="">Select an item</MenuItem>
                            <MenuItem value="Item 1" data-rate="10">
                              Item 1
                            </MenuItem>
                            <MenuItem value="Item 2" data-rate="20">
                              Item 2
                            </MenuItem>
                            <MenuItem value="Item 3" data-rate="15">
                              Item 3
                            </MenuItem>
                            <MenuItem value="Item 4" data-rate="25">
                              Item 4
                            </MenuItem>
                          </Select>
                        </FormControl>
                      </TableCell>
                      <TableCell>
                        <FormControl fullWidth variant="outlined" size="medium">
                          <InputLabel>Account</InputLabel>
                          <Select
                            label="Account"
                            value={item.account}
                            onChange={(e) =>
                              handleInputChange(
                                index,
                                "account",
                                e.target.value,
                              )
                            }
                          >
                            <MenuItem value="">Select an account</MenuItem>
                            <MenuItem value="Account 1">Account 1</MenuItem>
                            <MenuItem value="Account 2">Account 2</MenuItem>
                            <MenuItem value="Account 3">Account 3</MenuItem>
                            <MenuItem value="Account 4">Account 4</MenuItem>
                          </Select>
                        </FormControl>
                      </TableCell>
                      <TableCell>
                        <TextField
                          size="medium"
                          type="number"
                          value={item.quantity}
                          onChange={(e) =>
                            handleInputChange(index, "quantity", e.target.value)
                          }
                          variant="outlined"
                          fullWidth
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          size="medium"
                          type="number"
                          value={item.rate}
                          onChange={(e) =>
                            handleInputChange(index, "rate", e.target.value)
                          }
                          variant="outlined"
                          fullWidth
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
            <Button variant="contained" color="primary" onClick={handleAddRow}>
              Add New Row
            </Button>
          </Grid>

          {/* Discount */}
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              label="Discount"
              type="number"
              InputProps={{ endAdornment: "%" }}
              variant="outlined"
              size="medium"
            />
          </Grid>

          {/* Tax */}
          <Grid item xs={12} md={3}>
            <FormControl fullWidth variant="outlined" size="medium">
              <InputLabel>Tax</InputLabel>
              <Select label="Tax">
                <MenuItem value="GST">GST</MenuItem>
                <MenuItem value="VAT">VAT</MenuItem>
                <MenuItem value="Service Tax">Service Tax</MenuItem>
                <MenuItem value="Sales Tax">Sales Tax</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Adjustment */}
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              label="Adjustment"
              type="number"
              variant="outlined"
              size="medium"
            />
          </Grid>

          {/* Total */}
          <Grid item xs={12}>
            <Typography variant="h6" fontWeight="bold">
              Total:{" "}
              {items.reduce((acc, item) => acc + item.amount, 0).toFixed(2)}
            </Typography>
          </Grid>

          {/* Customer Notes */}
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Customer Notes"
              multiline
              rows={3}
              placeholder="Will be displayed on purchase order"
              variant="outlined"
              size="medium"
            />
          </Grid>

          {/* Terms & Conditions */}
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              label="Terms & Conditions"
              multiline
              rows={3}
              placeholder="Enter the terms and conditions of your business to be displayed in your transaction"
              variant="outlined"
              size="medium"
            />
          </Grid>

          {/* Upload File */}
          <Grid item xs={12} md={5}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              component="label"
            >
              Upload File
              <input type="file" hidden />
            </Button>
            <Typography variant="body2" mt={1}>
              You can upload a maximum of 10 files, 10MB each
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default PurchaseOrders;
