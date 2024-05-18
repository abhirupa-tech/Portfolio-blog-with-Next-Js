import { styled } from '@mui/material/styles';
import { Container, Grid, Theme } from '@mui/material';
import { Col } from 'react-grid-system';

export const DeveloperIntro = styled(Grid)(({ theme }) => ({
  margin: 'auto!important',
  padding: '20px!important',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'left',
  textAlign: 'left',
  alignItems: 'left',   
  // [theme.breakpoints.down('md')]: {
  //   // fontSize: '1.2em',
  //   // width: '60vw',
  // },
  // [theme.breakpoints.down('sm')]: {
  //   height: 'fit-content',
  // },
}));

export const IntroGrid = styled(Container)(({ theme }) => ({
  maxWidth: "800px",
}));

export const homePageGridStyles = (theme: Theme) => ({
    height: '85vh',
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
  color: '#000000',
  fontFamily: 'MontserratHeaderBold',
  lineHeight: 'normal',
  textAlign: 'left',
  width: '100%',
  fontSize: '25px',
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
  color: '#000000',
  fontFamily: 'MontserratRegular',
  fontSize: '14px',
  width: '100%',
  fontWeight: 500,
  letterSpacing: '0.8px',
  display: 'inline-block',
  textAlign: 'left',
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
    textAlign: 'right',
    alignItems: 'right',
    padding: '40px'
}));

export const Root = styled('div')({});

export const StyledImage = styled('img')(({ theme }) => ({
  maxWidth: '240px',
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
