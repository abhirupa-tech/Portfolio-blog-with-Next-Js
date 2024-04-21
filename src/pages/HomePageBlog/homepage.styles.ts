
import { Col, Row } from "react-grid-system";
import { Grid, styled } from "@mui/material";
import { media } from "../index.styles";
  
export const DeveloperIntro = styled(Col)`
    margin: auto!important;
    width: 30vw;
    padding:0px!important;
    padding:0px!important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;    
    height: 100vh;`
;

export const DeveloperName = styled('div')(({ theme }) => ({
    color: '#FFFFFF',
    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    fontFamily: 'MontserratHeaderBold',
    fontSize: '6vw',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
    letterSpacing: '-4px',
    textAlign: 'center',
    width: '100%',
    marginTop: '60px',    
    [theme.breakpoints.down('sm')]: {
        fontSize: '5em',
        marginTop: '0px',  
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '5em',
    },
}));

export const DeveloperAbout = styled('div')`
    color: #EFEFEF;
    font-family: 'Montserrat';
    font-size: 1.4vw;
    width: 40vw;
    font-weight: 500;
    letter-spacing: 1.2px;
    display: inline-block;
    text-align: center;

    ${media.tablet} {
        font-size: 1.2em;
        width: 60vw;
    }

    ${media.phone} {
        font-size: 1.1em;
        line-height: 2.8vh;
        font-weight: 400;
        width: 80vw;
    }
`;

export const ProfileHeadShot = styled(Grid)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
`;

export const Root = styled('div')`
`;

export const Icon = styled('img')`
    padding-right: 20px;
    cursor: pointer;
    height:10vh;
    &:hover {
        filter: brightness(150%);
        transition: all 0.2s ease-in-out;
    }
    img {
        ${media.tablet} {
            height: 8vw;
            width: auto;
        }
        ${media.phone} {
            height: 14vw;
            width: auto;
        }
        ${media.desktop} {
            height: 4vw;
            width: auto;
        }
    }    
`;

export const IconContainer = styled('div')`
    display: flex;
    width: 100%;
    align-content: center;
    margin-top: 2vh;
    justify-content: center;
    align-items: center;
`;

export const MaterialButton = styled('div')`
    text-align: center;
    align-content: center;
    color: ghostwhite;
    margin-top: 6vh;
    background: linear-gradient(#f33c6d, #a30d2c);
    border-radius: 20px;
    padding: 10px 20px;
    width: fit-content;    
    font-family: 'MontserratStandardLight';
    font-size: 1.5em;
    font-weight: 600;
    display: inline-block;
    &:hover {
        background: linear-gradient(#eb5e84,#bf3030); !important;
        color: whitesmoke;
        cursor: pointer;
        shadow: 2px;
        transition: all 0.2s ease-in-out;
    }
    ${media.tablet} {
        font-size: 1em;
        font-style: regular;
    }
    ${media.phone} {
        font-size: 0.7em;
        font-style: regular;
    }
`;

export const StyledImage = styled('img')(({ theme }) => ({
    maxWidth: '30vw', 
    height: 'auto',
    [theme.breakpoints.down('sm')]: {
        maxWidth: '80vw',
        height: 'auto',
    },
    [theme.breakpoints.up('md')]: {
    },
    // Add more styles as needed
  }));

export const IntroductionColumn = styled(Col)`
    margin: auto!important;
    padding: 0px!important;`
;

export const BlogContainer = styled('div')`
    background-color: transparent;
    padding: 0;
    width: 70%;
    margin: 0 auto;
    margin-top: 10vh;
    display: flex;
    flex-wrap: wrap;    
    ${media.tablet} {
        width: 90vw;
    }
    ${media.phone} {
        width: 100vw;
    }
`;

export const CustomRow = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


