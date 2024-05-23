import { styled } from '@mui/material/styles';
import { Box, Grid, Paper } from '@mui/material';

export const Root = styled(Grid)(({ theme }) => ({
  margin: 'auto!important',
  padding: '20px!important',
  [theme.breakpoints.down('sm')]: {    
    padding: '40px 0px!important',
  },
  [theme.breakpoints.between('sm', 'md')]: {   
    padding: '40px 0px!important',
  },
}));

export const Card = styled(Paper)(({ theme }) => ({
  width: '350px',
  padding: '20px',
  fontSize: '18px',
  borderRadius: '10px',
  [theme.breakpoints.down('sm')]: {
    width: 'unset',    
    fontSize: '18px',
  },
}));

export const QuoteMarks = styled(Box)(({ theme }) => ({
  fontSize: '34px',
  fontWeight: '800',
  content: '\"',
}));

export const ReviewAuthorName = styled(Box)(({ theme }) => ({
  fontSize: '18px',
  color: 'grey',
  padding: '10px 0px',
}));
