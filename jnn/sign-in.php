<?php
  include "yiguo.php";
  $call2=$_REQUEST['phone2'];
  $pass2=$_REQUEST['pwd2'];
  $callback=$_REQUEST["callback"];
  $select="select *from myyiguo where phone={$call2} ;";
   $a=$con->query($select);
  
  if($a->num_rows>0){
    echo $callback."(".'1'.")";
  }else{
   
      $add="insert into myyiguo(phone,password)values('$call2','$pass2');";
      if($con->query($add)===true) {
        // echo  "插入数据成功";
        echo $callback."(".'0'.")";
        // header('location:success.html');   
    }else {
        echo "插入数据失败".$con->error;
    };
  };
?>