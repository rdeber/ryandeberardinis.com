import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as GatsbyLink } from "gatsby"
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import MailIcon from '@mui/icons-material/Mail';
import { GitHub, LinkedIn } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from '@reach/router';
import { theme } from '../utils/theme';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

const StyledLink = styled(GatsbyLink)`
  font-family: ${theme.typography.h1.fontFamily};
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
  top: 94%;
  left: 0;
  right: 0;
  height: 9px;
  background: ${theme.palette.secondary.light};
  border-radius: 20px 20px 4px 4px;

  ${props => props.theme.breakpoints.up("sm")} {
    top: 100%
  }
`

type Link = {
  label: string;
  location: string;
};

const links = [
  { label: "Home", location: "/" },
  { label: "About", location: "/about" },
  { label: "Photos", location: "/photos" }
];

function CodepenIcon(props: SvgIconProps) {
  return (
    <SvgIcon height="1em" viewBox="0 0 512 512" {...props}>
      <path d="M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"/>
    </SvgIcon>
  );
}

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
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <StyledBox sx={{ flexGrow: 1 }}>
            <nav>
              <ul>
                {links.map((item) => (
                  <motion.li key={item.label} layout layoutRoot>
                    <StyledLink
                      onClick={() => setSelectedTab(item)}
                      className={item === selectedTab ? "selected" : ""}
                      to={item.location}
                    >
                      {item.label}
                    </StyledLink>
                    {item === selectedTab ? (
                      <Underline
                        transition={{ type: "spring", stiffness: 100, damping: 10 }}
                        className="underline"
                        layoutId="underline"
                      />
                    ) : null}
                  </motion.li>
                ))}
              </ul>
            </nav>
          </StyledBox>
          <Box sx={{ display: {xs: 'none', sm: 'flex'}, marginLeft: {sm: 'auto'} }}>
            {/* <Tooltip title="Contact Me">
              <IconButton size="large" aria-label="Open contact form" color="inherit">
                <MailIcon />
              </IconButton>
            </Tooltip> */}
            <Tooltip title="View Source">
              <IconButton
                component={Link}
                href="https://github.com/rdeber/ryandeberardinis.com"
                size="large"
                color='inherit'
                aria-label="View this site's source code on Github"
              >
                <GitHub />
              </IconButton>
            </Tooltip>
            <Tooltip title="View Codepens">
              <IconButton
                component={Link}
                href="https://codepen.io/rdeber"
                size="large"
                color='inherit'
                aria-label="View my work on Codepen"
              >
                <CodepenIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="My LinkedIn">
              <IconButton
                component={Link}
                href="https://www.linkedin.com/in/ryandeberardinis"
                size="large"
                color='inherit'
                aria-label="View my Linkedin profile"
              >
                <LinkedIn />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
