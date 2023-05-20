import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, navigate } from 'gatsby';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import MailIcon from '@mui/icons-material/Mail';
import { CodeRounded, GitHub, Send } from '@mui/icons-material';
import { Paper, TextField } from '@mui/material';
import { theme } from '../utils/theme';

const StyledFormWrap = styled(Paper)`

`

const StyledFormContainer = styled(Paper)`
  background-color: #f5f6f8;
  padding: 1rem 1.5rem;
  box-shadow: 0 30px 60px -12px rgba(50,50,93,0.25),
              0 18px 36px -18px rgba(0,0,0,0.3);
  will-change: transform;

  ${props => props.theme.breakpoints.up("md")} {
    box-shadow: 1px 1px 5px 0 rgba(26,26,67,.05),
                39px 62.5px 125px -25px rgba(50,50,93,.5),
                23.4px 37.5px 75px -37.5px rgba(0,0,0,.6);
  }
  &:focus-within {

  }
  form {
    margin-top: 0;
  }

  form > fieldset {
    border: none;
    padding: 0;
    margin: 0;
  }

  form > fieldset > legend {
    font-family: 'Raleway';
    font-size: 1rem;
    color: #656d97;
    text-transform: uppercase;
    font-weight: 900;
    color: ${theme.palette.primary.main};
  }

  label {
    font-family: 'Raleway';
    font-weight: 400;
    font-size: .95rem;
    color: ${theme.palette.primary.main};
  }

  .MuiFormControl-root {
    margin: .5rem 0;
  }

  .MuiInputBase-root {
    background-color: #fff;
    // box-shadow: 0 2px 5px -1px rgba(50,50,93,0.25),
                  //  0 1px 3px -1px rgba(0,0,0,0.3);
    transition: all .15s ease;

    &:hover,
    &:focus-visible {
      box-shadow: 0 6px 12px -2px rgba(50,50,93,0.25),
                  0 3px 7px -3px rgba(0,0,0,0.3);

      // .MuiOutlinedInput-notchedOutline {
      //   border-color: ${theme.palette.secondary.main};
      // }
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

const StyledButton = styled(Button)`
  font-family: 'Raleway';
  font-weight: 800;
`;

function encode(data: any) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function ContactForm() {
  const [state, setState] = React.useState({})

  const handleChange = (e: any) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  return (
    <StyledFormContainer>
      <Box
        component="form"
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        sx={{ mt: 1 }}
      >
        <input type="hidden" name="form-name" value="contact" />
        <fieldset>
          <legend>Contact Me</legend>
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
            required
          />
          <StyledButton
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
            <Send sx={{ ml: 1 }} />
          </StyledButton>
        </fieldset>
      </Box>
    </StyledFormContainer>
  );
}