const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: {
        one: "./js/one.js",
        two: "./js/two.js",
        three: "./js/three.js"
    },
    output: {
        filename: "[name].[chunkhash:8].js",
        path: "/dist"
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Indexs"
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    }
}