import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { motion } from "framer-motion"
import "@fontsource/raleway/300.css";
import "@fontsource/raleway/400.css";
import "@fontsource/raleway/800.css";
import "@fontsource/raleway/900.css";
import { theme } from '../utils/theme';
import Masonry from '@mui/lab/Masonry';
import { StaticImage } from "gatsby-plugin-image"
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import {
  childVariants, parentVariants,
  skillsChildVariants, skillsVariants, workVariants
} from '../utils/motion';

const StyledH1 = styled(Typography)`
  font-family: 'Raleway';
  font-weight: 900;
  font-size: 5rem;
  line-height: .75;
  color: ${theme.palette.primary.main};
  letter-spacing: -.125rem;
`;

const StyledH2 = styled(Typography)`
  font-family: 'Raleway';
  font-weight: 400;
  font-size: clamp(1.1rem, 3vw + .5rem, 2rem);
  margin: 0.5rem 0 1rem;
  color: ${theme.palette.secondary.main};

  ${props => props.theme.breakpoints.up("md")} {
    font-size: clamp(1.1rem, 1.35vw + .5rem, 5rem);
  }
`;

const StyledBoxWrap = styled(motion.div)`
  position: relative;
`

const StyledBox = styled(motion.div)`
  background: #fff;
  box-shadow:inset -2px -2px 3px rgba(50,50,93,0.25),
                   0 50px 100px -20px rgba(50,50,93,0.25),
                   0 30px 60px -30px rgba(0,0,0,0.3);
  border-radius: 20px;
  padding: 1rem;
  width: 20rem;
  height: 15rem;
  overflow: hidden;
  position: absolute;
  max-width: 300px;

  &:nth-of-type(1) {
    top: 320px;
    width: 15rem;
    height: 11rem;
    box-shadow: inset 1px -2px 3px rgba(50,50,93,0.25),
                0 30px 60px -12px rgba(50,50,93,0.25),
                0 18px 36px -18px rgba(0,0,0,0.3);
  }
  &:nth-of-type(2) {
    top: 120px;
    width: 80%;
    width: 15rem;
    height: 10rem;
    box-shadow: inset 1px -2px 3px rgba(50,50,93,0.25),
                0 30px 60px -12px rgba(50,50,93,0.25),
                0 18px 36px -18px rgba(0,0,0,0.3);
  }
  &:nth-of-type(3) {
    top: 20px;
    width: 85%;
    width: 20rem;
    height: 10rem;
    box-shadow: inset 1px -2px 3px rgba(50,50,93,0.25),
                0 50px 100px -20px rgba(50,50,93,0.25),
                0 30px 60px -30px rgba(0,0,0,0.3);
  }
  &:nth-of-type(4) {
    top: -120px;
    width: 85%;
    width: 25rem;
    height: 15rem;
    box-shadow: inset 1px -2px 3px rgba(50,50,93,0.25),
                0 50px 100px -20px rgba(50,50,93,0.25),
                0 30px 60px -30px rgba(0,0,0,0.3);
  }
  &:nth-of-type(5) {
    top: -120px;
    width: 90%;
    width: 27rem;
    height: 15rem;
    box-shadow: inset 1px -2px 3px rgba(50,50,93,0.25),
                0 50px 100px -20px rgba(50,50,93,0.25),
                0 30px 60px -30px rgba(0,0,0,0.3);
  }
  &:nth-of-type(6) {
    top: -120px;
    width: 90%;
    width: 27rem;
    height: 15rem;
    box-shadow: inset 1px -2px 3px rgba(50,50,93,0.25),
                0 50px 100px -20px rgba(50,50,93,0.25),
                0 30px 60px -30px rgba(0,0,0,0.3);
  }
`;

const StyledBoxInner = styled(Box)`
  overflow: hidden;
  height: 100%;
`;

export default function AboutPage() {
  return (
    <>
      <Grid
        container
        component="main"
        sx={{
          backgroundColor: '#e3e7ec',
          maxWidth: '1440px',
          height: '100%',
          margin: '0 auto',
          minHeight: '100vh'
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            padding: {
              xs: '2rem 1.5rem',
              sm: '3rem 3rem 3rem',
              md: '6rem 1rem 4rem 3rem'
            }
          }}
        >
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
              <span>Hello</span>
            </StyledH1>
            <StyledH2
              // @ts-expect-error
              component={motion.h2}
              variants={childVariants}
              variant="h2"
            >
              I'm a frontend web developer.
            </StyledH2>
            <Typography
              component={motion.p}
              variants={childVariants}
              variant="body1"
            >
              My work focuses on the intersection between design and development. I have a passion for creating clean and beautiful user experiences built on a solid understanding of the latest technologies. When I’m not writing code and pushing pixels, you can often find me photographing the streets of New York City. I'm currently working as lead front end developer for Remote-Learner.
            </Typography>
          </motion.div>
          <Box>
            <Typography
              component={motion.p}
              variants={childVariants}
              variant="body1"
            >
              My skills:
            </Typography>
              <Grid
                container
                spacing={1}
                component={motion.div}
                variants={skillsVariants}
                initial="hidden"
                animate={'visible'}
                >
                <Grid item><Chip size="small" component={motion.div} variants={skillsChildVariants} label="HTML5" color='primary'/></Grid>
                <Grid item><Chip size="small" component={motion.div} variants={skillsChildVariants} label="CSS" color='primary'/></Grid>
                <Grid item><Chip size="small" component={motion.div} variants={skillsChildVariants} label="Javascript" color='primary'/></Grid>
                <Grid item><Chip size="small" component={motion.div} variants={skillsChildVariants} label="Accessibility" color='primary'/></Grid>
                <Grid item><Chip size="small" component={motion.div} variants={skillsChildVariants} label="WCAG" color='primary'/></Grid>
                <Grid item><Chip size="small" component={motion.div} variants={skillsChildVariants} label="WAI-ARIA" color='primary'/></Grid>
                <Grid item><Chip size="small" component={motion.div} variants={skillsChildVariants} label="UX/UI" color='primary'/></Grid>
                <Grid item><Chip size="small" component={motion.div} variants={skillsChildVariants} label="React" color='primary'/></Grid>
                <Grid item><Chip size="small" component={motion.div} variants={skillsChildVariants} label="Typescript" color='primary'/></Grid>
                <Grid item><Chip size="small" component={motion.div} variants={skillsChildVariants} label="Gatsby" color='primary'/></Grid>
                <Grid item><Chip size="small" component={motion.div} variants={skillsChildVariants} label="Material UI" color='primary'/></Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            padding: {
              xs: '0rem 1.5rem 3rem',
              sm: '0rem 2.5rem 3ren',
              md: '3rem 3rem 4rem 1rem'
            }
          }}
        >
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
            <StyledBox variants={workVariants}>
              <StyledBoxInner>
                <StaticImage
                  src="../images/work/project-5.jpg"
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
                  src="../images/work/project-6.jpg"
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
                  src="../images/work/project-7.jpg"
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
