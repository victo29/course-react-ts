import { Button, Icon, Skeleton, Typography } from '@mui/material';

interface IActionButtonProps {
  show?: boolean;
  loading?: boolean;
  text: string;
  icon: string;
  variant?: 'contained' | 'outlined';
  onClick?: () => void;
  widthSkeleton?: number;
  hideOn?: boolean; // condição extra como !smDown, !mdDown, etc.
}

export const ActionButton: React.FC<IActionButtonProps> = ({
  show = true,
  loading = false,
  text,
  icon,
  variant = 'outlined',
  onClick,
  widthSkeleton = 110,
  hideOn = false,
}) => {
  if (!show || hideOn) return null;

  if (loading) return <Skeleton width={widthSkeleton} height={60} />;

  return (
    <Button
      color="primary"
      disableElevation
      variant={variant}
      startIcon={<Icon>{icon}</Icon>}
      onClick={onClick}
    >
      <Typography
        variant="button"
        whiteSpace="nowrap"
        textOverflow="ellipsis"
        overflow="hidden"
      >
        {text}
      </Typography>
    </Button>
  );
};
