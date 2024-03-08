module.exports = {
    mode:"development",
    entry:'./scripts/index.js',
    output:{
        path:__dirname + '/browser',
        filename:'bundle.js'
    },
};