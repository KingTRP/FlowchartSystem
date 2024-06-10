<?php include ('../componentSystem/headAdmin.php') ?>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    integrity="sha512-..." crossorigin="anonymous" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/Sortable/1.14.0/Sortable.min.js"></script>

</head>

<body>
    <?php include ('../componentSystem/navbarUser.php') ?>
    <script src="../componentSystem/datetimeScript.js"></script>

    <form class="form" id="flowchartForm" method="POST" action="\autoSwimChart\flowchartSystem\backend\action.php">

        <div class="d-flex flex-row my-3">
            <div class="my-auto d-flex">
                <button type="button" class="navbutton" onclick="goBack()">
                    <img src="../src/img/back.png" alt="" style="width: 50px; height: 50px;" class="my-auto">
                </button>
            </div>
            <div class="d-flex flex-row head-data-name-box data-box my-2 ms-1">
                <div class="head-data-name my-auto ms-3">Flowchart Name</div>
                <div class="ms-5">
                    <input id="flowchart_name" name="flowchart_name" type="text" class="form-control"
                        placeholder="Enter Your Flowchart Name" style="width: 1100px; height: 50px;">
                </div>
            </div>
        </div>

        <!-- Container for the whole form -->
        <div class="mx-3">

            <!-- Row for Lane Fields -->
            <div class="head-data-lane d-flex data-box mx-1">
                <div class="my-auto ms-3">Lane</div>
                <div class="ms-auto">
                    <button class="button-round rounded-pill button-add" type="button" onclick="showLanePrompt()">
                        <img class="my-1" src="../src/img/add.png" alt="" style="width: 25px; height: 25px;">
                    </button>
                </div>

            </div>
            <div class="lane-data ">
                <div class="d-flex">
                    <div class="d-flex flex-wrap justify-content-center" id="lane_fields">
                        <!-- Lane input fields will be appended here -->
                    </div>
                </div>
            </div>


            <!-- Row for Process Fields -->
            <div class="process-data row mt-3 mx-1">
                <div class="head-data-process d-flex data-box">
                    <div class="my-auto ms-3">Process</div>
                    <div class="ms-auto">
                        <button class="button-round rounded-pill button-add" type="button" onclick="addProcessField()">
                            <img class="my-1" src="../src/img/add.png" alt="" style="width: 25px; height: 25px;">
                        </button>
                    </div>
                </div>
                <div id="process_fields" class="col-12">
                    <!-- Process input fields will be appended here -->
                </div>
            </div>

        </div>

        <div class="me-2 d-flex justify-content-center mt-3">
            <button class="button-round"
                style="width: 150px; height: 50px; background-color:#84BAC9; color: white; border-radius: 10px;"
                type="button" onclick="submitForm()">
                <img src="../src/img/check.png" alt="" style="width: 25px; height: 25px;" class="mx-2">Submit</button>
        </div>
    </form>
</body>

<script src="../componentSystem/formScript.js"></script>

<?php include ('../componentSystem/footer.php') ?>

<!-- SweetAlert2 JS -->
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script src="../componentSystem/tableButton.js"> </script>

</html>