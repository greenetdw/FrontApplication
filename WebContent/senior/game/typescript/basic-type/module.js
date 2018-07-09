/**
 * Created by 01375677 on 2018/7/9.
 */

(function () {
    //内部使用
}());

var a ;
function hello() {
    var b;
    c;
}

(function ($, w) {

}(jQuery, window));

var jkxyModule = function (vip) {
    var Yvip = document.getElementById(vip);
    YQ = '1234567';

    return {
        add : function (t) {
            if(t >= 12) {
                var Yv = t;
                Yvip.innerHTML = '年费' + Yv + '--QQ群'  + YQ;
            } else {
                var Mv = t;
                Yvip.innerHTML = '月费' + Mv;
            }
        }
    }
}

var jm = new jkxyModule("vip");
jm.add(10);

