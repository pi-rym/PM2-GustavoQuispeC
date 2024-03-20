module.exports = {
    mode: "development",
    entry: {
        index: "./scripts/index.js",
        addMovieValidation: "./scripts/validation.js",
        addMovieClean: "./scripts/clean.js",
    },

    output: {
        path: __dirname + "/browser",
        filename: "[name].js",
    },
};
