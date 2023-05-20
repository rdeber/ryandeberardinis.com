import * as React from 'react';
import Button from '@mui/material/Button';
import { navigate } from 'gatsby';
import { styled } from '@mui/material/styles';
import { Send } from '@mui/icons-material';
import { Paper, TextField } from '@mui/material';
import { theme } from '../utils/theme';

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
    }
  }

  textarea {
    min-height: 6rem
  }
`;

const StyledFormMessage = styled(TextField)`
  width: 100%
`;

const StyledButton = styled(Button)`
  font-family: 'Raleway';
  font-weight: 800;
`;

// Encode form data as URL-encoded format
// Encodes each key-value pair in the data object as URL-encoded string
// Joins the encoded pairs with & to form the final encoded string
function encode(data: any) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export default function ContactForm() {
  // State variable to hold form field values
  const [state, setState] = React.useState({});

  // Handle changes in form fields
  // Updates the state with the new form field value
  const handleChange = (e: any) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Get the form element
    const form = e.target;

    // Send form data to the serverless function when the form is submitted
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      // Navigate to the specified action URL on successful submission
      .then(() => navigate(form.getAttribute('action')))
      // Display alert if there is an error during submission
      .catch((error) => alert(error));
  };

  return (
    <StyledFormContainer>
      <form
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
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
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            fullWidth
            name="phone"
            label="Phone"
            type="phone"
            id="phone"
            autoComplete="tel"
            onChange={handleChange}
          />
          <StyledFormMessage
            margin="normal"
            id="message"
            label="Message"
            name="message"
            multiline
            required
            onChange={handleChange}
          />
          <StyledButton
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Send Message
            <Send sx={{ ml: 1 }} />
          </StyledButton>
        </fieldset>
      </form>
    </StyledFormContainer>
  );
}
