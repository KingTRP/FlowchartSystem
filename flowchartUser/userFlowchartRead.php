<?php include ('../componentSystem/headUser.php') ?>



</head>

<body>

    <?php include ('../componentSystem/navbarUser.php') ?>
    <script src="../componentSystem/datetimeScript.js"></script>


    <div class="my-2 px-3">
        <div class="d-flex ">
            <button type="button" class="navbutton justify-content-end" onclick="goBack()">
                <img src="../src/img/back.png" alt="" style="width: 50; height: 50px;" class="my-auto">
            </button>
            <div class="d-flex flex-row head-data-name-box data-box my-2 ms-1">
                <div class="head-data-name my-auto ms-3">Flowchart Name</div>
                <div class="ms-5">
                    <div id="FlowchartName" class="form-control"
                        style="width: 850px; height: 50px; display: inline-block; padding: 10px;">KM-Lerning</div>
                </div>
            </div>
            <div class="d-flex ms-auto">
                <button type="button" class="navbutton justify-content-end print-btn">
                    <img src="../src/img/printer.png" alt="" style="width: 50; height: 50px;" class="my-auto">
                </button>
            </div>

        </div>
    </div>
    <div class="px-3" style="">
        <div class="table-responsive flowchart-table">
            <table class="table table-hover align-middle">
                <thead class="align-middle">
                    <tr class="text-center">
                        <th scope="col" style="background-color:#84BAC9; color:white;">No.</th>
                        <th scope="col" style="background-color:#84BAC9; color:white;">Process</th>
                        <th scope="col" style="background-color:#84BAC9; color:white;">Before Manday</th>
                        <th scope="col" style="background-color:#84BAC9; color:white;">After Manday</th>
                        <th scope="col" style="background-color:#84BAC9; color:white;">ECRS.</th>
                        <th scope="col" style="background-color:#84BAC9; color:white;">Human Cap.</th>
                        <th scope="col" style="background-color:#84BAC9; color:white;">Emp.</th>
                        <th scope="col" style="background-color:#84BAC9; color:white;">Call H.</th>
                        <th scope="col" style="background-color:#84BAC9; color:white;">Company</th>
                        <th scope="col" style="background-color:#84BAC9; color:white;">SCG</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider align-middle">
                    <tr>
                        <th class="text-center" scope="row">1</th>
                        <td class="text-start">เริ่มต้นกระบวนการ</td>
                        <td class="text-center">0</td>
                        <td class="text-center">0</td>
                        <td>Start</td>
                        <td>
                            <img class="img-fluid" src="../src/img/symbol/start.png" alt="" width="100" height="100">
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <th class="text-center" scope="row">2</th>
                        <td class="text-start">Admin บันทึกคลิป KM จัดทำแบบประเมินผล ส่ง Mail สื่อสารให้พนักงานทราบ</td>
                        <td class="text-center">2</td>
                        <td class="text-center">1</td>
                        <td>Simplify</td>
                        <td></td>
                        <td>
                            <img class="img-fluid" src="../src/img/symbol/process.png" alt="" width="100" height="100">
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <th class="text-center" scope="row">3</th>
                        <td class="text-start">พนักงานเข้าระบบเพื่อเรียนรู้ ทำแบบประเมิน บันทึกผล แจ้ง Admin</td>
                        <td class="text-center">2</td>
                        <td class="text-center">1</td>
                        <td>Simplify</td>
                        <td>
                            <img class="img-fluid" src="../src/img/symbol/process.png" alt="" width="100" height="100">
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
                <tbody id="row4">
                    <tr>
                        <th class="text-center" scope="row">4</th>
                        <td class="text-start">Admin ทำรายงานสรุป ส่ง Mail ติดตามพนักงานที่ยังเรียนรู้ไม่ครบ</td>
                        <td class="text-center">3</td>
                        <td class="text-center">1</td>
                        <td>Simplify</td>
                        <td></td>
                        <td>
                            <img class="img-fluid" src="../src/img/symbol/process.png" alt="" width="100" height="100">
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
                <tbody id="row5" class="highlight-row">
                    <th class="text-center" scope="row">5</th>
                    <td class="text-start">เช็คว่าพนักงานเรียนรู้ครบหรือยัง</td>
                    <td class="text-center">2</td>
                    <td class="text-center">1</td>
                    <td>Simplify</td>
                    <td>
                        <div>
                            <img class="img-fluid" src="../src/img/symbol/decision.png" alt="" width="100" height="100">
                        </div>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tbody>
                <tbody id="row6">
                    <tr>
                        <th class="text-center" scope="row">6</th>
                        <td class="text-start">Admin จัดทำรายงานเสนอ ผู้บังคับบัญชา</td>
                        <td class="text-center">1</td>
                        <td class="text-center">1</td>
                        <td>Eleminate</td>
                        <td></td>
                        <td></td>
                        <td>
                            <img class="img-fluid" src="../src/img/symbol/process.png" alt="" width="100" height="100">
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <th class="text-center" scope="row">7</th>
                        <td class="text-start">Admin จัดทำรายงานเสนอ ผู้บริหาร</td>
                        <td class="text-center">1</td>
                        <td class="text-center">1</td>
                        <td>Eleminate</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <img class="img-fluid" src="../src/img/symbol/process.png" alt="" width="100" height="100">
                        </td>
                        <td></td>

                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <th class="text-center" scope="row">8</th>
                        <td class="text-start">จบกระบวนการทำงาน</td>
                        <td class="text-center">0</td>
                        <td class="text-center">0</td>
                        <td>Exist</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <img class="img-fluid" src="../src/img/symbol/end.png" alt="" width="100" height="100">
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

</body>

<?php include ('../componentSystem/footer.php') ?>

<!-- Bootstrap JS Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
    crossorigin="anonymous"></script>

<!-- SweetAlert2 JS -->
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

<script src="../componentSystem/tableButton.js"> </script>

<!-- Include jsPDF from CDN for generating PDFs -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>

<!-- Include SheetJS from CDN for generating Excel files -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.17.0/xlsx.full.min.js"></script>

</html>