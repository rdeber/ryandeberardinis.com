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
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import { motion } from "framer-motion"
import "@fontsource/raleway/300.css";
import "@fontsource/raleway/400.css";
import "@fontsource/raleway/800.css";
import "@fontsource/raleway/900.css";
import { theme } from '../utils/theme';
import Masonry from '@mui/lab/Masonry';



// --cardShadowXSmall: 0 2px 5px -1px rgba(50,50,93,0.25),0 1px 3px -1px rgba(0,0,0,0.3);
// --cardShadowSmall: 0 6px 12px -2px rgba(50,50,93,0.25),0 3px 7px -3px rgba(0,0,0,0.3);
// --cardShadowMedium: 0 13px 27px -5px rgba(50,50,93,0.25),0 8px 16px -8px rgba(0,0,0,0.3);
// --cardShadowLarge: 0 30px 60px -12px rgba(50,50,93,0.25),0 18px 36px -18px rgba(0,0,0,0.3);
// --cardShadowLargeInset: inset 0 30px 60px -12px rgba(50,50,93,0.25),inset 0 18px 36px -18px rgba(0,0,0,0.3);
// --cardShadowXLarge: 0 50px 100px -20px rgba(50,50,93,0.25),0 30px 60px -30px rgba(0,0,0,0.3);
// --stripeAccentLight: #e3e7ec;
// --stripeAccentDark: #0a2540;

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
  transform: rotateX(60deg) rotateZ(45deg) translateY(0%) translateX(0%);
  position: absolute;
  width: 50%;
  right: 0;
`;


const heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80, 30, 90, 70, 90, 100, 150, 30, 90, 70, 90, 100, 150,150, 30, 90, 70, 90, 100, 150, 30, 50, 80, 30, 90, 70, 90, 100, 150, 30, 90, 70, 90, 100, 150,];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const parentVariants = {
  hidden: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1
    }
  },
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const childVariants = {
  hidden: {
    opacity: 0,
    x: -16
  },
  visible: {
    opacity: 1,
    x: 0
  }
};

export default function AboutPage() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <>
      <motion.div
        variants={parentVariants}
        initial="hidden"
        animate={'visible'}
        style={{ position: 'relative' }}
      >
        <StyledMasonry columns={{ xs: 3, sm: 4 }} spacing={2}>
          {heights.map((height, index) => (
            <Item
              // @ts-expect-error
              component={motion.div}
              variants={childVariants}
              key={index}
              sx={{ height }}
            >
              {index + 1}
            </Item>
          ))}
        </StyledMasonry>
      </motion.div>
      <Grid
        container
        component="main"
        sx={{
          height: '100vh',
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
      </Grid>
    </>
  );
}
