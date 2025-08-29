import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  TextField,
  Grid,
  Paper,
  Select,
  MenuItem,
  FormControlLabel,
  FormControl,
  InputLabel,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { set } from "mongoose";

const CounterField = ({ label, value, setValue }) => {
  const decreaseHandler = (label, setValue) => {
    if (label == "Missed Deadlines") {
      setValue((prev) => Math.max(0, prev - 1));
    } else {
      setValue(0);
    }
  };

  const increaseHandler = (label, setValue) => {
    if (label == "Missed Deadlines") {
      setValue((prev) => prev + 1);
    } else {
      setValue(1);
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        m: 1,
      }}
    >
      <Typography>{label}</Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mt: 1,
          bgcolor: "#2f2f3fff",
        }}
      >
        <IconButton onClick={() => decreaseHandler(label, setValue)}>
          <Remove sx={{ color: "white" }} />
        </IconButton>
        <TextField
          value={value}
          size="small"
          sx={{ width: 50, mx: 1 }}
          inputProps={{ style: { color: "white" } }}
        />
        <IconButton onClick={() => increaseHandler(label, setValue)}>
          <Add sx={{ color: "white" }} />
        </IconButton>
      </Box>
    </Box>
  );
};

const MetricsReport = ({metrics,handler}) => {

  const { completedEarly, missedDeadlines, clientFeedback } = metrics;
  const { setCompletedEarly, setMissedDeadlines, setClientFeedback } = handler;

  return (
    <Box sx={{ p: 4 }}>
      <Grid container display={"flex"} direction={"row"} spacing={4}>
        {/* Project & Task Metrics */}
        <Grid size={6}>
          <Paper sx={{ p: 3, backgroundColor: "#1e1e2f", color: "#fff" }}>
            <Typography variant="h6" gutterBottom>
              📊 Project & Task Metrics
            </Typography>
            {CounterField({
              label: "Projects Completed Early",
              value: completedEarly,
              setValue: setCompletedEarly,
            })}
            {CounterField({
              label: "Missed Deadlines",
              value: missedDeadlines,
              setValue: setMissedDeadlines,
            })}
          </Paper>
        </Grid>

        {/* Client Feedback */}
        <Grid size={6}>
          <Paper sx={{ p: 3, backgroundColor: "#1e1e2f", color: "#fff" }}>
            <Typography variant="h6" gutterBottom>
              💬 Client Feedback
            </Typography>

            <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel sx={{ color: "#aaa" }}>Rating</InputLabel>
                        <Select
                            value={clientFeedback.rating}
                            onChange={(e) => setClientFeedback({...clientFeedback,rating:e.target.value})}
                            sx={{
                                color: "#fff",
                            }}
                        >
                            {[
                                1,2,3,4,5
                            ].map((m) => (
                                <MenuItem key={m} value={m}>
                                    {m}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
            </Grid>

            <Grid mt={"3rem"} item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel sx={{ color: "#aaa" }}>ClientLost</InputLabel>
                        <Select
                         value={clientFeedback.clientLeft}
                            onChange={(e) => setClientFeedback({...clientFeedback,clientLeft:e.target.value})}
                            sx={{
                                color: "#fff",
                            }}
                        >
                            {[
                                "True","False"
                            ].map((m) => (
                                <MenuItem key={m} value={m}>
                                    {m}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MetricsReport;
