// webpack 是 node 写出来的 node 写法来运行

const path = require('path');                       // node 的内置模块
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log(path.resolve(__dirname, 'dist'));       // c:\ywcx\mine\lesson\webpack\webpack\dist
console.log(path.resolve('dist'));                  // c:\ywcx\mine\lesson\webpack\webpack\dist
console.log(path.join(__dirname, 'dist'));          // c:\ywcx\mine\lesson\webpack\webpack\dist

module.exports = {
    devServer: {                                    // 配置本地服务
        port: 3000,                                 // 端口        
        contentBase: './build',                     // 默认目录
        compress: true,                             // 压缩代码
        open: true,                                 // 自动打开浏览器
        progress: true,                             // 显示打包进度
    },
    mode: 'development',                            // 默认两种：development 和 production
    entry: './src/index.js',                        // 入口
    output: {
        filename: 'bundle.[hash:8].js',             // 打包后的文件名 [hash:8] 8位hash值，避免缓存的问题
        path: path.resolve(__dirname, 'build'),     // path 是 node 的内置模块，resolve 可以将相对路径解析为绝对路径
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',           // 模板路径
            filename: 'index.html',                 // 输出文件名
            minify: {
                removeAttributeQuotes: true,        // 去除双引号
                collapseWhitespace: true            // 压缩为一行显示
            },
            hash: true                              // 哈希，避免缓存的问题
        })
    ]
}