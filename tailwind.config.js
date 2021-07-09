const plugin = require("tailwindcss/plugin");

function pxToRem(pixel) {
    return `${pixel / 16}rem`;
}

module.exports = {
    purge: ["./src/pages/**/*.js", "./src/components/**/*.js"],
    darkMode: false, // or 'media' or 'class'
    fontFamily: {
        sans: ["Open Sans", "sans-serif"],
    },
    theme: {
        extend: {
            colors: {
                primary: "rgb(243, 122, 81)",
                secondary: "rgb(124, 88, 159)",
                black: "rgb(51, 51, 51)",
                mute: "rgb(119, 119, 119, 1)",
                grey: "rgb(199, 199, 199)",
                light: "rgb(235, 235, 235)",
                white: "rgb(255, 255, 255)",
                dark: "rgb(18, 18, 18)",
            },
            backgroundImage: theme => ({
              'banner-img': "url('/banner-img.png')",
            }),
        },
        spacing: {
          '390px' : '390px',
          '160px' : '160px',
          '100px' : '100px',
          '80px' : '80px',
          '60px' : '60px',
          '40px' : '40px',
          '32px' : '32px',
          '30px': '30px',
          '16px' : '16px',
          '0px' : '0px',
        },
        height: {
          'banner-sm': '258px',
          'banner': '158px',
          'section-img' : '98px',
          'section-img-web': '160px',
          'icon' : '70px',
        },
        width: {
          'icon' : '140px',
          'section-img' : '70px',
          'section-img-web': '224px',
          'section-last': '1800px',
          full : '100%',
        },
        fontSize: {
            header1: [pxToRem(40), "58px"],
            header2: [pxToRem(32), "48px"],
            header3: [pxToRem(28), "40px"],
            header4: [pxToRem(24), "32px"],
            header5: [pxToRem(20), "28px"],
            body1: [pxToRem(18), "28px"],
            body: [pxToRem(16), "24px"],
            small: [pxToRem(14), "24px"],
            xsmall: [pxToRem(12), "20px"],
            xxsmall: [pxToRem(10), "16px"],
        },
        fontWeight: {
            bold: 700,
            semibold: 600,
            normal: 500,
            light: 400,
        },
        screens: {
            smallPhone: { max: "374px" },
            phone: { min: "375px", max: "767px" },
            tablet: { min: "768px", max: "1023px" },
            lgTablet: { min: "1024px", max: "1279px" },
            desktop: { min: "1280px", max: "1919px" },
            fullDesktop: "1920px",
            "2k": "2048px",
            "4k": "3840px",
            sm: {min: "640px"},
            md: {min: "768px"},
            lg: {min: "1024px"},
            xl: {min: "1280px"},
        },
        backgroundColor: theme => ({
          ...theme('colors'),
          'primary': '#F37A51',
        }),
    },
    variants: {
        extend: {},
    },
    plugins: [
        plugin(function ({ addBase, theme }) {
            addBase({
                h1: { fontSize: theme("fontSize.header1") },
                h2: { fontSize: theme("fontSize.header2") },
                h3: { fontSize: theme("fontSize.header3") },
                h4: { fontSize: theme("fontSize.header4") },
                h5: { fontSize: theme("fontSize.header5") },
                p: { fontSize: theme("fontSize.body") },
                small: { fontSize: theme("fontSize.xsmall") },
            });
        }),
    ],
};
