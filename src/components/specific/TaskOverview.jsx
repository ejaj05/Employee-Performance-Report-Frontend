import React from "react";
import {
  Box,
  Grid,
  Typography,
  LinearProgress,
  Button,
  Avatar,
  Card,
  CardContent,
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Link } from "react-router-dom";

const taskStats = [
  { label: "Completed Tasks", count: 1247, value: 90, color: "#34c759" },
  { label: "In Progress", count: 342, value: 60, color: "#fbbc04" },
  { label: "Overdue", count: 89, value: 40, color: "#ea4335" },
  { label: "Not Started", count: 156, value: 50, color: "#9aa0a6" },
];

const priorityStats = [
  {
    count: 23,
    label: "High Priority",
    note: "Urgent attention needed",
    color: "#fbeaea",
    textColor: "#b00020",
  },
  {
    count: 67,
    label: "Medium Priority",
    note: "Standard workflow",
    color: "#fffbe5",
    textColor: "#a15c00",
  },
  {
    count: 142,
    label: "Low Priority",
    note: "When time permits",
    color: "#ecfdf5",
    textColor: "#0f5132",
  },
];

const TaskOverview = () => {
  return (
    <Card elevation={3} sx={{ padding: "2rem", marginTop: "4rem" }}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Typography variant="h5" fontWeight={"bold"}>
          Task Management Overview
        </Typography>
        <Box>
          <Button variant="outlined" sx={{ mr: 2 }}>
            Export Tasks
          </Button>
          <Button variant="contained" sx={{ bgcolor: "#1a73e8" }}>
            Create Task
          </Button>
        </Box>
      </Grid>

      <Grid container spacing={4} mt={2}>
        <Grid size={{ md: 8 }}>
          <Typography variant="h6" my={"1rem"} fontWeight={600} gutterBottom>
            Task Completion Rates
          </Typography>
          {taskStats.map((task, index) => (
            <Box
              key={index}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={2}
              mb={2}
              borderRadius={2}
              sx={{ backgroundColor: "#ffffff", border: "1px solid #eee" }}
            >
              <Box display="flex" alignItems="center">
                <FiberManualRecordIcon
                  sx={{ color: task.color, fontSize: 14, mr: 1 }}
                />
                <Typography fontWeight={600}>{task.label}</Typography>
              </Box>
              <Box display="flex" alignItems="center" width="60%">
                <LinearProgress
                  variant="determinate"
                  value={task.value}
                  sx={{
                    height: 8,
                    width: "100%",
                    mr: 2,
                    borderRadius: 5,
                    backgroundColor: "#e0e0e0",
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: task.color,
                    },
                  }}
                />
                <Typography fontWeight={600}>
                  {task.count.toLocaleString()}
                </Typography>
              </Box>
            </Box>
          ))}
        </Grid>

        <Grid size={{ md: 4 }}>
          <Typography variant="h6" my={"1rem"} fontWeight={600} gutterBottom>
            Priority Distribution
          </Typography>
          <Grid container display={"flex"} direction={"column"} spacing={2}>
            {priorityStats.map((priority, index) => (
              <Grid item xs={12} key={index}>
                <Card
                  sx={{
                    backgroundColor: priority.color,
                    textAlign: "center",
                    border: 1,
                    borderColor: priority.color,
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h5"
                      fontWeight={700}
                      sx={{ color: priority.textColor }}
                    >
                      {priority.count}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      fontWeight={600}
                      sx={{ color: priority.textColor }}
                    >
                      {priority.label}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {priority.note}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default TaskOverview;
