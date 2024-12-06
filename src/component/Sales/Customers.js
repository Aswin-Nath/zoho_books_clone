import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Grid,
  Select,
  MenuItem,
  Button,
  Tabs,
  Tab,
  Checkbox,InputAdornment
} from "@mui/material";

function Customers() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 0: // Other Details
      return (
        <Box sx={{ p: 3 }}>
          <Typography variant="body1" sx={{ mb: -1 }}>
            PAN
          </Typography>
          <TextField variant="outlined" fullWidth margin="normal" size="small" />
      
          <Typography variant="body1" sx={{ mb: -1 }}>
            Currency
          </Typography>
          <FormControl fullWidth margin="normal" size="small">
            <Select defaultValue="INR">
              <MenuItem value="INR">INR - Indian Rupee</MenuItem>
              <MenuItem value="USD">USD - US Dollar</MenuItem>
            </Select>
          </FormControl>
      
          <Typography variant="body1" sx={{ mb:-1 }}>
            Opening Balance
          </Typography>
          <TextField variant="outlined" fullWidth margin="normal" size="small" />
      
          <Typography variant="body1" sx={{ mb: -2 }}>
            Payment Terms
          </Typography>
          <FormControl fullWidth margin="normal" size="small">
            {/* <InputLabel>Payment Terms</InputLabel> */}
            <Select defaultValue="Due On Receipt">
              <MenuItem value="Due On Receipt">Due On Receipt</MenuItem>
            </Select>
          </FormControl>
      
          <Typography variant="body1" sx={{ mb: 1 }}>
            Enable Portal?
          </Typography>
          <FormControlLabel
            control={<Checkbox />}
            label="Allow portal access for this customer"
            sx={{ marginBottom: 2 }}
          />
      
          <Typography variant="body1" sx={{ mb: -1 }}>
            Portal Language
          </Typography>
          <FormControl fullWidth margin="normal" size="small">
            <Select defaultValue="English">
              <MenuItem value="English">English</MenuItem>
            </Select>
          </FormControl>
      
          <Typography variant="body1" sx={{ mb: 1 }}>
            Documents
          </Typography>
          <Button variant="contained" component="label" size="small">
            Upload Documents
            <input type="file" hidden multiple />
          </Button>
        </Box>
      );
      
      case 1: // Address
        return (
          <Box sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Billing Address
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField label="Attention" variant="outlined" fullWidth size="small" />
              </Grid>
              <Grid item xs={6}>
                <TextField label="Country/Region" variant="outlined" fullWidth size="small" />
              </Grid>
              <Grid item xs={6}>
                <TextField label="Street 1" variant="outlined" fullWidth size="small" />
              </Grid>
              <Grid item xs={6}>
                <TextField label="Street 2" variant="outlined" fullWidth size="small" />
              </Grid>
              <Grid item xs={4}>
                <TextField label="City" variant="outlined" fullWidth size="small" />
              </Grid>
              <Grid item xs={4}>
                <TextField label="State" variant="outlined" fullWidth size="small" />
              </Grid>
              <Grid item xs={4}>
                <TextField label="Pin Code" variant="outlined" fullWidth size="small" />
              </Grid>
            </Grid>

            <Typography variant="h6" sx={{ mt: 3 }} gutterBottom>
              Shipping Address
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField label="Attention" variant="outlined" fullWidth size="small" />
              </Grid>
              <Grid item xs={6}>
                <TextField label="Country/Region" variant="outlined" fullWidth size="small" />
              </Grid>
              <Grid item xs={6}>
                <TextField label="Street 1" variant="outlined" fullWidth size="small" />
              </Grid>
              <Grid item xs={6}>
                <TextField label="Street 2" variant="outlined" fullWidth size="small" />
              </Grid>
              <Grid item xs={4}>
                <TextField label="City" variant="outlined" fullWidth size="small" />
              </Grid>
              <Grid item xs={4}>
                <TextField label="State" variant="outlined" fullWidth size="small" />
              </Grid>
              <Grid item xs={4}>
                <TextField label="Pin Code" variant="outlined" fullWidth size="small" />
              </Grid>
            </Grid>
          </Box>
        );
      case 2: // Contact Persons
        return (
          <Box sx={{ p: 3 }}>
            <Button variant="contained" size="small" sx={{ mb: 2 }}>
              Add Contact Person
            </Button>
            <table style={{ width: "100%", border: "1px solid #ccc" }}>
              <thead>
                <tr>
                  <th>Salutation</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email Address</th>
                  <th>Work Phone</th>
                  <th>Mobile</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mr.</td>
                  <td>John</td>
                  <td>Doe</td>
                  <td>john@example.com</td>
                  <td>123-456-7890</td>
                  <td>987-654-3210</td>
                </tr>
              </tbody>
            </table>
          </Box>
        );
      case 3: // Custom Fields
        return <Box sx={{ p: 3 }}>Custom Fields Content</Box>;
      case 4: // Reporting Tags
        return <Box sx={{ p: 3 }}>Reporting Tags Content</Box>;
      case 5: // Remarks
        return <Box sx={{ p: 3 }}>Remarks Content</Box>;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ p: 3, maxWidth: 800, margin: "0 auto" }}>
      <Typography variant="h5" sx={{ mb: 3 }}>
        New Customer
      </Typography>

      <FormControl component="fieldset" sx={{ mb: 3, width: "100%" }}>
        <FormLabel component="legend">Customer Type</FormLabel>
        <RadioGroup row defaultValue="Business">
          <FormControlLabel
            value="Business"
            control={<Radio />}
            label="Business"
          />
          <FormControlLabel
            value="Individual"
            control={<Radio />}
            label="Individual"
          />
        </RadioGroup>
      </FormControl>

      <Grid container spacing={2}>
        {/* Primary Contact */}
        <Grid item xs={12} md={3}>
          <TextField
            label="Salutation"
            variant="outlined"
            fullWidth
            size="small"
            select
          >
            <MenuItem value="Mr.">Mr.</MenuItem>
            <MenuItem value="Ms.">Ms.</MenuItem>
            <MenuItem value="Mrs.">Mrs.</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            size="small"
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
            size="small"
          />
        </Grid>

        {/* Company Name */}
        <Grid item xs={12}>
          <TextField
            label="Company Name"
            variant="outlined"
            fullWidth
            size="small"
          />
        </Grid>

        {/* Display Name */}
        <Grid item xs={12}>
          <TextField
            label="Display Name *"
            variant="outlined"
            fullWidth
            size="small"
          />
        </Grid>

        {/* Email Address */}
        <Grid item xs={12}>
          <TextField
            label="Email Address"
            variant="outlined"
            fullWidth
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <span>📧</span>
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        {/* Phone Numbers */}
        <Grid item xs={12} md={6}>
          <TextField
            label="Work Phone"
            variant="outlined"
            fullWidth
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <span>📞</span>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Mobile"
            variant="outlined"
            fullWidth
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <span>📱</span>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
          <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end", gap: 2 }}>
            <Button variant="contained" color="primary">
              Save
            </Button>
            <Button variant="outlined" color="secondary">
              Cancel
            </Button>
          </Box>
    </Box>

      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        variant="scrollable"
        scrollButtons="auto"
      >
        <Tab label="Other Details" />
        <Tab label="Address" />
        <Tab label="Contact Persons" />
        <Tab label="Custom Fields" />
        <Tab label="Reporting Tags" />
        <Tab label="Remarks" />
      </Tabs>

      <Box sx={{ p: 3 }}>

      <Box>{renderTabContent()}</Box>
      <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end", gap: 2 }}>
        <Button variant="contained" color="primary">
          Save
        </Button>
        <Button variant="outlined" color="secondary">
          Cancel
        </Button>
      </Box>
    </Box>

    </Box>
  );
}

export default Customers;
