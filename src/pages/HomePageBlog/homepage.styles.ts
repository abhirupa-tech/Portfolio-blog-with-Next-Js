import { styled } from '@mui/material/styles';
import { CSSObject, Grid, Theme } from '@mui/material';
import { Col } from 'react-grid-system';

export const DeveloperIntro = styled('div')(({ theme }) => ({
  margin: 'auto!important',
  padding: '0px!important',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',
  alignItems: 'center',
}));

export const homePageGridStyles = (theme: Theme) => ({
    height: '85vh', 
    marginTop:'15vh',    
  [theme.breakpoints.down('md')]: {
    // fontSize: '1.2em',
    // width: '60vw',
  },
  [theme.breakpoints.down('sm')]: {
    height: '90vh',
    marginTop: '5vh',
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
  marginTop: '60px',
  fontSize: '8em',
  [theme.breakpoints.down('md')]: {
    fontSize: '5em',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '4em',
    marginTop: '0px',
    letterSpacing: '-2px',
    height: 'fit-content'
  },
}));

export const DeveloperAbout = styled('div')(({ theme }) => ({
  color: '#EFEFEF',
  fontFamily: 'Montserrat',
  fontSize: '2em',
  width: '90%',
  fontWeight: 500,
  letterSpacing: '1.2px',
  display: 'inline-block',
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.2em',
    width: '60vw',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1em',
    lineHeight: '2.8vh',
    fontWeight: 400,
    width: '80vw',
  },
}));

// Define the common styles as a function returning a CSSObject
const profileHeadShotStyles = (): CSSObject => ({
    height: 'fit-content',
    textAlign: 'center',
    alignItems: 'center',
});
  

export const ProfileHeadShotMobile = styled(Grid)(({ theme }) => ({
    ...profileHeadShotStyles(),    
    [theme.breakpoints.down('md')]: {
        // fontSize: '1.2em',
        // width: '60vw',
    },
    [theme.breakpoints.down('sm')]: {
        width: '100vw',
    },
}));

export const ProfileHeadShotDefault = styled(Grid)(({ theme }) => ({
    ...profileHeadShotStyles(),
}));

export const Root = styled('div')({});

export const Icon = styled('img')(({ theme }) => ({
  paddingRight: '20px',
  cursor: 'pointer',
  height: '10vh',
  '&:hover': {
    filter: 'brightness(150%)',
    transition: 'all 0.2s ease-in-out',
  },
  [theme.breakpoints.down('md')]: {
      // fontSize: '1.2em',
      // width: '60vw',
  },
  [theme.breakpoints.down('sm')]: {
    height: '15vw',
  },
  
}));

export const IconContainer = styled('div')({
  display: 'flex',
  width: '100%',
  alignContent: 'center',
  marginTop: '2vh',
  justifyContent: 'center',
  alignItems: 'center',
});

export const MaterialButton = styled('div')({
  textAlign: 'center',
  alignContent: 'center',
  color: 'ghostwhite',
  marginTop: '6vh',
  background: 'linear-gradient(#f33c6d, #a30d2c)',
  borderRadius: '20px',
  padding: '10px 20px',
  width: 'fit-content',
  fontFamily: 'MontserratStandardLight',
  fontSize: '1.5em',
  fontWeight: 600,
  display: 'inline-block',
  '&:hover': {
    background: 'linear-gradient(#eb5e84,#bf3030)',
    color: 'whitesmoke',
    cursor: 'pointer',
    shadow: '2px',
    transition: 'all 0.2s ease-in-out',
  },
  // You will need to adjust the media queries according to your theme breakpoints
});

export const StyledImage = styled('img')(({ theme }) => ({
  maxWidth: '30vw',
  height: 'auto',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '80vw',
  },
  [theme.breakpoints.up('md')]: {
    // Add styles for md breakpoint
  },
}));

export const IntroductionColumn = styled(Col)({
  margin: 'auto!important',
  padding: '0px!important',
});

export const BlogContainer = styled('div')({
  backgroundColor: 'transparent',
  padding: 0,
  width: '70%',
  margin: '0 auto',
  marginTop: '10vh',
  display: 'flex',
  flexWrap: 'wrap',
  // You will need to adjust the media queries according to your theme breakpoints
});

export const CustomRow = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});
