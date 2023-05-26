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
import { childVariants, parentVariants } from '../utils/motion';
import HeadData from '../components/HeadData';

export function Head() {
  return (
    <HeadData title='Ryan DeBerardinis - 404 Page' />
  )
}

const StyledH1 = styled(Typography)`
  font-family: 'Raleway';
  font-weight: 900;
  font-size: clamp(2.75rem, 8vw + 1rem, 5rem);
  line-height: .75;
  color: ${theme.palette.primary.main};
  letterSpacing: '-.25rem';

  ${props => props.theme.breakpoints.up("md")} {
    font-size: clamp(2.75rem, 4vw + 1rem, 5rem);
  }
`;

const StyledH2 = styled(Typography)`
  font-family: 'Raleway';
  font-weight: 400;
  font-size: clamp(1.1rem, 3vw + .5rem, 5rem);
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
      <HeadData title="Ryan DeBerardinis - 404 Page" />
      <Grid item xs={12} md={6} sx={{ p: { xs: 2, sm: 6 } }}>
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
            <div>404 Page Not Found...</div>
          </StyledH1>
          <StyledH2
            // @ts-expect-error
            component={motion.h2}
            variants={childVariants}
            variant="h2"
          >
            Click on a link to return to the site.
          </StyledH2>
        </motion.div>
      </Grid>
    </>
  );
}
