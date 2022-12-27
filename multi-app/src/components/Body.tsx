import React from 'react';
import Box from '@mui/material/Box';
import Info from '../alerts/Info';
import Testimonio from './Testimonio';

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
          backgroundColor: ' #c3c'
        }}>
        <div className=''>
          <Testimonio/>
        </div>
      </Box>
      <Box
        id='txtOrNot'
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
        id='info'
        sx={{
          width: 1024,
          height: 480,
          backgroundColor: ' #18426d '
      }}>
        <Info/>
      </Box>
    </div>
  )
}

export default Body;