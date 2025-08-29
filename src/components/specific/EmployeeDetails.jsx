import React from "react";
import {
    Box,
    Grid,
    TextField,
    Typography,
    MenuItem,
    Select,
    InputLabel,
    FormControl,
} from "@mui/material";
const EmployeeDetails = ({ employee, handler }) => {
    const { name, ID, department, role, month, year,baseSalary } = employee;
    const { setName, setID, setDepartment, setRole, setMonth, setYear,setBaseSalary } = handler;

    return (
        <Box
            sx={{
                bgcolor: "#1e1e2f",
                p: 3,
                borderRadius: 3,
                color: "#fff",
                maxWidth: 800,
                mx: "auto",
            }}
        >
            {/* Section Heading */}
            <Typography
                variant="h5"
                sx={{ mb: 3, display: "flex", alignItems: "center" }}
            >
                Employee Details
            </Typography>

            <Grid container spacing={3}>
                {/* Employee Name */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Employee Name"
                        value={name}
                        variant="outlined"
                        onChange={(e) => setName(e.target.value)}
                        InputLabelProps={{ style: { color: "#aaa" } }}
                        InputProps={{
                            style: {
                                color: "#fff",
                            },
                        }}
                    />
                </Grid>

                {/* Employee ID */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Employee ID"
                        value={ID}
                        onChange={(e) => setID(e.target.value)}
                        variant="outlined"
                        InputLabelProps={{ style: { color: "#aaa" } }}
                        InputProps={{
                            style: {
                                color: "#fff",
                            },
                        }}
                    />
                </Grid>

                {/* Department */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Department"
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        variant="outlined"
                        InputLabelProps={{ style: { color: "#aaa" } }}
                        InputProps={{
                            style: {
                                color: "#fff",
                            },
                        }}
                    />
                </Grid>

                {/* Role */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        variant="outlined"
                        InputLabelProps={{ style: { color: "#aaa" } }}
                        InputProps={{
                            style: {
                                color: "#fff",
                                borderColor: "#9c27b0",
                            },
                        }}
                    />
                </Grid>

                {/* Month Dropdown */}
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel sx={{ color: "#aaa" }}>Month</InputLabel>
                        <Select
                            value={month}
                            onChange={(e) => setMonth(e.target.value)}
                            sx={{
                                color: "#fff",
                            }}
                        >
                            {[
                                "January",
                                "February",
                                "March",
                                "April",
                                "May",
                                "June",
                                "July",
                                "August",
                                "September",
                                "October",
                                "November",
                                "December",
                            ].map((m) => (
                                <MenuItem key={m} value={m}>
                                    {m}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>

                {/* Year */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Year"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        variant="outlined"
                        InputLabelProps={{ style: { color: "#aaa" } }}
                        InputProps={{
                            style: {
                                color: "#fff",
                            },
                        }}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Base Salary"
                        value={baseSalary}
                        onChange={(e) => setBaseSalary(e.target.value)}
                        variant="outlined"
                        InputLabelProps={{ style: { color: "#aaa" } }}
                        InputProps={{
                            style: {
                                color: "#fff",
                            },
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default EmployeeDetails;
