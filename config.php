<?php
	//mysql_connect("localhost", "root", "") or die(mysql_error());
    //mysql_select_db("mosqueapp") or die(mysql_error());

    $servername = "localhost";
    $username = "root";
    $password = "";
    
    // Create connection
    $conn = mysql_connect($servername, $username, $password);

    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysql_error());
    }
    
    // Select Database
    $db = mysql_select_db("mosqueapp");

    //check db connected
    if (!$db) {
        die("DB not selected: " . mysql_error());
    }    
?>