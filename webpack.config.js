const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: {
        index: "./src/index.js",
        one: "./src/one.js"
    },

    output: {
        path: path.resolve(__dirname, "dist"),
        filename:"js/[name]_[contenthash].main.js"
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
            },
            //css
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            //less
            {
                test: /\.less$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader, // creates style nodes from JS strings
                }, {
                    loader: 'css-loader' // translates CSS into CommonJS
                }, {
                    loader: 'less-loader' // compiles Less to CSS
                }]
            },
            //scss
            {
                test: /\.scss$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader, // creates style nodes from JS strings
                }, {
                    loader: 'css-loader' // translates CSS into CommonJS
                }, {
                    loader: 'sass-loader' // compiles Less to CSS
                }]
            }
        ]
    },
    devtool: "source-map",
    devServer: {
        // contentBase: path.join(__dirname, 'dist'),

        static: {
            directory: path.join(__dirname, 'public'),
          },
        compress: true,
        port: 8080,
        proxy: {
            "/data": {
                "target": "http://www.qhdlink.com/data.php",
                "changeOrigin": true,
                "pathRewrite": { "^/data" : "" }
            }
        }
    },
    plugins: [
        //配置多个应用
        new HtmlWebpackPlugin({ //假设是前台应用入口
            title: '首页',
            filename: "index.html",
            template: "./public/index.html",
            chunks: ["index"]    //chunks指定需要引入的入口模块的键名 index:"./src/index.js"
        }),
        new HtmlWebpackPlugin({//假设是后台应用入口one:"./src/one.js"
            title: 'One',
            filename: "one.html",
            template: "./public/one.html",
            chunks: ["one"] //chunks指定需要引入的入口模块的键名 one:"./src/one.js"
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: 'css/[name]-[contenthash].css',
            chunkFilename: '[id].css',
        }),
        new CleanWebpackPlugin()

    ]

}

