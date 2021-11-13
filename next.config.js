// const withTM = require("next-transpile-modules")(["react-markdown"]);

module.exports = {
    reactStrictMode: true,
    env: {
        API_BASE_URL: process.env.API_BASE_URL,
    },
};
