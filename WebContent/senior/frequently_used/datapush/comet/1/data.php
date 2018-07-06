<?php 
header('Content-type: application/json;charset=utf-8');
header("Cache-Control:max-age=0"); //设置没有缓存
sleep(1);
$res = array('success'=>'ok', 'text'=>'我是测试的文本');
echo json_encode($res);
?>