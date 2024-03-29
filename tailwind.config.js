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
                transparentPrimary: "rgba(243, 122, 81, 0.8)",
                darkPrimary: "rgb(209, 101, 65)",
                secondary: "rgb(124, 88, 159)",
                black: "rgb(51, 51, 51)",
                mute: "rgba(119, 119, 119, 1)",
                grey: "rgb(199, 199, 199)",
                light: "rgb(235, 235, 235)",
                white: "rgb(255, 255, 255)",
                dark: "rgb(18, 18, 18)",
                purple: "rgba(124, 88, 159, 1)",
                red: "rgba(219, 15, 0, 1)",
                green: "rgba(0, 181, 3, 1)",
            },
            backgroundImage: (theme) => ({
                "banner-img": "url('/banner-img.png')",
                "banner-service": "url('/Banner.png')",
            }),
            spacing: {
                "390px": "390px",
                "160px": "160px",
                "100px": "100px",
                "80px": "80px",
                "60px": "60px",
                "40px": "40px",
                "32px": "32px",
                "30px": "30px",
                "16px": "16px",
                "0px": "0px",
            },
            height: {
                "banner-sm": "258px",
                banner: "158px",
                "section-img": "98px",
                "section-img-web": "160px",
                icon: "80px",
            },
            width: {
                icon: "80px",
                "section-img": "70px",
                "section-img-web": "224px",
                "section-last": "1800px",
                full: "100%",
            },
        },
        fontSize: {
            large: ["72px", "98px"],
            header1: ["40px", "58px"],
            header2: ["32px", "48px"],
            header3: ["28px", "40px"],
            header4: ["24px", "32px"],
            header5: ["20px", "28px"],
            body1: ["18px", "28px"],
            body: ["1rem", "24px"],
            small: ["0.875rem", "24px"],
            xsmall: ["0.75rem", "20px"],
            xxsmall: ["0.625rem", "16px"],
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
            sm: { min: "640px" },
            md: { min: "768px" },
            lg: { min: "1024px" },
            xl: { min: "1280px" },
            maxlgTablet: { max: "1024px" },
            maxDesktop: { max: "1280px" },
        },
        backgroundColor: (theme) => ({
            ...theme("colors"),
            primary: "#F37A51",
        }),
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
        plugin(({ addVariant, e }) => {
            addVariant("before", ({ modifySelectors, separator }) => {
                modifySelectors(({ className }) => {
                    return `.${e(`before${separator}${className}`)}::before`;
                });
            });
            addVariant("after", ({ modifySelectors, separator }) => {
                modifySelectors(({ className }) => {
                    return `.${e(`after${separator}${className}`)}::after`;
                });
            });
        }),
        plugin(({ addUtilities }) => {
            const contentUtilities = {
                ".content": {
                    content: "attr(data-content url)",
                },
                ".content-before": {
                    content: "attr(data-before url)",
                },
                ".content-after": {
                    content: "attr(data-after)",
                },
            };

            addUtilities(contentUtilities, ["before", "after"]);
        }),
    ],
};
