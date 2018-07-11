// onmessage = function(event) {
//     var num = event.data;
//     var result = 0;
//     for (var i = 0; i < num; i++) {
//         result += i;
//     }
//     // 向线程创建源送回消息
//     postMessage(result);
// }
var result = 0;
onconnect = function(e) {
    var port = e.ports[0];
    port.postMessage(' connection sucess ');
    port.onmessage = function(e) {
        if (e.data !== "get") {
            for (var i = 0; i < e.data; i++) {
                result += i;
            }
        }
        port.postMessage(result);
    };
};