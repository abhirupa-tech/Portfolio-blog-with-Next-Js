import { styled } from '@mui/material/styles';
import { Grid, Theme } from '@mui/material';
import { Col } from 'react-grid-system';

export const DeveloperIntro = styled('div')(({ theme }) => ({
  margin: 'auto!important',
  padding: '0px!important',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',
  alignItems: 'center',   
  [theme.breakpoints.down('md')]: {
    // fontSize: '1.2em',
    // width: '60vw',
  },
  [theme.breakpoints.down('sm')]: {
    height: 'fit-content',
  },
}));

export const homePageGridStyles = (theme: Theme) => ({
    height: '85vh', 
    marginTop:'100px',    
  [theme.breakpoints.down('md')]: {    
    marginTop: '10vh',
    height: 'fit-content',
  },
  [theme.breakpoints.down('sm')]: {
    height: '90vh',
    marginTop: '10vh',
  },
});

export const DeveloperName = styled('div')(({ theme }) => ({
  color: '#FFFFFF',
  textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  fontFamily: 'MontserratHeaderBold',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: 'normal',
  letterSpacing: '-4px',
  textAlign: 'center',
  width: '100%',
  marginTop: '30px',
  fontSize: '80px',
  [theme.breakpoints.between('sm', 'md')]: {
    fontSize: '8vh',
    letterSpacing: '-0.1vh',
    marginTop: '5vh',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '3em',
    letterSpacing: '0px',
    height: 'fit-content'
  },
}));

export const DeveloperAbout = styled('div')(({ theme }) => ({
  color: '#EFEFEF',
  fontFamily: 'Montserrat',
  fontSize: '20px',
  width: '70%',
  fontWeight: 500,
  letterSpacing: '1.2px',
  display: 'inline-block',
  textAlign: 'center',
  [theme.breakpoints.between('sm', 'md') ]: {
    fontSize: '2.5vh',
    width: '80vw',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2vh',
    lineHeight: '2.8vh',
    fontWeight: 400,
    width: '80vw',
  },
}));

export const ProfileHeadShot = styled(Grid)(({ theme }) => ({
    height: 'fit-content',
    textAlign: 'center',
    alignItems: 'center',
    marginTop: '10vh',
    // [theme.breakpoints.between('sm', 'md')]: {
    //     width: '100vw',
    // },
    // [theme.breakpoints.down('sm')]: {
    //     width: '100vw',
    // },
}));

export const Root = styled('div')({});

export const StyledImage = styled('img')(({ theme }) => ({
  maxWidth: '400px',
  height: 'auto',
  [theme.breakpoints.between('sm', 'md')]: {
    maxWidth: '40vw',
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '60vw',
    fontWeight: '400',
  },
}));

export const IntroductionColumn = styled(Col)({
  margin: 'auto!important',
  padding: '0px!important',
});

export const BlogContainer = styled('div')(({ theme }) => ({
  backgroundColor: 'transparent',
  padding: 0,
  margin: '0 auto',
  marginTop: '10vh',
  display: 'flex',
  flexWrap: 'wrap',
  [theme.breakpoints.up('md')]: {    
    width: '70vw',
    height: '70vh',
    marginTop: '0vh',
  },
  [theme.breakpoints.between('sm', 'md')]: {
    width: '80vw',
  },
  [theme.breakpoints.down('sm')]: {
    width: '95vw',
    fontWeight: '400',
  },
  // You will need to adjust the media queries according to your theme breakpoints
}));

export const CustomRow = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});
