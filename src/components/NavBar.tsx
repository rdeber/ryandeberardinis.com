import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'gatsby';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import MailIcon from '@mui/icons-material/Mail';
import { CodeRounded, GitHub } from '@mui/icons-material';

const StyledLink = styled(Link)`
  font-family: 'Raleway';
  font-weight: 800;
  font-size: 1rem;
  color: #fff;
  text-transform: uppercase;
  color: rgba(255,255,255,.8);
  text-transform: uppercase;
  text-decoration: none;
  padding: 0.75rem;
  transition: all 200ms ease;

  &.active {
    color: #fff;
  }
`;

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <StyledLink activeClassName="active" to="/">Home</StyledLink>
            <StyledLink activeClassName="active" to="/about">About</StyledLink>
          </Box>
          <Box sx={{ marginLeft: {sm: 'auto'} }}>
            <Tooltip title="Open settings">
              <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <MailIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Open settings">
              <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <GitHub />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}