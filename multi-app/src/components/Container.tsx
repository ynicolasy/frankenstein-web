import React from 'react';
import Box from '@mui/material/Box';

function Container() {
  return (
    <div>
      <Box
        sx={{
          boxShadow: 1, // theme.shadows[1]
          color: 'primary.main', // theme.palette.primary.main
          m: 1, // margin: theme.spacing(1)
          p: {
            xs: 1, // [theme.breakpoints.up('xs')]: { padding: theme.spacing(1) }
          },
          zIndex: 'tooltip', // theme.zIndex.tooltip
        }}>
        <text>No me la conteiner</text>
        <image></image>
      </Box>
    </div>
  )
}

export default Container;