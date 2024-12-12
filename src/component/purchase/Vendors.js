import React, { useState } from "react";
import {
  TextField,
  Checkbox,
  Button,
  FormControlLabel,
  Container,
  Grid,
  Typography,
  MenuItem,
  Tabs,
  Tab,
  Box,
  Card,
} from "@mui/material";

function Vendors() {
  const [vendor, setVendor] = useState({
    salutation: "",
    firstName: "",
    lastName: "",
    companyName: "",
    displayName: "",
    email: "",
    phoneWork: "",
    phoneMobile: "",
    pan: "",
    isMSME: false,
    currency: "",
    openingBalance: "",
    paymentTerms: "",
    tds: "",
    billingAddress: {
      attention: "",
      country: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      pinCode: "",
      phone: "",
      fax: "",
    },
    shippingAddress: {
      attention: "",
      country: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      pinCode: "",
      phone: "",
      fax: "",
    },
    contactPersons: [],
    bankDetails: {
      accountName: "",
      accountNumber: "",
      bankName: "",
      branch: "",
      ifsc: "",
    },
    remarks: "",
    customFields: [],
    reportingTags: [],
  });
  const [tabIndex, setTabIndex] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVendor({ ...vendor, [name]: value });
  };

  const handleAddressChange = (e, addressType) => {
    const { name, value } = e.target;
    setVendor({
      ...vendor,
      [addressType]: {
        ...vendor[addressType],
        [name]: value,
      },
    });
  };

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Vendor added:", vendor);
  };

  const renderTabContent = () => {
    switch (tabIndex) {
      case 0:
        return (
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={4}>
              <TextField
                label="PAN"
                name="pan"
                value={vendor.pan}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="isMSME"
                    checked={vendor.isMSME}
                    onChange={(e) =>
                      setVendor({ ...vendor, isMSME: e.target.checked })
                    }
                  />
                }
                label="MSME Registered"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                select
                label="Currency"
                name="currency"
                value={vendor.currency}
                onChange={handleInputChange}
                fullWidth
              >
                <MenuItem value="INR">INR - Indian Rupee</MenuItem>
                <MenuItem value="USD">USD - US Dollar</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Opening Balance"
                name="openingBalance"
                value={vendor.openingBalance}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                select
                label="Payment Terms"
                name="paymentTerms"
                value={vendor.paymentTerms}
                onChange={handleInputChange}
                fullWidth
              >
                <MenuItem value="Due On Receipt">Due On Receipt</MenuItem>
                <MenuItem value="Net 15">Net 15</MenuItem>
                <MenuItem value="Net 30">Net 30</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                select
                label="TDS"
                name="tds"
                value={vendor.tds}
                onChange={handleInputChange}
                fullWidth
              >
                <MenuItem value="No TDS">No TDS</MenuItem>
                <MenuItem value="5%">5%</MenuItem>
                <MenuItem value="10%">10%</MenuItem>
              </TextField>
            </Grid>
          </Grid>
        );
      case 1:
        return (
          <Grid container spacing={2} alignItems="flex-start">
            <Grid item xs={12} sm={6}>
              <Card sx={{ padding: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Billing Address
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Attention"
                      name="attention"
                      value={vendor.billingAddress.attention}
                      onChange={(e) => handleAddressChange(e, "billingAddress")}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      select
                      label="Country / Region"
                      name="country"
                      value={vendor.billingAddress.country}
                      onChange={(e) => handleAddressChange(e, "billingAddress")}
                      fullWidth
                    >
                      <MenuItem value="India">India</MenuItem>
                      <MenuItem value="USA">USA</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Address 1"
                      name="address1"
                      value={vendor.billingAddress.address1}
                      onChange={(e) => handleAddressChange(e, "billingAddress")}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Address 2"
                      name="address2"
                      value={vendor.billingAddress.address2}
                      onChange={(e) => handleAddressChange(e, "billingAddress")}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="City"
                      name="city"
                      value={vendor.billingAddress.city}
                      onChange={(e) => handleAddressChange(e, "billingAddress")}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      select
                      label="State"
                      name="state"
                      value={vendor.billingAddress.state}
                      onChange={(e) => handleAddressChange(e, "billingAddress")}
                      fullWidth
                    >
                      <MenuItem value="Karnataka">Karnataka</MenuItem>
                      <MenuItem value="California">California</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Pin Code"
                      name="pinCode"
                      value={vendor.billingAddress.pinCode}
                      onChange={(e) => handleAddressChange(e, "billingAddress")}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Phone"
                      name="phone"
                      value={vendor.billingAddress.phone}
                      onChange={(e) => handleAddressChange(e, "billingAddress")}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Fax"
                      name="fax"
                      value={vendor.billingAddress.fax}
                      onChange={(e) => handleAddressChange(e, "billingAddress")}
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card sx={{ padding: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Shipping Address
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Attention"
                      name="attention"
                      value={vendor.shippingAddress.attention}
                      onChange={(e) =>
                        handleAddressChange(e, "shippingAddress")
                      }
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      select
                      label="Country / Region"
                      name="country"
                      value={vendor.shippingAddress.country}
                      onChange={(e) =>
                        handleAddressChange(e, "shippingAddress")
                      }
                      fullWidth
                    >
                      <MenuItem value="India">India</MenuItem>
                      <MenuItem value="USA">USA</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Address 1"
                      name="address1"
                      value={vendor.shippingAddress.address1}
                      onChange={(e) =>
                        handleAddressChange(e, "shippingAddress")
                      }
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Address 2"
                      name="address2"
                      value={vendor.shippingAddress.address2}
                      onChange={(e) =>
                        handleAddressChange(e, "shippingAddress")
                      }
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="City"
                      name="city"
                      value={vendor.shippingAddress.city}
                      onChange={(e) =>
                        handleAddressChange(e, "shippingAddress")
                      }
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      select
                      label="State"
                      name="state"
                      value={vendor.shippingAddress.state}
                      onChange={(e) =>
                        handleAddressChange(e, "shippingAddress")
                      }
                      fullWidth
                    >
                      <MenuItem value="Karnataka">Karnataka</MenuItem>
                      <MenuItem value="California">California</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Pin Code"
                      name="pinCode"
                      value={vendor.shippingAddress.pinCode}
                      onChange={(e) =>
                        handleAddressChange(e, "shippingAddress")
                      }
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Phone"
                      name="phone"
                      value={vendor.shippingAddress.phone}
                      onChange={(e) =>
                        handleAddressChange(e, "shippingAddress")
                      }
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Fax"
                      name="fax"
                      value={vendor.shippingAddress.fax}
                      onChange={(e) =>
                        handleAddressChange(e, "shippingAddress")
                      }
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        );
      case 2:
        return (
          <Card sx={{ padding: 2, marginBottom: 2 }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={2}>
                <TextField
                  label="Salutation"
                  name="contactSalutation"
                  fullWidth
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  label="First Name"
                  name="contactFirstName"
                  fullWidth
                />
              </Grid>
              <Grid item xs={2}>
                <TextField label="Last Name" name="contactLastName" fullWidth />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  label="Email Address"
                  name="contactEmail"
                  fullWidth
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  label="Work Phone"
                  name="contactWorkPhone"
                  fullWidth
                />
              </Grid>
              <Grid item xs={2}>
                <TextField label="Mobile" name="contactMobile" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <Button variant="outlined" color="primary">
                  Add Contact Person
                </Button>
              </Grid>
            </Grid>
          </Card>
        );
      case 3:
        return (
          <Card sx={{ padding: 2, marginBottom: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Account Name"
                  name="accountName"
                  value={vendor.bankDetails.accountName}
                  onChange={handleInputChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Account Number"
                  name="accountNumber"
                  value={vendor.bankDetails.accountNumber}
                  onChange={handleInputChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Bank Name"
                  name="bankName"
                  value={vendor.bankDetails.bankName}
                  onChange={handleInputChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Branch"
                  name="branch"
                  value={vendor.bankDetails.branch}
                  onChange={handleInputChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="IFSC"
                  name="ifsc"
                  value={vendor.bankDetails.ifsc}
                  onChange={handleInputChange}
                  fullWidth
                />
              </Grid>
            </Grid>
          </Card>
        );
      case 4:
        return (
          <Card sx={{ padding: 2, marginBottom: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Remarks"
                  name="remarks"
                  value={vendor.remarks}
                  onChange={handleInputChange}
                  fullWidth
                  multiline
                  rows={4}
                />
              </Grid>
            </Grid>
          </Card>
        );
      case 5:
        return (
          <Card sx={{ padding: 2, marginBottom: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Custom Field 1"
                  name="customField1"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Custom Field 2"
                  name="customField2"
                  fullWidth
                />
              </Grid>
            </Grid>
          </Card>
        );
      case 6:
        return (
          <Card sx={{ padding: 2, marginBottom: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Reporting Tag 1"
                  name="reportingTag1"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Reporting Tag 2"
                  name="reportingTag2"
                  fullWidth
                />
              </Grid>
            </Grid>
          </Card>
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-full overflow-y-auto">
      <Box sx={{p:4}}>
        <Typography variant="h4" gutterBottom>
          Add New Vendor
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={2}>
              <TextField
                select
                label="Salutation"
                name="salutation"
                value={vendor.salutation}
                onChange={handleInputChange}
                fullWidth
              >
                <MenuItem value="Mr">Mr</MenuItem>
                <MenuItem value="Ms">Ms</MenuItem>
                <MenuItem value="Mrs">Mrs</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={5}>
              <TextField
                label="First Name"
                name="firstName"
                value={vendor.firstName}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <TextField
                label="Last Name"
                name="lastName"
                value={vendor.lastName}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Company Name"
                name="companyName"
                value={vendor.companyName}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Display Name"
                name="displayName"
                value={vendor.displayName}
                onChange={handleInputChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email Address"
                name="email"
                type="email"
                value={vendor.email}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                label="Phone (Work)"
                name="phoneWork"
                value={vendor.phoneWork}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                label="Phone (Mobile)"
                name="phoneMobile"
                value={vendor.phoneMobile}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
          </Grid>

          <Box sx={{ width: "100%", marginTop: 4 }}>
            <Tabs
              value={tabIndex}
              onChange={handleTabChange}
              aria-label="vendor details tabs"
            >
              <Tab label="Other Details" />
              <Tab label="Address" />
              <Tab label="Contact Persons" />
              <Tab label="Bank Details" />
              <Tab label="Remarks" />
              <Tab label="Custom Fields" />
              <Tab label="Reporting Tags" />
            </Tabs>
            <Box sx={{ padding: 3 }}>{renderTabContent()}</Box>
          </Box>

          <Grid item xs={12} sx={{ marginTop: 2 }}>
            <Button type="submit" variant="contained" color="primary">
              Add Vendor
            </Button>
          </Grid>
        </form>
      </Box>
    </div>
  );
}

export default Vendors;

