import { Box, CardContent, CardMedia, Paper } from '@mui/material';
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

export const ResearchCard = styled(Paper)(({ theme }) => ({
    color: 'black',
    marginTop: '20px',
    // padding: '0px 20px',
    backgroundColor: 'rgba(255, 255, 255)',
    // borderLeft: '2px solid #464239',
    padding: '20px',
    fontSize: '18px',
    borderRadius: '10px',
    [theme.breakpoints.down('sm')]: {
        // fontSize: '3vh',
        // lineHeight: '1.2em',
        WebkitLineClamp: 3,
        bottom: '40',
    },
}));

export const CardHeader = styled(Box)(({ theme }) => ({
    fontSize: '20px',
    // fontFamily: 'MontserratHeaderBold',
    display: '-webkit-box',
    overflow: 'hidden',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '26px',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '20px',
        WebkitLineClamp: 3,
    },
}));

export const BlogCardDescription = styled(Box)(({ theme }) => ({
    fontSize: '18px',
    margin: '10px 0px',
    display: '-webkit-box',
    overflow: 'hidden',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    trimEnd: true,

    [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '22px',
        lineHeight: '1.2em',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '18px',
        lineHeight: '1.3em',
        WebkitLineClamp: 4,
    },
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