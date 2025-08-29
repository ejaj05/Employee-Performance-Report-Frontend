import React from 'react';
import { Grid, Card, CardContent, Typography, Box, Avatar, Stack } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import WarningIcon from '@mui/icons-material/Warning';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ShowChartIcon from '@mui/icons-material/ShowChart';

const performanceData = [
  {
    label: 'High Performers',
    value: 87,
    percentage: '61% of total employees',
    change: '+12%',
    icon: <PeopleIcon />,
    bgColor: '#e6f4ea',
    iconColor: '#2e7d32',
    changeColor: '#2e7d32'
  },
  {
    label: 'Needs Improvement',
    value: 38,
    percentage: '27% of total employees',
    change: '+5%',
    icon: <WarningIcon />,
    bgColor: '#fff9db',
    iconColor: '#f9a825',
    changeColor: '#f9a825'
  },
  {
    label: 'Poor Performance',
    value: 17,
    percentage: '12% of total employees',
    change: '-3%',
    icon: <ArrowDownwardIcon />,
    bgColor: '#fdecea',
    iconColor: '#d32f2f',
    changeColor: '#d32f2f'
  },
  {
    label: 'Average Score',
    value: 84.2,
    percentage: 'Company-wide average',
    change: '+8%',
    icon: <ShowChartIcon />,
    bgColor: '#e8f0fe',
    iconColor: '#1976d2',
    changeColor: '#1976d2'
  }
];

const PerformanceOverview = () => {
  return (
    <Card elevation={3} sx={{my:"4rem",padding:"2rem"}}>
      <Typography variant="h5" fontWeight={"bold"} mb={4} gutterBottom>
        Performance Overview
      </Typography>
      <Stack display={"flex"} direction={"row"} spacing={3}>
        {performanceData.map((item) => (
            <Card sx={{ backgroundColor: item.bgColor,border: `1px solid ${item.changeColor}`,padding:"1rem",width:"300px"}}>
              <CardContent>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                  <Box color={"white"} sx={{ bgcolor: item.iconColor,padding:"8px",borderRadius:"8px"}}>
                    {item.icon}
                  </Box>
                  <Typography variant="body2" sx={{ color: item.changeColor, fontWeight: 600 }}>
                    {item.change}
                  </Typography>
                </Box>
                <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: 600 }}>
                  {item.label}
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  {item.value}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {item.percentage}
                </Typography>
              </CardContent>
            </Card>
        ))}
      </Stack>
    </Card>
  );
};

export default PerformanceOverview;
