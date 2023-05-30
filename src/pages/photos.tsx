import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { motion } from "framer-motion"
import { theme } from '../utils/theme';
import Masonry from '@mui/lab/Masonry';
import {
  childVariants, parentVariants, photoParent, photoChild, featuredChild, featuredParent, skillsVariants, skillsChildVariants,
} from '../utils/motion';
import { GatsbyImage, ImageDataLike, getImage } from 'gatsby-plugin-image';
import { HeadProps, graphql, useStaticQuery } from 'gatsby';
import Photo from '../components/Photo';
import HeadData from '../components/HeadData';

export function Head() {
  return (
    <HeadData title='Ryan DeBerardinis - Photography' />
  )
}

const StyledGrid = styled(Grid)`
  text-align: center;
  padding: 2rem 1.5rem;

  ${props => props.theme.breakpoints.up("sm")} {
    padding: 3rem 3rem 3rem;
  }
  ${props => props.theme.breakpoints.up("md")} {
    padding: 3rem 1rem 4rem;
  }
}
`;

const StyledH1 = styled(Typography)`
  font-size: 5rem;
  line-height: .75;
  color: ${theme.palette.primary.main};
`;

const StyledH2 = styled(Typography)`
  font-size: clamp(1.1rem, 3vw + .5rem, 2rem);
  margin: 0.5rem 0 1rem;
  color: ${theme.palette.secondary.main};

  ${props => props.theme.breakpoints.up("md")} {
    font-size: clamp(1.1rem, 1.35vw + .5rem, 5rem);
  }
`;

const StyledH3 = styled(Typography)`
  text-transform: uppercase;
  margin: 2rem 0 1rem 0;
  color: ${theme.palette.primary.main};
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:before,
  &:after {
    content: "";
    display: block;
    width: 100%;
    max-width: 55px;
    height: 1px;
    margin: 0 0.75rem;
    background: #9ea3bb;

    ${props => props.theme.breakpoints.up("sm")} {
      max-width: 100px;
    }
  }
`;

const FeaturedLogo = styled(motion.div)`
  filter: grayscale(100%);
`;

const StyledBox = styled(motion.div)`
  a {
    box-shadow: 0 6px 12px -2px rgba(50,50,93,0.25),
                0 3px 7px -3px rgba(0,0,0,0.3);
    border-radius: 15px;
    overflow: hidden;
    transition: all 200ms ease;

    // Fix bottom gap in photo component
    display: block;
    line-height: 0;

    &:focus-visible {
      box-shadow: 0 0 0 3px #fff,
                  0 0 0 8px ${theme.palette.secondary.light},
                  0 6px 12px -2px rgba(50,50,93,0.25),
                  0 3px 7px -3px rgba(0,0,0,0.3);
      outline: none;
    }
  }
`;

export default function AboutPage() {
  const data = useStaticQuery(graphql`
    query {
      featured: allFile(filter: {sourceInstanceName: {eq: "featured"}}, sort: {name: DESC}) {
        edges {
          node {
            childImageSharp {
              logo: gatsbyImageData(formats: WEBP, layout: CONSTRAINED, width: 200, quality: 85, placeholder: NONE)
            }
            name
          }
        }
      }
      allFile(filter: {sourceInstanceName: {eq: "photos"}}, sort: {name: ASC}) {
        edges {
          node {
            childImageSharp {
              thumbnail: gatsbyImageData(formats: WEBP, layout: CONSTRAINED, width: 800, quality: 85)
              photo: gatsbyImageData(formats: WEBP, layout: CONSTRAINED, width: 2000, quality: 85)
            }
            name
          }
        }
      }
    }
  `);

  // Build the photos data
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
      srcSet: edge.node.childImageSharp.photo.images.fallback.srcSet,
      width: edge.node.childImageSharp.photo.width,
      height: edge.node.childImageSharp.photo.height,
      gatsbyImageData: edge.node.childImageSharp.photo,
      alt: parsedName, // Use the parsed name as the alt text
    };
  });
  // console.log('data', data);

  return (
    <>
      <StyledGrid
        item
        xs={12}
      >
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
          {/* <StyledH2
            // @ts-expect-error
            component={motion.h2}
            variants={childVariants}
            variant="h2"
          >
            Nature + Cities + People
          </StyledH2>
          <Typography
            component={motion.p}
            variants={childVariants}
            variant="body1"
          >
            My photography captures the beauty and essence of diverse subjects, ranging from breathtaking natural landscapes to captivating urban city scenes. Through my lens, I aim to showcase the intricate details, hidden moments, and the undeniable energy that permeates people and places.
          </Typography> */}
          <StyledH3
            // @ts-expect-error
            component={motion.h3}
            variants={childVariants}
            variant="h3"
          >
            Featured on:
          </StyledH3>
        </motion.div>
        <motion.div
          variants={featuredParent}
          initial="hidden"
          animate={'visible'}
        >
          <Grid container spacing={1}
            sx={{
              maxWidth: '800px',
              margin: 'auto'}}
          >
            {data.featured.edges.map((edge: any, index: number) => (
              <Grid
                item
                xs={3}
                sm={2}
                key={'featured' + index}
                sx={{
                  px: { xs: 1, sm: 2, md: 3 },
                  py: { xs: 0, sm: 2 }
                }}
              >
                <FeaturedLogo variants={featuredChild}>
                  <GatsbyImage
                    image={edge.node.childImageSharp.logo}
                    alt=""
                  />
                </FeaturedLogo>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </StyledGrid>

      <Grid item xs={12} sx={{ p: { xs: 1, sm: 2 } }}>
        <motion.div
          variants={photoParent}
          initial="hidden"
          animate={'visible'}
        >
          <Masonry
            columns={{ xs: 2, sm: 3, md: 3, lg: 4 }}
            spacing={{ xs: 2, sm: 2, md: 4, lg: 3 }}
            style={{ margin: 0 }}
            className="pswp-gallery"
            id='my-test-gallery'
          >
            {images.map((image: any, index: number) => (
              <motion.div
                whileHover={{ scale: 1.025 }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                key={'photo-wrap' + index}
              >
                <StyledBox variants={photoChild}>
                  <Photo
                    alt={image.alt}
                    largeURL={image.largeURL}
                    srcSet={image.srcSet}
                    thumbnailURL={image.thumbnailURL}
                    datapswpwidth={image.width}
                    datapswpheight={image.height}
                    gatsbyImage={image.gatsbyImageData}
                    key={'photo-' + index}
                  />
                </StyledBox>
              </motion.div>
            ))}
          </Masonry>
        </motion.div>
      </Grid>
    </>
  );
}
