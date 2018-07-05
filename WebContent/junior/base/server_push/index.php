<?php
/**
 * Created by PhpStorm.
 * User: wwtliu
 * Date: 14/8/18
 * Time: 下午4:39
 */

header('Content-Type:text/event-stream');

for($i = 0; $i<100;$i++){
    date_default_timezone_set("Asia/Shanghai");
    echo "event:newDate\n";
    echo 'data:'.date('Y-m-d H-i-s');
    echo "\n\n";
    flush();
    sleep(1);
}