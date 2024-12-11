import React, { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
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
  const [formData, setFormData] = useState({
    date: "",
    expenseAccount: "",
    amount: "",
    paidThrough: "",
    vendor: "",
    invoice: "",
    notes: "",
    customerName: "",
    reportingTags: "",
  });

  // State to manage rows for Bulk Add Expenses
  const [rows, setRows] = useState([
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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRowChange = (event, index, fieldName) => {
    const { value, type, checked } = event.target;
    setRows((prevRows) =>
      prevRows.map((row, i) =>
        i === index
          ? { ...row, [fieldName]: type === "checkbox" ? checked : value }
          : row
      )
    );
  };

  const addRow = () => {
    setRows((prevRows) => [
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

  const removeRow = (index) => {
    setRows((prevRows) => prevRows.filter((_, i) => i !== index));
  };

  const sections = [
    {
      title: "Record Expense",
      content: (
        <Box>
          <Typography variant="h6" gutterBottom>
            Record Expense
          </Typography>
          <form>
            <Box mb={2}>
              <TextField
                label="Date"
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
            </Box>
            <Box mb={2}>
              <FormControl fullWidth>
                <Select
                  name="expenseAccount"
                  value={formData.expenseAccount}
                  onChange={handleInputChange}
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
                value={formData.amount}
                onChange={handleInputChange}
                fullWidth
              />
            </Box>
            <Box mb={2}>
              <FormControl fullWidth>
                <Select
                  name="paidThrough"
                  value={formData.paidThrough}
                  onChange={handleInputChange}
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
                value={formData.vendor}
                onChange={handleInputChange}
                fullWidth
              />
            </Box>
            <Box mb={2}>
              <TextField
                label="Invoice#"
                name="invoice"
                value={formData.invoice}
                onChange={handleInputChange}
                fullWidth
              />
            </Box>
            <Box mb={2}>
              <TextField
                label="Notes"
                name="notes"
                multiline
                rows={4}
                value={formData.notes}
                onChange={handleInputChange}
                fullWidth
              />
            </Box>
            <Box mb={2}>
              <FormControl fullWidth>
                <Select
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleInputChange}
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
              <TextField
                label="Reporting Tags"
                name="reportingTags"
                value={formData.reportingTags}
                onChange={handleInputChange}
                fullWidth
              />
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
      title: "Record Mileage",
      content: (
        <Box>
          <Typography variant="h6" gutterBottom>
            Record Mileage
          </Typography>
          <Typography>
            Placeholder for "Record Mileage". Replace with actual content.
          </Typography>
        </Box>
      ),
    },
    {
      title: "Bulk Add Expenses",
      content: (
        <Box>
          <Typography variant="h6" gutterBottom>
            Bulk Add Expenses
          </Typography>
          <form>
            <Box sx={{ overflowX: "auto", mb: 2 }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={{ padding: "8px", textAlign: "left" }}>Date*</th>
                    <th style={{ padding: "8px", textAlign: "left" }}>
                      Expense Account*
                    </th>
                    <th style={{ padding: "8px", textAlign: "left" }}>Amount*</th>
                    <th style={{ padding: "8px", textAlign: "left" }}>
                      Paid Through*
                    </th>
                    <th style={{ padding: "8px", textAlign: "left" }}>Vendor</th>
                    <th style={{ padding: "8px", textAlign: "left" }}>
                      Customer Name
                    </th>
                    <th style={{ padding: "8px", textAlign: "left" }}>Projects</th>
                    <th style={{ padding: "8px", textAlign: "center" }}>
                      Billable
                    </th>
                    <th style={{ padding: "8px", textAlign: "center" }}>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, index) => (
                    <tr key={index}>
                      <td>
                        <TextField
                          type="date"
                          value={row.date}
                          onChange={(e) =>
                            handleRowChange(e, index, "date")
                          }
                          fullWidth
                        />
                      </td>
                      <td>
                        <FormControl fullWidth>
                          <Select
                            value={row.expenseAccount}
                            onChange={(e) =>
                              handleRowChange(e, index, "expenseAccount")
                            }
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
                          onChange={(e) =>
                            handleRowChange(e, index, "amount")
                          }
                          fullWidth
                        />
                      </td>
                      <td>
                        <FormControl fullWidth>
                          <Select
                            value={row.paidThrough}
                            onChange={(e) =>
                              handleRowChange(e, index, "paidThrough")
                            }
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
                          onChange={(e) =>
                            handleRowChange(e, index, "vendor")
                          }
                          fullWidth
                        />
                      </td>
                      <td>
                        <FormControl fullWidth>
                          <Select
                            value={row.customerName}
                            onChange={(e) =>
                              handleRowChange(e, index, "customerName")
                            }
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
                        <TextField
                          value={row.project}
                          onChange={(e) =>
                            handleRowChange(e, index, "project")
                          }
                          fullWidth
                        />
                      </td>
                      <td align="center">
                        <Checkbox
                          checked={row.billable}
                          onChange={(e) =>
                            handleRowChange(e, index, "billable")
                          }
                        />
                      </td>
                      <td align="center">
                        <Button
                          variant="text"
                          color="error"
                          onClick={() => removeRow(index)}
                        >
                          Remove
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Box>
            <Button variant="contained" color="primary" onClick={addRow}>
              Add More Expenses
            </Button>
          </form>
        </Box>
      ),
    },
  ];

  return (
    <Container>
      {/* Header with toggle buttons */}
      <Box my={3}>
        <ButtonGroup variant="contained" color="primary">
          {sections.map((section, index) => (
            <Button
              key={index}
              onClick={() => setActiveSection(index)}
              variant={activeSection === index ? "outlined" : "contained"}
            >
              {section.title}
            </Button>
          ))}
        </ButtonGroup>
      </Box>

      <Box mt={3} p={3} border={1} borderColor="grey.300" borderRadius={2}>
        {sections[activeSection].content}
      </Box>
    </Container>
  );
}

export default Expenses;
