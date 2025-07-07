import { Box, Button, Divider, Icon, Paper, useTheme } from '@mui/material';
import React from 'react';

interface IDetailToolsProps{
  buttonText?: string;

  showButtonNew?: boolean;
  showButtonBack?: boolean;
  showButtonDelete?: boolean;
  showButtonSave?: boolean;
  showButtonSaveBack?: boolean;

  onClickNew?: () => void;
  onClickBack?: () => void;
  onClickDelete?: () => void;
  onClickSave?: () => void;
  onClickSaveBack?: () => void;

}

export const DetailTools: React.FC<IDetailToolsProps> = ({
  buttonText = 'Novo',

  showButtonNew = true,
  showButtonBack = true,
  showButtonDelete = true,
  showButtonSave = true,
  showButtonSaveBack = false,

  onClickNew,
  onClickBack,
  onClickDelete,
  onClickSave,
  onClickSaveBack,

}) =>{

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
      { showButtonSave && (
        <Button
          color='primary'
          disableElevation
          variant='contained'
          startIcon={<Icon>save</Icon>}
          onClick={onClickSave}
        >
          Salvar
        </Button>)
      }

      { showButtonSaveBack && (
        <Button
          color='primary'
          disableElevation
          variant='outlined'
          startIcon={<Icon>save</Icon>}
          onClick={onClickSaveBack}
        >
          Salvar e voltar
        </Button>)
      }

      {showButtonDelete && (
        <Button
          color='primary'
          disableElevation
          variant='outlined'
          startIcon={<Icon>delete</Icon>}
          onClick={onClickDelete}
        >
          Apagar
        </Button>)
      }

      {showButtonNew && (
        <Button
          color='primary'
          disableElevation
          variant='outlined'
          startIcon={<Icon>add</Icon>}
          onClick={onClickNew}
        >
          {buttonText}
        </Button>)
      }

      <Divider variant='middle' orientation='vertical'/>

      {showButtonBack && (
        <Button
          color='primary'
          disableElevation
          variant='outlined'
          startIcon={<Icon>arrow_back</Icon>}
          onClick={onClickBack}
        >
          Voltar
        </Button>)
      }
    </Box>
  );
};
