import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";

export const Icon = styled(IconButton)(({ theme }) => ({
    '&:hover': {
      backgroundColor: 'inherit', // Reset the background color on hover
    },
  }));
  
  export const IconImg = styled('img')(({ theme }) => ({
    paddingRight: '8px',
    cursor: 'pointer',
    height: '8vh',
    fontSize: '2vh',
    '&:hover': {
      filter: 'brightness(150%)',
      transition: 'all 0.2s ease-in-out',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '4vh',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      height: '7vh',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '0px 8px',
      height: '10vw',
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

