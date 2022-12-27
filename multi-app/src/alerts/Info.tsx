import React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

const styleDiv = {
  color: '#abb2b9',
  marginTop: 'auto',
  alignSelf: 'flex-end'
};

const exampleText = 'This is a example text , or not ?'

function Info() {
  return (
    <div>
      <Box
        sx={{
          width: 900,
          height: 380
      }}>
        <Box sx={{
          textAlign: 'center',
          paddingTop: 15,
          marginLeft: 45,
          fontSize: 'xxx-large'
        }}>
          <Stack sx={{ width: '70%' }} spacing={2}>
            <Alert severity="info">
              <AlertTitle>Info</AlertTitle>
              This is an info alert — <strong>check it out!</strong>
            </Alert>
          </Stack>
        </Box>
      </Box>
    </div>
  )
}

export default Info;