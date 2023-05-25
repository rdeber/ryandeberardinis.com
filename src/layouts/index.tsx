import React, { ReactNode } from "react"
import NavBar from "../components/NavBar";
import { motion } from "framer-motion";
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from "../utils/theme";
import { Grid } from "@mui/material";

interface LayoutProps {
  children: ReactNode;
}

const StyledGrid = styled(Grid)`
  background-color: #e3e7ec;
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
  min-height: 100vh;
  overflow: hidden;
  flex-direction: column;

  ${props => props.theme.breakpoints.up("md")} {
    flex-direction: row;
  }
`;

export default function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
      <motion.div
        initial={{ opacity: 0, transform: 'translateY(-5px)' }}
        animate={{ opacity: 1, transform: 'translateY(0)' }}
        transition={{ duration: 0.25 }}
        style={{
          position: 'relative',
          zIndex: '1'
        }}
      >
        <NavBar />
      </motion.div>
      <main>
        <StyledGrid container>
          {children}
        </StyledGrid>
      </main>
    </ThemeProvider>
  )
}