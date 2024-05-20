import React from 'react';
import { styled } from '@mui/system';
import { Box, Container, Paper, Stack } from '@mui/material';

export const Root = styled(Stack)(({ theme }) => ({
  background: '#F0F0F0',
  margin: 'auto',
  padding: '20px',
  borderTop: '1px solid grey',
  [theme.breakpoints.between('sm', 'md')]: {
    padding: '4vw 10vw',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '4vh 10vw',
  },
}));

export const FooterText = styled('div')(({ theme }) => ({
  color: 'white',
  fontFamily: 'MontserratHeaderBold',
  fontSize: '7vh',
  lineHeight: 'normal',
  width: '80%',
  marginTop: '5vh',
  [theme.breakpoints.between('sm', 'md')]: {
    fontSize: '5vh',
    lineHeight: '6vh',
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: '2vh',
    fontSize: '1.32em',
    letterSpacing: 0,
    lineHeight: '5vh',
    padding: '0vw 4vw',
  },
}));

export const FooterSubtext = styled('div')(({ theme }) => ({
  color: '#efefef',
  fontFamily: 'MontserratStandardLight',
  fontSize: '2.5vh',
  fontWeight: 400,
  letterSpacing: 0,
  [theme.breakpoints.between('sm', 'md')]: {
    fontSize: '2.5vh',
    lineHeight: '4vh',
    paddingTop: '1vw',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '2vw 4vw',
    fontSize: '0.9em',
    lineHeight: '3vh',
    marginTop: 0,
  },
}));

export const ActionBarContainer = styled('div')(({ theme }) => ({
    width:'fit-content',
    [theme.breakpoints.between('sm', 'md')]: {
    //   fontSize: '2.5vh',
    //   lineHeight: '4vh',
    //   paddingTop: '1vw',
    },
    [theme.breakpoints.down('sm')]: {
    //   padding: '2vw 4vw',
    //   fontSize: '0.9em',
    //   lineHeight: '3vh',
    //   marginTop: 0,
    },
  }));


  export const Item = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));