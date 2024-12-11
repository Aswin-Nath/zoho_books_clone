import React, { useState } from "react";
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
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";

function TimeSheet() {
  const [timeEntries, setTimeEntries] = useState([
    {
      id: 1,
      projectId: "",
      taskId: "",
      userId: "",
      hours: 0,
      date: "",
      billable: true,
      progress: "",
      notes: "",
    },
  ]);

  const [projects] = useState([
    { id: 1, name: "Project Alpha" },
    { id: 2, name: "Project Beta" },
  ]);

  const [tasks] = useState({
    1: [
      { id: 1, name: "Task A1" },
      { id: 2, name: "Task A2" },
    ],
    2: [
      { id: 3, name: "Task B1" },
      { id: 4, name: "Task B2" },
    ],
  });

  const [users] = useState({
    1: [
      { id: 1, name: "User 1" },
      { id: 2, name: "User 2" },
    ],
    2: [
      { id: 3, name: "User 3" },
      { id: 4, name: "User 4" },
    ],
  });

  const handleAddTimeEntry = () => {
    const newEntry = {
      id: timeEntries.length + 1,
      projectId: "",
      taskId: "",
      userId: "",
      hours: 0,
      date: "",
      billable: false,
      progress: "",
      notes: "",
    };
    setTimeEntries([...timeEntries, newEntry]);
  };

  const handleTimeEntryChange = (index, field, value) => {
    const updatedEntries = [...timeEntries];
    updatedEntries[index][field] = value;
    setTimeEntries(updatedEntries);
  };

  const handleDeleteTimeEntry = (index) => {
    const updatedEntries = timeEntries.filter((_, i) => i !== index);
    setTimeEntries(updatedEntries);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        TimeSheet
      </Typography>

      <Typography variant="h5" gutterBottom>
        Log Time Entries
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>S.NO</TableCell>
            <TableCell>Project</TableCell>
            <TableCell>Task</TableCell>
            <TableCell>User</TableCell>
            <TableCell>Hours</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Billable</TableCell>
            <TableCell>Progress</TableCell>
            <TableCell>Notes</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {timeEntries.map((entry, index) => (
            <TableRow key={entry.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>
                <FormControl fullWidth sx={{ minWidth: 150 }}>
                  <Select
                    value={entry.projectId}
                    onChange={(e) =>
                      handleTimeEntryChange(index, "projectId", e.target.value)
                    }
                    displayEmpty
                  >
                    <MenuItem value="" disabled>
                      Select Project
                    </MenuItem>
                    {projects.map((project) => (
                      <MenuItem key={project.id} value={project.id}>
                        {project.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell>
                <FormControl fullWidth sx={{ minWidth: 150 }}>
                  <Select
                    value={entry.taskId}
                    onChange={(e) =>
                      handleTimeEntryChange(index, "taskId", e.target.value)
                    }
                    disabled={!entry.projectId}
                    displayEmpty
                  >
                    <MenuItem value="" disabled>
                      Select Task
                    </MenuItem>
                    {(tasks[entry.projectId] || []).map((task) => (
                      <MenuItem key={task.id} value={task.id}>
                        {task.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell>
                <FormControl fullWidth sx={{ minWidth: 150 }}>
                  <Select
                    value={entry.userId}
                    onChange={(e) =>
                      handleTimeEntryChange(index, "userId", e.target.value)
                    }
                    disabled={!entry.projectId}
                    displayEmpty
                  >
                    <MenuItem value="" disabled>
                      Select User
                    </MenuItem>
                    {(users[entry.projectId] || []).map((user) => (
                      <MenuItem key={user.id} value={user.id}>
                        {user.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell>
                <TextField
                  type="number"
                  value={entry.hours}
                  onChange={(e) =>
                    handleTimeEntryChange(index, "hours", e.target.value)
                  }
                  className="w-28"
                  placeholder="Enter Hours"
                />
              </TableCell>
              <TableCell>
                <TextField
                  type="date"
                  value={entry.date}
                  onChange={(e) =>
                    handleTimeEntryChange(index, "date", e.target.value)
                  }
                />
              </TableCell>
              <TableCell>
                <Checkbox
                  checked={entry.billable}
                  onChange={(e) =>
                    handleTimeEntryChange(index, "billable", e.target.checked)
                  }
                />
              </TableCell>
              <TableCell>
                <FormControl fullWidth sx={{ minWidth: 150 }}>
                  <Select
                    value={entry.progress}
                    onChange={(e) =>
                      handleTimeEntryChange(index, "progress", e.target.value)
                    }
                    displayEmpty
                  >
                    <MenuItem value="" disabled>
                      Select Progress
                    </MenuItem>
                    <MenuItem value="InProgress">In Progress</MenuItem>
                    <MenuItem value="Completed">Completed</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell>
                <TextField
                  value={entry.notes}
                  onChange={(e) =>
                    handleTimeEntryChange(index, "notes", e.target.value)
                  }
                  placeholder="Enter Notes"
                />
              </TableCell>
              <TableCell>
                <Button
                  color="error"
                  variant="outlined"
                  onClick={() => handleDeleteTimeEntry(index)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button variant="contained" onClick={handleAddTimeEntry} sx={{ mt: 2 }}>
        + Add Time Entry
      </Button>

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

export default TimeSheet;
