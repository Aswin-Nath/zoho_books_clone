import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  Paper,
  Divider,
} from "@mui/material";

function ManualJournal() {
  const [rows, setRows] = useState([
    {
      account: "",
      description: "",
      contact: "",
      debit: 0,
      credit: 0,
    },
  ]);
  const [accounts, setAccounts] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [currency, setCurrency] = useState("");

  useEffect(() => {
    // Simulate fetching account and contact data
    setAccounts(["Cash", "Bank", "Sales", "Purchases"]);
    setContacts(["John Doe", "Jane Smith", "Acme Corp.", "XYZ Ltd."]);
  }, []);

  const addRow = () => {
    setRows([
      ...rows,
      { account: "", description: "", contact: "", debit: 0, credit: 0 },
    ]);
  };

  const deleteRow = (index) => {
    const newRows = rows.filter((_, i) => i !== index);
    setRows(newRows);
  };

  const handleChange = (index, field, value) => {
    const newRows = rows.map((row, i) =>
      i === index ? { ...row, [field]: value } : row,
    );
    setRows(newRows);
  };

  const validateDebitsCredits = () => {
    const totalDebit = rows.reduce((sum, row) => sum + row.debit, 0);
    const totalCredit = rows.reduce((sum, row) => sum + row.credit, 0);
    return totalDebit === totalCredit;
  };

  return (
    <div className="h-full overflow-y-auto">
      <Box sx={{ padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          New Journal
        </Typography>

        <Box sx={{ mb: 2 }}>
          <TextField
            label="Date*"
            type="date"
            InputLabelProps={{ shrink: true }}
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField label="Journal#*" fullWidth sx={{ mb: 2 }} />
          <TextField label="Reference#" fullWidth sx={{ mb: 2 }} />
          <TextField label="Notes*" multiline rows={4} fullWidth />
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
          <Checkbox />
          <Typography>Cash based journal</Typography>
        </Box>

        <FormControl fullWidth sx={{ mb: 2 }}>
          <Select
            displayEmpty
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            renderValue={currency !== "" ? undefined : () => "Select Currency"}
          >
            <MenuItem value="" disabled>
              Select Currency
            </MenuItem>
            <MenuItem value="INR">INR - Indian Rupee</MenuItem>
            <MenuItem value="USD">USD - US Dollar</MenuItem>
            <MenuItem value="EUR">EUR - Euro</MenuItem>
          </Select>
        </FormControl>

        <TableContainer component={Paper} sx={{ mb: 2 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Account</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Contact (INR)</TableCell>
                <TableCell>Debits</TableCell>
                <TableCell>Credits</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <FormControl fullWidth>
                      <Select
                        value={row.account}
                        onChange={(e) =>
                          handleChange(index, "account", e.target.value)
                        }
                      >
                        <MenuItem value="">Select an account</MenuItem>
                        {accounts.map((account, i) => (
                          <MenuItem key={i} value={account}>
                            {account}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </TableCell>
                  <TableCell>
                    <TextField
                      value={row.description}
                      onChange={(e) =>
                        handleChange(index, "description", e.target.value)
                      }
                      fullWidth
                    />
                  </TableCell>
                  <TableCell>
                    <FormControl fullWidth>
                      <Select
                        value={row.contact}
                        onChange={(e) =>
                          handleChange(index, "contact", e.target.value)
                        }
                      >
                        <MenuItem value="">Select Contact</MenuItem>
                        {contacts.map((contact, i) => (
                          <MenuItem key={i} value={contact}>
                            {contact}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </TableCell>
                  <TableCell>
                    <TextField
                      type="number"
                      value={row.debit}
                      onChange={(e) =>
                        handleChange(
                          index,
                          "debit",
                          parseFloat(e.target.value) || 0,
                        )
                      }
                      fullWidth
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      type="number"
                      value={row.credit}
                      onChange={(e) =>
                        handleChange(
                          index,
                          "credit",
                          parseFloat(e.target.value) || 0,
                        )
                      }
                      fullWidth
                    />
                  </TableCell>
                  <TableCell>
                    <Button color="error" onClick={() => deleteRow(index)}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Button
          variant="contained"
          color="primary"
          onClick={addRow}
          sx={{ mb: 2 }}
        >
          Add New Row
        </Button>

        <Divider sx={{ my: 2 }} />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 2,
            mb: 2,
          }}
        >
          <Typography variant="h6">Sub Total:</Typography>
          <Typography variant="h6">
            Debits: {rows.reduce((sum, row) => sum + row.debit, 0)}
          </Typography>
          <Typography variant="h6">
            Credits: {rows.reduce((sum, row) => sum + row.credit, 0)}
          </Typography>

          <Typography variant="h6">Total (₹):</Typography>
          <Typography variant="h6">
            Debits: {rows.reduce((sum, row) => sum + row.debit, 0)}
          </Typography>
          <Typography variant="h6">
            Credits: {rows.reduce((sum, row) => sum + row.credit, 0)}
          </Typography>

          <Typography variant="h6">Difference:</Typography>
          <Typography
            variant="h6"
            sx={{
              gridColumn: "span 2",
              color: validateDebitsCredits() ? "green" : "red",
            }}
          >
            {rows.reduce((sum, row) => sum + row.debit, 0) -
              rows.reduce((sum, row) => sum + row.credit, 0)}
          </Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box sx={{ mb: 2 }}>
          <Button variant="contained" component="label">
            Upload File
            <input type="file" hidden multiple />
          </Button>
        </Box>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="contained"
            color="success"
            disabled={!validateDebitsCredits()}
          >
            Save and Publish
          </Button>
          <Button variant="outlined">Save as Draft</Button>
          <Button variant="contained" color="error">
            Cancel
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default ManualJournal;
