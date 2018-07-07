// 所有模块都通过 define 来定义
define(function(require, exports, module) {

    // 通过 exports 对外提供接口
    // exports.doSomething = function(){
     //    console.log('my ok');
     // }

    var a = {};
    
    a.doSomething = function(){
        console.log('my ok');
    }
    a.doSomething2 = function(){
        console.log('my ok2');
    }

    // 或者通过 module.exports 提供整个接口
    module.exports = a;

});