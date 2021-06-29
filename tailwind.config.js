module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    height: {
      'banner-sm': '258px',
      'banner': '158px',
      'section-img' : '98px',
      'section-img-web': '160px',
    },
    width: {
      'section-img' : '70px',
      'section-img-web': '224px',
    },
    spacing: {
      '0px' : '0px',
      '160px' : '160px',
      '100px': '100px',
      '540px' : '540px',
      '80px' : '80px',
      '40px' : '40px',
      '0.5rem' : '0.5rem',
      '1rem' : '1rem',
      '3.75rem' : '3.75rem',
      '6.25rem' : '6.25rem',
      '10rem' : '10rem',
    },
    fontSize: {
      'banner-mobile': ['28px', '40px'],
      'banner-desktop': ['40px', '58px'],
      'section2-mobile': ['14px', '24px'],
      'section2-web': ['18px', '32px'],
      'section-large': ['32px', '48px'],
      'section1-mobile': ['20px', '28px'],
      'section1-tab': ['1.5rem', '2rem'],
      'section1-desktop': ['2rem  ', '3rem'],
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#F37A51',
    }),
    extend: {
      backgroundImage: theme => ({
        'banner-img': "url('/banner-img.png')",
      }),
      spacing: {
        '30px': '30px',
        '16px' : '16px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
