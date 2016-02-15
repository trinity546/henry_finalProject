<?php
include("../model/image.php");

if($_POST['method'] == "insert"){
    insert_image();   
}


if($_POST['method'] == "getall"){
    get_images();   
}
?>