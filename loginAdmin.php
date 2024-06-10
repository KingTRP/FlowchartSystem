<?php
session_start(); // เริ่มต้น Session

// กำหนดค่า Username และ Password เอง
$validUsername = 'admin';
$validPassword = '1234';

// ตรวจสอบข้อมูลการล็อกอิน
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // ตรวจสอบข้อมูลการล็อกอิน
    if ($username === $validUsername && $password === $validPassword) {
        // ตั้งค่า Session สำหรับ Admin
        $_SESSION['admin'] = [
            'username' => $username,
            'loggedin' => true,
        ];
        
        // เปลี่ยนเส้นทางไปยังหน้าหลักของ Admin
        header("Location: mainAdmin/main.php");
        exit();
    } else {
        // กรณีล็อกอินไม่สำเร็จ
        $loginError = "Invalid username or password";
    }
}
?>

<?php include ('componentSystem/head.php') ?>

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
                        <div class="row g-0">
                            <div class="col-md-6 col-lg-7 d-flex align-items-start">
                                <div class="card-body p-4 p-lg-5 text-black">

                                    <div class="mb-5">
                                        <div class=" mt-3 d-flex flex-row">
                                            <div class="me-4 col-3">
                                                <img src="src/img/scg.png" alt="Your Logo" class="img-fluid my-2">
                                            </div>
                                            <div class="fw-semibold mb-2 col mt-4"
                                                style="letter-spacing: 1px; font-size:25px;">
                                                Sign in to your account
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <?php if (!empty($loginError)): ?>
                                            <div class="alert alert-danger"><?php echo $loginError; ?></div>
                                        <?php endif; ?>
                                        
                                        <form method="POST" action="">
                                            <div class="d-flex flex-row mt-4">
                                                <div class="col-2 align-items-center">
                                                    <img src="src/img/admin.png" alt="Your Logo" class="img-fluid w-100"
                                                        style="max-width: 50px;">
                                                </div>
                                                <div class="col">
                                                    <div class="d-flex flex-row">
                                                        <div>SCG ID : </div>
                                                        <div class="ms-1" style="color:red;"> Ex 0150-020XX</div>
                                                    </div>
                                                    <div class="form-floating mb-3 shadow-sm">
                                                        <input type="text" name="username" class="form-control" id="floatingInput"
                                                            placeholder="SCG ID">
                                                        <label for="floatingInput">SCG ID</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="d-flex flex-row">
                                                <div class="col-2 align-items-center">
                                                    <img src="src/img/password.png" alt="Your Logo"
                                                        class="img-fluid w-100" style="max-width: 50px;">
                                                </div>
                                                <div class="col">
                                                    <div class="d-flex flex-row">
                                                        <div>Password :</div>
                                                        <div class="ms-1" style="color:red;">Ex 080XXXXXXX</div>
                                                    </div>
                                                    <div class="form-floating mb-3 shadow-sm">
                                                        <input type="password" name="password" class="form-control" id="floatingInput"
                                                            placeholder="Password">
                                                        <label for="floatingInput">Password</label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value=""
                                                            id="flexCheckDefault">
                                                        <label class="form-check-label" for="flexCheckDefault">
                                                            Remember Me
                                                        </label>
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="d-flex justify-content-center pt-1 mb-4 mt-2 md-auto">
                                                <button class="button-round btn btn-block"
                                                    style="width: 100px; height: 50px; background-color:#84BAC9; color: white; border-radius: 10px;"
                                                    type="submit">Login</button>
                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>

                            <div class="col-md-6 col-lg-5 d-none d-md-block">
                                <div>
                                    <img src="src/img/thumbnail.jpg" alt="login form" class="img-fluid"
                                        style="border-radius: 0 10px 0 0; height: 540px; width:500px;" />
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
