import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';
import { motion } from "framer-motion"
import "@fontsource/raleway/300.css";
import "@fontsource/raleway/400.css";
import "@fontsource/raleway/700.css";
import "@fontsource/raleway/800.css";
import "@fontsource/raleway/900.css";
import { theme } from '../utils/theme';
import { StaticImage } from "gatsby-plugin-image"
import Chip from '@mui/material/Chip';
import {
  childVariants, parentVariants,
  skillsChildVariants, skillsVariants
} from '../utils/motion';
import { useMediaQuery } from '@mui/material';

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
  font-size: clamp(1.3rem, 2.5vw + .5rem, 2rem);
  margin: 0.5rem 0 1rem;
  color: ${theme.palette.secondary.main};

  ${props => props.theme.breakpoints.up("md")} {
    font-size: clamp(1.25rem, 1.75vw + .5rem, 5rem);
  }
`;

const StyledH3 = styled(Typography)`
margin: 2rem 0 1rem 0;
font-family: 'Raleway';
font-weight: 700;
font-size: clamp(1.5rem, 1.75vw + .5rem, 2rem);
color: ${theme.palette.primary.main};
`;

const StyledSkills = styled(Box)`
  max-width: 450px;

  ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  ${props => props.theme.breakpoints.up("md")} {
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
    left: 100px;
    width: 15rem;
    height: 11rem;
    box-shadow: inset 1px -2px 3px rgba(50,50,93,0.25),
                0 30px 60px -12px rgba(50,50,93,0.25),
                0 18px 36px -18px rgba(0,0,0,0.3);
  }
  &:nth-of-type(2) {
    top: 190px;
    left: 330px;
    width: 20rem;
    height: 16rem;
    box-shadow: inset 1px -2px 3px rgba(50,50,93,0.25),
                0 30px 60px -12px rgba(50,50,93,0.25),
                0 18px 36px -18px rgba(0,0,0,0.3);
  }
  &:nth-of-type(3) {
    top: 40px;
    left: 190px;
    width: 20rem;
    height: 15rem;
    box-shadow: inset 1px -2px 3px rgba(50,50,93,0.25),
                0 50px 100px -20px rgba(50,50,93,0.25),
                0 30px 60px -30px rgba(0,0,0,0.3);
  }
  &:nth-of-type(4) {
    top: 200px;
    left: 35px;
    width: 13rem;
    height: 11rem;
    box-shadow: inset 1px -2px 3px rgba(50,50,93,0.25),
                0 50px 100px -20px rgba(50,50,93,0.25),
                0 30px 60px -30px rgba(0,0,0,0.3);
  }
  &:nth-of-type(5) {
    top: 190px;
    left: 155px;
    width: 15rem;
    height: 11rem;
    box-shadow: inset 1px -2px 3px rgba(50,50,93,0.25),
                0 50px 100px -20px rgba(50,50,93,0.25),
                0 30px 60px -30px rgba(0,0,0,0.3);
  }
  &:nth-of-type(6) {
    top: -65px;
    left: -20px;
    width: 19rem;
    height: 14rem;
    box-shadow: inset 1px -2px 3px rgba(50,50,93,0.25),
                0 50px 100px -20px rgba(50,50,93,0.25),
                0 30px 60px -30px rgba(0,0,0,0.3);
  }
  &:nth-of-type(7) {
    top: -170px;
    left: 120px;
    width: 19rem;
    height: 18rem;
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
  const theme = useTheme()
  const isMediumAndUp = useMediaQuery(theme.breakpoints.up('md'))

  const workParent = {
    hidden: {
      transition: {
        staggerChildren: 0.7,
        staggerDirection: -1
      }
    },
    visible: {
      transition: {
        staggerChildren: 0.05,
      }
    }
  };

  const workChild = {
    hidden: {
      opacity: 0,
      y: -50,
      rotateX: isMediumAndUp ? 40 : 0,
      rotateZ: isMediumAndUp ? -30 : 0,
      transition: { type: "spring", stiffness: 100 }
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: isMediumAndUp ? 45 : 0,
      rotateZ: isMediumAndUp ? -33 : 0,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <>
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
            My work focuses on the intersection between design and development. I have a passion for creating clean and beautiful user experiences built on a solid understanding of the latest technologies.
          </Typography>
          <StyledH3
            // @ts-expect-error
            component={motion.h3}
            variants={childVariants}
            variant="body1"
          >
            My skills:
          </StyledH3>
        </motion.div>
        <StyledSkills>
          <Grid
            container
            spacing={1}
            component={motion.ul}
            variants={skillsVariants}
            initial="hidden"
            animate={'visible'}
          >
            <Grid component={'li'} item><Chip size="small" component={motion.div} variants={skillsChildVariants} label="HTML5" color='primary' /></Grid>
            <Grid component={'li'} item><Chip size="small" component={motion.div} variants={skillsChildVariants} label="CSS" color='primary' /></Grid>
            <Grid component={'li'} item><Chip size="small" component={motion.div} variants={skillsChildVariants} label="Javascript" color='primary' /></Grid>
            <Grid component={'li'} item><Chip size="small" component={motion.div} variants={skillsChildVariants} label="Accessibility" color='primary' /></Grid>
            <Grid component={'li'} item><Chip size="small" component={motion.div} variants={skillsChildVariants} label="WCAG" color='primary' /></Grid>
            <Grid component={'li'} item><Chip size="small" component={motion.div} variants={skillsChildVariants} label="WAI-ARIA" color='primary' /></Grid>
            <Grid component={'li'} item><Chip size="small" component={motion.div} variants={skillsChildVariants} label="UX/UI" color='primary' /></Grid>
            <Grid component={'li'} item><Chip size="small" component={motion.div} variants={skillsChildVariants} label="React" color='primary' /></Grid>
            <Grid component={'li'} item><Chip size="small" component={motion.div} variants={skillsChildVariants} label="Typescript" color='primary' /></Grid>
            <Grid component={'li'} item><Chip size="small" component={motion.div} variants={skillsChildVariants} label="Gatsby" color='primary' /></Grid>
            <Grid component={'li'} item><Chip size="small" component={motion.div} variants={skillsChildVariants} label="Material UI" color='primary' /></Grid>
          </Grid>
        </StyledSkills>
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        sx={{
          padding: {
            xs: '0rem 1.5rem 3rem',
            sm: '0rem 2.5rem 3rem',
            md: '3rem 3rem 4rem 1rem'
          }
        }}
      >
        <StyledBoxWrap
          variants={workParent}
          initial="hidden"
          animate={'visible'}
        >
          <StyledBox variants={workChild}>
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
          <StyledBox variants={workChild}>
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
          <StyledBox variants={workChild}>
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
          <StyledBox variants={workChild}>
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
          <StyledBox variants={workChild}>
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
          <StyledBox variants={workChild}>
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
          <StyledBox variants={workChild}>
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
    </>
  );
}
