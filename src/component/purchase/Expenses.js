import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  MenuItem,
  Typography,
  Container,
  Select,
  FormControl,
  Checkbox,
} from "@mui/material";

function Expenses() {
  const [activeSection, setActiveSection] = useState(0);
  const [mileageData, setMileageData] = useState({
    date: "",
    employee: "",
    mileageType: "distanceTravelled",
    distance: "",
    amount: "0.00",
    paidThrough: "",
    vendor: "",
    invoice: "",
    notes: "",
    customerName: "",
    project: "",
    reportingTags: "",
  });

  const [expenseData, setExpenseData] = useState({
    date: "",
    expenseAccount: "",
    amount: "",
    paidThrough: "",
    vendor: "",
    invoice: "",
    notes: "",
    customerName: "",
    project: "",
    reportingTags: "",
  });

  const [bulkRows, setBulkRows] = useState([
    {
      date: "",
      expenseAccount: "",
      amount: "",
      paidThrough: "",
      vendor: "",
      customerName: "",
      project: "",
      billable: false,
    },
  ]);

  const handleMileageInputChange = (event) => {
    const { name, value } = event.target;
    setMileageData((prevData) => {
      const updatedData = { ...prevData, [name]: value };

      // Automatically calculate the amount based on distance
      if (name === "distance" && !isNaN(value)) {
        const ratePerKm = 545; // Assume ₹545 per km
        updatedData.amount = (value * ratePerKm).toFixed(2);
      }

      return updatedData;
    });
  };

  const handleExpenseInputChange = (event) => {
    const { name, value } = event.target;
    setExpenseData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleBulkRowChange = (event, index, field) => {
    const { value, type, checked } = event.target;
    setBulkRows((prevRows) =>
      prevRows.map((row, i) =>
        i === index
          ? { ...row, [field]: type === "checkbox" ? checked : value }
          : row
      )
    );
  };

  const addBulkRow = () => {
    setBulkRows((prevRows) => [
      ...prevRows,
      {
        date: "",
        expenseAccount: "",
        amount: "",
        paidThrough: "",
        vendor: "",
        customerName: "",
        project: "",
        billable: false,
      },
    ]);
  };

  const removeBulkRow = (index) => {
    setBulkRows((prevRows) => prevRows.filter((_, i) => i !== index));
  };

  const sections = [
    {
      title: "Record Mileage",
      content: (
        <Box>
          <Typography variant="h4" gutterBottom>
            Record Mileage
          </Typography>
          <form>
            <Box mb={2}>
              <TextField
                label="Date"
                type="date"
                name="date"
                value={mileageData.date}
                onChange={handleMileageInputChange}
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
            </Box>
            <Box mb={2}>
              <FormControl fullWidth>
                <Select
                  name="employee"
                  value={mileageData.employee}
                  onChange={handleMileageInputChange}
                  displayEmpty
                >
                  <MenuItem value="" disabled>
                    <span style={{ color: "grey" }}>Select an Employee</span>
                  </MenuItem>
                  <MenuItem value="employee1">Employee 1</MenuItem>
                  <MenuItem value="employee2">Employee 2</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box mb={2}>
              <Typography>Calculate mileage using:</Typography>
              <Box display="flex" alignItems="center" gap={2}>
                <label>
                  <input
                    type="radio"
                    name="mileageType"
                    value="distanceTravelled"
                    checked={mileageData.mileageType === "distanceTravelled"}
                    onChange={handleMileageInputChange}
                  />
                  Distance travelled
                </label>
                <label>
                  <input
                    type="radio"
                    name="mileageType"
                    value="odometerReading"
                    checked={mileageData.mileageType === "odometerReading"}
                    onChange={handleMileageInputChange}
                  />
                  Odometer reading
                </label>
              </Box>
            </Box>
            <Box mb={2}>
              <TextField
                label="Distance"
                name="distance"
                type="number"
                value={mileageData.distance}
                onChange={handleMileageInputChange}
                fullWidth
                InputProps={{
                  endAdornment: <Typography>Km</Typography>,
                }}
              />
            </Box>
            <Box mb={2}>
              <Typography>Rate per km = ₹545.00</Typography>
              <TextField
                label="Amount"
                name="amount"
                type="text"
                value={mileageData.amount}
                disabled
                fullWidth
              />
            </Box>
            <Box mb={2}>
              <FormControl fullWidth>
                <Select
                  name="paidThrough"
                  value={mileageData.paidThrough}
                  onChange={handleMileageInputChange}
                  displayEmpty
                >
                  <MenuItem value="" disabled>
                    <span style={{ color: "grey" }}>Paid Through</span>
                  </MenuItem>
                  <MenuItem value="bank">Bank</MenuItem>
                  <MenuItem value="cash">Cash</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box mb={2}>
              <FormControl fullWidth>
                <Select
                  name="vendor"
                  value={mileageData.vendor}
                  onChange={handleMileageInputChange}
                  displayEmpty
                >
                  <MenuItem value="" disabled>
                    <span style={{ color: "grey" }}>Vendor</span>
                  </MenuItem>
                  <MenuItem value="vendor1">Vendor 1</MenuItem>
                  <MenuItem value="vendor2">Vendor 2</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box mb={2}>
              <TextField
                label="Invoice#"
                name="invoice"
                value={mileageData.invoice}
                onChange={handleMileageInputChange}
                fullWidth
              />
            </Box>
            <Box mb={2}>
              <TextField
                label="Notes"
                name="notes"
                multiline
                rows={4}
                value={mileageData.notes}
                onChange={handleMileageInputChange}
                fullWidth
              />
            </Box>
            <Box mb={2}>
              <FormControl fullWidth>
                <Select
                  name="customerName"
                  value={mileageData.customerName}
                  onChange={handleMileageInputChange}
                  displayEmpty
                >
                  <MenuItem value="" disabled>
                    <span style={{ color: "grey" }}>Customer Name</span>
                  </MenuItem>
                  <MenuItem value="customer1">Customer 1</MenuItem>
                  <MenuItem value="customer2">Customer 2</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box mb={2}>
              <FormControl fullWidth>
                <Select
                  name="project"
                  value={mileageData.project}
                  onChange={handleMileageInputChange}
                  displayEmpty
                >
                  <MenuItem value="" disabled>
                    <span style={{ color: "grey" }}>Project</span>
                  </MenuItem>
                  <MenuItem value="project1">Project 1</MenuItem>
                  <MenuItem value="project2">Project 2</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Button variant="contained" color="primary">
                Save
              </Button>
              <Button variant="outlined" color="primary">
                Save and New
              </Button>
              <Button variant="text" color="error">
                Cancel
              </Button>
            </Box>
          </form>
        </Box>
      ),
    },
    {
      title: "Record Expense",
      content: (
        <Box>
          <Typography variant="h4" gutterBottom>
            Record Expense
          </Typography>
          <form>
            <Box mb={2}>
              <TextField
                label="Date"
                type="date"
                name="date"
                value={expenseData.date}
                onChange={handleExpenseInputChange}
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
            </Box>
            <Box mb={2}>
              <FormControl fullWidth>
                <Select
                  name="expenseAccount"
                  value={expenseData.expenseAccount}
                  onChange={handleExpenseInputChange}
                  displayEmpty
                >
                  <MenuItem value="" disabled>
                    <span style={{ color: "grey" }}>Expense Account</span>
                  </MenuItem>
                  <MenuItem value="account1">Account 1</MenuItem>
                  <MenuItem value="account2">Account 2</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box mb={2}>
              <TextField
                label="Amount"
                name="amount"
                type="number"
                value={expenseData.amount}
                onChange={handleExpenseInputChange}
                fullWidth
              />
            </Box>
            <Box mb={2}>
              <FormControl fullWidth>
                <Select
                  name="paidThrough"
                  value={expenseData.paidThrough}
                  onChange={handleExpenseInputChange}
                  displayEmpty
                >
                  <MenuItem value="" disabled>
                    <span style={{ color: "grey" }}>Paid Through</span>
                  </MenuItem>
                  <MenuItem value="bank">Bank</MenuItem>
                  <MenuItem value="cash">Cash</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box mb={2}>
              <TextField
                label="Vendor"
                name="vendor"
                value={expenseData.vendor}
                onChange={handleExpenseInputChange}
                fullWidth
              />
            </Box>
            <Box mb={2}>
              <TextField
                label="Invoice#"
                name="invoice"
                value={expenseData.invoice}
                onChange={handleExpenseInputChange}
                fullWidth
              />
            </Box>
            <Box mb={2}>
              <TextField
                label="Notes"
                name="notes"
                multiline
                rows={4}
                value={expenseData.notes}
                onChange={handleExpenseInputChange}
                fullWidth
              />
            </Box>
            <Box mb={2}>
              <FormControl fullWidth>
                <Select
                  name="customerName"
                  value={expenseData.customerName}
                  onChange={handleExpenseInputChange}
                  displayEmpty
                >
                  <MenuItem value="" disabled>
                    <span style={{ color: "grey" }}>Customer Name</span>
                  </MenuItem>
                  <MenuItem value="customer1">Customer 1</MenuItem>
                  <MenuItem value="customer2">Customer 2</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box mb={2}>
              <FormControl fullWidth>
                <Select
                  name="project"
                  value={expenseData.project}
                  onChange={handleExpenseInputChange}
                  displayEmpty
                >
                  <MenuItem value="" disabled>
                    <span style={{ color: "grey" }}>Project</span>
                  </MenuItem>
                  <MenuItem value="project1">Project 1</MenuItem>
                  <MenuItem value="project2">Project 2</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Button variant="contained" color="primary">
                Save
              </Button>
              <Button variant="outlined" color="primary">
                Save and New
              </Button>
              <Button variant="text" color="error">
                Cancel
              </Button>
            </Box>
          </form>
        </Box>
      ),
    },
    {
      title: "Bulk Add Expenses",
      content: (
        <Box>
          <Typography variant="h4" gutterBottom>
            Bulk Add Expenses
          </Typography>
          <form>
            <Box sx={{ overflowX: "auto", mb: 2 }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={{ padding: "8px", textAlign: "left" }}>Date*</th>
                    <th style={{ padding: "8px", textAlign: "left" }}>Expense Account*</th>
                    <th style={{ padding: "8px", textAlign: "left" }}>Amount*</th>
                    <th style={{ padding: "8px", textAlign: "left" }}>Paid Through*</th>
                    <th style={{ padding: "8px", textAlign: "left" }}>Vendor</th>
                    <th style={{ padding: "8px", textAlign: "left" }}>Customer Name</th>
                    <th style={{ padding: "8px", textAlign: "left" }}>Project</th>
                    <th style={{ padding: "8px", textAlign: "center" }}>Billable</th>
                    <th style={{ padding: "8px", textAlign: "center" }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {bulkRows.map((row, index) => (
                    <tr key={index}>
                      <td>
                        <TextField
                          type="date"
                          value={row.date}
                          onChange={(e) => handleBulkRowChange(e, index, "date")}
                          fullWidth
                        />
                      </td>
                      <td>
                        <FormControl fullWidth>
                          <Select
                            value={row.expenseAccount}
                            onChange={(e) => handleBulkRowChange(e, index, "expenseAccount")}
                            displayEmpty
                          >
                            <MenuItem value="">
                              <em>Select an account</em>
                            </MenuItem>
                            <MenuItem value="account1">Account 1</MenuItem>
                            <MenuItem value="account2">Account 2</MenuItem>
                          </Select>
                        </FormControl>
                      </td>
                      <td>
                        <TextField
                          type="number"
                          value={row.amount}
                          onChange={(e) => handleBulkRowChange(e, index, "amount")}
                          fullWidth
                        />
                      </td>
                      <td>
                        <FormControl fullWidth>
                          <Select
                            value={row.paidThrough}
                            onChange={(e) => handleBulkRowChange(e, index, "paidThrough")}
                            displayEmpty
                          >
                            <MenuItem value="">
                              <em>Select an account</em>
                            </MenuItem>
                            <MenuItem value="cash">Cash</MenuItem>
                            <MenuItem value="bank">Bank</MenuItem>
                          </Select>
                        </FormControl>
                      </td>
                      <td>
                        <TextField
                          value={row.vendor}
                          onChange={(e) => handleBulkRowChange(e, index, "vendor")}
                          fullWidth
                        />
                      </td>
                      <td>
                        <FormControl fullWidth>
                          <Select
                            value={row.customerName}
                            onChange={(e) => handleBulkRowChange(e, index, "customerName")}
                            displayEmpty
                          >
                            <MenuItem value="">
                              <em>Select a customer</em>
                            </MenuItem>
                            <MenuItem value="customer1">Customer 1</MenuItem>
                            <MenuItem value="customer2">Customer 2</MenuItem>
                          </Select>
                        </FormControl>
                      </td>
                      <td>
                        <FormControl fullWidth>
                          <Select
                            value={row.project}
                            onChange={(e) => handleBulkRowChange(e, index, "project")}
                            displayEmpty
                          >
                            <MenuItem value="">
                              <em>Select a project</em>
                            </MenuItem>
                          </Select>
                        </FormControl>
                      </td>
                      <td align="center">
                        <Checkbox
                          checked={row.billable}
                          onChange={(e) => handleBulkRowChange(e, index, "billable")}
                        />
                      </td>
                      <td align="center">
                        <Button
                          variant="text"
                          color="error"
                          onClick={() => removeBulkRow(index)}
                        >
                          Remove
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Box>
            <Button variant="contained" color="primary" onClick={addBulkRow}>
              Add More Expenses
            </Button>
          </form>
        </Box>
      ),
    },
  ];

  return (
    <div className="h-full overflow-y-auto">
          <Container sx={{ marginLeft: "0px" }}>
      <Box my={3}>
        {sections.map((section, index) => (
          <Button
            key={index}
            onClick={() => setActiveSection(index)}
            variant={activeSection === index ? "outlined" : "contained"}
          >
            {section.title}
          </Button>
        ))}
      </Box>
      <Box mt={3} p={3} border={1} borderColor="grey.300" borderRadius={2}>
        {sections[activeSection].content}
      </Box>
    </Container>
    </div>

  );
}

export default Expenses;
