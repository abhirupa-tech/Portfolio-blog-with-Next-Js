import { styled } from '@mui/system';
import { Box, Container, Grid, Theme } from '@mui/material';
import { Col } from 'react-grid-system';


export const Root = styled(Container)(({ theme }) => ({
  maxWidth: "768px",
  backgroundColor: '#FAFAFA',
  
  [theme.breakpoints.up('md')]: {
    padding: "30px 150px!important",
  },
  [theme.breakpoints.between('sm', 'md')]: {
    maxWidth: "100vw",    
    padding: "30px 100px!important",
  },
  [theme.breakpoints.down('sm')]: {
    padding: "20px",
    height: 'fit-content',
  },
}));

export const DeveloperIntro = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'left',
  textAlign: 'left',
  alignItems: 'left',
  // [theme.breakpoints.down('md')]: {
  //   // fontSize: '1.2em',
  //   // width: '60vw',
  // },
  [theme.breakpoints.down('sm')]: {
    padding: '0px 5px',
    margin: '0px',
  },
}));

export const homePageGridStyles = (theme: Theme) => ({
    height: '85vh',
  // [theme.breakpoints.down('md')]: {    
  //   marginTop: '10vh',
  //   height: 'fit-content',
  // },
  // [theme.breakpoints.down('sm')]: {
  //   height: '90vh',
  //   marginTop: '10vh',
  // },
});

export const DeveloperName = styled(Box)(({ theme }) => ({
  color: '#000000',
  fontFamily: 'MontserratHeaderBold',
  lineHeight: 'normal',
  textAlign: 'left',
  width: '90%',
  fontSize: '25px',   
  [theme.breakpoints.between('sm', 'md')]: {
    fontSize: '28px',
  },
}));

export const DeveloperAbout = styled(Box)(({ theme }) => ({
  color: '#000000',
  fontSize: '18px',
  display: 'inline-block',
  textAlign: 'left',  
  [theme.breakpoints.between('sm', 'md')]: {
    fontSize: '22px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '18x',
  },
}));

export const ProfileHeadShot = styled(Grid)(({ theme }) => ({
    height: 'fit-content',
    textAlign: 'center',
    alignItems: 'center',
    padding: '40px', 
    [theme.breakpoints.down('sm')]: {
      marginTop: '-2vh',
      width: '100%',
    },
}));


export const StyledImage = styled('img')(({ theme }) => ({
  maxWidth: '250px',
  height: 'auto',
  [theme.breakpoints.down('sm')]: {
    // alignItems
    maxWidth: '80%',
  }, 
  [theme.breakpoints.between('sm', 'md')]: {
    maxWidth: '280px',
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
  // [theme.breakpoints.up('md')]: {    
  //   width: '70vw',
  //   height: '70vh',
  //   marginTop: '0vh',
  // },
  // [theme.breakpoints.between('sm', 'md')]: {
  //   width: '80vw',
  // },
  // [theme.breakpoints.down('sm')]: {
  //   width: '95vw',
  //   fontWeight: '400',
  // },
  // You will need to adjust the media queries according to your theme breakpoints
}));

export const CustomRow = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});
