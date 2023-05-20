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
import { styled } from '@mui/material/styles';
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

const StyledBox = styled(Box) `
  background: #fff;
  box-shadow:inset -2px -2px 3px rgba(50,50,93,0.25),
                   0 50px 100px -20px rgba(50,50,93,0.25),
                   0 30px 60px -30px rgba(0,0,0,0.3);
  border-radius: 20px;
  padding: 1rem;
  width: 20rem;
  height: 15rem;
  transform: translateX(0) translateY(0) rotateX(45deg) rotateZ(45deg);
  overflow: hidden;
`;

const StyledBoxInner = styled(Box) `
  overflow: hidden;
  height: 0%;
`;

export default function AboutCard(props: { image: any }) {
  const { image } = props;

  return (
    <StyledBox>
      <StyledBoxInner>
        <GatsbyImage
          image={image}
          alt=''
        />
      </StyledBoxInner>
    </StyledBox>
  );
}
