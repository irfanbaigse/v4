module.exports = {
  email: 'irfan.blackhawk@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/irfanbaigse',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/iam.irfanbaig',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/iam_irfanbaig',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/iam_irfanbaig',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/iam_irfanbaig',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#a8b2d1',
    darkNavy: '#ccd6f6',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
