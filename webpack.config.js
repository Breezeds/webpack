// webpack 是 node 写出来的 node 写法来运行

const path = require('path');                       // node 的内置模块
const HtmlWebpackPlugin = require('html-webpack-plugin');   // html 插件，类
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 抽离 css 为一个文件，用 link 引入
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // 压缩 css 代码
const TerserWebpackPlugin = require('terser-webpack-plugin');
const { resolve } = require('path');
const Webpack = require('webpack');

console.log(path.resolve(__dirname, 'dist'));       // c:\ywcx\mine\lesson\webpack\webpack\dist
console.log(path.resolve('dist'));                  // c:\ywcx\mine\lesson\webpack\webpack\dist
console.log(path.join(__dirname, 'dist'));          // c:\ywcx\mine\lesson\webpack\webpack\dist

module.exports = {
    optimization: { // 优化项
        minimizer: [new TerserWebpackPlugin(), new OptimizeCssAssetsPlugin()] // mode: production 才能压缩
    },
    devServer: {                                    // 配置本地服务
        port: 3000,                                 // 端口        
        contentBase: './build',                     // 默认目录
        compress: true,                             // 压缩代码
        // open: true,                                 // 自动打开浏览器
        progress: true,                             // 显示打包进度
    },
    mode: 'development',                             // 默认两种：development 和 production; 
                                                    // development 不会走optimization优化，production才会走optimization优化
    entry: './src/index.js',                        // 入口
    output: {
        filename: 'bundle.[hash:8].js',             // 打包后的文件名 [hash:8] 8位hash值，避免缓存的问题
        path: path.resolve(__dirname, 'build'),     // path 是 node 的内置模块，resolve 可以将相对路径解析为绝对路径
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main.css'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',           // 模板路径
            filename: 'index.html',                 // 输出文件名
            minify: {
                removeAttributeQuotes: true,        // 去除双引号
                collapseWhitespace: true            // 压缩为一行显示
            },
            hash: true                              // 哈希，避免缓存的问题
        }),
        new Webpack.ProvidePlugin({                 // 在每个模块中，都注入 $ ,window.$是undefined
            $: 'jquery'
        })
    ],
    externals: {                                    // 忽略jQuery，打包后的包会变小
        jquery: "$"
    },
    module: {                                       // 模块
        rules: [                                    // 规则
            // css-loader 解析 @import 这种语法
            // style-loader 把 css 插入到 head 标签中
            // loader 的特点单一职责
            // loader 的用法，字符串只用一个 loader
            // 多个 loader 需要 []
            // loader 的顺序是从右向左执行，从下到上执行
            // loader 还可以写成 对象方式，可以传一个参数 options
            {
                test: /\.css/i,                      
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        // options: {
                        //     insert: 'top'
                        // }
                    },
                    'css-loader',           // 解析 @import 语法
                    {
                        loader: 'postcss-loader',        // 自动添加前缀, 先加前缀，再进行css-loader
                        options: {
                            postcssOptions: {
                                plugins: [
                                    ['autoprefixer']
                                ]
                            }
                        }
                    }
                ]
            },
            {
                test: /\.less/i,                 // 匹配 less 文件    
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader, // 将 css 插入到 head 标签中
                    },
                    'css-loader',               // 解析 @import 语法  
                    'less-loader',               // 将 less 转化为 css
                    {
                        loader: 'postcss-loader',           // 自动添加前缀 , 先加前缀，再进行 css-loader
                        options: {
                            postcssOptions: {
                                plugins:[
                                    ['autoprefixer']
                                ]
                            }
                        }
                    }
                ]
            },
            {
                test: /\.js/i,
                exclude: '/(node_modules|brower_components)/',
                include: path.resolve(__dirname, 'src'),
                use: [
                    {
                        loader: 'babel-loader', // 将 es6 转化为 es5   url: https://www.npmjs.com/package/babel-loader
                        options: {
                            presets:['@babel/preset-env'],
                            plugins: [
                                ["@babel/plugin-proposal-decorators", { "legacy": true }], // https://babeljs.io/docs/en/babel-plugin-proposal-decorators
                                ["@babel/plugin-proposal-class-properties", { "loose": true }], //https://babeljs.io/docs/en/next/babel-plugin-proposal-class-properties.html
                                "@babel/plugin-transform-runtime" // https://babeljs.io/docs/en/babel-plugin-transform-runtime#docsNav
                            ]
                        }
                    }
                ]
            },
            // {
            //     test: require.resolve('jquery'),
            //     loader: 'expose-loader',
            //     options: {
            //         exposes: ['$', 'jQuery']
            //     }
            // },
            {
                // eslint-loader // https://www.npmjs.com/package/eslint-loader
            }
        ]
    }
}