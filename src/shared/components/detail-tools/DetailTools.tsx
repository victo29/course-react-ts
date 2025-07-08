import { Box, Button, Divider, Icon, Paper, Skeleton, useTheme } from '@mui/material';
import React from 'react';

interface IDetailToolsProps{
  buttonText?: string;

  showButtonNew?: boolean;
  showButtonBack?: boolean;
  showButtonDelete?: boolean;
  showButtonSave?: boolean;
  showButtonSaveBack?: boolean;

  showButtonNewLoading?: boolean;
  showButtonBackLoading?: boolean;
  showButtonDeleteLoading?: boolean;
  showButtonSaveLoading?: boolean;
  showButtonSaveBackLoading?: boolean;

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

  showButtonNewLoading = false,
  showButtonBackLoading = false,
  showButtonDeleteLoading = false,
  showButtonSaveLoading = false,
  showButtonSaveBackLoading = false,

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
      { (showButtonSave && !showButtonSaveLoading) && (
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

      {showButtonSaveLoading &&(<Skeleton width={110} height={60}/>)}

      { (showButtonSaveBack && !showButtonSaveBackLoading) && (
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

      {showButtonSaveBackLoading &&(<Skeleton width={180} height={60}/>)}


      {(showButtonDelete && !showButtonDeleteLoading) && (
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

      {showButtonDeleteLoading &&(<Skeleton width={110} height={60}/>)}


      {(showButtonNew && !showButtonNewLoading ) && (
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

      {showButtonNewLoading &&(<Skeleton width={110} height={60}/>)}


      <Divider variant='middle' orientation='vertical'/>

      {(showButtonBack && !showButtonBackLoading) && (
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

      {showButtonBackLoading &&(<Skeleton width={110} height={60}/>)}

    </Box>
  );
};
