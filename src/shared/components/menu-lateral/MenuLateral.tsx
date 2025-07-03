import { Avatar, Divider, Drawer, List, useTheme } from '@mui/material';
import { Box, useMediaQuery } from '@mui/system';

import { useDrawerContext } from '../../contexts';
import React from 'react';
import { ListItemLink } from './list-item-link';


interface IMenuLateralProps {
  children: React.ReactNode
}

export const MenuLateral: React.FC<IMenuLateralProps> = ({children}) => {

  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const { isDrawerOpen , toggleDrawerOpen, drawerOptions } = useDrawerContext();

  return (
    <>
      <Drawer  open={isDrawerOpen} variant={smDown ? 'temporary' : 'permanent'} onClose={toggleDrawerOpen}>
        <Box width={theme.spacing(28)} height='100%' display='flex' flexDirection='column' >

          <Box width='100%' height={theme.spacing(20)} display='flex' alignItems='center' justifyContent='center'>
            <Avatar alt=''
              sx={{height: theme.spacing(12), width: theme.spacing(12)}}
            />
          </Box>

          <Divider/>

          <Box flex={1}>

            <List component='nav'>
              {drawerOptions.map( drawerOptions =>(

                <ListItemLink
                  key={drawerOptions.path}
                  icon={drawerOptions.icon}
                  label={drawerOptions.label}
                  to={drawerOptions.path}
                  onClick={smDown ? toggleDrawerOpen : undefined}
                />

              ))}


            </List>

          </Box>

        </Box>
      </Drawer>

      <Box height='100vh' marginLeft={smDown ?  0 : theme.spacing(28)}>
        {children}
      </Box>
    </>

  );
};
