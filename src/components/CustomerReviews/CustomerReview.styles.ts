import { styled } from '@mui/material/styles';
import { Box, Container, Grid, Paper, Theme } from '@mui/material';
import { Col } from 'react-grid-system';

export const DeveloperIntro = styled(Grid)(({ theme }) => ({
  margin: 'auto!important',
  padding: '20px!important',
}));

export const Root = styled(Grid)(({ theme }) => ({
  margin: 'auto!important',
  padding: '20px!important',
}));

export const Card = styled(Paper)(({ theme }) => ({
  width: '350px',
  padding: '20px',
  fontSize: '18px',
  borderRadius: '10px',
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
