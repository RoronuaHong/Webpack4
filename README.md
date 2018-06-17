Webpack4 Guideline
============

entry
------------
### 1.单入口：
    enrty: "xxx.js"
### 2.多个入口：
    entry: {
        x1: "x1.js",
        x2: "x2.js"
    }
    enrty: {
        xx: ["x1.js", "x2.js"]
    }

output
------------
### 1.单个：
    output: {
        filename: "bundle.js",
        path: "/home/assets"
    }
### 2.生成各自的js：
    output: {
        filename: "[name].js",
        path: __dirname + "/dist"
    }
### 3.CDN的路径：
    output: {
        publicPath: "http://cdn.example.com/assets/[hash]"
    }
### 4.带hash或chunkhash：
    output: {
        filename: "[name].[hash:8].js",
        filename: "[name].[chunkhash:8].js"
    }

    /*hash和chunkhash的区别*/
    1.[hash] is replaced by the hash of complication.
    2.[chunkhash] is replaced by the hash of chunk.

    hash: output输出的都是同一个hash指纹。
    chunkhash: output输出的每个文件hash指纹都不相同。
    contenthash: 在css打包时候使用。

devtool(sourcemap)
-----------
    devtool: "inline-source-map"
    
    developer:
        devtool: "cheap-module-eval-source-map"
    production:
        devtool: "#source-map"

plugins
-----------
    webpack：
        //热更新
        HotModuleReplacementPlugin
        //显示更改了的文件名
        NamedModulesPlugin
        //清除
        CleanWebpackPlugin
        //生成HTML
        HtmlWebpackPlugin
        //抽出css
        ExtractTextPlugin
        //产生闭包环境加快速度
        ModuleConcatenationPlugin
        //优化CSS
        OptimizeCSSPlugin

resolve
-----------
    //去除后缀
    extensions: [".js", ".css"]
    //添加全局依赖
    alais: path.resolve(__dirname, "xx.js")

optimization
-----------
    optimization: {
        //压缩代码
        minimazer: [
            new UglifyJsPlugin({/* your config */})
        ],
        //分割模块
        splitChunks: {
            chunks: "async",
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            name: true,
            cacheGroups: {
                default: {
                    minChunks: 2,
                    prority: -20,
                    reuseExistingChunk: true
                },
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                }
            }
        },
        //只包含运行时额外代码块到每一个入口
        runtimeChunk: true
    }

module
-------------
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: "node_modules",
                loader: "babel-loader"
            }
        ]
    }

    /* 常用的test */
    /\.(scss|css)?$/
        use: "style-loader"|"css-loader"|"postcss-loader"|"sass-loader"
    /\.(png|jpg|gif|jepg|bmp)/
        use: "file-loader"
    /\.(png|woff|woff2|svg|ttf|eot)($|\?)/
        use: "file-loader"
    /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/
        use: "url-loader"

devServer
------------
    host: "0.0.0.0",
    port: 0000,
    historyApiFallback: false,
    noInfo: true,
    hot: true,
    hotOnly: ture,
    https: false,
    inline: false,
    lazy: true,
    open: true,
    compress: true,
    headers: {
        "X-Custom-Foo": "bar"
    },
    proxy: {
        "/api": {
            target: "http://192.0.0.1",
            changeOrigin: true,
            pathRewrite: {
                "^/api": ""
            }
        }

    }