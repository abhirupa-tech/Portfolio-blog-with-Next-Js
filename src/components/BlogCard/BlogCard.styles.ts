import { Card, CardContent, CardMedia, Button, Box } from '@mui/material';
import BlogImage from '../../images/blog3img.jpg';
import { styled } from '@mui/material/styles';
import { Height } from '@mui/icons-material';

export const Root = styled('div')(({ theme }) => ({
  margin: '0px 20px',
  alignItems: 'center',
  [theme.breakpoints.down('md') && theme.breakpoints.up('sm')]: {
    margin: '30px 0px',
    width: '100%',
    height: '100%',
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: '30px',
  },
}));

export const Blog = styled(Card)(({ theme }) => ({
  borderRadius: '20px !important',
  height: '70vh',
  position: 'relative',
  backgroundColor: 'white',
  boxShadow: '10px 10px 15px 0px #00000040',
  display: 'flex',
  flexDirection: 'column',

  [theme.breakpoints.down('md') && theme.breakpoints.up('sm')]: {
    marginTop: '0vw',
    marginBottom: '40px',
    width: '100%',
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: '0vw',
    marginBottom: '2vw',
  },
}));

export const BlogMobile = styled(Card)(({ theme }) => ({
    [theme.breakpoints.down('md') && theme.breakpoints.up('sm')]: {
        borderRadius: '30px',
        boxShadow: '10px 10px 15px 0px #00000060',
        height: '420px',
    },
    [theme.breakpoints.down('sm')]: {
        borderRadius: '16px',
        boxShadow: '4px 8px 6px -7px #242424',
        height: '100%',
    },
}));

export const BlogCardHeader = styled('div')(({ theme }) => ({
  fontSize: '2.8vh',
  fontFamily: 'MontserratHeaderBold',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  [theme.breakpoints.down('md') && theme.breakpoints.up('sm')]: {
    fontSize: '2.2em',
    lineHeight: '1.2em',
    WebkitLineClamp: 3,
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1em',
    lineHeight: '20px',
    WebkitLineClamp: 3,
  },
}));

export const BlogTextArea = styled(CardContent)(({ theme }) => ({
  padding: '20px !important',
}));

export const BlogCardContent = styled('div')(({ theme }) => ({
    marginTop: '2vh',
    fontFamily: 'MontserratStandardLight',
    fontSize: '1.85vh',
    fontWeight: 600,
    letterSpacing: '1px',
    flexGrow: 1,
    display: '-webkit-box',
    '-webkit-line-clamp': 5, // Limit to 5 lines
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  
    [theme.breakpoints.down('md') && theme.breakpoints.up('sm')]: {
        marginTop: '20px',
        fontSize: '1.4em',
        WebkitLineClamp: 6,
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '1vh',
      fontSize: '0.7em',
      WebkitLineClamp: 4,
    },
  }));

export const BlogCardImage = styled(CardMedia)(({ theme }) => ({
    borderRadius: '18px 18px 0px 0px',
    height: '30vh',
    order: -1,
    display: 'block',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    image: `url(${BlogImage})`,
    alt: "Static Image",
    [theme.breakpoints.down('md') && theme.breakpoints.up('sm')]: {
        component: "img",
        height: "20vh",
    },
    [theme.breakpoints.down('sm')]: {
        component: "img",
        height: "20vh",
    },
}));

export const MobileBlogCardImage = styled(CardMedia)(({ theme }) => ({
    [theme.breakpoints.down('md') && theme.breakpoints.up('sm')]: {
        component: "img",
        height: "140",
    },
    [theme.breakpoints.down('sm')]: {
        component: "img",
        height: "140",
    },
}));

export const BlogCardTag = styled('div')(({ theme }) => ({
  backgroundColor: 'pink',  
  fontFamily: 'MontserratStandardlight',
  marginTop: '20px',
  width: 'fit-content',
  borderRadius: '5px',
  padding: '3px 12px 3px 12px',
  height: '20px',
}));

export const CardAction = styled(Button)(({ theme }) => ({
  padding: '0px!important',
  marginTop: '1vh!important',
  [theme.breakpoints.down('md') && theme.breakpoints.up('sm')]: {
    marginBottom: '2px !important',
    fontSize: '1.4em !important',
  },
  [theme.breakpoints.down('sm')]: {
    marginBottom: '2px !important',
    fontSize: '0.6em !important',
  },
}));
