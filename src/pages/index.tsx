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


// function Copyright(props: any) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const theme = createTheme({
  palette: {
    primary: {
      main: '#31385e'
    },
  },
  shape: {
    borderRadius: 20,
  },
  // typography: {
  //   fontFamily: [
  //     'Raleway',
  //     '-apple-system',
  //     'BlinkMacSystemFont',
  //     '"Segoe UI"',
  //     '"Helvetica Neue"',
  //     'Arial',
  //     'sans-serif',
  //     '"Apple Color Emoji"',
  //     '"Segoe UI Emoji"',
  //     '"Segoe UI Symbol"',
  //   ].join(','),
  // },
});

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
  box-shadow: 0 5px 15px rgba(0,0,0,.1),
              0 15px 35px rgba(0,0,0,.1),
              0 50px 100px rgba(50,50,93,.1);
  will-change: transform;
  // transition: all .25s cubic-bezier(0,0,.2,1);
  // transform: perspective(3190px) rotateY(-27deg) rotateX(4deg) rotate(1deg);

  fieldset,
  textarea {
    background-color: #fff;
  }
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

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        component="main"
        sx={{
          height: '100vh'
        }}
      >
        <CssBaseline />
        <StyledBackground>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </StyledBackground>
        <Grid item xs={12} sm={6} sx={{ p: 3 }}>
          <motion.div
            variants={parentVariants}
            initial="hidden"
            animate={'visible'}
         >
            <StyledH1
              component={motion.h1}
              variants={childVariants}
              variant="h1"
            >
              <span>RYAN </span>
              <span>DeBERARDINIS</span>
            </StyledH1>
            <StyledH2
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
                  // @ts-expect-error
                  component={motion.div}
                  variants={childVariants}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  // @ts-expect-error
                  component={motion.div}
                  variants={childVariants}
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
                  // @ts-expect-error
                  component={motion.div}
                  variants={childVariants}
                />
                <StyledFormMessage
                  margin="normal"
                  id="message"
                  label="Message"
                  multiline
                  // @ts-expect-error
                  component={motion.div}
                  variants={childVariants}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  // @ts-expect-error
                  component={motion.button}
                  variants={childVariants}
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
    </ThemeProvider>
  );
}
