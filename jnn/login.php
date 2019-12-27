<?php 
   include "yiguo.php";
   $call=$_REQUEST['phone1'];
   $pwd=$_REQUEST['pass'];
   $callback=$_REQUEST["callback"];
   $select="select *from myyiguo where phone={$call} and password={$pwd};";
   $a=$con->query($select);
   if($a->num_rows>0){
      echo $callback."(".'1'.")";
   }else{
      echo $callback."(".'0'.")";
   }
?>