import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { motion } from "framer-motion"
import "@fontsource/raleway/300.css";
import "@fontsource/raleway/400.css";
import "@fontsource/raleway/800.css";
import "@fontsource/raleway/900.css";
import "@fontsource/architects-daughter";
import { theme } from '../utils/theme';
import useMediaQuery from '@mui/material/useMediaQuery';
import ContactForm from '../components/ContactForm';
import { childVariants, parentVariants } from '../utils/motion';
import HeadData from '../components/HeadData';

const StyledBackground = styled('div')`
  position: fixed;
  display: flex;
  flex-direction: column;
  transform: skewY(-13deg);
  transform-origin: 0 0;
  background: #fff;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  z-index: -1;
`;

const StyledH1 = styled(Typography)`
  font-family: 'Raleway';
  font-weight: 900;
  font-size: clamp(2.75rem, 8vw + 1rem, 4rem);
  line-height: .75;
  color: ${theme.palette.primary.main};
  letter-spacing: -.125rem;

  ${props => props.theme.breakpoints.up("md")} {
    font-size: clamp(2.75rem, 4vw + 1rem, 5rem);
  }
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

export default function HomePage() {
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <HeadData title="Ryan DeBerardinis - Home Page" />
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
            <div>RYAN </div>
            <div>DeBERARDINIS</div>
          </StyledH1>
          <StyledH2
            // @ts-expect-error
            component={motion.h2}
            variants={childVariants}
            variant="h2"
          >
            Developer + Designer + Photographer
          </StyledH2>
          <Typography
            component={motion.p}
            variants={childVariants}
            variant="body1"
          >
            Experienced frontend developer and accessibility specialist with a passion for creating intuitive and accessible user experiences using the latest web technologies.
          </Typography>
        </motion.div>
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
        <motion.div
          initial={{
            opacity: 0,
            transform: matches
              ? 'perspective(25rem) rotateY(0) rotateX(0) rotate(0)'
              : 'perspective(75rem) rotateY(0) rotateX(0) rotate(0)'
          }}
          animate={{
            opacity: 1,
            transform: matches
              ? 'perspective(75rem) rotateX(8deg)'
              : 'perspective(75rem) rotateY(-20deg) rotateX(4deg) rotate(1deg)'
          }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <ContactForm />
        </motion.div>
      </Grid>
    </>
  );
}
