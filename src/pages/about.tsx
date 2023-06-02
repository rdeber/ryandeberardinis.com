import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';
import { motion } from "framer-motion"
import { theme } from '../utils/theme';
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import Chip from '@mui/material/Chip';
import {
  childVariants, parentVariants,
  skillsChildVariants, skillsVariants
} from '../utils/motion';
import { useMediaQuery } from '@mui/material';
import HeadData from '../components/HeadData';
import { useStaticQuery, graphql } from 'gatsby';
import { Javascript } from '@mui/icons-material';
import UI from 'photoswipe/dist/types/ui/ui';

export function Head() {
  return (
    <HeadData title='Ryan DeBerardinis - About Page' />
  )
}

const StyledH1 = styled(Typography)`
  font-size: 5rem;
  line-height: .75;
  color: ${theme.palette.primary.main};
`;

const StyledH2 = styled(Typography)`
  font-weight: 400;
  font-size: clamp(1.3rem, 2.5vw + .5rem, 2rem);
  margin: 0.5rem 0 1rem;
  color: ${theme.palette.secondary.main};

  ${props => props.theme.breakpoints.up("md")} {
    font-size: clamp(1.25rem, 1.75vw + .5rem, 5rem);
  }
`;

const StyledH3 = styled(Typography)`
  margin: 2rem 0 1rem 0;
  // font-weight: 700;
  // font-size: clamp(1.5rem, 1.75vw + .5rem, 2rem);
  text-transform: uppercase;
  color: ${theme.palette.primary.main};
  display: flex;
  align-items: center;
  justify-content: center;

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

const StyledSkills = styled(Box)`
  max-width: 450px;
  margin: auto;

  .MuiGrid-root {
    justify-content: center;
  }

  ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  ${props => props.theme.breakpoints.up("md")} {
  }
`;

const StyledBoxWrap = styled(motion.div)`
  position: relative;
  min-height: 66vh;
  top: 100px;

  ${props => props.theme.breakpoints.up("md")} {
    min-height: 0;
    top: auto;
  }
`

const StyledBox = styled(motion.div)`
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

const StyledBoxInner = styled(Box)`
  overflow: hidden;
  height: 100%;
`;

export default function AboutPage() {
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

  console.log(data)

  const theme = useTheme()
  const isMediumAndUp = useMediaQuery(theme.breakpoints.up('md'))

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
      {/* <Grid
        item
        xs={12}
        sx={{
          padding: {
            xs: '2rem 1.5rem',
            sm: '3rem 3rem 3rem',
            md: '6rem 1rem 4rem 3rem'
          }
        }}
      >
        <StyledH3
          // @ts-expect-error
          component={motion.h3}
          variants={childVariants}
          variant="h3"
        >
          Skills & Technologies
        </StyledH3>
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
