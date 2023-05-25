import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as GatsbyLink } from "gatsby"
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import MailIcon from '@mui/icons-material/Mail';
import { CodeRounded, GitHub } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from '@reach/router';
import { theme } from '../utils/theme';

const StyledLink = styled(GatsbyLink)`
  font-family: 'Raleway';
  font-weight: 800;
  font-size: 1rem;
  color: #fff;
  text-transform: uppercase;
  color: rgba(255,255,255,.8);
  text-transform: uppercase;
  text-decoration: none;
  padding: 0.75rem;
  border-radius: 20px;
  transition: all 200ms ease;

  &:hover {
    background: rgba(255,255,255,.1);
  }

  &:focus-visible {
    box-shadow: 0 0 0 3px rgba(255,255,255,.5);
    outline: none;
  }

  &.active {
    color: #fff;
  }

  &.selected {
    color: #fff;
  }
`;

const StyledBox = styled(motion.div)`
ul,
li {
  list-style: none;
  padding: 0;
  margin: 0;
}

ul {
  display: flex;
  width: 100%;
}

li {
  display: flex;
  position: relative;
}
`

const Underline = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  height: 9px;
  background: #8998e8;
  border-radius: 20px 20px 4px 4px;
`

type Link = {
  label: string;
  location: string;
};

const links = [
  { label: "Home", location: "/" },
  { label: "Work", location: "/about" },
  { label: "Photos", location: "/photos" }
];

export default function NavBar() {
  const [selectedTab, setSelectedTab] = useState<Link | null>(null);
  const location = useLocation();

  useEffect(() => {
    const currentTab = links.find(item => {
      const cleanLocation = location.pathname.replace(/\/$/, ''); // Remove trailing slash
      const cleanItemLocation = item.location.replace(/\/$/, ''); // Remove trailing slash
      return cleanItemLocation.toLowerCase() === cleanLocation.toLowerCase(); // Case-insensitive comparison
    });

    if (!currentTab) {
      return
    }

    setSelectedTab(currentTab);
  }, [location]);

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
          <StyledBox sx={{ flexGrow: 1 }}>
            <nav>
              <ul>
                {links.map((item) => (
                  <li key={item.label}>
                    <StyledLink
                      onClick={() => setSelectedTab(item)}
                      className={item === selectedTab ? "selected" : ""}
                      to={item.location}
                    >
                      {item.label}
                    </StyledLink>
                    {item === selectedTab ? (
                      <Underline
                        transition={{ type: "spring", stiffness: 75 }}
                        className="underline"
                        layoutId="underline"
                      />
                    ) : null}
                  </li>
                ))}
              </ul>
            </nav>
          </StyledBox>
          <Box sx={{ marginLeft: {sm: 'auto'} }}>
            <Tooltip title="Contact Me">
              <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <MailIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="View Source">
                <IconButton component={Link} href="https://github.com/rdeber/ryandeberardinis.com" size="large" aria-label="View this site's source code on Github" color="inherit">
                  <GitHub />
                </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}