import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Button,
  MenuItem,
  Select,
  Chip,
  Stack,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarIcon from '@mui/icons-material/Star';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const AnalyticsDashboard = () => {
  return (
    <Card elevation={3} sx={{ padding: "2rem", marginTop: "4rem" }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h5" fontWeight={600}>
          Analytics Dashboard
        </Typography>
        <Box display="flex" alignItems="center" gap={2}>
          <Select
            size="small"
            defaultValue="30"
            IconComponent={ArrowDropDownIcon}
            sx={{ minWidth: 140 }}
          >
            <MenuItem value="7">Last 7 days</MenuItem>
            <MenuItem value="30">Last 30 days</MenuItem>
            <MenuItem value="90">Last 90 days</MenuItem>
          </Select>
          <Button
            variant="outlined"
            startIcon={<FileDownloadIcon />}
          >
            Export Data
          </Button>
        </Box>
      </Box>

      <Grid container spacing={3}>
        {/* Performance Chart Placeholder */}
        <Grid size={{md:6}}>
          <Card sx={{ backgroundColor: '#f9fbfc', height: 200 }}>
            <CardContent
              sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
            >
              <Typography variant="h6" color="text.secondary">
                Performance Chart
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Monthly performance trends visualization
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Productivity Metrics */}
        <Grid size={{md:6}}>
          <Grid container display={"flex"} flexDirection={"column"} spacing={2}>
            <Card sx={{ backgroundColor: '#e8f0fe' }}>
                <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box>
                    <Typography color="primary" fontWeight={600}>Tasks Completed</Typography>
                    <Typography variant="h5" fontWeight={700}>1,247</Typography>
                    <Typography variant="body2" color="green">+12% from last month</Typography>
                  </Box>
                  <Avatar sx={{ bgcolor: '#1a73e8', width: 48, height: 48 }}>
                    <CheckCircleIcon />
                  </Avatar>
                </CardContent>
              </Card>
            <Card sx={{ backgroundColor: '#e6f5ec' }}>
                <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box>
                    <Typography color="green" fontWeight={600}>On-Time Delivery</Typography>
                    <Typography variant="h5" fontWeight={700}>94.2%</Typography>
                    <Typography variant="body2" color="green">+3.1% from last month</Typography>
                  </Box>
                  <Avatar sx={{ bgcolor: '#34a853', width: 48, height: 48 }}>
                    <AccessTimeIcon />
                  </Avatar>
                </CardContent>
              </Card>
            <Card sx={{ backgroundColor: '#f3e8fd' }}>
                <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box>
                    <Typography color="secondary" fontWeight={600}>Client Satisfaction</Typography>
                    <Typography variant="h5" fontWeight={700}>4.2/5</Typography>
                    <Typography variant="body2" color="secondary">+0.3 from last month</Typography>
                  </Box>
                  <Avatar sx={{ bgcolor: '#a142f4', width: 48, height: 48 }}>
                    <StarIcon />
                  </Avatar>
                </CardContent>
              </Card>
          </Grid>
        </Grid>
      </Grid>

      {/* Bottom Section */}
      <Grid container spacing={3} mt={3}>

          <Grid  size={{md:4}}>
            <Card  sx={{height:"200px",bgcolor:"#F8FAFC"}}>
            <CardContent>
              <Typography fontWeight={600} mb={2}>Top Performers</Typography>
              {[
                { name: 'Emma Thompson', score: 96, rank: '1st', color: '#b2f2bb' },
                { name: 'Alex Rodriguez', score: 92, rank: '2nd', color: '#d0ebff' },
                { name: 'Lisa Johnson', score: 89, rank: '3rd', color: '#ffe066' },
              ].map((user, i) => (
                <Box key={i} display="flex" justifyContent="space-between" mb={1}>
                  <Typography>{user.name}</Typography>
                  <Box display="flex" gap={1}>
                    <Typography>Score: {user.score}</Typography>
                    <Chip label={user.rank} size="small" sx={{ backgroundColor: user.color }} />
                  </Box>
                </Box>
              ))}
            </CardContent>
            </Card>
          </Grid>

          <Grid  size={{md:4}}>
            <Card sx={{height:"200px",bgcolor:"#F8FAFC"}}>
            <CardContent>
              <Typography fontWeight={600} mb={2}>Improvement Needed</Typography>
              {[
                { name: 'David Park', score: 58, status: 'Poor', color: 'error' },
                { name: 'Michael Chen', score: 72, status: 'Needs Work', color: 'warning' },
              ].map((person, i) => (
                <Box key={i} display="flex" justifyContent="space-between" mb={1}>
                  <Typography>{person.name}</Typography>
                  <Box display="flex" gap={1}>
                    <Typography>Score: {person.score}</Typography>
                    <Chip label={person.status} size="small" color={person.color} />
                  </Box>
                </Box>
              ))}
            </CardContent>
          </Card>
          </Grid>
          
          <Grid color={"#F8FAFC"} size={{md:4}}>
            <Card sx={{height:"200px",bgcolor:"#F8FAFC"}}>
            <CardContent>
              <Typography fontWeight={600} mb={2}>Quick Stats</Typography>
              {[
                { label: 'Avg. Response Time', value: '2.4 hrs' },
                { label: 'Project Success Rate', value: '89%' },
                { label: 'Team Collaboration', value: '4.1/5' },
                { label: 'Innovation Index', value: '78%' },
              ].map((stat, i) => (
                <Box key={i} display="flex" justifyContent="space-between" mb={1}>
                  <Typography>{stat.label}</Typography>
                  <Typography fontWeight={600}>{stat.value}</Typography>
                </Box>
              ))}
            </CardContent>
          </Card>
          </Grid>

      </Grid>
    </Card>
  );
};

export default AnalyticsDashboard;
