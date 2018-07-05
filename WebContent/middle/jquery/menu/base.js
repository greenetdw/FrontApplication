$(document).ready(function (){//检查页面是否加载完毕
    $(".menu>a").click(function (){//找到主菜单项对应的子菜单项；如果换成.menulist a会触发二级菜单中的a的点击事件
        var ulNode=$(this).next("ul");
//                  多种隐藏方式 
//                  if(ulNode.css("display")=="none"){
//                      ulNode.css("display","block");
//                  }
//                  else{
//                      ulNode.css("display","none");
//                  }//第一种为css方式；代码比较繁琐，jQuery用最少最简洁的代码实现功能
//                  show()和hide()
//                  ulNode.show("slow");//括号里的参数可以为数字（单位为毫秒）、slow、fast和normal
//                  ulNode.hide();//参数和show()一样  这个是隐藏
//                  ulNode.toggle();//参数同上   第三种toggle()
//                  第四种slideDown()和slideUp()
//                  ulNode.slideDown();//自动加有过渡效果，参数同上
//                  ulNode.slideUp();
        ulNode.slideToggle();//自动判断是展开还是隐藏     第五种slideToggle()
        changeIcon($(this));
    });
//              $(".menu>a").mouseover(function (){
//                  var ulNode=$(this).next("ul");
//                  if(ulNode.css("display")=="none"){
//                      ulNode.css("display","block");
//                  }
//                  else{
//                      ulNode.css("display","none");
//                  }
//              });  //鼠标划入
//              $(".menu>a").mouseout(function (){
//                  var ulNode=$(this).next("ul");
//                  if(ulNode.css("display")=="block"){
//                      ulNode.css("display","none");
//                  }
//              });  //鼠标划出

    $(".hmenu").hover(function (){
        $(this).children("ul").slideDown();
        changeIcon($(this).children("a"));
    },function (){
        $(this).children("ul").slideUp();
        changeIcon($(this).children("a"));
    });


    //修改指示图标
    function changeIcon(mainNode){
        if(mainNode){
            if(mainNode.css("background").indexOf("black")>=0){
                mainNode.css("background","red no-repeat 3px center");
            }
            else{
                mainNode.css("background","black no-repeat 3px center");
            }
        }
    }
});
