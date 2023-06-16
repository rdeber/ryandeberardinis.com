import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { motion } from "framer-motion"
import { theme } from '../utils/theme';
import useMediaQuery from '@mui/material/useMediaQuery';
import ContactForm from '../components/ContactForm';
import { childVariants, parentVariants } from '../utils/motion';
import HeadData from '../components/HeadData';
import {
  Tooltip, IconButton, SvgIcon, SvgIconProps
} from '@mui/material';
import {
  StyledH1, StyledH2, StyledIcons
} from './indexStyles'

export function Head() {
  return (
    <HeadData
      title='Ryan DeBerardinis - Home Page'
      description="I'm an experienced frontend developer and accessibility engineer with a passion for creating intuitive and accessible user experiences using the latest web technologies."
    />
  )
}

const draw = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: 'rgba(0,0,0,0)',
    stroke: 'rgba(0,0,0,0)',
  },
  visible: {
    opacity: 1,
    pathLength: [0, 1, 1],
    fill: ['rgba(0,0,0,0)', 'rgba(0,0,0,0)', theme.palette.primary.main],
    stroke: [theme.palette.primary.main, theme.palette.primary.main, 'rgba(0,0,0,0)'],
  }
};

function GithubIcon(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 512 512" {...props}>
      <motion.path
        variants={draw}
        transition={{
          times: [0, 0.75, 1],
          duration: 2,
          opacity: { duration: 1 },
          pathLength: {
            type: "spring",
            bounce: 0,
            duration: 3
          }
        }}
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
      />
    </SvgIcon>
  );
}

function CodepenIcon(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 512 512" {...props}>
      <motion.path
        variants={draw}
        transition={{
          times: [0, 0.75, 1],
          duration: 2,
          opacity: { duration: 1 },
          pathLength: {
            type: "spring",
            bounce: 0,
            duration: 5
          }
        }}
        d="M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"
      />
    </SvgIcon>
  );
}

function LinkedinIcon(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 512 512" {...props}>
      <motion.path
        variants={draw}
        transition={{
          times: [0, 0.75, 1],
          duration: 2,
          opacity: { duration: 1 },
          pathLength: {
            type: "spring",
            bounce: 0,
            duration: 5
          }
        }}
        d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
      />
    </SvgIcon>
  );
}

function PhotoIcon(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 18 18" {...props}>
      <motion.path
        variants={draw}
        transition={{
          times: [0, 0.75, 1],
          duration: 2,
          opacity: { duration: 1 },
          pathLength: {
            type: "spring",
            bounce: 0,
            duration: 5
          }
        }}
        d="M5.996 0H0v14.3398zM10.2148 0h5.9883v14.3398zM8.1055 5.2852l3.8164 9.0546h-2.504L8.2774 11.457h-2.793Zm0 0"
      />
    </SvgIcon>
  );
}

export default function HomePage() {
  const isMediumAndDown = useMediaQuery(theme.breakpoints.down('md'));

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
            <div>RYAN </div>
            <div>DeBERARDINIS</div>
          </StyledH1>
          <StyledH2
            // @ts-expect-error
            component={motion.h2}
            variants={childVariants}
            variant="h2"
          >
            Developer + Designer + Photographer
          </StyledH2>
          <Typography
            component={motion.p}
            variants={childVariants}
            variant="body1"
          >
            I'm an experienced frontend developer and accessibility specialist with a passion for creating intuitive and accessible user experiences using the latest web technologies. I'm always interested in hearing about new projects. Get in touch if you'd like to collaborate on something new.
          </Typography>
          <StyledIcons direction="row" spacing={2}>
            <Tooltip title="View Site Source">
              <IconButton
                href="https://github.com/rdeber/ryandeberardinis.com"
                size="large"
                color='inherit'
                aria-label="View this site's source code on Github"
              >
                <GithubIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="View Codepens">
              <IconButton
                href="https://codepen.io/rdeber"
                size="large"
                color='inherit'
                aria-label="View my code on Codepen"
              >
                <CodepenIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="View photos on Adobe">
              <IconButton
                href="https://stock.adobe.com/contributor/201765499/deberarr"
                aria-label="View my photography on Adobe"
                className='photo-icon'
              >
                <PhotoIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Connect on LinkedIn">
              <IconButton
                href="https://www.linkedin.com/in/ryandeberardinis/"
                size="large"
                color='inherit'
                aria-label="Connect with me on LinkedIn"
              >
                <LinkedinIcon />
              </IconButton>
            </Tooltip>
          </StyledIcons>
        </motion.div>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          padding: {
            xs: '0rem 1.5rem 3rem',
            sm: '0rem 2.5rem 3rem',
            md: '2.5rem 3rem 4rem 1rem'
          }
        }}
      >
        <motion.div
          // ref={elementRef}
          initial={{
            opacity: 0,
            transform: isMediumAndDown
              ? 'perspective(25rem) rotateY(0) rotateX(0) rotate(0)'
              : 'perspective(75rem) rotateY(0) rotateX(0) rotate(0)'
          }}
          animate={{
            opacity: 1,
            transform: isMediumAndDown
              ? 'perspective(75rem) rotateX(8deg)'
              : 'perspective(75rem) rotateY(-20deg) rotateX(4deg) rotate(1deg)'
          }}
          transition={{ type: "spring", stiffness: 100 }}
          // animate={{
          //   opacity: 1,
          //   transform: isMediumAndDown
          //     ? focusedOrHasFocused
          //       ? 'perspective(75rem) rotateX(0)'
          //       : 'perspective(75rem) rotateX(8deg)'
          //     : focusedOrHasFocused
          //       ? 'perspective(75rem) rotateY(0) rotateX(0) rotate(0)'
          //       : 'perspective(75rem) rotateY(-20deg) rotateX(4deg) rotate(1deg)'
          // }}

        >
          <ContactForm />
        </motion.div>
      </Grid>
    </>
  );
}
