<?php
    include '../DB/connect.php';

// Get the id from the query parameter
$flowchartId = isset($_GET['id']) ? (int)$_GET['id'] : 0;

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
        $processArray = json_decode($row['process'], true);
        $allLaneArray = json_decode($row['allLane'], true);
        $before_mandayArray = json_decode($row['before_manday'], true);
        $after_mandayArray = json_decode($row['after_manday'], true);
        $ecrsArray = json_decode($row['ecrs'], true);


        // Check if both arrays are arrays and have the same length
        if (is_array($processArray) && is_array($before_mandayArray) && count($processArray) == count($before_mandayArray)) {
            for ($i = 0; $i < count($processArray); $i++) {
                echo "<tr data-flowchart-id='" . $row['id'] . "'>"; // Add data-flowchart-id attribute
                echo "<td class='align-middle text-center'>" . $rowNumber . "</td>";
                echo "<td class='align-middle text-start'>" . htmlspecialchars($processArray[$i]) . "</td>";
                echo "<td class='align-middle text-center'>" . htmlspecialchars($before_mandayArray[$i]) . "</td>";
                echo "<td class='align-middle text-center'>" . htmlspecialchars($after_mandayArray[$i]) . "</td>";
                echo "<td class='align-middle text-center'>" . htmlspecialchars($ecrsArray[$i]) . "</td>";
                echo "</tr>";
                $rowNumber++; // Increment the row number for each process
            }
        } else {
            // Handle the case where the arrays are not valid or have different lengths
            echo "<tr data-flowchart-id='" . $row['id'] . "'>";
            echo "<td class='align-middle text-center' colspan='3'>Invalid process or before_manday data</td>";
            echo "</tr>";
            $rowNumber++;
        }
    }
} else {
    echo "Invalid flowchart ID.";
}
?>
