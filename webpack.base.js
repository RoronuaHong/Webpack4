const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = {
    entry: {
        one: "./js/one.js",
        two: "./js/two.js",
        three: "./js/three.js"
    },
    output: {
        filename: "[name].[hash:8].js",
        path: "/dist"
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Indexs"
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        hot: true,
        port: 9000
    }
}