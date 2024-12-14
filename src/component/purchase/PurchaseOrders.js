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

const PurchaseOrders = () => {
  const [vendor, setVendor] = useState("");
  const [vendorAddress, setVendorAddress] = useState("");
  const [purchaseOrder, setPurchaseOrder] = useState("PO-00003");
  const [reference, setReference] = useState("");
  const [date, setDate] = useState("14/12/2024");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [paymentTerms, setPaymentTerms] = useState("Due On Receipt");
  const [shipmentPreference, setShipmentPreference] = useState("");
  const [discountType, setDiscountType] = useState("transaction");
  const [transactionDiscount, setTransactionDiscount] = useState(0);
  const [adjustment, setAdjustment] = useState(0);
  const [items, setItems] = useState([
    {
      itemDetails: "",
      account: "",
      quantity: 1,
      rate: 0,
      discount: 0,
      customerDetails: "",
      amount: 0,
    },
  ]);

  const vendors = [
    { name: "Vendor A", address: "Address A, Tamil Nadu" },
    { name: "Vendor B", address: "Address B, Karnataka" },
    { name: "Vendor C", address: "Address C, Maharashtra" },
  ];

  const handleVendorChange = (value) => {
    setVendor(value);
    const selectedVendor = vendors.find((v) => v.name === value);
    setVendorAddress(selectedVendor ? selectedVendor.address : "Unknown Address");
  };

  const handleAddRow = () => {
    setItems([
      ...items,
      { itemDetails: "", account: "", quantity: 1, rate: 0, discount: 0, customerDetails: "", amount: 0 },
    ]);
  };

  const handleRemoveRow = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleRowChange = (index, field, value) => {
    const updatedItems = items.map((item, i) =>
      i === index
        ? { ...item, [field]: value, amount: item.quantity * item.rate * (1 - item.discount / 100) }
        : item
    );
    setItems(updatedItems);
  };

  const calculateSubtotal = () => items.reduce((sum, item) => sum + item.amount, 0);

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const discount = discountType === "transaction" ? (subtotal * transactionDiscount) / 100 : 0;
    return subtotal - discount + adjustment;
  };

  return (
    <div className="h-full overflow-y-auto">
      <Box p={4}>
        <Typography variant="h5" mb={3}>New Purchase Order</Typography>

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
              {vendors.map((vendor) => (
                <MenuItem key={vendor.name} value={vendor.name}>{vendor.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Box>

        {/* Delivery Address Section */}
        <Box mb={2}>
          <Typography variant="body1" fontWeight="bold">Delivery Address:</Typography>
          <Typography>{vendorAddress || "No Address Selected"}</Typography>
        </Box>

        {/* Purchase Order Details */}
        <Box display="grid" gridTemplateColumns="1fr 1fr" gap={2} mb={2}>
          <TextField
            label="Purchase Order#"
            value={purchaseOrder}
            onChange={(e) => setPurchaseOrder(e.target.value)}
            fullWidth
          />
          <TextField
            label="Reference#"
            value={reference}
            onChange={(e) => setReference(e.target.value)}
            fullWidth
          />
          <TextField
            label="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            fullWidth
          />
          <TextField
            label="Delivery Date"
            placeholder="dd/MM/yyyy"
            value={deliveryDate}
            onChange={(e) => setDeliveryDate(e.target.value)}
            fullWidth
          />
          <FormControl fullWidth>
            <Select
              value={paymentTerms}
              onChange={(e) => setPaymentTerms(e.target.value)}
              displayEmpty
            >
              <MenuItem value="Due On Receipt">Due On Receipt</MenuItem>
              <MenuItem value="Net 15">Net 15</MenuItem>
              <MenuItem value="Net 30">Net 30</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <Select
              value={shipmentPreference}
              onChange={(e) => setShipmentPreference(e.target.value)}
              displayEmpty
            >
              <MenuItem value="">
                <em>Choose the shipment preference or type to add</em>
              </MenuItem>
              <MenuItem value="Air">Air</MenuItem>
              <MenuItem value="Sea">Sea</MenuItem>
              <MenuItem value="Land">Land</MenuItem>
            </Select>
          </FormControl>
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
          {items.map((item, index) => (
            <Box display="grid" gridTemplateColumns="2fr 2fr 1fr 1fr 1fr 2fr 1fr 50px" gap={1} alignItems="center" mb={1} key={index}>
              <FormControl fullWidth>
                <Select
                  value={item.itemDetails}
                  onChange={(e) => handleRowChange(index, "itemDetails", e.target.value)}
                  displayEmpty
                >
                  <MenuItem value="">
                    <em>Select Item</em>
                  </MenuItem>
                  <MenuItem value="Item A">Item A</MenuItem>
                  <MenuItem value="Item B">Item B</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <Select
                  value={item.account}
                  onChange={(e) => handleRowChange(index, "account", e.target.value)}
                  displayEmpty
                >
                  <MenuItem value="">
                    <em>Select Account</em>
                  </MenuItem>
                  <MenuItem value="Account A">Account A</MenuItem>
                  <MenuItem value="Account B">Account B</MenuItem>
                </Select>
              </FormControl>
              <TextField
                type="number"
                value={item.quantity}
                onChange={(e) => handleRowChange(index, "quantity", parseFloat(e.target.value) || 0)}
                placeholder="Quantity"
                fullWidth
              />
              <TextField
                type="number"
                value={item.rate}
                onChange={(e) => handleRowChange(index, "rate", parseFloat(e.target.value) || 0)}
                placeholder="Rate"
                fullWidth
              />
              {discountType === "item" && (
                <TextField
                  type="number"
                  value={item.discount}
                  onChange={(e) => handleRowChange(index, "discount", parseFloat(e.target.value) || 0)}
                  placeholder="Discount (%)"
                  fullWidth
                />
              )}
              <FormControl fullWidth>
                <Select
                  value={item.customerDetails}
                  onChange={(e) => handleRowChange(index, "customerDetails", e.target.value)}
                  displayEmpty
                >
                  <MenuItem value="">
                    <em>Select Customer</em>
                  </MenuItem>
                  <MenuItem value="Customer A">Customer A</MenuItem>
                  <MenuItem value="Customer B">Customer B</MenuItem>
                </Select>
              </FormControl>
              <Typography>{item.amount.toFixed(2)}</Typography>
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
              value={transactionDiscount}
              onChange={(e) => setTransactionDiscount(parseFloat(e.target.value) || 0)}
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
          <Typography>Total: {calculateTotal().toFixed(2)}</Typography>
        </Box>

        {/* Actions */}
        <Box display="flex" justifyContent="space-between" mt={3}>
          <Button variant="outlined" sx={{ minWidth: "120px" }}>Save as Draft</Button>
          <Box display="flex" gap={2}>
            <Button variant="contained" color="primary" sx={{ minWidth: "120px" }}>Save</Button>
            <Button variant="outlined" color="error" sx={{ minWidth: "120px" }}>Cancel</Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default PurchaseOrders;
