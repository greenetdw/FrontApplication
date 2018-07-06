<?php 
// header('Content-type: application/json;charset=utf-8');
header("Cache-Control:max-age=0"); //设置没有缓存
$i = 0;
while ($i<9) {
 $i++;
 // $res = array('success'=>'ok', 'text'=>'我是测试的文本');
 // echo json_encode($res);
 sleep(1);
 $radom = rand(1,999);
 echo $radom;
 echo '<br/>';
 ob_flush(); //输出缓存，必须和flush()一起使用
 flush(); //缓存吐到浏览器
}
?>