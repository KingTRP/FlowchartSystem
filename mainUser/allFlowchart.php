<?php include ('../componentSystem/headUser.php') ?>

</head>

<body>

    <?php include ('../componentSystem/navbarUser.php') ?>
    <script src="../componentSystem/datetimeScript.js"></script>

    <div class="d-flex flex-row">
        <div class="col m-3 row align-self-center">
            <button type="button" class="col-2 btn me-3" onclick="window.location.href='main.php';">
                <img src="../src/img/back.png" alt="" style="width: 50; height: 50px;" class="my-auto">
            </button>
            <button type="button" class="col btn me-3"
                onclick="window.location.href='../flowchartUser/createFlowchart.php';">
                <div class="d-flex flex-row">
                    <img src="../src/img/archive.png" alt="" class="img-fluid" style="max-width: 60px;">
                    <div class="align-content-center ms-2">Create Flowchart</div>
                </div>
            </button>
            <div class="col-5"></div>
        </div>
        <div class="col row row align-self-center m-3" style="margin: 100px;">
            <div class="col container">
                <div class="d-flex">
                    <div class="container">
                        <select name="" id="">
                            <option value="">All</option>
                            <option value="">Assignment</option>
                            <option value="">Database</option>
                            <option value="">Internet of Things</option>
                            <option value="">Routine</option>
                            <option value="">Presentation</option>
                        </select>
                    </div>
                    <div class="p-2">Type</div>
                </div>
            </div>

            <div class=" col container">
                <div class="d-flex">
                    <input type="date">
                    <div class="p-2">Since</div>
                </div>
            </div>

            <div class=" col container">
                <div class="d-flex">
                    <input type="date">
                    <div class="p-2">To</div>
                </div>
            </div>

        </div>
    </div>

    <div class="mx-3 position-relative p-3" style="background-color:#DDEAF1; height: 500px; border-radius: 10px;">
        <div class="d-flex flex-row justify-content-end align-items-center">
            <div class="position-absolute w-100 text-center table-head" style="pointer-events: none;">
                All Flowchart
            </div>
            <div class="d-flex align-items-center">
                <input type="text" name="" id="" class="form-control me-2">
                <button class="btn d-flex flex-row align-items-center">
                    <img src="../src/img/search.png" alt="" class="img-fluid" style="max-width: 50px;">
                </button>
            </div>
        </div>

        <div class="table-responsive flowchart-table" style="height: 400px; overflow-y: auto;">
            <table class="table table-hover">
                <thead class="table-light" style="position: sticky; top: 0; z-index: 1;">
                    <tr>
                        <th scope="col" class="text-center">No.</th>
                        <th scope="col" class="text-center">Data</th>
                        <th scope="col" class="text-center">Flowchart name</th>
                        <th scope="col" class="text-center">Owner</th>
                        <th scope="col" class="text-center">Steps Process</th>
                        <th scope="col" class="text-center">Before Manday</th>
                        <th scope="col" class="text-center">E</th>
                        <th scope="col" class="text-center">C</th>
                        <th scope="col" class="text-center">R</th>
                        <th scope="col" class="text-center">S</th>
                        <th scope="col" class="text-center">After Manday</th>
                        <th scope="col" class="text-center">Var.manday</th>
                        <th class="button-column" class="text-center"></th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    <?php include ('../backend/tableRead.php') ?>
                </tbody>

            </table>
        </div>
    </div>
    <!-- Bootstrap JS Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>

    <!-- SweetAlert2 JS -->
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>


    <script src="../componentSystem/tableButton.js"> </script>
    </body>
<?php include ('../componentSystem/footer.php') ?>

</html>