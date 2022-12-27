import Box from '@mui/material/Box';
import React from 'react';

function Footer() {
  return (
    <div>
      <Box
        sx={{
          width: 1024,
          height: 75,
          backgroundColor: 'primary.dark',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <text>Footer</text>
      </Box>
      
    </div>
  )
}

export default Footer;