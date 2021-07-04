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
    mode: "jit",
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
        },
        fontSize: {
            header1: [pxToRem(40), "58px"],
            header2: [pxToRem(32), "48px"],
            header3: [pxToRem(28), "40px"],
            header4: [pxToRem(24), "32px"],
            header5: [pxToRem(20), "28px"],
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
            phone: "375px",
            tablet: "768px",
            lgTablet: "1024px",
            desktop: "1280px",
            fullDesktop: "1920px",
            "2k": "2048px",
            "4k": "3840px",
        },
        flex: {
            1: "1 1 0%",
            auto: "1 1 auto",
            initial: "0 1 auto",
            inherit: "inherit",
            none: "none",
            2: "2 2 0%",
        },
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
