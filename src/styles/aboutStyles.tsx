import { Box, Typography, styled } from "@mui/material";
import { motion } from "framer-motion";
import { theme } from "../utils/theme";

export const StyledH1 = styled(Typography)`
  font-size: 5rem;
  line-height: .75;
  color: ${theme.palette.primary.main};
`;

export const StyledH2 = styled(Typography)`
  font-weight: 400;
  font-size: clamp(1.3rem, 2.5vw + .5rem, 2rem);
  margin: 0.5rem 0 1rem;
  color: ${theme.palette.secondary.main};

  ${props => props.theme.breakpoints.up("md")} {
    font-size: clamp(1.25rem, 1.75vw + .5rem, 5rem);
  }
`;

export const StyledH3 = styled(Typography)`
  margin: 2rem 0 1rem 0;
  text-transform: uppercase;
  color: ${theme.palette.primary.main};
  display: flex;
  align-items: center;
  justify-content: center;

  ${props => props.theme.breakpoints.up("md")} {
    justify-content: flex-start;
  }

  &:before,
  &:after {
    content: "";
    display: block;
    width: 100%;
    max-width: 75px;
    height: 1px;
    margin: 0 0.75rem;
    background: #9ea3bb;

    ${props => props.theme.breakpoints.up("sm")} {
      max-width: 100px;
    }
  }
`;

export const StyledSkills = styled(Box)`
  max-width: 450px;
  margin: auto;

  ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  ul.MuiGrid-root {
    justify-content: center;
  }

  ${props => props.theme.breakpoints.up("md")} {
    margin: 0;

    ul.MuiGrid-root {
      justify-content: flex-start;
    }
  }
`;

export const StyledBoxWrap = styled(motion.div)`
  position: relative;
  min-height: 66vh;
  top: 100px;

  ${props => props.theme.breakpoints.up("md")} {
    min-height: 0;
    top: auto;
  }
`

export const StyledBox = styled(motion.div)`
  background: #fff;
  box-shadow:inset -2px -2px 3px rgba(50,50,93,0.25),
                   0 50px 100px -20px rgba(50,50,93,0.25),
                   0 30px 60px -30px rgba(0,0,0,0.3);
  border-radius: 15px;
  padding: 0.75rem;
  overflow: hidden;
  position: absolute;


  &:nth-of-type(1) {
    top: 300px;
    left: 15%;
    width: 35%;
    box-shadow: inset 1px -2px 3px rgba(50,50,93,0.25),
                0 30px 60px -12px rgba(50,50,93,0.25),
                0 18px 36px -18px rgba(0,0,0,0.3);
  }
  &:nth-of-type(2) {
    top: 269px;
    left: 52%;
    width: 45%;
    box-shadow: inset 1px -2px 3px rgba(50,50,93,0.25),
                0 30px 60px -12px rgba(50,50,93,0.25),
                0 18px 36px -18px rgba(0,0,0,0.3);
  }
  &:nth-of-type(3) {
    top: 71px;
    left: 52%;
    width: 57%;
    box-shadow: inset 1px -2px 3px rgba(50,50,93,0.25),
                0 50px 100px -20px rgba(50,50,93,0.25),
                0 30px 60px -30px rgba(0,0,0,0.3);
  }
  &:nth-of-type(4) {
    top: 152px;
    left: -15%;
    width: 50%;
    box-shadow: inset 1px -2px 3px rgba(50,50,93,0.25),
                0 50px 100px -20px rgba(50,50,93,0.25),
                0 30px 60px -30px rgba(0,0,0,0.3);
  }
  &:nth-of-type(5) {
    top: 190px;
    left: 29%;
    width: 43%;
    box-shadow: inset 1px -2px 3px rgba(50,50,93,0.25),
                0 50px 100px -20px rgba(50,50,93,0.25),
                0 30px 60px -30px rgba(0,0,0,0.3);
  }
  &:nth-of-type(6) {
    top: -11px;
    left: 67%;
    width: 60%;
    box-shadow: inset 1px -2px 3px rgba(50,50,93,0.25),
                0 50px 100px -20px rgba(50,50,93,0.25),
                0 30px 60px -30px rgba(0,0,0,0.3);
  }
  &:nth-of-type(7) {
    top: 0px;
    left: -2%;
    width: 60%;
    box-shadow: inset 1px -2px 3px rgba(50,50,93,0.25),
                0 50px 100px -20px rgba(50,50,93,0.25),
                0 30px 60px -30px rgba(0,0,0,0.3);
  }
  &:nth-of-type(8) {
    top: -62px;
    left: 18%;
    width: 66%;
    box-shadow: inset 1px -2px 3px rgba(50,50,93,0.25),
                0 50px 100px -20px rgba(50,50,93,0.25),
                0 30px 60px -30px rgba(0,0,0,0.3);
  }

  ${props => props.theme.breakpoints.up("md")} {
    border-radius: 20px;
    padding: 1rem;
    width: 20rem;
    height: 15rem;
    max-width: 300px;

    &:nth-of-type(1) {
      top: 320px;
      left: 100px;
      width: 15rem;
      height: 11rem;
    }
    &:nth-of-type(2) {
      top: 190px;
      left: 330px;
      width: 20rem;
      height: 16rem;
    }
    &:nth-of-type(3) {
      top: 40px;
      left: 190px;
      width: 20rem;
      height: 15rem;
    }
    &:nth-of-type(4) {
      top: 200px;
      left: 35px;
      width: 13rem;
      height: 11rem;
    }
    &:nth-of-type(5) {
      top: 190px;
      left: 155px;
      width: 15rem;
      height: 11rem;
    }
    &:nth-of-type(6) {
      top: -65px;
      left: -20px;
      width: 19rem;
      height: 14rem;
    }
    &:nth-of-type(7) {
      top: -170px;
      left: 120px;
      width: 19rem;
      height: 18rem;
    }
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px #fff,
                0 0 0 5px ${theme.palette.secondary.light},
                inset 1px -2px 3px rgba(50,50,93,0.25),
                0 50px 100px -20px rgba(50,50,93,0.25),
                0 30px 60px -30px rgba(0,0,0,0.3);
    outline: none;
  }
`;

export const StyledBoxInner = styled(Box)`
  overflow: hidden;
  height: 100%;
`;