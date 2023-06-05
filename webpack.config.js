"use strict";

module.exports = function (env = {}) {

    let path = require("path");
    let HtmlWebpackPlugin = require('html-webpack-plugin');

    const publicPath = path.resolve(__dirname, 'public');
    const jsPath = path.resolve(publicPath, 'js');

    console.log(env);

    return {
        mode: 'development',
        entry: "./index6.js",
        output: {
            path: jsPath,
            filename: 'bundle.js'
        },

        // devServer: {
        //     contentBase: publicPath
        // },

        plugins: [
            new HtmlWebpackPlugin()
        ]
    };

};
