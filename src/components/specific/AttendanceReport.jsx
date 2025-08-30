import React, { useState } from "react";
import {
    Box,
    Typography,
    TextField,
    IconButton,
    Grid,
    Stack,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

const AttendanceReport = ({ attendance, handler }) => {

    const {totalWorkingDays,
        absentDays,
          paidLeaves,
          sickLeaves} = attendance;
    const { setTotalWorkingDays,
          setAbsentDays,
          setPaidLeaves,
          setSickLeaves} = handler

    const renderCounter = (label, value, setValue) => {
        
        return <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                m: 2,
            }}
        >
            <Typography>{label}</Typography>
            <Box
                sx={{
                    display: "flex",
                    bgcolor: "#2f2f3fff",
                    alignItems: "center",
                    mt: 1,
                }}
            >
                <IconButton onClick={() => setValue(Math.max(0, value - 1))}>
                    <Remove sx={{ color: "white" }} />
                </IconButton>
                <TextField
                    InputProps={{
                        style: {
                            color: "#fff",
                        },
                    }}
                    value={value}
                    size="small"
                    sx={{ width: 50, mx: 1 }}
                    inputProps={{ readOnly: true }}
                />
                <IconButton onClick={() => setValue(Number(value) + 1)}>
                    <Add sx={{ color: "white" }} />
                </IconButton>
            </Box>
        </Box>
    }
    return (
        <Box
            sx={{
                bgcolor: "#1e1e2f",
                p: 3,
                borderRadius: 3,
                color: "#fff",
                minWidth: 800,
                mx: "auto",
            }}
        >
            <Typography variant="h5" gutterBottom>
                Attendance Report
            </Typography>
            <Grid
                container
                spacing={3}
                sx={{ my: 2 }}
            >
                <Grid>
                    <TextField
                        label="Total Working Days"
                        variant="outlined"
                        InputLabelProps={{ style: { color: "#aaa" } }}
                        InputProps={{
                            style: {
                                color: "#fff",
                            },
                        }}
                        
                        value={totalWorkingDays}
                        onChange={(e) => setTotalWorkingDays(Number(e.target.value))}
                        sx={{ mt: 1, width: "300px" }}
                    />
                </Grid>

                <Grid>
                    <TextField
                        label="Uninformed Leaves"
                        variant="outlined"
                        InputLabelProps={{ style: { color: "#aaa" } }}
                        InputProps={{
                            style: {
                                color: "#fff",
                            },
                        }}
                        type="text"
                        value={absentDays}
                        onChange={(e) => setAbsentDays(Number(e.target.value))}
                        sx={{ mt: 1, width: "300px" }}
                    />
                </Grid>
            </Grid>

            <Grid container spacing={2}>
                {renderCounter("Paid Leaves", paidLeaves, setPaidLeaves)}
                {renderCounter("Sick Leaves", sickLeaves, setSickLeaves)}
            </Grid>
        </Box>
    );
};

export default AttendanceReport;
