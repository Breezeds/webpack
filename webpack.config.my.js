// webpack 是 node 写出来的 node 写法来运行

const path = require('path');                   // node 的内置模块

console.log(path.resolve(__dirname, 'dist'));   // c:\ywcx\mine\lesson\webpack\webpack\dist
console.log(path.resolve('dist'));              // c:\ywcx\mine\lesson\webpack\webpack\dist
console.log(path.join(__dirname, 'dist'));      // c:\ywcx\mine\lesson\webpack\webpack\dist

module.exports = {
    mode: 'development',                                   // 默认两种：development 和 production
    entry: './src/index.js',                    // 入口
    output: {
        filename: 'bundle.js',                  // 打包后的文件名
        path: path.resolve(__dirname, 'build'),  // path 是 node 的内置模块，resolve 可以将相对路径解析为绝对路径
    }
}