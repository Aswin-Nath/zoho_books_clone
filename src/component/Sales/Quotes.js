import React, { useState } from "react";
import {
  TextField,
  MenuItem,
  Button,
  Select,
  InputLabel,
  FormControl,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  IconButton,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

const Quotes = () => {
  const [formData, setFormData] = useState({
    customerName: "",
    quoteNumber: "QT-000002",
    referenceNumber: "",
    quoteDate: "",
    expiryDate: "",
    salesperson: "",
    projectName: "",
    subject: "",
    items: [{ name: "", quantity: 1, rate: 0 }],
    discount: 0,
    tax: "",
    adjustment: 0,
    notes: "",
    terms: "",
    attachedFiles: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleItemChange = (index, e) => {
    const { name, value } = e.target;
    const items = [...formData.items];
    items[index][name] = value;
    setFormData({ ...formData, items });
  };

  const addItem = () => {
    setFormData({
      ...formData,
      items: [...formData.items, { name: "", quantity: 1, rate: 0 }],
    });
  };

  const removeItem = (index) => {
    const items = formData.items.filter((_, i) => i !== index);
    setFormData({ ...formData, items });
  };

  const calculateTotal = () => {
    const subtotal = formData.items.reduce(
      (sum, item) => sum + item.quantity * item.rate,
      0
    );
    const discount = (subtotal * formData.discount) / 100;
    const adjustedTotal = subtotal - discount + Number(formData.adjustment);
    return adjustedTotal;
  };

  // for file uploading part (later)
  // const handleFileUpload = (e) => {
  //   setFormData({
  //     ...formData,
  //     attachedFiles: [...formData.attachedFiles, ...e.target.files],
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        New Quote
      </Typography>
      <form onSubmit={handleSubmit}>
        {/* Header Section */}
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Customer Name"
              name="customerName"
              value={formData.customerName}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Quote Number"
              name="quoteNumber"
              value={formData.quoteNumber}
              InputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Reference Number"
              name="referenceNumber"
              value={formData.referenceNumber}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="date"
              label="Quote Date"
              name="quoteDate"
              value={formData.quoteDate}
              onChange={handleInputChange}
              InputLabelProps={{ shrink: true }}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="date"
              label="Expiry Date"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleInputChange}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
        </Grid>

        {/* Details Section */}
        <Box mt={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Salesperson</InputLabel>
                <Select
                  name="salesperson"
                  value={formData.salesperson}
                  onChange={handleInputChange}
                >
                  <MenuItem value="">Select</MenuItem>
                  <MenuItem value="John">John</MenuItem>
                  <MenuItem value="Jane">Jane</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Project Name</InputLabel>
                <Select
                  name="projectName"
                  value={formData.projectName}
                  onChange={handleInputChange}
                >
                  <MenuItem value="">Select</MenuItem>
                  <MenuItem value="Project A">Project A</MenuItem>
                  <MenuItem value="Project B">Project B</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
        </Box>

        {/* Item Table */}
        <Box mt={4}>
          <Typography variant="h6" gutterBottom>
            Items
          </Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Item Name</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Rate</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {formData.items.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <TextField
                      name="name"
                      value={item.name}
                      onChange={(e) => handleItemChange(index, e)}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      type="number"
                      name="quantity"
                      value={item.quantity}
                      onChange={(e) => handleItemChange(index, e)}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      type="number"
                      name="rate"
                      value={item.rate}
                      onChange={(e) => handleItemChange(index, e)}
                    />
                  </TableCell>
                  <TableCell>{item.quantity * item.rate}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => removeItem(index)}>
                      <Remove />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Button
            startIcon={<Add />}
            variant="outlined"
            onClick={addItem}
            style={{ marginTop: "10px" }}
          >
            Add Item
          </Button>
        </Box>

        {/* Calculation Section */}
        <Box mt={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Discount (%)"
                name="discount"
                type="number"
                value={formData.discount}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Adjustment"
                name="adjustment"
                type="number"
                value={formData.adjustment}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
          <Typography variant="h6" mt={2}>
            Total: ₹{calculateTotal()}
          </Typography>
        </Box>

        {/* Notes Section */}
        <Box mt={3}>
          <TextField
            fullWidth
            multiline
            rows={3}
            label="Customer Notes"
            name="notes"
            value={formData.notes}
            onChange={handleInputChange}
          />
          <TextField
            fullWidth
            multiline
            rows={3}
            label="Terms & Conditions"
            name="terms"
            value={formData.terms}
            onChange={handleInputChange}
            style={{ marginTop: "10px" }}
          />
        </Box>

        {/* Actions */}
        <Box mt={3}>
          <Button type="submit" variant="contained" color="primary">
            Save and Send
          </Button>
          <Button variant="outlined" color="secondary" style={{ marginLeft: "10px" }}>
            Save as Draft
          </Button>
          <Button variant="text" color="error" style={{ marginLeft: "10px" }}>
            Cancel
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Quotes;
