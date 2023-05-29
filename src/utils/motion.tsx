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
      staggerChildren: 0.133
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

export const featuredParent = {
  hidden: {
    transition: {
      staggerChildren: 0.7,
      staggerDirection: -1
    }
  },
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.75
    }
  }
};

export const featuredChild = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: .5,
    scale: 1,
  }
};
