import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const Header = () => {
  return (
    <Box display="flex" alignItems="center" gap={4} padding={1} borderBottom={1} sx={{width: '100%', borderColor: 'lightgray'}}>
      {/* Logo Section */}
      <Box display="flex" alignItems="center">
        <Typography 
          variant="h6" 
          component="span" 
          sx={{ 
            color: 'blue', 
            fontWeight: 'bold', 
            mr: 1 
          }}
        >
          UX
        </Typography>
        <Typography 
          variant="h6" 
          component="span" 
          sx={{ 
            color: 'blue', 
            fontWeight: 'bold', 
            mr: 1 
          }}
        >
          PILOT
        </Typography>
      </Box>
      
      {/* Button Section */}
      <Button 
        variant="outlined" 
        target="_blank" 
        rel="noopener noreferrer"
        sx={{
          borderColor: 'blue',
          color: 'blue',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 255, 0.1)',
          },
        }}
      >
        Try UX Pilot for Free
      </Button>
    </Box>
  );
};

export default Header;
