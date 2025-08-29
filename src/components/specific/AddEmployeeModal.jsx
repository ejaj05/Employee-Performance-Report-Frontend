import React, { useState } from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Select, MenuItem,
  InputLabel,
  FormControl,
} from '@mui/material';
import axios from 'axios';

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
    console.log(formData)
    try {
      await axios.post("http://localhost:5000/api/employee/add", formData);
      // setFormData({
      //   name: "",
      //   employeeId: "",
      //   department: "",
      //   role: "",
      //   baseSalary: 0,
      // });
      onClose();
    } catch (err) {
      console.error("Failed to add employee:", err);
    }
  };

  console.log(formData)

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add New Employee</DialogTitle>
      <DialogContent>
        <TextField label="Name" name="name" value={formData.name} onChange={handleChange} fullWidth margin="normal" />
        <TextField label="Employee ID" name="employeeId" value={formData.employeeId} onChange={handleChange} fullWidth margin="normal" />
        <FormControl fullWidth margin="normal">
          <InputLabel>Department</InputLabel>
          <Select name="department" value={formData.department} onChange={handleChange} fullWidth margin="normal">
          <MenuItem value="Engineering">Engineering</MenuItem>
          <MenuItem value="Design">Design</MenuItem>
          <MenuItem value="Marketing">Marketing</MenuItem>
          {/* Add more */}
        </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel>Role</InputLabel>
          <Select label="Role" name="role" value={formData.role} onChange={handleChange} fullWidth margin="normal">
          <MenuItem value="Full Stack Developer">Full Stack Developer</MenuItem>
          <MenuItem value="UX Designer">UX Designer</MenuItem>
          <MenuItem value="Frontend Developer">Frontend Developer</MenuItem>

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