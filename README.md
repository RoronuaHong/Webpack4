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

devtool
-----------
    devtool: "inline-source-map"