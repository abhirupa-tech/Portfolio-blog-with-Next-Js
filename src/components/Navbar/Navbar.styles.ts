import { styled } from '@mui/material/styles';

export const Root = styled('div')(({ theme }) => ({
    textAlign: 'center',
    padding: '20px 0px',
    fontFamily: 'Montserrat',
    fontSize: '14px',
    borderBottom: '1px solid grey',
    color: 'smokegrey',
    backgroundColor: 'transparent',
    zIndex: 1000,
    top: 0,
    [theme.breakpoints.between('sm', 'md')]: {
        color: 'smokewhite',
        fontSize: '18px',
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

