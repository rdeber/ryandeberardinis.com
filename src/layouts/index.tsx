import React, { ReactNode } from "react"
import NavBar from "../components/NavBar";
import { motion } from "framer-motion";
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from "../utils/theme";
import { Box, Grid, Typography } from "@mui/material";
import { HeadProps } from "gatsby";

export function Head(props: HeadProps) {
  return (
    <html lang="en-us" />
  )
}
interface LayoutProps {
  children: ReactNode;
}

const NavBarContainer = styled(motion.div)`
  // position: fixed;
  // bottom: 0;
  // z-index: 2;
  // width: 100%;

  // ${props => props.theme.breakpoints.up("sm")} {
  //   bottom: auto;
  //   top: 0;
  // }
`;

const StyledGrid = styled(Grid)`
  background-color: #e3e7ec;
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
  padding-bottom: 5rem;
  min-height: 100vh;
  overflow: hidden;
  flex-direction: column;

  // ${props => props.theme.breakpoints.up("sm")} {
  //   padding: 64px 0 0;
  // }

  ${props => props.theme.breakpoints.up("md")} {
    flex-direction: row;
  }
`;

const StyledFooter = styled(Box)`
  width: 100%;
  background: ${theme.palette.primary.main};
  padding: .5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledName = styled(Typography)`
  color: ${theme.palette.primary.contrastText};
  font-size: .75rem;
  font-weight: 700;
`;

export default function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
      <NavBarContainer
        initial={{ opacity: 0, transform: 'translateY(-5px)' }}
        animate={{ opacity: 1, transform: 'translateY(0)' }}
        transition={{ duration: 0.25 }}
      >
        <NavBar />
      </NavBarContainer>
      <main>
        <StyledGrid container>
          {children}
        </StyledGrid>
      </main>
      <StyledFooter>
        <StyledName variant="body1">
          Ⓒ 2023 - RYAN DeBERARDINIS
        </StyledName>
      </StyledFooter>
    </ThemeProvider>
  )
}