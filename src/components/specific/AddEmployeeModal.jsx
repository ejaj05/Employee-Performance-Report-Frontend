import React, { useState } from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Select, MenuItem,
  InputLabel,
  FormControl,
} from '@mui/material';
import axios from 'axios';
import toast from 'react-hot-toast';

const AddEmployeeModal = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    employeeId: '',
    department: '',
    role: '',
    baseSalary: 0,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await axios.post("https://employee-performance-report-backend.onrender.com/api/employee/add", formData);
      setFormData({
        name: "",
        employeeId: "",
        department: "",
        role: "",
        baseSalary: 0,
      });
      toast.success("Employee added successfully!");
      onClose();
    } catch (err) {
      console.error("Failed to add employee:", err);
      toast.error("Failed to add employee");
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add New Employee</DialogTitle>
      <DialogContent>
        <TextField label="Name" name="name" value={formData.name} onChange={handleChange} fullWidth margin="normal" />
        <TextField label="Employee ID" name="employeeId" value={formData.employeeId} onChange={handleChange} fullWidth margin="normal" />
        <FormControl fullWidth margin="normal">
          <InputLabel>Department</InputLabel>
          <Select label="Department" name="department" value={formData.department} onChange={handleChange} fullWidth>
          <MenuItem value="Engineering">Engineering</MenuItem>
          <MenuItem value="Design">Design</MenuItem>
          <MenuItem value="Marketing">Marketing</MenuItem>
          <MenuItem value="Sales">Sales</MenuItem>
          {/* Add more */}
        </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel>Role</InputLabel>
          <Select label="Role" name="role" value={formData.role} onChange={handleChange} fullWidth margin="normal">
          <MenuItem value="Full Stack Developer">Full Stack Developer</MenuItem>
          <MenuItem value="Full Stack Developer">Senior Developer</MenuItem>
          <MenuItem value="UX Designer">UX Designer</MenuItem>
          <MenuItem value="Frontend Developer">Frontend Developer</MenuItem>
          <MenuItem value="Marketing Manager">Marketing Manager</MenuItem>
          <MenuItem value="Sales Representative">Sales Representative</MenuItem>

          {/* Add more */}
        </Select>
        </FormControl>
        <TextField label="Base Salary" name="baseSalary" type="number" value={formData.baseSalary} onChange={handleChange} fullWidth margin="normal" />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained">Add</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddEmployeeModal;