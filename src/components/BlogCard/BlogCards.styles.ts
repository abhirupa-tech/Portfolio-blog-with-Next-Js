import { CardContent, CardMedia, Button, Box, Paper } from '@mui/material';
import BlogImage from '../../images/blog3img.jpg';
import { styled } from '@mui/material/styles';
import Background from './../../images/blogImage.jpg';



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
  height: '300px',
  padding: '30px',
  // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
  // url(${Background})`,
  backgroundSize: 'cover', /* This ensures the image covers the entire background */
  backgroundRepeat: 'no-repeat', /* Prevents repetition of the image */
  position: 'relative',  
  '&:hover': {
    cursor: 'pointer',    
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 1)),
    url(${Background})`,
    // backgroundSize: 'cover',
    // backgroundRepeat: 'no-repeat',
    transition: 'all 1s ease',
  },  
  [theme.breakpoints.down('sm')]: {
    height: '300px',
    padding: '0px',
    marginTop: '10px',
  },
}));

export const BlogContent = styled(Box)(({ theme }) => ({  
  position: 'absolute',
  bottom: '20',
  left: '30',
  right: '30' ,
  color: 'whitesmoke',
  [theme.breakpoints.down('sm')]: {
    fontSize: '3vh',
    lineHeight: '1.2em',
    WebkitLineClamp: 3,
    bottom: '40',
  },
}));

export const BlogCardHeader = styled(Box)(({ theme }) => ({
  fontSize: '18px',
  fontFamily: 'MontserratHeaderBold',
  display: '-webkit-box',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  [theme.breakpoints.between('sm', 'md')]: {
    fontSize: '32px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '24px',
    WebkitLineClamp: 3,
  },
}));

export const BlogCardDate = styled(Box)(({ theme }) => ({
  fontSize: '12px',
  margin: '10px 0px',
  fontFamily: 'MontserratStandardLight',
  [theme.breakpoints.between('sm', 'md')]: {
    fontSize: '22px',
    lineHeight: '1.2em',
    WebkitLineClamp: 3,
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '18px',
    // lineHeight: '20px',
    // WebkitLineClamp: 3,
  },
}));

export const BlogTextArea = styled(CardContent)(({ theme }) => ({
  padding: '20px !important',
}));

export const BlogCardContent = styled('div')(({ theme }) => ({
    marginTop: '2vh',
    fontFamily: 'MontserratStandardLight',
    fontSize: '2vh',
    fontWeight: 600,
    letterSpacing: '1px',
    flexGrow: 1,
    display: '-webkit-box',
    WebkitLineClamp: 7, // Limit to 5 lines
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',  
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: '32px',
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
    component: "img",
    [theme.breakpoints.between('sm', 'md')]: {
        component: "img",
        height: "20vh",
    },
    [theme.breakpoints.down('sm')]: {
        component: "img",
        height: "20vh",
    },
}));

export const MobileBlogCardImage = styled(CardMedia)(({ theme }) => ({
    [theme.breakpoints.between('sm', 'md')]: {
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
  [theme.breakpoints.up('md')]: {
    position: 'relative',
    bottom: '0px',
    float: 'right',
    marginBottom: '2px !important',
    fontSize: '0.8em !important',
  },
  [theme.breakpoints.between('sm', 'md')]: {
    marginBottom: '2px !important',
    fontSize: '1.8vh !important',
  },
  [theme.breakpoints.down('sm')]: {
    marginBottom: '2px !important',
    fontSize: '0.6em !important',
  },
}));
