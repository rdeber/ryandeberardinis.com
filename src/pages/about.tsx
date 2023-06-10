import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { motion } from "framer-motion"
import { GatsbyImage } from "gatsby-plugin-image"
import Chip from '@mui/material/Chip';
import {
  childVariants, parentVariants,
  skillsChildVariants, skillsVariants
} from '../utils/motion';
import { useMediaQuery } from '@mui/material';
import HeadData from '../components/HeadData';
import { useStaticQuery, graphql } from 'gatsby';
import {
  StyledBox, StyledBoxWrap, StyledH1,
  StyledH2, StyledH3, StyledSkills, StyledBoxInner
} from './aboutStyles'

export function Head() {
  return (
    <HeadData title='Ryan DeBerardinis - About Page' />
  )
}

export default function AboutPage() {
  const theme = useTheme()
  const isMediumAndUp = useMediaQuery(theme.breakpoints.up('md'))

  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {sourceInstanceName: {eq: "work"}}, sort: {name: ASC}) {
        edges {
          node {
            childImageSharp {
              logo: gatsbyImageData(formats: WEBP, layout: CONSTRAINED, width: 700, quality: 85, placeholder: DOMINANT_COLOR)
            }
            name
          }
        }
      }
    }
  `);

  const workParent = {
    hidden: {
      transition: {
        staggerChildren: 0.7,
        staggerDirection: -1
      }
    },
    visible: {
      transition: {
        staggerChildren: 0.05,
      }
    }
  };

  const workChild = {
    hidden: {
      opacity: 0,
      y: -50,
      rotateX: isMediumAndUp ? 40 : 0,
      rotateZ: isMediumAndUp ? -30 : 0,
      transition: { type: "spring", stiffness: 100 }
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: isMediumAndUp ? 45 : 0,
      rotateZ: isMediumAndUp ? -33 : 0,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const skills = [
    "HTML5", 'CSS', 'Javascript', 'WCAG', 'WAI-ARIA', 'React',
    'Typescript', 'SCSS', 'UX/UI', 'Material UI', 'Gatsby',
    'jQuery', 'Bootstrap', 'Git', 'Photoshop', 'Illustrator'
  ]

  const tech = [
    "HTML5", 'CSS', 'Javascript', 'WCAG', 'WAI-ARIA', 'React',
    'Typescript', 'SCSS', 'UX/UI', 'Material UI', 'Gatsby',
    'jQuery', 'Bootstrap', 'Git', 'Photoshop', 'Illustrator'
  ]

  return (
    <>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          padding: {
            xs: '2rem 1.5rem',
            sm: '3rem 3rem 3rem',
            md: '6rem 1rem 4rem 3rem'
          }
        }}
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
            <span>Hello</span>
          </StyledH1>
          <StyledH2
            // @ts-expect-error
            component={motion.h2}
            variants={childVariants}
            variant="h2"
          >
            I'm a frontend web developer.
          </StyledH2>
          <Typography
            component={motion.p}
            variants={childVariants}
            variant="body1"
          >
            My work focuses on the intersection between design and development. I have a passion for crafting engaging user experiences built on a solid understanding of the latest web technologies.
          </Typography>
          <StyledH3
            // @ts-expect-error
            component={motion.h3}
            variants={childVariants}
            variant="h3"
          >
            Skills
          </StyledH3>
        </motion.div>
        <StyledSkills>
          <Grid
            container
            spacing={1}
            component={motion.ul}
            variants={skillsVariants}
            initial="hidden"
            animate={'visible'}
          >
            {skills.map((label: string, index: number) => (
              <Grid key={index} component={'li'} item>
                <Chip
                  size="small"
                  component={motion.div}
                  variants={skillsChildVariants}
                  label={label}
                  color='primary'
                />
              </Grid>
            ))}
          </Grid>
        </StyledSkills>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          padding: {
            xs: '0rem 1.5rem 3rem',
            sm: '0rem 2.5rem 3rem',
            md: '3rem 3rem 4rem 1rem'
          }
        }}
      >
        <StyledBoxWrap
          variants={workParent}
          initial="hidden"
          animate={'visible'}
        >
          {data.allFile.edges.map((edge: any, index: number) => (
            <StyledBox
              variants={workChild}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 100 }}
              key={'work' + index}
            >
              <StyledBoxInner>
                <GatsbyImage
                    image={edge.node.childImageSharp.logo}
                    alt=""
                  />
              </StyledBoxInner>
            </StyledBox>
          ))}
        </StyledBoxWrap>
      </Grid>
      {/*
      <Grid
        item
        xs={12}
        sx={{
          padding: {
            xs: '2rem 1.5rem'
          }
        }}
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
            <span>Hello</span>
          </StyledH1>
          <StyledH2
            // @ts-expect-error
            component={motion.h2}
            variants={childVariants}
            variant="h2"
          >
            I'm a frontend web developer.
          </StyledH2>

          <StyledH3
            // @ts-expect-error
            component={motion.h3}
            variants={childVariants}
            variant="h3"
          >
            How it's made
          </StyledH3>
          <Typography
            component={motion.p}
            variants={childVariants}
            variant="body1"
          >
            This website is build from scratch using the following technologies:

          </Typography>
        </motion.div>
        <StyledSkills>
          <Grid
            container
            spacing={1}
            component={motion.ul}
            variants={skillsVariants}
            initial="hidden"
            animate={'visible'}
          >
            {skills.map((label: string, index: number) => (
              <Grid key={index} component={'li'} item>
                <Chip
                  size="small"
                  component={motion.div}
                  variants={skillsChildVariants}
                  label={label}
                  color='primary'
                />
              </Grid>
            ))}
          </Grid>
        </StyledSkills>
      </Grid> */}
    </>
  );
};
