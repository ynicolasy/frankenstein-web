import React from 'react';
import Box from '@mui/material/Box';
import Info from '../alerts/Info';

const styleDiv = {
  color: '#abb2b9',
  marginTop: 'auto',
  alignSelf: 'flex-end'
};

const exampleText = 'This is a example text , or not ?'

function Body() {
  return (
    <div>
      <Box
        id='body1'
        sx={{
          width: 1024,
          height: 480,
          backgroundColor: ' #abb2b9 ',
          '&:hover': {
            backgroundColor: ' #abb2b9 ',
            opacity: [0.9, 0.8, 0.7],
          },
        }}>
        <text>Body</text>
      </Box>
      <Box
        id='body2'
        sx={{
          width: 1024,
          height: 480,
          backgroundColor: ' #021f3d '
      }}>
        <Box sx={{
          textAlign: 'center',
          paddingTop: 15,
          fontSize: 'xxx-large'
        }}>
          <text style={styleDiv}>
            {exampleText}
          </text>
        </Box>
      </Box>
      <Box
        id='body2'
        sx={{
          width: 1024,
          height: 480,
          backgroundColor: ' #18426d ',
          textAlign: 'center'
      }}>
        <Box sx={{
          textAlign: 'center',
          paddingTop: 15,
          fontSize: 'xxx-large'
        }}>
          <Info/>
        </Box>
      </Box>
    </div>
  )
}

export default Body;