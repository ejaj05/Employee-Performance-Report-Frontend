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
        presentDays,
        absentDays,
          paidLeaves,
          sickLeaves} = attendance;
    const { setTotalWorkingDays,
        setPresentDays,
          setAbsentDays,
          setPaidLeaves,
          setSickLeaves} = handler

    const renderCounter = (label, value, setValue) => {

        const decreaseHandler = (setValue) => {
            setValue(0);
        }

        const increaseHandler = (setValue) => {
            setValue(1);
        }
        
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
                <IconButton onClick={() => decreaseHandler(setValue)}>
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
                <IconButton onClick={() => increaseHandler(setValue)}>
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
                maxWidth: 800,
                mx: "auto",
            }}
        >
            <Typography variant="h5" gutterBottom>
                Attendance Report
            </Typography>
            <Stack
                display={"flex"}
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
                flexWrap={"wrap"}
                sx={{ my: 2 }}
            >
                <Box>
                    <Typography>Total Working Days</Typography>
                    <TextField
                        InputProps={{
                            style: {
                                color: "#fff",
                                backgroundColor: "#2f2f3fff",
                            },
                        }}
                        type="text"
                        color="white"
                        value={totalWorkingDays}
                        onChange={(e) => setTotalWorkingDays(Number(e.target.value))}
                        size="small"
                        sx={{ mt: 1, width: "300px" }}
                    />
                </Box>

                <Box>
                    <Typography>Total Present Days</Typography>
                    <TextField
                        InputProps={{
                            style: {
                                color: "#fff",
                                backgroundColor: "#2f2f3fff",
                            },
                        }}
                        type="text"
                        color="white"
                        value={presentDays}
                        onChange={(e) => setPresentDays(Number(e.target.value))}
                        size="small"
                        sx={{ mt: 1, width: "300px" }}
                    />
                </Box>

                <Box>
                    <Typography>Absent Days</Typography>
                    <TextField
                        InputProps={{
                            style: {
                                color: "#fff",
                                backgroundColor: "#2f2f3fff",
                            },
                        }}
                        type="text"
                        color="white"
                        value={absentDays}
                        onChange={(e) => setAbsentDays(Number(e.target.value))}
                        size="small"
                        sx={{ mt: 1, width: "300px" }}
                    />
                </Box>
                
            </Stack>

            <Grid container spacing={2}>
                {renderCounter("Paid Leaves", paidLeaves, setPaidLeaves)}
                {renderCounter("Sick Leaves", sickLeaves, setSickLeaves)}
            </Grid>
        </Box>
    );
};

export default AttendanceReport;
