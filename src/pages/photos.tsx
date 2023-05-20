import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { motion } from "framer-motion"
import "@fontsource/raleway/300.css";
import "@fontsource/raleway/400.css";
import "@fontsource/raleway/800.css";
import "@fontsource/raleway/900.css";
import { theme } from '../utils/theme';
import Masonry from '@mui/lab/Masonry';
import {
  childVariants, parentVariants,
} from '../utils/motion';
import { GatsbyImage, ImageDataLike, StaticImage, getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';

const StyledH1 = styled(Typography)`
  font-family: 'Raleway';
  font-weight: 900;
  font-size: 5rem;
  line-height: .75;
  color: ${theme.palette.primary.main};
  letter-spacing: -.125rem;
`;

const StyledH2 = styled(Typography)`
  font-family: 'Raleway';
  font-weight: 300;
  font-size: 2rem;
  margin-top: .5rem;
  color: ${theme.palette.primary.main};
`;

export default function AboutPage() {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "images/work" } }) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
            name
          }
        }
      }
    }
  `);

  const images = data.allFile.edges.map((edge: {
    node: {
      name: string;
      childImageSharp: { gatsbyImageData: ImageDataLike | null };
    };
  }) => {
    const imageName = edge.node.name; // Get the image name
    const parsedName = imageName.replace(/-/g, ' '); // Remove dashes from the name
    return {
      image: getImage(edge.node.childImageSharp.gatsbyImageData),
      alt: parsedName, // Use the parsed name as the alt text
    };
  });
  return (
    <>
      <Grid
        container
        component="main"
        sx={{
          backgroundColor: '#e3e7ec',
          maxWidth: '1440px',
          height: '100%',
          margin: '0 auto',
          minHeight: '100vh'
        }}
      >
        <Grid item xs={12} md={6} sx={{ p: {xs: 2, sm: 6} }}>
          <motion.div
            variants={parentVariants}
            initial="hidden"
            animate={'visible'}
          >
            <StyledH1
              // @ts-expect-error
              component={motion.h1}
              variants={childVariants}
              variant="h1"
            >
              <span>Photos</span>
            </StyledH1>
            <StyledH2
              // @ts-expect-error
              component={motion.h2}
              variants={childVariants}
              variant="h2"
            >
              Coming soon...
            </StyledH2>
          </motion.div>
        </Grid>

        <Grid item xs={12} sm={6} sx={{ p: 3 }}>
          <Masonry columns={3} spacing={2}>
            {console.log(images)}
          {images.map((image: any, index: number) => (
            <GatsbyImage
              key={index}
              image={image.image}
              alt={image.alt}
              style={{ width: '100%', height: 'auto' }}
            />
          ))}
          </Masonry>
        </Grid>
      </Grid>
    </>
  );
}
