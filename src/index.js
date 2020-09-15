// import $ from 'expose-loader?exposes[]=$&exposes[]=jQuery!jquery';
// expose-loader 暴露全局的 loader 内联的 loader
// pre 前面执行的 loader  normal 普通loader 内联loader 
// 后置 postloader

// import $ from 'jquery';
// console.log('$ :>> ', $);
// console.log('window.$ :>> ', window.$);

// console.log('$ :>> ', $);
// console.log('window.$ :>> ', window.$);

import $ from 'jquery';
console.log('14 $ :>> ', $);
console.log('15 window.$ :>> ', window.$);


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
