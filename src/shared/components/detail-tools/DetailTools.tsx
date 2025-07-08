import { Box, Divider, Paper, Skeleton, Theme, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { ActionButton, MenuOptions } from './components';

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
  showMenuOptionsLoading?: boolean,


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
  showMenuOptionsLoading = false,

  onClickNew,
  onClickBack,
  onClickDelete,
  onClickSave,
  onClickSaveBack,

}) =>{

  const smDown =useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const mdDown =useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
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
      {!smDown ? (
        <>
          <ActionButton
            show={showButtonSave}
            loading={showButtonSaveLoading}
            text="Salvar"
            icon="save"
            variant="contained"
            onClick={onClickSave}
          />

          <ActionButton
            show={showButtonSaveBack}
            loading={showButtonSaveBackLoading}
            text="Salvar e voltar"
            icon="save"
            onClick={onClickSaveBack}
            hideOn={mdDown}
          />

          <ActionButton
            show={showButtonDelete}
            loading={showButtonDeleteLoading}
            text="Apagar"
            icon="delete"
            onClick={onClickDelete}
          />

          <ActionButton
            show={showButtonNew}
            loading={showButtonNewLoading}
            text={buttonText}
            icon="add"
            onClick={onClickNew}
            widthSkeleton={180}
          />

          {
            (showButtonBack &&
              (showButtonNew || showButtonDelete || showButtonSave || showButtonSaveBack)
            ) && (

              <Divider orientation="vertical" variant='middle' />
            )
          }

          <ActionButton
            show={showButtonBack}
            loading={showButtonBackLoading}
            text="Voltar"
            icon="arrow_back"
            onClick={onClickBack}
          />
        </>
      ) : (
        <>
          <MenuOptions
            onClickSave={() =>{console.log('Salvando.......');}}
            onClickDelete={() =>{console.log('Deletando.......');}}
            onClickBack={() =>{console.log('Voltando.......');}}
          />
          {showMenuOptionsLoading && <Skeleton width={110} height={60} />}
        </>
      )}
    </Box>
  );
};
