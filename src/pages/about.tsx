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

const StyledFormContainer = styled(Paper)`
  background-color: #f5f6f8;
  padding: 2rem;
  box-shadow: 0 30px 60px -12px rgba(50,50,93,0.25),
              0 18px 36px -18px rgba(0,0,0,0.3);
  box-shadow: 1px 1px 5px 0 rgba(26,26,67,.05),
              39px 62.5px 125px -25px rgba(50,50,93,.5),
              23.4px 37.5px 75px -37.5px rgba(0,0,0,.6);
  will-change: transform;
  // transition: all .25s cubic-bezier(0,0,.2,1);
  // transform: perspective(3190px) rotateY(-27deg) rotateX(4deg) rotate(1deg);

  fieldset,
  textarea {
    background-color: #fff;
  }
  textarea {
    min-height: 6rem
  }

  // &:focus-within {
  //   transform: perspective(3190px) rotateY(0) rotateX(0) rotate(0);
  // }
`;

const StyledFormMessage = styled(TextField)`
  width: 100%
`;

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
        <Grid item xs={12} sm={6} sx={{ p: 3 }}>
          <motion.div
            initial={{ opacity: 0, transform: 'perspective(3000px) rotateY(0) rotateX(0) rotate(0)' }}
            animate={{ opacity: 1, transform: 'perspective(3000px) rotateY(-27deg) rotateX(4deg) rotate(1deg)' }}
            transition={{ duration: 0.5 }}
          >
            <StyledFormContainer>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="name"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="phone"
                  label="Phone"
                  type="phone"
                  id="phone"
                  autoComplete="tel"
                />
                <StyledFormMessage
                  margin="normal"
                  id="message"
                  label="Message"
                  multiline
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  // // @ts-expect-error
                  // component={motion.button}
                  // variants={childVariants}
                  // whileHover={{
                  //   scale: 1.2,
                  //   transition: { duration: 0.3 }
                  // }}
                  // whileTap={{ scale: 0.9 }}
                >
                  Send Message
                </Button>
              </Box>
            </StyledFormContainer>
          </motion.div>
        </Grid>
      </Grid>
    </>
  );
}
