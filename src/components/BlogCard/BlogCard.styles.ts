import { styled } from '@mui/system';
import { Card, CardContent, CardMedia, Button, Box } from '@mui/material';
import BlogImage from '../../images/blog3img.jpg';
import { media } from '../../pages/index.styles';

export const Root = styled('div')`
  margin: 0px 20px;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin-top: 30px;
  }
`;

export const Blog = styled(Card)(({ theme }) => ({
  borderRadius: '20px !important',
  height: '70vh',
  position: 'relative',
  backgroundColor: 'white',
  boxShadow: '10px 10px 15px 0px #00000040',
  display: 'flex',
  flexDirection: 'column',

  [theme.breakpoints.down('md')]: {
    margin: '10px',
    height: '40vh',
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: '0vw',
    marginBottom: '2vw',
  },
}));

export const BlogMobile = styled(Card)(({ theme }) => ({
    borderRadius: '16px',
    boxShadow: '4px 8px 6px -7px #242424',
  }));

export const BlogCardHeader = styled('div')(({ theme }) => ({
  fontSize: '2.8vh',
  fontFamily: 'MontserratHeaderBold',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  [theme.breakpoints.down('md')]: {
    margin: '10px',
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
  
    [theme.breakpoints.down('md')]: {
      margin: '10px',
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
    [theme.breakpoints.down('sm')]: {
        component: "img",
        height: "20vh",
    },
}));

export const MobileBlogCardImage = styled(CardMedia)(({ theme }) => ({
    component: "img",
    height: "140",
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
  [theme.breakpoints.down('sm')]: {
    marginBottom: '2px !important',
    fontSize: '0.6em !important',
  },
}));
