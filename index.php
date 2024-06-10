<?php
session_start();
if (!isset($_SESSION['username'])) {
    header('location: roleLogin.php');
}

if (isset($_GET['logout'])) {
    session_destroy();
    unset($_SESSION['username']);
    header('location: roleLogin.php');
}
?>