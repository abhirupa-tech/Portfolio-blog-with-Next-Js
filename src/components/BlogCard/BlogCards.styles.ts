import { Box, Button, CardContent, CardMedia, Paper } from '@mui/material';
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

export const Card = styled('div')(({ theme }) => ({
  borderRadius: '20px !important',
  boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)',
  '&:hover': {
    cursor: 'pointer',    
    boxShadow: '2px 4px 5px rgba(0, 0, 0, 0.3)',
    transition: 'all 0.15s ease',
  },  
}));


export const BlogCardImage = styled(CardMedia)(({ theme }) => ({
  height: '200px',
  borderRadius: '20px 20px 0px 0px',
  
  [theme.breakpoints.between('sm', 'md')]: {
    height: '130px',
  },
  [theme.breakpoints.down('sm')]: {
    height: '130px',
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

export const BlogCard = styled(Paper)(({ theme }) => ({  
  boxShadow: 'none',
  height: '130px',  
  padding: '10px 20px',
  borderRadius: '0px 0px 20px 20px',

  [theme.breakpoints.down('sm')]: {
    padding: '10px 20px',
    marginTop: '10px',
    height: 'fit-content', 
  },
}));

export const BlogContent = styled(Box)(({ theme }) => ({
  color: 'black',
  [theme.breakpoints.down('sm')]: {
    fontSize: '3vh',
    WebkitLineClamp: 3,
    bottom: '40',
  },
}));

export const BlogCardHeader = styled(Box)(({ theme }) => ({
  fontSize: '18px',
  fontFamily: 'MontserratHeaderBold',
  display: '-webkit-box',
  WebkitLineClamp: 4,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',  
  color: '#545454',
  [theme.breakpoints.between('sm', 'md')]: {
    fontSize: '20px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '17px',
    WebkitLineClamp: 4,
  },
}));

export const BlogCardDate = styled(Box)(({ theme }) => ({
  fontSize: '12px',
  margin: '10px 0px',
  fontFamily: 'MontserratStandardLight',
  [theme.breakpoints.between('sm', 'md')]: {
    fontSize: '15px',
    lineHeight: '1.2em',
    WebkitLineClamp: 3,
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '15px',
    lineHeight: '20px',
  },
}));

export const BlogTextArea = styled(CardContent)(({ theme }) => ({
  padding: '20px !important',
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
