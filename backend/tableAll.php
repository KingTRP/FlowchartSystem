<?php
include_once '../DB/connect.php';

$sql = "SELECT * FROM flowchart_save";
// Prepare the SQL statement
$stmt = $conn->prepare($sql);

// Execute the SQL statement
$stmt->execute();

if ($stmt === false) {
    echo "ไม่สามารถดึงข้อมูลจากฐานข้อมูลได้";
    die(print_r($conn->errorInfo(), true));
}

$rowNumber = 1; // Initialize the row number

// Display data in the table
while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    echo "<tr data-flowchart-id='" . $row['id'] . "'>"; // Add data-flowchart-id attribute
    echo "<td class='align-middle text-center'>" . $rowNumber . "</td>";
    echo "<td class='align-middle text-center'>" . date('Y-m-d', strtotime($row['date'])) . "</td>";
    echo "<td class='align-middle text-start'>" . $row["flowchart_name"] . "</td>";

    // Decode the JSON data for process and count the number of items
    $processArray = json_decode($row['process'], true);
    $processCount = is_array($processArray) ? count($processArray) : 0;
    echo "<td class='align-middle text-center'>" . $processCount . "</td>";

    // Decode the JSON data for before_manday and sum the values
    $beforeMandayArray = json_decode($row['before_manday'], true);
    $beforeMandaySum = is_array($beforeMandayArray) ? array_sum($beforeMandayArray) : 0;
    echo "<td class='align-middle text-center'>" . $beforeMandaySum . "</td>";

    // Decode the JSON data for ecrs
    $ecrsArray = json_decode($row['ecrs'], true);

    // Check if ecrsArray is an array and count occurrences
    if (is_array($ecrsArray)) {
        $counts = array_count_values($ecrsArray);

        $eliminateCount = isset($counts['Eliminate']) ? $counts['Eliminate'] : 0;
        $combineCount = isset($counts['Combine']) ? $counts['Combine'] : 0;
        $rearrangeCount = isset($counts['Rearrange']) ? $counts['Rearrange'] : 0;
        $simplifyCount = isset($counts['Simplify']) ? $counts['Simplify'] : 0;

        echo "<td class='align-middle text-center'>" . $eliminateCount . "</td>";
        echo "<td class='align-middle text-center'>" . $combineCount . "</td>";
        echo "<td class='align-middle text-center'>" . $rearrangeCount . "</td>";
        echo "<td class='align-middle text-center'>" . $simplifyCount . "</td>";
    } else {

        // If ecrs is not an array, display 0
        echo "<td class='align-middle text-center'>0</td>";
        echo "<td class='align-middle text-center'>0</td>";
        echo "<td class='align-middle text-center'>0</td>";
        echo "<td class='align-middle text-center'>0</td>";
    }

    // Decode the JSON data for after_manday and sum the values
    $afterMandayArray = json_decode($row['after_manday'], true);
    $afterMandaySum = is_array($afterMandayArray) ? array_sum($afterMandayArray) : 0;
    echo "<td class='align-middle text-center'>" . $afterMandaySum . "</td>";

    // Calculate the difference between before and after manday
    $mandayDifference = $beforeMandaySum - $afterMandaySum;
    echo "<td class='align-middle text-center'>" . $mandayDifference . "</td>";

    //button
    echo "
    <td>
        <div class='justify-content-center button-column d-flex flex-row'>
            <button class='btn me-2 show-btn'>
                <img src='../src/img/show.png' alt='' class='img-fluid' style='max-width: 40px;'>
            </button>
            <button class='btn me-2 print-btn'>
                <img src='../src/img/printer.png' alt='' class='img-fluid' style='max-width: 40px;'>
            </button>
            <button class='btn me-2 edit-btn'>
                <img src='../src/img/edit.png' alt='' class='img-fluid' style='max-width: 40px;'>
            </button>
            <button class='btn delete-btn'>
                <img src='../src/img/bin.png' alt='' class='img-fluid' style='max-width: 40px;'>
            </button>
        </div>
    </td>";
    echo "</tr>";

    $rowNumber++; // Increment the row number
}
?>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>