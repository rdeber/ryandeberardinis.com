import * as React from 'react'
import { motion, SVGMotionProps } from 'framer-motion'
import { IconButton } from '@mui/material'

// interface Props extends SVGMotionProps<SVGPathElement> {
//   open?: boolean;
//   color?: string;
//   strokeWidth?: string | number;
//   transition?: Transition;
//   lineProps?: any;
// }

interface ToggleIconProps {
  open?: boolean
  handleClickOpen?: any
}

const Path = (props: JSX.IntrinsicAttributes & SVGMotionProps<SVGPathElement> & React.RefAttributes<SVGPathElement>) => (
  <motion.path
    layout
    fill='#fff'
    strokeWidth='3'
    stroke='#fff'
    strokeLinecap='round'
    {...props}
  />
)


const ToggleIcon = ({ open, handleClickOpen }: ToggleIconProps) => {

  const handleClick = () => {
    handleClickOpen(!open);
  };


  return (
    <IconButton
      onClick={handleClick}
      component={motion.div}
      animate={open ? 'open' : 'closed'}
      layout
      layoutRoot
      aria-label={open ? 'Close drawer panel' : 'Open drawer panel'}
      aria-expanded={open ? 'true' : 'false'}
      aria-controls='mobile-nav-menu'
    >
    <svg width="50" height="50" viewBox="0 0 50 50">
      <Path
        variants={{
          closed: { d: 'M 10 15 L 40 15' },
          open: { d: 'M 15 15 L 35 35' }
        }}
      />
      <Path
        d='M 10 25 L 40 25'
        variants={{
          closed: { opacity: 1, scale: 1 },
          open: { opacity: 0, scale: 0 }
        }}
      />
      <Path
        variants={{
          closed: { d: 'M 10 35 L 40 35' },
          open: { d: 'M 15 35 L 35 15' }
        }}
      />
    </svg>
    </IconButton>
  )
}

export default ToggleIcon
