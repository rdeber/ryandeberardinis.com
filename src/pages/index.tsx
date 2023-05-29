import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { motion } from "framer-motion"
import { theme } from '../utils/theme';
import useMediaQuery from '@mui/material/useMediaQuery';
import ContactForm from '../components/ContactForm';
import { childVariants, parentVariants } from '../utils/motion';
import HeadData from '../components/HeadData';
import { useEffect, useRef, useState } from 'react';

export function Head() {
  return (
    <HeadData
      title='Ryan DeBerardinis - Home Page'
      description="I'm an experienced frontend developer and accessibility engineer with a passion for creating intuitive and accessible user experiences using the latest web technologies." />
  )
}

const StyledH1 = styled(Typography)`
  font-size: clamp(2.75rem, 8vw + 1rem, 4rem);
  line-height: .75;
  color: ${theme.palette.primary.main};

  ${props => props.theme.breakpoints.up("md")} {
    font-size: clamp(2.75rem, 4vw + 1rem, 5rem);
  }
`;

const StyledH2 = styled(Typography)`
  font-size: clamp(1.1rem, 3vw + .5rem, 2rem);
  margin: 0.5rem 0 1rem;
  color: ${theme.palette.secondary.main};

  ${props => props.theme.breakpoints.up("md")} {
    font-size: clamp(1.1rem, 1.35vw + .5rem, 5rem);
  }
`;

export default function HomePage() {
  const isMediumAndDown = useMediaQuery(theme.breakpoints.down('md'));
  // const elementRef = useRef<HTMLDivElement | null>(null);
  // const [hasFocused, setHasFocused] = useState<boolean | undefined>(false);
  // const [focusedOrHasFocused, setFocusedOrHasFocused] = useState<boolean | undefined>(false);

  // useEffect(() => {
  //   const handleFocusChange = () => {
  //     setHasFocused(elementRef.current?.matches(':focus-within:not(:focus)'));
  //     setFocusedOrHasFocused(elementRef.current?.matches(':focus-within'));
  //   };

  //   document.addEventListener('focusin', handleFocusChange);
  //   document.addEventListener('focusout', handleFocusChange);

  //   return () => {
  //     document.removeEventListener('focusin', handleFocusChange);
  //     document.removeEventListener('focusout', handleFocusChange);
  //   };
  // }, []);

  // console.log('hasFocused', hasFocused);
  // console.log('focusedOrHasFocused', focusedOrHasFocused);

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
            I'm an experienced frontend developer and accessibility specialist with a passion for creating intuitive and accessible user experiences using the latest web technologies. I'm always interested in hearing about new projects. Get in touch if you'd like to collaborate on something new.
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
            md: '2.5rem 3rem 4rem 1rem'
          }
        }}
      >
        <motion.div
          // ref={elementRef}
          initial={{
            opacity: 0,
            transform: isMediumAndDown
              ? 'perspective(25rem) rotateY(0) rotateX(0) rotate(0)'
              : 'perspective(75rem) rotateY(0) rotateX(0) rotate(0)'
          }}
          animate={{
            opacity: 1,
            transform: isMediumAndDown
              ? 'perspective(75rem) rotateX(8deg)'
              : 'perspective(75rem) rotateY(-20deg) rotateX(4deg) rotate(1deg)'
          }}
          transition={{ type: "spring", stiffness: 100 }}
          // animate={{
          //   opacity: 1,
          //   transform: isMediumAndDown
          //     ? focusedOrHasFocused
          //       ? 'perspective(75rem) rotateX(0)'
          //       : 'perspective(75rem) rotateX(8deg)'
          //     : focusedOrHasFocused
          //       ? 'perspective(75rem) rotateY(0) rotateX(0) rotate(0)'
          //       : 'perspective(75rem) rotateY(-20deg) rotateX(4deg) rotate(1deg)'
          // }}

        >
          <ContactForm />
        </motion.div>
      </Grid>
    </>
  );
}
