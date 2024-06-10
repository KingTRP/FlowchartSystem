<?php include ('componentSystem/head.php') ?>

<link rel="stylesheet" type="text/css" href="style/loginStyle.css">
<link rel="stylesheet" type="text/css" href="style/roleStyle.css">
</head>

<body>

    <section class="vh-100 login-bg">
        <div class="container py-5 h-100">
            <div class="d-flex flex-row justify-content-center align-items-center h-100">
                <div class="col col-xl-10">
                    <div class="card shadow-lg capacity">
                        <div class="row g-0">

                            <div class="d-flex flex-row justify-content-start " style="border-radius: 0 0 10px 0;">
                                <img src="src/img/scg.png" alt="Your Logo" class="img-fluid my-2 ms-4"
                                    style="border-radius: 0 0 10px 0; height: 70px;">
                                <div class="mt-auto mb-1 ms-4 role-heading">Welcome to Flowchart System</div>
                            </div>

                            <div class="d-flex flex-row justify-content-center">
                                <div class="role-heading2">Choose Your Role</div>
                            </div>

                            <div class=" d-flex col flex-row align-items-center mb-5 mt-5 ">

                                <div class="container text-center d-flex" style="width: 250px;">
                                    <button class="btn-custom-animation btn" style="background-color: white;"
                                        onclick="window.location.href='loginUser.php';">
                                        <img src="src/img/man.png" alt="man" class="role-img">
                                        <div class="mt-2">User</div>
                                    </button>
                                </div>

                                <div class="vertical-line"></div>

                                <div class="container text-center  d-flex" style="width: 250px;">
                                    <button class="btn btn-custom-animation" style="background-color: white;"
                                        onclick="window.location.href='loginAdmin.php';">
                                        <img src="src/img/admin.png" alt="customer-service" class="role-img">
                                        <div class="mt-2">Admin</div>
                                    </button>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
    </section>

</body>

</html>