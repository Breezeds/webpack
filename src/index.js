import $ from 'jquery';
console.log('$ :>> ', $);



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
