import React from 'react';
import { Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/core.css';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import Box from '@mui/material/Box';
import chalk from 'chalk';


function MenuBar() {
  return (
    <div>
      <Box
        sx={{
          width: 1024,
          height: 50,
          border: '1px dashed black',
          backgroundColor: 'gray'
        }}>
        <Menu menuButton={<MenuButton>&#127828;</MenuButton>} transition>
            <MenuItem>Blog</MenuItem>
            <MenuItem>Travels &#9992;</MenuItem>
              <SubMenu label="S-Menu">
                <MenuItem>Cut</MenuItem>
                <MenuItem>Copy</MenuItem>
                <MenuItem>Paste</MenuItem>
              </SubMenu>
          <MenuItem>WordGame</MenuItem>
        </Menu>
      </Box>
      
    </div>
  )
}

export default MenuBar;