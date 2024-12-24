import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';

// Define your styled components using MUI's styled utility
export const Root = styled('div')(({ theme }) => ({
  padding: '20px',
  maxWidth: '100%',
  [theme.breakpoints.between('sm', 'md')]: {
    textAlign: 'left',
    padding: '0px',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '20px 5px!important',
  }
}));

export const MentorshipImage = styled(Container)(({ theme }) => ({
  height: '65vh',
}));

export const MentorshipHeader = styled('div')(({ theme }) => ({
  color: '#3C3C3C',
  fontFamily: 'MontserratHeaderBold',
  fontSize: '28px',
  [theme.breakpoints.between('sm', 'md')]: {
    fontSize: '28px',
    // lineHeight: '7vh',
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
    fontSize: '22px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '18px',
  },
}));
