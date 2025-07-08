import { Box, Theme, Icon, IconButton, Typography, useTheme } from '@mui/material';
import { useMediaQuery} from '@mui/system';
import React from 'react';
import { useDrawerContext } from '../contexts';

interface ILayoutBaseProps {
  children:React.ReactNode;
  title: string;
  toolsBarrs: React.ReactNode | undefined;
}

export const LayoutBase: React.FC<ILayoutBaseProps> = ({children, title, toolsBarrs}) =>{

  const smDown =useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const mdDown =useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const theme =useTheme();

  const {toggleDrawerOpen} = useDrawerContext();

  return(
    <Box height='100%' display='flex' flexDirection='column' gap={1}>
      <Box padding={1} display='flex' alignItems='center' gap={1}  height={ theme.spacing(smDown ? 6 : mdDown ? 8 : 12) }>

        {smDown &&
          <IconButton onClick={toggleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>
        }


        <Typography
          overflow='hidden'
          whiteSpace='nowrap'
          textOverflow='ellipsis'
          variant={smDown ? 'h5' : mdDown ? 'h4' : 'h3'}
        >

          {title}
        </Typography>
      </Box>

      {toolsBarrs &&
        <Box>
          {toolsBarrs}
        </Box>
      }

      <Box flex={1} overflow='auto'>
        {children}
      </Box>
    </Box>
  );
};
