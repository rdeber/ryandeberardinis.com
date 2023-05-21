import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import { motion, transform } from "framer-motion"
import "@fontsource/raleway/300.css";
import "@fontsource/raleway/400.css";
import "@fontsource/raleway/800.css";
import "@fontsource/raleway/900.css";
import "@fontsource/architects-daughter";
import { theme } from '../utils/theme';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Directions, Send } from '@mui/icons-material';
import ContactForm from '../components/ContactForm';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import MailIcon from '@mui/icons-material/Mail';
import DeleteTwoTone from '@mui/icons-material/DeleteTwoTone';
import { childVariants, parentVariants } from '../utils/motion';

// --cardShadowXSmall: 0 2px 5px -1px rgba(50,50,93,0.25),0 1px 3px -1px rgba(0,0,0,0.3);
// --cardShadowSmall: 0 6px 12px -2px rgba(50,50,93,0.25),0 3px 7px -3px rgba(0,0,0,0.3);
// --cardShadowMedium: 0 13px 27px -5px rgba(50,50,93,0.25),0 8px 16px -8px rgba(0,0,0,0.3);
// --cardShadowLarge: 0 30px 60px -12px rgba(50,50,93,0.25),0 18px 36px -18px rgba(0,0,0,0.3);
// --cardShadowLargeInset: inset 0 30px 60px -12px rgba(50,50,93,0.25),inset 0 18px 36px -18px rgba(0,0,0,0.3);
// --cardShadowXLarge: 0 50px 100px -20px rgba(50,50,93,0.25),0 30px 60px -30px rgba(0,0,0,0.3);
// --stripeAccentLight: #e3e7ec;
// --stripeAccentDark: #0a2540;

// <!-- Google tag (gtag.js) -->
// <script async src="https://www.googletagmanager.com/gtag/js?id=G-8MRTZQJE21"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'G-8MRTZQJE21');
// </script>

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
          }}>
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
              Experienced frontend developer and accessibility specialist with a proven track record of creating intuitive and accessible user experiences using the latest web technologies. Skilled in developing design systems that streamline workflows and improve user engagement, while ensuring compliance with WCAG standards. Passionate about driving innovation and solving complex design challenges through collaboration and user-centered design principles.
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
              sm: '0rem 2.5rem 3ren',
              md: '3rem 3rem 4rem 1rem'
            }
          }}>
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
      </Grid>
    </>
  );
}
