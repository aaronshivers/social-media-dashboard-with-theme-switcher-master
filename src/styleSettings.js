const styleSettings = {
  themes: {
    light: {
      bg: 'hsl(0, 0%, 100%)',
      bgTop: 'hsl(225, 100%, 98%)',
      cardBg: 'hsl(227, 47%, 96%)',
      textDark: 'hsl(228, 12%, 44%)',
      textLight: 'hsl(230, 17%, 14%)',
      toggle: 'hsl(230, 22%, 74%)',
    },
    dark: {
      bg: 'hsl(230, 17%, 14%)',
      bgTop: 'hsl(232, 19%, 15%)',
      cardBg: 'hsl(228, 28%, 20%)',
      textDark: 'hsl(228, 34%, 66%)',
      textLight: 'hsl(0, 0%, 100%)',
      toggle: {
        start: 'hsl(210, 78%, 56%)',
        end: 'hsl(146, 68%, 55%)',
      },
    },
  },
  colors: {
    limeGreen: 'hsl(163, 72%, 41%)',
    brightRed: 'hsl(356, 69%, 56%)',

    facebook: 'hsl(208, 92%, 53%)',
    twitter: 'hsl(203, 89%, 53%)',
    instagram: {
      start: 'hsl(37, 97%, 70%)',
      end: 'hsl(329, 70%, 58%)',
    },
    youTube: 'hsl(348, 97%, 39%)',
  },
  sizes: {
    small: '1.2rem',
    medium: '1.4rem',
    large: '1.8rem',
    extraLarge: '2.4rem',
  },
  breakPoints: {
    desktop: '1440px',
    mobile: '375px',
  },
};

export default styleSettings;
