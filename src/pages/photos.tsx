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
  childVariants, parentVariants, photoParent, photoChild,
} from '../utils/motion';
import { GatsbyImage, ImageDataLike, StaticImage, getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import { Gallery, Item } from 'react-photoswipe-gallery';
import Photos from '../components/Photos';
import PhotoGallery from '../components/Photos';

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
  // Get all the images from the photos directory
  // and generated the sizes and data.
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "photos" } }) {
        edges {
          node {
            childImageSharp {
              thumbnail: gatsbyImageData(layout: CONSTRAINED, width: 200, quality: 75)
              photo: gatsbyImageData(layout: CONSTRAINED, width: 2000, quality: 75)
            }
            name
          }
        }
      }
    }

  `);

  // Build the photos data object
  const images = data.allFile.edges.map((
    edge: {
      node: {
        name: string;
        childImageSharp: {
          photo: any;
          thumbnail: any;
          fixed: any
          gatsbyImageData: ImageDataLike
        };
      };
    }) => {
    const imageName = edge.node.name; // Get the image name
    const parsedName = imageName.replace(/-/g, ' '); // Remove dashes from the name
    return {
      thumbnailURL: edge.node.childImageSharp.thumbnail.images.fallback.src,
      largeURL: edge.node.childImageSharp.photo.images.fallback.src,
      srcSet: edge.node.childImageSharp.photo.images.sources[0].srcSet,
      width: edge.node.childImageSharp.photo.width,
      height: edge.node.childImageSharp.photo.height,
      alt: parsedName, // Use the parsed name as the alt text
    };
  });
  console.log('data', data);
  console.log(images);

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
        <Grid item xs={12} sm={6} sx={{ p: { xs: 2, sm: 6 } }}>
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

        <Grid item xs={12} sm={6}>
          <Masonry
            columns={3}
            spacing={2}
            component={motion.div}
            variants={photoParent}
            initial="hidden"
            animate={'visible'}
            className="pswp-gallery"
            id='my-test-gallery'
          >
            {images.map((image: any, index: number) => (
              <PhotoGallery
                // galleryID="my-test-gallery"
                alt={image.alt}
                largeURL={image.largeURL}
                thumbnailURL={image.thumbnailURL}
                datapswpwidth={image.width}
                datapswpheight={image.height}
                key={'photo-' + index}
              />
            ))}
            {/* {images.map((image: any, index: number) => (
              <motion.div variants={photoChild}>
                <SimpleGallery
                  galleryID="my-test-gallery"
                  images={image.image}
                />
                <GatsbyImage
                  key={index}
                  image={image.image}
                  alt={image.alt}
                  // style={{ width: '100%', height: 'auto' }}
                />
              </motion.div>
            ))} */}
          </Masonry>
        </Grid>
      </Grid>
    </>
  );
}
