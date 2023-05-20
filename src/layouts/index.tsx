import React, { ReactNode } from "react"
import NavBar from "../components/NavBar";
import { motion } from "framer-motion";
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from "../utils/theme";

interface LayoutProps {
  children: ReactNode;
}

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
      {children}
    </ThemeProvider>
  )
}