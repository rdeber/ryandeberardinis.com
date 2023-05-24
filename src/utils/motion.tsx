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

export const workParent = {
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

export const workChild = {
  hidden: {
    opacity: 0,
    y: -50,
    // scale: .5,
    rotateX: 35,
    rotateZ: -23,
    transition: { type: "spring", stiffness: 100 }
  },
  visible: {
    opacity: 1,
    y: 0,
    // scale: 1,
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
      staggerChildren: 0.05,
      delayChildren: 0.5
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

export const photoParent = {
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

export const photoChild = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    transition: { type: "spring", stiffness: 100 }
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 100 }
  }
};