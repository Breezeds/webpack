 (function(modules) { // webpackBootstrap
 	// The module cache 先定义一个缓存
   var installedModules = {};
   // "./src/index.js": {}

 	// The require function  实现了一个 require 方法，require 是 node 方法，不能在浏览器中运行，所以这里实现了一个 require 方法
 	function __webpack_require__(moduleId) { // moduleId 就是模块路径

 		// Check if module is in cache 检查模块是否在缓存中
 		if(installedModules[moduleId]) {  // 在缓存中直接返回这个模块
 			return installedModules[moduleId].exports;
    }
     
 		// Create a new module (and put it into the cache)  // 不在缓存中
 		var module = installedModules[moduleId] = {
 			i: moduleId,
 			l: false,
 			exports: {}
 		};

 		// Execute the module function
 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

 		// Flag the module as loaded
 		module.l = true;

 		// Return the exports of the module
 		return module.exports;
 	}


 	// expose the modules object (__webpack_modules__)
 	__webpack_require__.m = modules;

 	// expose the module cache
 	__webpack_require__.c = installedModules;

 	// define getter function for harmony exports
 	__webpack_require__.d = function(exports, name, getter) {
 		if(!__webpack_require__.o(exports, name)) {
 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
 		}
 	};

 	// define __esModule on exports
 	__webpack_require__.r = function(exports) {
 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
 		}
 		Object.defineProperty(exports, '__esModule', { value: true });
 	};

 	__webpack_require__.t = function(value, mode) {
 		if(mode & 1) value = __webpack_require__(value);
 		if(mode & 8) return value;
 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
 		var ns = Object.create(null);
 		__webpack_require__.r(ns);
 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
 		return ns;
 	};

 	// getDefaultExport function for compatibility with non-harmony modules
 	__webpack_require__.n = function(module) {
 		var getter = module && module.__esModule ?
 			function getDefault() { return module['default']; } :
 			function getModuleExports() { return module; };
 		__webpack_require__.d(getter, 'a', getter);
 		return getter;
 	};

 	// Object.prototype.hasOwnProperty.call
 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

 	// __webpack_public_path__
 	__webpack_require__.p = "";


 	// Load entry module and return exports  加载入口文件，模块
 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
 })({
 "./src/a.js":  // key 就是模块路径
  (function(module, exports) { // vlaue 就是函数
    eval("module.exports = \"module\";\n\n//# sourceURL=webpack:///./src/a.js?");
  }),
 "./src/index.js": // key 就是模块路径
  (function(module, exports, __webpack_require__) { // vlaue 就是函数
    eval("\r\n\r\nlet str = __webpack_require__( \"./src/a.js\");\r\n\r\n// console.log('webpack first!');\r\n\r\nconsole.log('str :>> ', str);\n\n//# sourceURL=webpack:///./src/index.js?");
  })
 });