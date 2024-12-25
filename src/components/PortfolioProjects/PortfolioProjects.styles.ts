import { Box, CardContent, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';



export const Root = styled('div')(({ theme }) => ({
    padding: '20px!important',  
    [theme.breakpoints.down('sm')]: {    
        padding: '40px 0px!important',
    },
    [theme.breakpoints.between('sm', 'md')]: {
        padding: '40px 0px!important',
    },
}));

export const Card = styled(Paper)(({ theme }) => ({    
    borderRadius: '20px !important',
    boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)',

    [theme.breakpoints.down('sm')]: {
        boxShadow: 'none',
        border: '1px solid #c8c8c8',
        margin: '0px'
    },
    // '&:hover': {
    //     cursor: 'pointer',    
    //     boxShadow: '2px 4px 5px rgba(0, 0, 0, 0.3)',
    //     transition: 'all 0.15s ease',
    // }
}));

export const BlogCard = styled(Paper)(({ theme }) => ({
    borderRadius: '20px 20px 0px 0px !important',
    height: '150px',
    padding: '10px 20px',
    backgroundSize: 'cover', /* This ensures the image covers the entire background */
    backgroundRepeat: 'no-repeat', /* Prevents repetition of the image */
    [theme.breakpoints.down('sm')]: {
        height: '150px',
        padding: '0px',
    },
}));

export const BlogContent = styled(Box)(({ theme }) => ({
    marginTop: '10px',
    padding: '10px 15px',
    fontFamily: 'MontserratRegular',
    [theme.breakpoints.down('sm')]: {
        fontSize: '15px',
        WebkitLineClamp: 3,
        bottom: '40',
    },    
}));

export const BlogCardHeader = styled(Box)(({ theme }) => ({
    fontSize: '16px',
    fontFamily: 'MontserratHeaderBold',
    display: '-webkit-box',
    overflow: 'hidden',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    lineHeight: '20px',
    color: '#4d4d4d',
    [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '22px',
        lineHeight: '26px',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '17px',
        lineHeight: '1.4em',
    },
}));

export const BlogCardDescription = styled(Box)(({ theme }) => ({
    margin: '10px 0px',
    display: '-webkit-box',
    overflow: 'hidden',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 4,
    trimEnd: true,

    [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '18px',
        lineHeight: '23px',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '15px',
        lineHeight: '20px',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '14px',
        lineHeight: '20px',
    },
}));

export const BlogTextArea = styled(CardContent)(({ theme }) => ({
    padding: '20px !important',
}));

export const Header = styled('div')(({ theme }) => ({
    color: '#3C3C3C',
    fontFamily: 'MontserratHeaderBold',
    fontSize: '28px',
    margin: '2vh 0vh 5vh 0vh',
    [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '28px',
        margin: '2vh 0vh 2vh 0vh',
    },
    [theme.breakpoints.down('sm')]: {
      // marginTop: '2vh',
        fontSize: '24px',
        margin: '2vh 0vh 2vh 0vh',
        padding: '0px',
    },
}));

export const SourceLink = styled('button')(({ theme }) => ({
    fontSize: '18px',
    margin: '10px 0px',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#3498db', // Modern blue color
    color: '#fff',
    cursor: 'pointer',
    transition: 'all 0.3s ease',

    '&:hover': {
        backgroundColor: '#2980b9', // Darker blue on hover
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Minimalist shadow
    },

    [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '22px',
        padding: '12px 24px',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '18px',
        padding: '10px 20px',
    },
}));
