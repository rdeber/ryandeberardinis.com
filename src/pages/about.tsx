import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, duration, styled, ThemeProvider } from '@mui/material/styles';
import { motion } from "framer-motion"
import "@fontsource/raleway/300.css";
import "@fontsource/raleway/400.css";
import "@fontsource/raleway/800.css";
import "@fontsource/raleway/900.css";
import { theme } from '../utils/theme';
import Masonry from '@mui/lab/Masonry';
import { StaticImage } from "gatsby-plugin-image"

const StyledH1 = styled(Typography)`
  font-family: 'Raleway';
  font-weight: 900;
  font-size: 5rem;
  line-height: .75;
  color: ${theme.palette.primary.main};
  letterSpacing: '-.25rem'
`;

const StyledH2 = styled(Typography)`
  font-family: 'Raleway';
  font-weight: 300;
  font-size: 2rem;
  margin-top: .5rem;
  color: ${theme.palette.primary.main};
`;

const StyledMasonry = styled(Masonry)`
  // transform: rotateX(60deg) rotateZ(45deg) translateY(0%) translateX(0%);
  position: absolute;
  width: 50%;
  right: 0;
`;

const StyledBoxWrap = styled(motion.div) `
  position: relative;
`

const StyledBox = styled(motion.div) `
  background: #fff;
  box-shadow:inset -2px -2px 3px rgba(50,50,93,0.25),
                   0 50px 100px -20px rgba(50,50,93,0.25),
                   0 30px 60px -30px rgba(0,0,0,0.3);
  border-radius: 20px;
  padding: 1rem;
  width: 20rem;
  height: 15rem;
  // transform: translateX(0) translateY(0) rotateX(45deg) rotateZ(-33deg);
  overflow: hidden;
  position: absolute;
  max-width: 300px;

  &:nth-of-type(1) {
    top: 320px;
    width: 70%;
  }
  &:nth-of-type(2) {
    top: 120px;
    width: 80%;
  }
  &:nth-of-type(3) {
    top: 20px;
    width: 90%;
  }
  &:nth-of-type(4) {
    top: -120px;
    width: 100%;
  }
`;

const StyledBoxInner = styled(Box) `
  overflow: hidden;
  height: 100%;
`;

const parentVariants = {
  hidden: {
    transition: {
      staggerChildren: 0.7,
      staggerDirection: -1
    }
  },
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const childVariants = {
  hidden: {
    opacity: 0,
    x: -16,
    transition: { type: "spring", stiffness: 100 }
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100 }
  }
};

const workVariants = {
  hidden: {
    opacity: 0,
    // transform: 'translateX(0) translateY(-333px) rotateX(35deg) rotateZ(-23deg)',
    y: -333,
    rotateX: 35,
    rotateZ: -23,
    transition: { type: "spring", stiffness: 100 }
  },
  visible: {
    opacity: 1,
    // transform: 'translateX(0) translateY(0) rotateX(45deg) rotateZ(-33deg)',
    y: 0,
    rotateX: 45,
    rotateZ: -33,
    transition: { type: "spring", stiffness: 100 }
  }
};

export default function AboutPage() {
  return (
    <>
      <Grid
        container
        component="main"
        sx={{
          height: '100%',
          minHeight: '100vh',
          backgroundColor: '#e3e7ec'
        }}
      >
        <Grid item xs={12} sm={6} sx={{ p: 3 }}>
          <motion.div
            variants={parentVariants}
            initial="hidden"
            animate={'visible'}
          >
            <StyledH1
              // @ts-expect-error
              component={motion.h1}
              variants={childVariants}
              variant="h1"
            >
              <span>Hello.</span>
            </StyledH1>
            <StyledH2
              // @ts-expect-error
              component={motion.h2}
              variants={childVariants}
              variant="h2"
            >
              I'm a creative professional from New York City.
            </StyledH2>
            <Typography
              component={motion.p}
              variants={childVariants}
              variant="body1"
            >
              My work focuses on the intersection between design and development. I have a passion for creating clean and beautiful user experiences built on a solid understanding of the latest technologies. When I’m not writing code and pushing pixels, you can often find me photographing the streets of New York City. I'm currently working as lead front end developer for Remote-Learner.
            </Typography>
          </motion.div>
        </Grid>

        <Grid item xs={12} sm={6} sx={{ p: 3 }}>
          <StyledBoxWrap
            variants={parentVariants}
            initial="hidden"
            animate={'visible'}
        >
            <StyledBox variants={workVariants}>
              <StyledBoxInner>
                <StaticImage
                  src="../images/work/project-1.jpg"
                  alt=""
                  placeholder="dominantColor"
                  layout="constrained"
                  objectFit='cover'
                />
              </StyledBoxInner>
            </StyledBox>
            <StyledBox variants={workVariants}>
              <StyledBoxInner>
                <StaticImage
                  src="../images/work/project-2.jpg"
                  alt=""
                  placeholder="dominantColor"
                  layout="constrained"
                  objectFit='cover'
                />
              </StyledBoxInner>
            </StyledBox>
            <StyledBox variants={workVariants}>
              <StyledBoxInner>
                <StaticImage
                  src="../images/work/project-3.jpg"
                  alt=""
                  placeholder="dominantColor"
                  layout="constrained"
                  objectFit='cover'
                />
              </StyledBoxInner>
            </StyledBox>
            <StyledBox variants={workVariants}>
              <StyledBoxInner>
                <StaticImage
                  src="../images/work/project-4.jpg"
                  alt=""
                  placeholder="dominantColor"
                  layout="constrained"
                  objectFit='cover'
                />
              </StyledBoxInner>
            </StyledBox>
          </StyledBoxWrap>
        </Grid>
      </Grid>
    </>
  );
}
