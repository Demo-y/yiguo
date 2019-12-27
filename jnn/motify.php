<?php 
   include "yiguo.php";
   $email=$_REQUEST['email'];
   $callback=$_REQUEST["callback"];
   $select="select *from myyiguo where phone={$email};";
   $a=$con->query($select);
   if($a->num_rows>0){
     echo $callback."(".'1'.")";
   }else{
     echo $callback."(".'0'.")";
   }
?>