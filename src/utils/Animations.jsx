export const containerVariants = {
  initial: {},
  animate: {},
};
export const opacityVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
};
export const heroTitleVariants = {
  initial: {
    opacity: 0,
    visibility: "none",
  },
  animate: {
    display: "block",
    opacity: 1,
    transition: {
      duration: 1,
      delay: 1,
      ease: "easeIn",
    },
  },
  hover: {
    textShadow: "3px 3px bisque",
  },
};
export const navItemVariants = {
  hover: {
    y: -2,
  },
};

export const treatsTitleVariants = {
  initial: {
    y: 20,
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};
