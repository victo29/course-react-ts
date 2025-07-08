import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, Button, Divider, Menu, MenuItem } from '@mui/material';
import React from 'react';

interface IMenuOptionsProps{
  onClickBack?: () => void;
  onClickDelete?: () => void;
  onClickSave?: () => void;
}

export const MenuOptions: React.FC<IMenuOptionsProps> = ({
  onClickBack,
  onClickDelete,
  onClickSave,
}) =>{

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return(
    <Box>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Opções

      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
          },
        }}
      >

        { onClickSave && (
          <MenuItem onClick={() =>{
            handleClose();
            onClickSave?.();
          }}>
            Salvar
          </MenuItem>
        )}

        { onClickDelete && (
          <MenuItem onClick={() =>{
            handleClose();
            onClickDelete?.();
          }}>
            Deletar
          </MenuItem>
        )}

        <Divider/>

        { onClickBack && (
          <MenuItem onClick={() =>{
            handleClose();
            onClickBack?.();
          }}>
            Voltar
          </MenuItem>
        )}
      </Menu>

    </Box>
  );
};
