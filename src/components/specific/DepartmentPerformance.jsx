import React from 'react';
import {
  Box,
  Grid,
  Typography,
  LinearProgress,
  MenuItem,
  Select,
  Avatar,
  Card,
  CardContent,
} from '@mui/material';
import InsertChartIcon from '@mui/icons-material/InsertChart';

const departmentData = [
  { name: 'Engineering', employees: 42, performance: 89, color: '#2e7d32' },
  { name: 'Design', employees: 18, performance: 92, color: '#1976d2' },
  { name: 'Sales', employees: 28, performance: 86, color: '#ba68c8' },
  { name: 'Marketing', employees: 24, performance: 78, color: '#fb8c00' },
  { name: 'HR', employees: 12, performance: 84, color: '#ec407a' },
  { name: 'Operations', employees: 18, performance: 81, color: '#5c6bc0' }
];

const DepartmentPerformance = () => {
  const [duration, setDuration] = React.useState('6');

  return (
    <Card elevation={3} sx={{padding:"2rem"}}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Typography variant="h5" fontWeight={600}>
          Department Performance
        </Typography>
        <Select
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          size="small"
          sx={{ borderRadius: 2, backgroundColor: '#f9fafb' }}
        >
          <MenuItem value="6">Last 6 months</MenuItem>
          <MenuItem value="12">Last 12 months</MenuItem>
        </Select>
      </Grid>

      <Grid container spacing={4} mt={2}>
        <Grid size={{md:6}}>
          <Typography variant="subtitle1" fontWeight={600} gutterBottom>
            Performance by Department
          </Typography>
          {departmentData.map((dept, index) => (
            <Box
              key={index}
              display="flex"
              flexDirection="column"
              mb={2}
              p={2}
              borderRadius={2}
              sx={{ backgroundColor: '#f8fafc' }}
            >
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <Box display="flex" alignItems="center">
                  <Avatar sx={{ bgcolor: dept.color, width: 10, height: 10, mr: 1 }} />
                  <Typography fontWeight={600}>{dept.name}</Typography>
                  <Typography variant="body2" color="text.secondary" ml={1}>
                    ({dept.employees} employees)
                  </Typography>
                </Box>
                <Typography fontWeight={600}>{dept.performance}%</Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={dept.performance}
                sx={{
                  height: 8,
                  borderRadius: 5,
                  backgroundColor: '#e0e0e0',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: dept.color,
                  }
                }}
              />
            </Box>
          ))}
        </Grid>

        <Grid size={{md:6}} >
          <Typography variant="subtitle1" fontWeight={600} gutterBottom>
            Attendance Trends
          </Typography>
          <Card sx={{ height: '100%', backgroundColor: '#f8fafc' }}>
            <CardContent
              sx={{
                height: '100%',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems:"center"
              }}
            >
              <InsertChartIcon fontSize="large" color="disabled" />
              <Typography variant="body1" mt={1} fontWeight={500}>
                Interactive Chart Coming Soon
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Department attendance trends over time
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Card>
  );
};

export default DepartmentPerformance;
