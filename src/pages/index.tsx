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
import useMediaQuery from '@mui/material/useMediaQuery';



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
  color: ${theme.palette.primary.main};

  ${props => props.theme.breakpoints.up("md")} {
    font-size: clamp(1.1rem, 1.4vw + .5rem, 5rem);
    font-weight: 300;
  }
`;

const StyledFormContainer = styled(Paper)`
  background-color: #f5f6f8;
  padding: 2rem;
  box-shadow: 0 30px 60px -12px rgba(50,50,93,0.25),
              0 18px 36px -18px rgba(0,0,0,0.3);
  will-change: transform;

  ${props => props.theme.breakpoints.up("md")} {
    box-shadow: 1px 1px 5px 0 rgba(26,26,67,.05),
                39px 62.5px 125px -25px rgba(50,50,93,.5),
                23.4px 37.5px 75px -37.5px rgba(0,0,0,.6);
  }


  .MuiOutlinedInput-notchedOutline,
  textarea {
    background-color: #fff;
    box-shadow: 0 2px 5px -1px rgba(50,50,93,0.25), 0 1px 3px -1px rgba(0,0,0,0.3);

    &:hover {
      box-shadow: 0 6px 12px -2px rgba(50,50,93,0.25), 0 3px 7px -3px rgba(0,0,0,0.3);
      border-color: #fff;
    }
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

export default function HomePage() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

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
        }}
      >
        <Grid item xs={12} md={6} sx={{ p: {xs: 2, sm: 6} }}>
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
        <Grid item xs={12} md={6} sx={{ p: {xs: 2, sm: 6} }}>
          <motion.div
            initial={{
              opacity: 0,
              transform: matches
                ? 'perspective(25rem) rotateY(0) rotateX(0) rotate(0)'
                : 'perspective(3000px) rotateY(0) rotateX(0) rotate(0)'
            }}
            animate={{
              opacity: 1,
              transform: matches
                ? 'perspective(75rem) rotateX(8deg)'
                : 'perspective(3000px) rotateY(-27deg) rotateX(4deg) rotate(1deg)'
            }}
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
