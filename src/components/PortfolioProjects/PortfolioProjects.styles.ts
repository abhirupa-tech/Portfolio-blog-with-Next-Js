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

export const BlogCard = styled(Paper)(({ theme }) => ({
    borderRadius: '20px !important',
    height: '150px',
    padding: '10px 20px',
    backgroundSize: 'cover', /* This ensures the image covers the entire background */
    backgroundRepeat: 'no-repeat', /* Prevents repetition of the image */
    [theme.breakpoints.down('sm')]: {
        height: '150px',
        padding: '0px',
        marginTop: '10px',
    },
}));

export const BlogContent = styled(Box)(({ theme }) => ({
    marginTop: '20px',
    [theme.breakpoints.down('sm')]: {
        fontSize: '3vh',
        lineHeight: '1em',
        WebkitLineClamp: 3,
        bottom: '40',
    },
}));

export const BlogCardHeader = styled(Box)(({ theme }) => ({
    fontSize: '18px',
    fontFamily: 'MontserratHeaderBold',
    display: '-webkit-box',
    overflow: 'hidden',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 3,
    lineHeight: '25px',
    color: '#4d4d4d',
    [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '22px',
        lineHeight: '26px',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '22px',
        lineHeight: '1.4em',
    },
}));

export const BlogCardDescription = styled(Box)(({ theme }) => ({
    fontSize: '18px',
    margin: '10px 0px',
    display: '-webkit-box',
    overflow: 'hidden',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 5,
    trimEnd: true,

    [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '22px',
        lineHeight: '1.2em',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '18px',
        lineHeight: '1.3em',
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

export const SourceLink = styled('a')(({ theme }) => ({
    fontSize: '18px',
    margin: '10px 0px',
    display: '-webkit-box',
    overflow: 'hidden',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 5,
    trimEnd: true,

    [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '22px',
        lineHeight: '1.2em',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '18px',
        lineHeight: '1.3em',
    },
}));