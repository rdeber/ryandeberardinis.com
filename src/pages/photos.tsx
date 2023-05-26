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
import { GatsbyImage, ImageDataLike, getImage } from 'gatsby-plugin-image';
import { HeadProps, graphql, useStaticQuery } from 'gatsby';
import Photo from '../components/Photo';
import HeadData from '../components/HeadData';

export function Head() {
  return (
    <HeadData title='Ryan DeBerardinis - Photography' />
  )
}

const StyledH1 = styled(Typography)`
  font-size: 5rem;
  line-height: .75;
  color: ${theme.palette.primary.main};
`;

const StyledH2 = styled(Typography)`
  font-weight: 300;
  font-size: 2rem;
  margin-top: .5rem;
  color: ${theme.palette.primary.main};
`;

const StyledBox = styled(motion.div)`
  background: #fff;
  box-shadow: 0 6px 12px -2px rgba(50,50,93,0.25),
              0 3px 7px -3px rgba(0,0,0,0.3);
  border-radius: 15px;
  overflow: hidden;

  a {
    // border-radius: 15px;
    // overflow: hidden;

    // Fix bottom gap in photo component
    display: block;
    line-height: 0;
  }
`;

export default function AboutPage() {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {sourceInstanceName: {eq: "photos"}}, sort: {name: ASC}) {
        edges {
          node {
            childImageSharp {
              thumbnail: gatsbyImageData(layout: CONSTRAINED, width: 800, quality: 95)
              photo: gatsbyImageData(layout: CONSTRAINED, width: 2000, quality: 80)
            }
            name
          }
        }
      }
      featured: allFile(filter: {sourceInstanceName: {eq: "featured"}}, sort: {name: ASC}) {
        edges {
          node {
            childImageSharp {
              logo: gatsbyImageData(layout: FIXED, width: 100, quality: 95)
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
      alt: parsedName, // Use the parsed name as the alt text
    };
  });
  console.log('data', data);
  console.log(images[0].srcSet);

  // const image = getImage(data.blogPost.avatar)

  return (
    <>
      <Grid item xs={12} sx={{ p: { xs: 2, sm: 6 } }}>
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
            Featured on:
          </StyledH2>
          {/* <GatsbyImage
            image={data.featured.edges[3]}
            alt=""
          />
          {console.log('xxxx', data.featured.edges[3].node)}
          {data.featured.edges.map((edge: any, index: number) => (
            <motion.div>
              <GatsbyImage
                key={index}
                image={edge}
                alt={edge.node.name}
              />
            </motion.div>
          ))} */}
        </motion.div>
      </Grid>

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
                // whileTap={{ scale: 0.97 }}
                whileHover={{ scale: 1.025 }}
                whileFocus={{ scale: 1.025 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <StyledBox variants={photoChild}>
                  <Photo
                    alt={image.alt}
                    largeURL={image.largeURL}
                    srcSet={image.srcSet}
                    thumbnailURL={image.thumbnailURL}
                    datapswpwidth={image.width}
                    datapswpheight={image.height}
                    key={'photo-' + index}
                  />
                </StyledBox>
              </motion.div>
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
        </motion.div>
      </Grid>
    </>
  );
}
