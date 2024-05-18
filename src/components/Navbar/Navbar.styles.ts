import { styled } from '@mui/material/styles';
import { CSSObject, Grid, Theme } from '@mui/material';

export const Root = styled('div')(({ theme }) => ({
    height: '40px',
    marginBottom: '20px',
    textAlign: 'center',
    padding: '2vh 0vw',
    fontFamily: 'Montserrat',
    fontSize: '2vh',
    color: 'smokegrey',
    backgroundColor: 'transparent',
    zIndex: 1000,
    top: 0,
    [theme.breakpoints.between('sm', 'md')]: {
        color: 'smokewhite',
        fontSize: '2vh',
        padding: '3vh 0vw',
    },
   [theme.breakpoints.down('sm')]: {
      fontSize: '1em',
      padding: '3vh 0vw',
    },
}));

export const Navbar = styled('div')(({ theme }) => ({
    height: '40px',
    backgroundColor: 'none',
    textAlign: 'center',
    alignContent: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2em',
      width: '60vw',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.7em',
      width: '80vw',
    }
}));

