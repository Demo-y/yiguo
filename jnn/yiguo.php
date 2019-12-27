<?php
  header('Access-Control-Allow-Origin: *'); 
  header('Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS');
  header('Access-Control-Allow-Headers: x-requested-with, content-type');  
  $sever="localhost";
  $name="root";
  $pass="root";
  $mysql="yiguo";
  $con=new mysqli($sever,$name,$pass,$mysql);
  if($con->connect_error){
      die("连接失败".$connect_error);
  }
  // echo "连接成功";
?>