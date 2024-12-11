import React from "react";
import {
  TextField,
  Button,
  MenuItem,
  Typography,
  Box,
  Paper,
  Grid,
  InputAdornment,
  IconButton,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddIcon from "@mui/icons-material/Add";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import UploadFileIcon from "@mui/icons-material/UploadFile";

function CreditNotes() {
  return (
    <div className="h-full overflow-y-auto">
      <Box sx={{ p: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" sx={{ mb: 3 }}>
            New Credit Note
          </Typography>
          <Formik
            initialValues={{
              customerName: "",
              creditNoteNumber: "CN-00001",
              referenceNumber: "",
              creditNoteDate: "",
              salesperson: "",
              subject: "",
              items: [
                { itemName: "", account: "", quantity: 1, rate: 0, amount: 0 },
              ],
              discount: 0,
              tax: "",
              adjustment: 0,
              customerNotes: "",
              termsAndConditions: "",
              files: null,
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ values, setFieldValue }) => (
              <Form>
                {/* Upper Section */}
                <Box sx={{ mb: 4 }}>
                  <Grid container spacing={3} direction="column">
                    <Grid item xs={12} sm={6}>
                      <Field
                        name="customerName"
                        label="Customer Name"
                        fullWidth
                        select
                        as={TextField}
                        required
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton>
                                <AddIcon />
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      >
                        <MenuItem value="">Select or add a customer</MenuItem>
                        {/* Add options here as needed */}
                      </Field>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        name="creditNoteNumber"
                        label="Credit Note#"
                        fullWidth
                        disabled
                        as={TextField}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        name="referenceNumber"
                        label="Reference#"
                        fullWidth
                        as={TextField}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        name="creditNoteDate"
                        label="Credit Note Date"
                        fullWidth
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        as={TextField}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        name="salesperson"
                        label="Salesperson"
                        fullWidth
                        select
                        as={TextField}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton>
                                <ManageAccountsIcon />
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      >
                        <MenuItem value="">Select or Add Salesperson</MenuItem>
                        {/* Add options here as needed */}
                      </Field>
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        name="subject"
                        label="Subject"
                        fullWidth
                        as={TextField}
                        placeholder="Let your customer know what this Credit Note is for"
                      />
                    </Grid>
                  </Grid>
                </Box>

                {/* Item Table Section */}
                <Box sx={{ mb: 4 }}>
                  <Typography variant="h6" sx={{ mb: 2 }}>
                    Item Table
                  </Typography>
                  {values.items.map((item, index) => (
                    <Grid container spacing={2} key={index} sx={{ mb: 2 }}>
                      <Grid item xs={12} sm={3}>
                        <TextField
                          label="Item Details"
                          value={item.itemName}
                          fullWidth
                          select
                          onChange={(e) => {
                            const items = [...values.items];
                            items[index].itemName = e.target.value;
                            setFieldValue("items", items);
                          }}
                        >
                          <MenuItem value="">Select an item</MenuItem>
                          {/* Add item options here as needed */}
                        </TextField>
                      </Grid>
                      <Grid item xs={12} sm={3}>
                        <TextField
                          label="Account"
                          value={item.account}
                          fullWidth
                          select
                          onChange={(e) => {
                            const items = [...values.items];
                            items[index].account = e.target.value;
                            setFieldValue("items", items);
                          }}
                        >
                          <MenuItem value="">Select an account</MenuItem>
                          {/* Add account options here as needed */}
                        </TextField>
                      </Grid>
                      <Grid item xs={4} sm={2}>
                        <TextField
                          label="Quantity"
                          type="number"
                          value={item.quantity}
                          fullWidth
                          onChange={(e) => {
                            const items = [...values.items];
                            items[index].quantity = e.target.value;
                            items[index].amount =
                              items[index].quantity * items[index].rate;
                            setFieldValue("items", items);
                          }}
                        />
                      </Grid>
                      <Grid item xs={4} sm={2}>
                        <TextField
                          label="Rate"
                          type="number"
                          value={item.rate}
                          fullWidth
                          onChange={(e) => {
                            const items = [...values.items];
                            items[index].rate = e.target.value;
                            items[index].amount =
                              items[index].quantity * items[index].rate;
                            setFieldValue("items", items);
                          }}
                        />
                      </Grid>
                      <Grid item xs={4} sm={2}>
                        <TextField
                          label="Amount"
                          type="number"
                          value={item.amount}
                          fullWidth
                          disabled
                        />
                      </Grid>
                    </Grid>
                  ))}
                  <Button
                    variant="contained"
                    startIcon={<AddCircleIcon />}
                    onClick={() => {
                      setFieldValue("items", [
                        ...values.items,
                        {
                          itemName: "",
                          account: "",
                          quantity: 1,
                          rate: 0,
                          amount: 0,
                        },
                      ]);
                    }}
                  >
                    Add New Item
                  </Button>
                </Box>

                {/* Lower Section */}
                <Box>
                  <Grid
                    container
                    spacing={3}
                    direction="row"
                    sx={{
                      p: 3,
                      border: "1px solid #e0e0e0",
                      borderRadius: 2,
                      mb: 4,
                    }}
                  >
                    <Grid item xs={12} sm={3}>
                      <Typography variant="body1" sx={{ mt: 2 }}>
                        Sub Total:{" "}
                        {values.items
                          .reduce((sum, item) => sum + item.amount, 0)
                          .toFixed(2)}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <Field
                        name="discount"
                        label="Discount"
                        fullWidth
                        type="number"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">%</InputAdornment>
                          ),
                        }}
                        as={TextField}
                      />
                      <Typography variant="body2" sx={{ mt: 1 }}>
                        Discount Amount: -
                        {(
                          (values.items.reduce(
                            (sum, item) => sum + item.amount,
                            0,
                          ) *
                            values.discount) /
                          100
                        ).toFixed(2)}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <RadioGroup
                        row
                        value={values.tax}
                        onChange={(e) => setFieldValue("tax", e.target.value)}
                      >
                        <FormControlLabel
                          value="TDS"
                          control={<Radio />}
                          label="TDS"
                        />
                        <FormControlLabel
                          value="TCS"
                          control={<Radio />}
                          label="TCS"
                        />
                      </RadioGroup>
                      <Field
                        name="tax"
                        label="Select a Tax"
                        fullWidth
                        select
                        as={TextField}
                      >
                        <MenuItem value="">Select a Tax</MenuItem>
                        <MenuItem value="GST">GST</MenuItem>
                        <MenuItem value="VAT">VAT</MenuItem>
                      </Field>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <Field
                        name="adjustment"
                        label="Adjustment"
                        fullWidth
                        type="number"
                        as={TextField}
                      />
                      <Typography variant="body2" sx={{ mt: 1 }}>
                        Adjustment Amount:{" "}
                        {parseFloat(values.adjustment || 0).toFixed(2)}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        variant="h6"
                        sx={{ textAlign: "right", fontWeight: "bold", mt: 2 }}
                      >
                        Total (₹):{" "}
                        {(
                          values.items.reduce(
                            (sum, item) => sum + item.amount,
                            0,
                          ) *
                            (1 - values.discount / 100) +
                          parseFloat(values.adjustment || 0)
                        ).toFixed(2)}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <Field
                        name="customerNotes"
                        label="Customer Notes"
                        fullWidth
                        multiline
                        rows={3}
                        as={TextField}
                        placeholder="Will be displayed on the credit note"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        name="termsAndConditions"
                        label="Terms & Conditions"
                        fullWidth
                        multiline
                        rows={3}
                        as={TextField}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="h6" sx={{ mb: 1 }}>
                        Attach File(s) to Credit Note
                      </Typography>
                      <Button
                        variant="outlined"
                        component="label"
                        startIcon={<UploadFileIcon />}
                      >
                        Upload File
                        <input
                          type="file"
                          hidden
                          multiple
                          onChange={(event) => {
                            setFieldValue("files", event.currentTarget.files);
                          }}
                        />
                      </Button>
                      <Typography variant="body2" sx={{ mt: 1 }}>
                        You can upload a maximum of 5 files, 10MB each
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>

                {/* Save Section */}
                <Box sx={{ mt: 4, textAlign: "right" }}>
                  <Button type="submit" variant="contained" color="primary">
                    Save as Open
                  </Button>
                  <Button
                    type="button"
                    variant="outlined"
                    color="secondary"
                    sx={{ ml: 2 }}
                  >
                    Save as Draft
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Paper>
      </Box>
    </div>
  );
}

export default CreditNotes;

