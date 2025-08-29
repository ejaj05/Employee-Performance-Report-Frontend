import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Avatar,
  Link,
  Card,
} from '@mui/material';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';

const activityData = [
  {
    icon: <GroupAddIcon />,
    iconColor: '#34c759',
    bgColor: '#e6f4ea',
    title: 'New employee added to Engineering team',
    subtitle: 'Jennifer Walsh joined as Senior Frontend Developer',
    time: '2 hours ago'
  },
  {
    icon: <InsertChartOutlinedIcon />,
    iconColor: '#4f8dfd',
    bgColor: '#e9f0ff',
    title: 'Monthly report generated',
    subtitle: 'December performance reports are now available',
    time: '4 hours ago'
  },
  {
    icon: <WarningAmberOutlinedIcon />,
    iconColor: '#ffcc00',
    bgColor: '#fff9db',
    title: 'Performance review alert',
    subtitle: '3 employees require immediate attention',
    time: '6 hours ago'
  },
  {
    icon: <DownloadOutlinedIcon />,
    iconColor: '#b56afc',
    bgColor: '#f3e8ff',
    title: 'Bulk data import completed',
    subtitle: '45 employee records updated successfully',
    time: '1 day ago'
  }
];

const RecentActivities = () => {
  return (
    <Card elevation={3} sx={{padding:"2rem",marginTop:"4rem"}}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Typography variant="h5" fontWeight={"bold"}>
          Recent Activities
        </Typography>
        <Link href="/" underline="none" fontWeight={500} color="primary">
          View All
        </Link>
      </Grid>

      <Box mt={3}>
        {activityData.map((activity, index) => (
          <Box
            key={index}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            p={2}
            mb={2}
            borderRadius={2}
            sx={{ backgroundColor: 'rgb(248, 250, 252)' }}
          >
            <Box display="flex" alignItems="center">
              <Avatar
                sx={{
                  bgcolor: activity.bgColor,
                  color: activity.iconColor,
                  mr: 2,
                  width: 40,
                  height: 40
                }}
              >
                {activity.icon}
              </Avatar>
              <Box>
                <Typography fontWeight={600}>
                  {activity.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {activity.subtitle}
                </Typography>
              </Box>
            </Box>
            <Typography variant="body2" color="text.secondary">
              {activity.time}
            </Typography>
          </Box>
        ))}
      </Box>
    </Card>
  );
};

export default RecentActivities;
