<?php
    include '../DB/connect.php';

    // Get the id from the query parameter
    $flowchartId = isset($_GET['id']) ? (int) $_GET['id'] : 0;

    if ($flowchartId > 0) {
        // Prepare the SQL statement
        $sql = "SELECT * FROM flowchart_save WHERE id = :flowchartId";
        $stmt = $conn->prepare($sql);

        // Bind the id parameter
        $stmt->bindParam(':flowchartId', $flowchartId, PDO::PARAM_INT);

        // Execute the SQL statement
        $stmt->execute();

        if ($stmt === false) {
            echo "ไม่สามารถดึงข้อมูลจากฐานข้อมูลได้";
            die(print_r($conn->errorInfo(), true));
        }

        $rowNumber = 1; // Initialize the row number
    
        // Display data in the table
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $flowchartName = $row['flowchart_name'];
            $processArray = json_decode($row['process'], true);
            $allLaneArray = json_decode($row['allLane'], true);
            $lane1Array = json_decode($row['lane1'], true);
            $before_mandayArray = json_decode($row['before_manday'], true);
            $after_mandayArray = json_decode($row['after_manday'], true);
            $ecrsArray = json_decode($row['ecrs'], true);
            $id = $row['id'];
            $selected_symbolArray = json_decode($row['selected_symbol'], true);
        }
    }
    ?>