// 所有模块都通过 define 来定义
define(function(require, exports, module) {

    require('jquery');
    console.log(1111);
    //同步
    // var index = require('index');
    // console.log(index.doSomething());
    //异步async
    var index = require.async('index', function(index_callback){
        console.log(index_callback.doSomething());
    });
});