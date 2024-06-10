<!DOCTYPE html>
<html>

<head>


    <title>Flowchart System</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">


    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Roboto+Mono:wght@600&display=swap"
        rel="stylesheet">

    <?php
    $css_path = "../style/style.css";
    ?>

    <!-- Include CSS file using absolute path -->
    <link rel="stylesheet" href="<?php echo $css_path; ?>">
    <style type="text/css">
        
        body {
            font-family: 'Chakra Petch';
        }
    </style>

    <?php
    session_start();

    // ตรวจสอบว่าผู้ใช้เข้าสู่ระบบแล้วหรือไม่ ถ้าไม่ให้เปลี่ยนเส้นทางไปยังหน้า login
    if (!isset($_SESSION['user']) || $_SESSION['user']['loggedin'] !== true) {
        header("Location: ../index.php"); // แทน loginUser.php ด้วยชื่อไฟล์ของหน้า login ของคุณ
        exit();
    }

    // ตรวจสอบว่าผู้ใช้มีสิทธิ์ในการเข้าถึงหน้านี้หรือไม่
// โค้ดที่ต้องการป้องกัน
    ?>
    <!-- Include jsPDF from CDN for generating PDFs -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>

    <!-- Include SheetJS from CDN for generating Excel files -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.17.0/xlsx.full.min.js"></script>