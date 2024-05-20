import * as React from 'react';
import { Container, Card } from '@mui/material';
import { styled } from '@mui/material/styles';

// Define your styled components using MUI's styled utility
export const Root = styled('div')(({ theme }) => ({
  padding: '30px',
  maxWidth: '600px',
  [theme.breakpoints.between('sm', 'md')]: {
    textAlign: 'center',
  },
  [theme.breakpoints.down('sm')]: {
    // padding: '80px',
  },
}));

export const MentorshipImage = styled(Container)(({ theme }) => ({
  height: '65vh',
}));

export const MentorshipHeader = styled('div')(({ theme }) => ({
  color: '#3C3C3C',
  fontFamily: 'MontserratHeaderBold',
  fontSize: '28px',
  [theme.breakpoints.between('sm', 'md')]: {
    fontSize: '6vh',
    lineHeight: '7vh',
  },
  [theme.breakpoints.down('sm')]: {
    // marginTop: '2vh',
    fontSize: '24px',
    // letterSpacing: '-2px',
    // lineHeight: '5vh',
    padding: '0px',
  },
}));

export const MentorshipAbout = styled('div')(({ theme }) => ({
  color: '#000',
  marginTop: '2vh',
  fontSize: '18px',
  marginBottom: '30px',
  [theme.breakpoints.between('sm', 'md')]: {
    fontSize: '2.5vh',
    lineHeight: '4vh',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '18px',
  },
}));
