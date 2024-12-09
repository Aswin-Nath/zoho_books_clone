import React from 'react';
import {
  TextField,
  Button,
  MenuItem,
  Typography,
  Box,
  Paper,
  Grid,
  Radio,
  RadioGroup,
  FormControlLabel,
} from '@mui/material';
import { Formik, Form, Field } from 'formik';
import UploadFileIcon from '@mui/icons-material/UploadFile';

const unpaidInvoicesData = [
  {
    date: '2024-06-01',
    invoiceNumber: 'INV-0001',
    invoiceAmount: 500.0,
    amountDue: 200.0,
  },
  {
    date: '2024-06-05',
    invoiceNumber: 'INV-0002',
    invoiceAmount: 1000.0,
    amountDue: 1000.0,
  },
];

function RecordPayment() {
  return (
    <Box sx={{ p: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" sx={{ mb: 3 }}>
          Record Payment
        </Typography>
        <Formik
          initialValues={{
            customerName: 'Aswin',
            amountReceived: '',
            bankCharges: '',
            paymentDate: '',
            paymentNumber: '1',
            paymentMode: 'Cash',
            depositTo: 'Petty Cash',
            referenceNumber: '',
            taxDeducted: 'No Tax deducted',
            notes: '',
            files: null,
            sendThankYouNote: true,
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
                  <Grid item xs={12} sm={6} md={4}>
                    <Field
                      name="customerName"
                      label="Customer Name"
                      fullWidth
                      select
                      as={TextField}
                      required
                    >
                      <MenuItem value="">Select or add a customer</MenuItem>
                      <MenuItem value="Aswin">Aswin</MenuItem>
                    </Field>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      PAN: <Button color="primary">Add PAN</Button>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <Field
                      name="amountReceived"
                      label="Amount Received (₹)"
                      fullWidth
                      required
                      as={TextField}
                      onChange={(e) => {
                        setFieldValue('amountReceived', e.target.value);
                        setFieldValue('amountSummary.amountReceived', e.target.value);
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <Field
                      name="bankCharges"
                      label="Bank Charges (if any) (₹)"
                      fullWidth
                      as={TextField}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <Field
                      name="paymentDate"
                      label="Payment Date"
                      fullWidth
                      type="date"
                      InputLabelProps={{ shrink: true }}
                      as={TextField}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <Field
                      name="paymentNumber"
                      label="Payment #"
                      fullWidth
                      as={TextField}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <Field
                      name="paymentMode"
                      label="Payment Mode"
                      fullWidth
                      select
                      as={TextField}
                    >
                      <MenuItem value="Cash">Cash</MenuItem>
                      <MenuItem value="Cheque">Cheque</MenuItem>
                      <MenuItem value="Credit Card">Credit Card</MenuItem>
                      {/* Add more payment modes as needed */}
                    </Field>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <Field
                      name="depositTo"
                      label="Deposit To"
                      fullWidth
                      select
                      as={TextField}
                    >
                      <MenuItem value="Petty Cash">Petty Cash</MenuItem>
                      <MenuItem value="Bank Account">Bank Account</MenuItem>
                      {/* Add more deposit options as needed */}
                    </Field>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <Field
                      name="referenceNumber"
                      label="Reference#"
                      fullWidth
                      as={TextField}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <Typography variant="body1" sx={{ mt: 2 }}>
                      Tax deducted?
                    </Typography>
                    <RadioGroup
                      row
                      value={values.taxDeducted}
                      onChange={(e) => setFieldValue('taxDeducted', e.target.value)}
                    >
                      <FormControlLabel value="No Tax deducted" control={<Radio />} label="No Tax deducted" />
                      <FormControlLabel value="Yes, TDS (Income Tax)" control={<Radio />} label="Yes, TDS (Income Tax)" />
                    </RadioGroup>
                  </Grid>
                </Grid>
              </Box>

              {/* Lower Section */}
              <Box>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Unpaid Invoices
                </Typography>
                <Box sx={{ p: 2, border: '1px solid #e0e0e0', borderRadius: 2, mb: 4 }}>
                  {unpaidInvoicesData.length > 0 ? (
                    <Box>
                      <Grid container spacing={2} sx={{ mb: 1 }}>
                        <Grid item xs={3}>
                          <Typography variant="body2" fontWeight="bold">Date</Typography>
                        </Grid>
                        <Grid item xs={3}>
                          <Typography variant="body2" fontWeight="bold">Invoice Number</Typography>
                        </Grid>
                        <Grid item xs={3}>
                          <Typography variant="body2" fontWeight="bold">Invoice Amount (₹)</Typography>
                        </Grid>
                        <Grid item xs={3}>
                          <Typography variant="body2" fontWeight="bold">Amount Due (₹)</Typography>
                        </Grid>
                      </Grid>
                      {unpaidInvoicesData.map((invoice, index) => (
                        <Grid container spacing={2} key={index}>
                          <Grid item xs={3}>
                            <Typography variant="body2">{invoice.date}</Typography>
                          </Grid>
                          <Grid item xs={3}>
                            <Typography variant="body2">{invoice.invoiceNumber}</Typography>
                          </Grid>
                          <Grid item xs={3}>
                            <Typography variant="body2">{invoice.invoiceAmount.toFixed(2)}</Typography>
                          </Grid>
                          <Grid item xs={3}>
                            <Typography variant="body2">{invoice.amountDue.toFixed(2)}</Typography>
                          </Grid>
                        </Grid>
                      ))}
                    </Box>
                  ) : (
                    <Typography variant="body2" sx={{ mb: 1 }}>
                      There are no unpaid invoices associated with this customer.
                    </Typography>
                  )}
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                    **List contains only SENT invoices
                  </Typography>
                </Box>

                {/* Amount Summary Section */}
                <Box sx={{ p: 2, border: '1px solid #e0e0e0', borderRadius: 2, mb: 4, backgroundColor: '#f9f9f9' }}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography variant="body2">Amount Received (₹) :</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2" align="right">{values.amountReceived || '0.00'}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2">Amount used for Payments (₹) :</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2" align="right">0.00</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2">Amount Refunded (₹) :</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2" align="right">0.00</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2" color="error">Amount in Excess (₹) :</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2" color="error" align="right">₹ 0.00</Typography>
                    </Grid>
                  </Grid>
                </Box>

                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <Field
                      name="notes"
                      label="Notes (Internal use. Not visible to customer)"
                      fullWidth
                      multiline
                      rows={3}
                      as={TextField}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="h6" sx={{ mb: 1 }}>
                      Attachments
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
                          setFieldValue('files', event.currentTarget.files);
                        }}
                      />
                    </Button>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      You can upload a maximum of 5 files, 5MB each
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControlLabel
                      control={
                        <Field
                          name="sendThankYouNote"
                          type="checkbox"
                          as={TextField}
                          checked={values.sendThankYouNote}
                        />
                      }
                      label="Email a 'thank you' note for this payment"
                    />
                  </Grid>
                </Grid>
              </Box>

              {/* Save Section */}
              <Box sx={{ mt: 4, textAlign: 'right' }}>
                <Button type="submit" variant="contained" color="primary">
                  Save
                </Button>
                <Button type="button" variant="outlined" color="secondary" sx={{ ml: 2 }}>
                  Cancel
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Paper>
    </Box>
  );
}

export default RecordPayment;
