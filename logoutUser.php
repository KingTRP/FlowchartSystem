<?php include ('componentSystem/head.php') ?>


<?php
session_start();

// เมื่อผู้ใช้กด Sign out ให้ทำลาย Session
if (isset($_POST['logout'])) {
    // ลบ Session ทั้งหมด
    session_unset();
    // ทำลาย Session
    session_destroy();
    // ส่งผู้ใช้กลับไปยังหน้า login
    header("Location: roleLogin.php");
    exit();
}
?>

<?php
$css_path = "style/loginStyle.css";
$css_path2 = "style/style.css";
?>

<!-- Include CSS file using absolute path -->
<link rel="stylesheet" href="<?php echo $css_path; ?>">
<link rel="stylesheet" href="<?php echo $css_path2; ?>">

<body>

    <section class="vh-100" style="background-color:#4E98B8;">
        <div class="container py-5 h-100">
            <div class="d-flex flex-row justify-content-center align-items-center h-100">
                <div class="col col-xl-10">
                    <div class="card shadow-lg"
                        style="border-radius: 10px; background-color: rgba(255, 255, 255, 0.89);">

                        <div class="card-body p-4 p-lg-5 text-black">
                            <div class="d-flex justify-content-center">
                                <div class="d-flex flex-row">
                                    <!-- เพิ่ม align-items-end -->
                                    <div class="me-4 col-3">
                                        <img src="src/img/scg.png" alt="Your Logo" class="img-fluid my-2">
                                    </div>
                                    <div class="fw-semibold mb-2 col mt-4" style="letter-spacing: 1px; font-size:32px;">
                                        Sign out
                                    </div>
                                </div>
                            </div>

                            <div class="card-body p-4 p-lg-5 text-black">
                                <div class="d-flex justify-content-center mb-2">
                                    <img src="src/img/man.png" alt="Your Logo" class="img-fluid w-100"
                                        style="max-width: 200px;">
                                </div>
                                <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
                                    <div class="d-flex justify-content-center">
                                        <div class="d-flex pt-1 mb-4 mt-2 md-auto me-4">
                                            <button class="btn" type="submit" name="logout">
                                                <img src="src/img/check.png" alt="" class="img-fluid w-100"
                                                    style="max-width: 60px;">
                                            </button>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</body>

</html>