import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";

export const Icon = styled(IconButton)(({ theme }) => ({
    '&:hover': {
      backgroundColor: 'inherit', // Reset the background color on hover
    },
    padding: "0px",
  }));
  
  export const IconImg = styled('img')(({ theme }) => ({
    paddingRight: '24px',
    cursor: 'pointer',
    '&:hover': {
      filter: 'brightness(150%)',
      transition: 'all 0.2s ease-in-out',
    },
    [theme.breakpoints.up('md')]: {
      height: '40px',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      height: '60px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '0px 8px',
      height: '10vw',
    },  
  }));
  
  export const IconContainer = styled('div')({
    display: 'flex',
    width: 'fit-content',
    alignContent: 'center',
    marginTop: '2vh',
    justifyContent: 'center',
    alignItems: 'center',
  });

