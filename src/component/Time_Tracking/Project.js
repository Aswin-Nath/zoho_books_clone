import React, { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';

function Project() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Aswinnath TE', email: 'aswinthalaa123123@gmail.com' },
  ]);
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Task Name', description: 'Description', billable: true },
  ]);
  const [customerName, setCustomerName] = useState('');
  const [billingMethod, setBillingMethod] = useState('');

  const handleAddUser = () => {
    const newUser = { id: users.length + 1, name: '', email: '' };
    setUsers([...users, newUser]);
  };

  const handleUserChange = (index, field, value) => {
    const updatedUsers = [...users];
    updatedUsers[index][field] = value;
    setUsers(updatedUsers);
  };

  const handleDeleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  const handleAddTask = () => {
    const newTask = { id: tasks.length + 1, name: '', description: '', billable: false };
    setTasks([...tasks, newTask]);
  };

  const handleTaskChange = (index, field, value) => {
    const updatedTasks = [...tasks];
    updatedTasks[index][field] = value;
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        New Project
      </Typography>

      <Box component="form" sx={{ mb: 4 }}>
        <TextField
          fullWidth
          label="Project Name*"
          variant="outlined"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Project Code"
          variant="outlined"
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel shrink={false} id="customer-name-label">
            {customerName ? '' : 'Customer Name*'}
          </InputLabel>
          <Select
            labelId="customer-name-label"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            displayEmpty
          >
            <MenuItem value="Customer1">Customer 1</MenuItem>
            <MenuItem value="Customer2">Customer 2</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel shrink={false} id="billing-method-label">
            {billingMethod ? '' : 'Billing Method*'}
          </InputLabel>
          <Select
            labelId="billing-method-label"
            value={billingMethod}
            onChange={(e) => setBillingMethod(e.target.value)}
            displayEmpty
          >

            <MenuItem value="Hourly">Hourly</MenuItem>
            <MenuItem value="Fixed">Fixed</MenuItem>
          </Select>
        </FormControl>
        <TextField
          fullWidth
          label="Description"
          multiline
          rows={4}
          variant="outlined"
          margin="normal"
        />
      </Box>

      <Typography variant="h5" gutterBottom>
        Users
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>S.NO</TableCell>
            <TableCell>User</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user, index) => (
            <TableRow key={user.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>
                <TextField
                  value={user.name}
                  onChange={(e) => handleUserChange(index, 'name', e.target.value)}
                  placeholder="Enter User Name"
                />
              </TableCell>
              <TableCell>
                <TextField
                  value={user.email}
                  onChange={(e) => handleUserChange(index, 'email', e.target.value)}
                  placeholder="Enter User Email"
                />
              </TableCell>
              <TableCell>
                <Button
                  color="error"
                  variant="outlined"
                  onClick={() => handleDeleteUser(index)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button variant="contained" onClick={handleAddUser} sx={{ mt: 2 }}>
        + Add User
      </Button>

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Project Tasks
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>S.NO</TableCell>
            <TableCell>Task Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Billable</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map((task, index) => (
            <TableRow key={task.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>
                <TextField
                  value={task.name}
                  onChange={(e) => handleTaskChange(index, 'name', e.target.value)}
                  placeholder="Enter Task Name"
                />
              </TableCell>
              <TableCell>
                <TextField
                  value={task.description}
                  onChange={(e) => handleTaskChange(index, 'description', e.target.value)}
                  placeholder="Enter Task Description"
                />
              </TableCell>
              <TableCell>
                <Checkbox
                  checked={task.billable}
                  onChange={(e) => handleTaskChange(index, 'billable', e.target.checked)}
                />
              </TableCell>
              <TableCell>
                <Button
                  color="error"
                  variant="outlined"
                  onClick={() => handleDeleteTask(index)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button variant="contained" onClick={handleAddTask} sx={{ mt: 2 }}>
        + Add Project Task
      </Button>

      <FormControlLabel
        control={<Checkbox />}
        label="Add to the watchlist on my dashboard"
        sx={{ mt: 4 }}style={{position:"relative",left:"140px",bottom:"10px"}}
      />

      <Box sx={{ mt: 4 }}>
        <Button variant="contained" color="primary" sx={{ mr: 2 }}>
          Save
        </Button>
        <Button variant="outlined" color="secondary">
          Cancel
        </Button>
      </Box>
    </Box>
  );
}

export default Project;
