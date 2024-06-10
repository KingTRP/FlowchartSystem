<?php include ('../componentSystem/headUser.php') ?>

</head>

<body>
    <?php include ('../componentSystem/navbarUser.php') ?>
    <script src="../componentSystem/datetimeScript.js"></script>
    <?php include ('../backend/dbquery.php') ?>

    <div class="my-2 px-3">
        <div class="d-flex ">
            <button type="button" class="navbutton justify-content-end" onclick="goBack()">
                <img src="../src/img/back.png" alt="" style="width: 50px; height: 50px;" class="my-auto">
            </button>
            <div class="d-flex flex-row head-data-name-box data-box my-2 ms-1">
                <div class="head-data-name my-auto ms-3">Flowchart Name</div>
                <div class="ms-5">
                    <div id="FlowchartName" class="form-control"
                        style="width: 850px; height: 50px; display: inline-block; padding: 10px;">
                        <?php echo htmlspecialchars($flowchartName); ?>
                    </div>
                </div>
            </div>
            <div class="d-flex ms-auto">
                <button type="button" class="navbutton justify-content-end edit-Flow">
                    <img src="../src/img/edit.png" alt="" style="width: 50px; height: 50px;" class="mx-auto">
                </button>
                <button type="button" class="navbutton justify-content-end delete-btn">
                    <img src="../src/img/bin.png" alt="" style="width: 50px; height: 50px;" class="mx-auto">
                </button>
                <button type="button" class="navbutton justify-content-end print-btn">
                    <img src="../src/img/printer.png" alt="" style="width: 50px; height: 50px;" class="my-auto">
                </button>
            </div>
        </div>
    </div>
    <div class="px-3">
        <div class="table-responsive flowchart-table">
            <table class="table table-hover align-middle">
                <thead class="align-middle">
                    <tr class="text-center">
                        <th scope="col" style="background-color:#84BAC9; color:white;">No.</th>
                        <th scope="col" style="background-color:#84BAC9; color:white;">Process</th>
                        <th scope="col" style="background-color:#84BAC9; color:white;">Before Manday</th>
                        <th scope="col" style="background-color:#84BAC9; color:white;">After Manday</th>
                        <th scope="col" style="background-color:#84BAC9; color:white;">ECRS.</th>
                        <?php foreach ($allLaneArray as $lane): ?>
                            <th scope="col" style="background-color:#84BAC9; color:white;">
                                <?php echo htmlspecialchars($lane); ?>
                            </th>
                        <?php endforeach; ?>
                    </tr>
                </thead>
                <tbody class="table-group-divider align-middle">
                    <?php
                    if (
                        is_array($processArray) && is_array($before_mandayArray) && is_array($after_mandayArray) && is_array($ecrsArray) && is_array($selected_symbolArray) && is_array($lane1Array) &&
                        count($processArray) == count($before_mandayArray) &&
                        count($processArray) == count($after_mandayArray) &&
                        count($processArray) == count($ecrsArray) &&
                        count($processArray) == count($selected_symbolArray) &&
                        count($processArray) == count($lane1Array)
                    ) {

                        for ($i = 0; $i < count($processArray); $i++) {
                            echo "<tr data-flowchart-id='" . htmlspecialchars($id) . "'>";
                            echo "<td class='align-middle text-center'>" . $rowNumber . "</td>";
                            echo "<td class='align-middle text-start'>" . htmlspecialchars($processArray[$i]) . "</td>";
                            echo "<td class='align-middle text-center'>" . htmlspecialchars($before_mandayArray[$i]) . "</td>";
                            echo "<td class='align-middle text-center'>" . htmlspecialchars($after_mandayArray[$i]) . "</td>";
                            echo "<td class='align-middle text-center'>" . htmlspecialchars($ecrsArray[$i]) . "</td>";

                            foreach ($allLaneArray as $laneIndex => $lane) {
                                if ($lane1Array[$i] == $lane) {
                                    $symbolImage = $selected_symbolArray[$i];
                                    $symbolPath = "../src/img/symbol/{$symbolImage}.png";
                                    echo "<td class='align-middle text-center'><img class='symbol-image' src='{$symbolPath}' alt='{$symbolImage}'></td>";
                                } else {
                                    echo "<td class='align-middle text-center'></td>";
                                }
                            }

                            echo "</tr>";
                            $rowNumber++; // Increment the row number for each process
                        }
                    } else {
                        // Handle the case where the arrays are not valid or have different lengths
                        echo "<tr>";
                        echo "<td colspan='" . (5 + count($allLaneArray)) . "' class='text-center'>Invalid data</td>";
                        echo "</tr>";
                    }
                    ?>
                </tbody>
            </table>
        </div>
    </div>

</body>
<?php include ('../componentSystem/footer.php') ?>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<script src="component/changePage.js"></script>

<!-- Bootstrap JS Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
    crossorigin="anonymous"></script>

<!-- SweetAlert2 JS -->
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

<script src="../componentSystem/tableButton.js"> </script>

</html>