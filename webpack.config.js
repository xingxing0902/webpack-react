const path = require('path')
module.exports = {
    entry: {
        index: "./src/index.js",
        one: "./src/one.js"
    },

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name]_[contenthash].main.js"
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    // options: {
                    //     presets: ['@babel/preset-env', '@babel/preset-react']
                    // }
                }
            }
        ]
    },
    devtool:"source-map",

}