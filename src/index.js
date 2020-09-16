// webpack 打包图片
// 1)在js中创建图片来引入
        // file-loader 默认在内部生成一张图片，到build目录下
        // 把生成的图片的名字返回来

        // 也可以使用url-loader
import imgTest from './1.png'; // 把图片引入，返回的结果是一个新的图片地址

let image = new Image();
// image.src = './1.png'; // 就是一个普通的字符串, 不能这样写
image.src = imgTest; // 正确写法
document.body.appendChild(image);

// 2)在css中引入，background: url()
// 3)<img src="" />


// 1. import $ from 'expose-loader?exposes[]=$&exposes[]=jQuery!jquery';
//      expose-loader 暴露全局的 loader 内联的 loader
//      pre 前面执行的 loader  normal 普通loader 内联loader 
//      后置 postloader

// 2.import $ from 'jquery';
//      console.log('$ :>> ', $);
//      console.log('window.$ :>> ', window.$);

// 3.console.log('$ :>> ', $);
//      console.log('window.$ :>> ', window.$);

// import $ from 'jquery';
// console.log('14 $ :>> ', $);
// console.log('15 window.$ :>> ', window.$);


require('./index.css');
require('./index.less');

let str = require('./a.js');

// console.log('webpack first!');

console.log('str :>> ', str);

let fn = () => {
    console.log('fn');
}

fn();

@log
class A {
    a = 1;
}

let a = new A();
console.log('a :>> ', a.a);

function log(target) {
    console.log('target :>> ', target);
}

"foobar".includes("foo")
