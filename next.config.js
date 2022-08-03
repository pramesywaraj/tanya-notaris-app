const withTM = require("next-transpile-modules")(["react-markdown"]);

module.exports = withTM({
    reactStrictMode: true,
    env: {
        API_BASE_URL: process.env.API_BASE_URL,
        SHOW_DEMO_ONLY: process.env.SHOW_DEMO_ONLY,
    },
});
