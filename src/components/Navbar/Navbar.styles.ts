import { styled } from '@mui/material/styles';
import { CSSObject, Grid, Theme } from '@mui/material';

export const Root = styled('div')(({ theme }) => ({
    height: 'fit-content',
    textAlign: 'center',
    padding: '2vh 0vw',
    fontFamily: 'Montserrat',
    fontSize: '1.4rem',
    color: 'white',
    backgroundColor: '#243d55',
    zIndex: 1000,
    position: 'sticky',
    top: 0,
    [theme.breakpoints.down('md') && theme.breakpoints.up('sm')]: {
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
    height: '10vh',
    backgroundColor: 'none',
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontSize: '1.4rem',
    color: 'white',
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

