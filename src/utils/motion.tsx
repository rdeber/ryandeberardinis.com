export const parentVariants = {
  hidden: {
    transition: {
      staggerChildren: 0.7,
      staggerDirection: -1
    }
  },
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const childVariants = {
  hidden: {
    opacity: 0,
    x: -16,
    transition: { type: "spring", stiffness: 100 }
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100 }
  }
};

export const workVariants = {
  hidden: {
    opacity: 0,
    // transform: 'translateX(0) translateY(-333px) rotateX(35deg) rotateZ(-23deg)',
    y: -333,
    rotateX: 35,
    rotateZ: -23,
    transition: { type: "spring", stiffness: 100 }
  },
  visible: {
    opacity: 1,
    // transform: 'translateX(0) translateY(0) rotateX(45deg) rotateZ(-33deg)',
    y: 0,
    rotateX: 45,
    rotateZ: -33,
    transition: { type: "spring", stiffness: 100 }
  }
};


// Skills chips
export const skillsVariants = {
  hidden: {
    transition: {
      staggerChildren: 0.7,
      staggerDirection: -1
    }
  },
  visible: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

export const skillsChildVariants = {
  hidden: {
    opacity: 0,
    scale: 0.75,
    transition: { type: "spring", stiffness: 100 }
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 100 }
  }
};