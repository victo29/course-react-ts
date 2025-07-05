import React from 'react';
import { Box, Avatar, Divider, Drawer, List, useTheme, Icon, ListItemButton, ListItemIcon, ListItemText  } from '@mui/material';
import { useMediaQuery } from '@mui/system';

import { useAppThemeContext, useDrawerContext } from '../../contexts';
import { ListItemLink } from './components';


interface IMenuLateralProps {
  children: React.ReactNode
}

export const MenuLateral: React.FC<IMenuLateralProps> = ({children}) => {

  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const { isDrawerOpen , toggleDrawerOpen, drawerOptions } = useDrawerContext();
  const {toggleTheme , themeName} = useAppThemeContext();

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

          <Box>

            <List component='nav'>

              <ListItemButton onClick={toggleTheme}>
                <ListItemIcon>
                  {themeName === 'dark' ?
                    <Icon>sunny</Icon>
                    :
                    <Icon>dark_mode</Icon>

                  }
                </ListItemIcon>
                <ListItemText primary='Alterar tema'/>
              </ListItemButton>

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
