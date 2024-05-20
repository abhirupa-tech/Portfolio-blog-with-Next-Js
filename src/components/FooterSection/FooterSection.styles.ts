import { styled } from '@mui/system';
import { Link, Stack } from '@mui/material';

export const Root = styled(Stack)(({ theme }) => ({
  background: '#F0F0F0',
  margin: 'auto',
  padding: '20px 10px',
  borderTop: '1px solid grey',
  '> a' : {
    colors: '#FFFFFF',

  },
  [theme.breakpoints.between('sm', 'md')]: {
    padding: '10px',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '10px 0px',
    fontSize: '12px'
  },
}));


export const Item = styled(Link)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));