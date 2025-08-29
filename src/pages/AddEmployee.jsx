import React, { useState } from "react";
import { TextField, Container, Typography, Box } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import axios from "axios";

export default function AddEmployee() {
  const [employee, setEmployee] = useState({
    id: "",
    name: "",
    email: "",
    department: "",
    role: "",
    joiningDate: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await axios.post("http://localhost:5000/api/v1/employees", employee);
      setMessage("✅ Employee added successfully!");
      setEmployee({
        id: "",
        name: "",
        email: "",
        department: "",
        role: "",
      });
      setLoading(false);
    } catch (err) {
      setMessage("❌ Failed to add employee");
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h5" gutterBottom>
        Add New Employee
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <TextField
          label="Employee ID"
          name="id"
          value={employee.id}
          onChange={handleChange}
          required
        />
        <TextField
          label="Name"
          name="name"
          value={employee.name}
          onChange={handleChange}
          required
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={employee.email}
          onChange={handleChange}
          required
        />
        <TextField
          label="Department"
          name="department"
          value={employee.department}
          onChange={handleChange}
          required
        />
        <TextField
          label="Role"
          name="role"
          value={employee.role}
          onChange={handleChange}
          required
        />
        

        <LoadingButton type="submit" variant="contained" loading={loading}>
          Add Employee
        </LoadingButton>

        {message && (
          <Typography variant="body1" color="primary">
            {message}
          </Typography>
        )}
      </Box>
    </Container>
  );
}
