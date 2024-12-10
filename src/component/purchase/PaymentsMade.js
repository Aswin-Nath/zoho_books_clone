import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography, TextField, Button, MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function PaymentsMade() {
  const [activeTab, setActiveTab] = useState(0); // Default to the first tab
  const [selectedVendor, setSelectedVendor] = useState(''); // Vendor selection
  const [formData, setFormData] = useState({
    paymentNumber: '',
    paymentMade: '',
    paymentDate: '',
    paymentMode: '',
    paidThrough: '',
    reference: '',
    notes: ''
  });

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleVendorChange = (event) => {
    setSelectedVendor(event.target.value);
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const calculateExcessAmount = () => {
    const payment = parseFloat(formData.paymentMade) || 0;
    return payment - 0; // Assuming no bills, all payment is excess
  };

  return (
    <Box sx={{ width: '100%' }}>
      {/* Vendor Dropdown */}
      <Box sx={{ padding: 2 }}>
        <TextField
          select
          fullWidth
          label="Select Vendor"
          value={selectedVendor}
          onChange={handleVendorChange}
          margin="normal"
        >
          <MenuItem value="Mr. yapper">Mr. yapper</MenuItem>
          <MenuItem value="Vendor A">Vendor A</MenuItem>
          <MenuItem value="Vendor B">Vendor B</MenuItem>
        </TextField>
      </Box>

      {/* Tabs Header */}
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        aria-label="Payments Tabs"
        centered
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="Bill Payment" />
        <Tab label="Vendor Advance" />
      </Tabs>

      {/* Tabs Content */}
      <Box sx={{ padding: 2 }}>
        {activeTab === 0 && selectedVendor && (
          <Box>
            <Typography variant="h6">Bill Payment</Typography>
            <Box sx={{ marginTop: 2 }}>
              <TextField
                sx={{ width: '50%' }}
                required
                label="Vendor Name"
                value={selectedVendor}
                margin="normal"
                disabled
              />
              <TextField
                sx={{ width: '50%' }}
                required
                label="Payment #"
                value={formData.paymentNumber}
                onChange={(e) => handleInputChange('paymentNumber', e.target.value)}
                margin="normal"
              />
              <TextField
                select
                sx={{ width: '50%' }}
                required
                label="Payment Made"
                value={formData.paymentMade}
                onChange={(e) => handleInputChange('paymentMade', e.target.value)}
                margin="normal"
              >
                <MenuItem value="100">100</MenuItem>
                <MenuItem value="500">500</MenuItem>
                <MenuItem value="1000">1000</MenuItem>
              </TextField>
              <Typography variant="body2" color="textSecondary" marginY={2}>
                💡 Initiate payments for your bills directly from Zoho Books by integrating with one of our partner banks. Set up Now
              </Typography>
              <TextField
                sx={{ width: '50%' }}
                required
                label="Payment Date"
                value={formData.paymentDate}
                onChange={(e) => handleInputChange('paymentDate', e.target.value)}
                margin="normal"
              />
              <TextField
                select
                sx={{ width: '50%' }}
                required
                label="Payment Mode"
                value={formData.paymentMode}
                onChange={(e) => handleInputChange('paymentMode', e.target.value)}
                margin="normal"
              >
                <MenuItem value="Cash">Cash</MenuItem>
                <MenuItem value="Bank Transfer">Bank Transfer</MenuItem>
              </TextField>
              <TextField
                select
                sx={{ width: '50%' }}
                required
                label="Paid Through"
                value={formData.paidThrough}
                onChange={(e) => handleInputChange('paidThrough', e.target.value)}
                margin="normal"
              >
                <MenuItem value="Petty Cash">Petty Cash</MenuItem>
                <MenuItem value="Corporate Account">Corporate Account</MenuItem>
              </TextField>
              <TextField
                sx={{ width: '50%' }}
                label="Reference #"
                value={formData.reference}
                onChange={(e) => handleInputChange('reference', e.target.value)}
                margin="normal"
              />

              {/* Summary Box */}
              <Box
                sx={{
                  marginTop: 2,
                  padding: 2,
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  backgroundColor: '#f9f9f9'
                }}
              >
                <Typography variant="body1">Total: 0.00</Typography>
                <Typography variant="body1">Amount Paid: {formData.paymentMade || '0.00'}</Typography>
                <Typography variant="body1">Amount Used for Payments: 0.00</Typography>
                <Typography variant="body1">Amount Refunded: 0.00</Typography>
                <Typography variant="body1">Amount in Excess: ₹{calculateExcessAmount().toFixed(2)}</Typography>
              </Box>

              {/* Table for Bills */}
              <TableContainer component={Paper} sx={{ marginTop: 2 }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Date</TableCell>
                      <TableCell>Bill#</TableCell>
                      <TableCell>PO#</TableCell>
                      <TableCell>Bill Amount</TableCell>
                      <TableCell>Amount Due</TableCell>
                      <TableCell>Payment</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell colSpan={6} align="center">
                        {formData.paymentMade ? `Displaying bills for ₹${formData.paymentMade}` : 'There are no bills for this vendor.'}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>

              <TextField
                fullWidth
                multiline
                rows={3}
                label="Notes (Internal use. Not visible to vendor)"
                value={formData.notes}
                onChange={(e) => handleInputChange('notes', e.target.value)}
                margin="normal"
              />
              <Button
                variant="outlined"
                component="label"
                sx={{ marginTop: 2 }}
              >
                Upload File
                <input type="file" hidden />
              </Button>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
                <Button variant="contained" color="primary" sx={{ marginRight: 1 }}>
                  Save
                </Button>
                <Button variant="outlined" color="secondary">
                  Cancel
                </Button>
              </Box>
            </Box>
          </Box>
        )}
        {activeTab === 1 && selectedVendor && (
          <Box>
            <Typography variant="h6">Vendor Advance</Typography>
            <Box sx={{ marginTop: 2 }}>
              <TextField
                sx={{ width: '50%' }}
                required
                label="Vendor Name"
                value={selectedVendor}
                margin="normal"
                disabled
              />

              <TextField
                sx={{ width: '50%' }}
                required
                label="Payment #"
                value={formData.paymentNumber}
                onChange={(e) => handleInputChange('paymentNumber', e.target.value)}
                margin="normal"
              />

              <TextField
                select
                sx={{ width: '50%' }}
                required
                label="Payment Made"
                value={formData.paymentMade}
                onChange={(e) => handleInputChange('paymentMade', e.target.value)}
                margin="normal"
              >

                <MenuItem value="100">100</MenuItem>
                <MenuItem value="500">500</MenuItem>
                <MenuItem value="1000">1000</MenuItem>
                
              </TextField>
              <Typography variant="body2" color="textSecondary" marginY={2}>
                💡 Initiate payments for your bills directly from Zoho Books by integrating with one of our partner banks. Set up Now
              </Typography>
              <TextField
                select
                sx={{ width: '50%' }}
                required
                label="TDS"
                value={formData.tds}
                onChange={(e) => handleInputChange('tds', e.target.value)}
                margin="normal"
              >
                <MenuItem value="5%">5%</MenuItem>
                <MenuItem value="10%">10%</MenuItem>
                <MenuItem value="15%">15%</MenuItem>
              </TextField>
              <TextField
                sx={{ width: '50%' }}
                required
                label="Payment Date"
                value={formData.paymentDate}
                onChange={(e) => handleInputChange('paymentDate', e.target.value)}
                margin="normal"
              />
              <TextField
                select
                sx={{ width: '50%' }}
                required
                label="Payment Mode"
                value={formData.paymentMode}
                onChange={(e) => handleInputChange('paymentMode', e.target.value)}
                margin="normal"
              >
                <MenuItem value="Cash">Cash</MenuItem>
                <MenuItem value="Bank Transfer">Bank Transfer</MenuItem>
              </TextField>
              <TextField
                select
                sx={{ width: '50%' }}
                required
                label="Paid Through"
                value={formData.paidThrough}
                onChange={(e) => handleInputChange('paidThrough', e.target.value)}
                margin="normal"
              >
                <MenuItem value="Petty Cash">Petty Cash</MenuItem>
                <MenuItem value="Corporate Account">Corporate Account</MenuItem>
              </TextField>
              <TextField
                select
                sx={{ width: '50%' }}
                required
                label="Deposit To"
                value={formData.depositTo}
                onChange={(e) => handleInputChange('depositTo', e.target.value)}
                margin="normal"
              >
                <MenuItem value="Prepaid Expenses">Prepaid Expenses</MenuItem>
                <MenuItem value="Accrued Income">Accrued Income</MenuItem>
              </TextField>
              <TextField
                sx={{ width: '50%' }}
                label="Reference #"
                value={formData.reference}
                onChange={(e) => handleInputChange('reference', e.target.value)}
                margin="normal"
              />

              <TextField
                fullWidth
                multiline
                rows={3}
                label="Notes (Internal use. Not visible to vendor)"
                value={formData.notes}
                onChange={(e) => handleInputChange('notes', e.target.value)}
                margin="normal"
              />
              <Button
                variant="outlined"
                component="label"
                sx={{ marginTop: 2 }}
              >
                Upload File
                <input type="file" hidden />
              </Button>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
                <Button variant="contained" color="primary" sx={{ marginRight: 1 }}>
                  Save
                </Button>
                <Button variant="outlined" color="secondary">
                  Cancel
                </Button>
              </Box>
            </Box>
          </Box>
        )}
        {!selectedVendor && (
          <Typography variant="body1" color="textSecondary">
            Please select a vendor to display content.
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default PaymentsMade;
