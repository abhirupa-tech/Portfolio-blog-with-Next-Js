import * as React from 'react';
import { Container, Card } from '@mui/material';
import { styled } from '@mui/material/styles';
import { WidthFull } from '@mui/icons-material';

// Define your styled components using MUI's styled utility
export const Root = styled('div')(({ theme }) => ({
  margin: 'auto',
  width: '75%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',
  alignItems: 'center',
  marginTop: '10vh',
  marginBottom: '10vh',
  [theme.breakpoints.between('sm', 'md')]: {
    textAlign: 'center',
  },
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
    width: '100%',
    margin: '5vh 0vh',
  },
}));

export const MentorshipImage = styled(Container)(({ theme }) => ({
  height: '65vh',
}));

export const MentorshipHeader = styled('div')(({ theme }) => ({
  marginTop: '10vh',
  background: 'linear-gradient(272deg, #0b6195 12.22%, #0b6195 52.69%, #213b49 98.47%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)',
  fontFamily: 'MontserratHeaderBold',
  fontSize: '7vh',
  lineHeight: '7.5vh',
  letterSpacing: '-0.3vh',
  [theme.breakpoints.up('md')]: {
    width: '60vw',
    lineHeight: '8vh',
  },
  [theme.breakpoints.between('sm', 'md')]: {
    fontSize: '6vh',
    lineHeight: '7vh',
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: '2vh',
    fontSize: '2em',
    letterSpacing: '-2px',
    lineHeight: '5vh',
    padding: '0vw 10vw',
  },
}));

export const MentorshipAbout = styled('div')(({ theme }) => ({
  color: '#000',
  marginTop: '2vh',
  fontFamily: 'MontserratStandardLight',
  fontWeight: 600,
  letterSpacing: '1.2px',  
  [theme.breakpoints.up('md')]: {
    width: '60vw',
    lineHeight: '5vh',
    fontSize: '3.2vh',
  },
  [theme.breakpoints.between('sm', 'md')]: {
    fontSize: '2.5vh',
    lineHeight: '4vh',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.8vh',
    lineHeight: '3vh',
    textAlign: 'center',
    padding: '2vw 12vw',
    marginTop: '0vh',
  },
}));
