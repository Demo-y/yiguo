<?php 
    include "yiguo.php";
    $email=$_REQUEST['email'];
    $ps=$_REQUEST['ps'];
    $callback=$_REQUEST["callback"];
    $alert="update myyiguo set password='{$ps}' where phone={$email};";
    $select="select password from myyiguo where phone={$email};";
    $result=mysqli_query($con,$alert);
    $a=$con->query($select);
    if($a->num_rows>0){
       while($arr=$a->fetch_assoc()) {
        echo $callback."(".$arr['password'].")";
       }
    }
?>