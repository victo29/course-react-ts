import { Box, Button, Icon, Paper, useTheme, TextField} from '@mui/material';
import React from 'react';

interface IListingToolsProps{
  searchText?: string;
  showSearchInput?: boolean;
  changeSearchText?: (newText: string) => void;
  buttonText?: string;
  showButtonNew?: boolean;
  onClickNew?: () => void;
}

export const ListingTools: React.FC<IListingToolsProps> = ( {
  searchText = '',
  showSearchInput = false,
  changeSearchText,
  buttonText = 'Novo',
  onClickNew,
  showButtonNew = true

} ) => {

  const theme = useTheme();

  return(
    <Box component={Paper}
      height={theme.spacing(5)}
      marginX={1}
      padding={1}
      paddingX={2}
      display='flex'
      alignItems='center'
      gap={1}
    >
      {showSearchInput && (
        <TextField
          placeholder='Pesquisar...'
          value={searchText}
          size='small'
          onChange={(e) => changeSearchText?.(e.target.value)}
        />
      )}
      <Box flex={1} display='flex' justifyContent='end'>
        {showButtonNew && (
          <Button
            color='primary'
            disableElevation
            variant='contained'
            onClick={onClickNew}
            endIcon={<Icon>add</Icon>}
          >
            {buttonText}
          </Button>
        )}
      </Box>
    </Box>
  );

};
