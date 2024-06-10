<?php

$servername = "sqlsrv:Server=DESKTOP-90AD2GP\SQLEXPRESS;Database=testTH";
$username = "";
$password = "";

try {
    $conn = new PDO($servername, $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // echo "Connected successfully";
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}

// echo "Connected Success";
?>