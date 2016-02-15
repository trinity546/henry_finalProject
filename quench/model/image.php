<?php
include("connect.php");

    function insert_image(){
        global $db;
        $query = "INSERT INTO images (title, user_id, path) VALUES ('".$_POST['title']."', '".$_POST['user_id']."', '".$_POST['path']."')";

        $result = $db->query($query);
    }

    function get_images(){
        global $db;
        $query = "SELECT images.title, images.path FROM images";
        $result = $db->query($query);
        echo json_encode($result->fetchAll());
    }

    function update_image(){
        //update info from users from the users table
    }

    function delete_image(){
        //remove a row of user from the users table
    }

?>