<?php
// action.php

include '../DB/connect.php'; // รวมไฟล์ที่มีการเชื่อมต่อกับฐานข้อมูล

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $flowchart_name = $_POST['flowchart_name'];
    $date = date('Y-m-d H:i:s'); // ใช้วันที่ปัจจุบัน
    $process = json_encode($_POST['process'], JSON_UNESCAPED_UNICODE); // แปลง array เป็น JSON string
    $lane = json_encode(json_decode($_POST['lane_hidden']), JSON_UNESCAPED_UNICODE); // แปลง JSON string กลับเป็น array แล้วแปลง array เป็น JSON string
    $before_manday = json_encode($_POST['before_manday'], JSON_UNESCAPED_UNICODE);
    $selected_symbol = json_encode($_POST['selected_symbol'], JSON_UNESCAPED_UNICODE);
    $lane1 = json_encode($_POST['selected_lane1'], JSON_UNESCAPED_UNICODE);
    $lane2 = json_encode($_POST['selected_lane2'], JSON_UNESCAPED_UNICODE);
    $ecrs = json_encode($_POST['selected_ECRS'], JSON_UNESCAPED_UNICODE);
    $after_manday = json_encode($_POST['after_manday'], JSON_UNESCAPED_UNICODE);

    // ตรวจสอบและกำหนดค่า yes_process และ no_process
    $yes_process = isset($_POST['yes_process']) ? json_encode($_POST['yes_process'], JSON_UNESCAPED_UNICODE) : null;
    $no_process = isset($_POST['no_process']) ? json_encode($_POST['no_process'], JSON_UNESCAPED_UNICODE) : null;
    $creator = $_POST['creator'];
    $status = $_POST['status'];

    try {
        // Prepare SQL to insert data into flowchart_save table
        $insert_stmt = $conn->prepare('INSERT INTO flowchart_save (flowchart_name, date, process, allLane, before_manday, selected_symbol, lane1, lane2, ecrs, after_manday, yes_process, no_process, creator, status)
        VALUES (:flowchart_name, :date, :process, :allLane, :before_manday, :selected_symbol, :lane1, :lane2, :ecrs, :after_manday, :yes_process, :no_process, :creator, :status)');

        // Bind values to the placeholders
        $insert_stmt->bindParam(':flowchart_name', $flowchart_name);
        $insert_stmt->bindParam(':date', $date);
        $insert_stmt->bindParam(':process', $process);
        $insert_stmt->bindParam(':allLane', $lane);
        $insert_stmt->bindParam(':before_manday', $before_manday);
        $insert_stmt->bindParam(':selected_symbol', $selected_symbol);
        $insert_stmt->bindParam(':lane1', $lane1);
        $insert_stmt->bindParam(':lane2', $lane2);
        $insert_stmt->bindParam(':ecrs', $ecrs);
        $insert_stmt->bindParam(':after_manday', $after_manday);
        $insert_stmt->bindParam(':yes_process', $yes_process);
        $insert_stmt->bindParam(':no_process', $no_process);
        $insert_stmt->bindParam(':creator', $creator);
        $insert_stmt->bindParam(':status', $status);

        // Execute the SQL statement
        $insert_stmt->execute();

        // If data insertion is successful, set success message
        $successMessage = "บันทึกข้อมูลสำเร็จ";

        // Clear input variables
        $flowchart_name = "";
        $date = "";
        $process = "";
        $lane = "";
        $before_manday = "";
        $selected_symbol = "";
        $lane1 = "";
        $lane2 = "";
        $ecrs = "";
        $after_manday = "";
        $yes_process = "";
        $no_process = "";
        $creator = "";
        $status = "";

        // header("Location: /ISO_Document/Views/Page/admin/admin_home.php");
        exit();

    } catch (PDOException $e) {
        // If there's an error in data insertion, set error message
        $errorMessage = "เกิดข้อผิดพลาดในการบันทึกข้อมูล: " . $e->getMessage();
        // Log the error message for debugging
        error_log($e->getMessage(), 3, "errors.log");
    }
}

// Check if the request method is DELETE
// Check if the request method is DELETE
if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
    // Parse the URL to get the query parameters
    $flowchartId = isset($_GET['id']) ? (int) $_GET['id'] : 0;

    if ($flowchartId > 0) {
        try {
            // Prepare the SQL DELETE statement
            $delete_stmt = $conn->prepare('DELETE FROM flowchart_save WHERE id = :flowchartId');
            // Bind the id parameter
            $delete_stmt->bindParam(':flowchartId', $flowchartId, PDO::PARAM_INT);
            // Execute the SQL statement
            $delete_stmt->execute();

            if ($delete_stmt->rowCount() > 0) {
                // If deletion is successful, return a success message
                echo json_encode(['success' => true, 'message' => 'Flowchart deleted successfully.']);
            } else {
                // If no rows were affected, return an error message
                echo json_encode(['success' => false, 'message' => 'No flowchart found with the given ID.']);
            }
        } catch (PDOException $e) {
            // If there's an error in data deletion, return an error message
            echo json_encode(['success' => false, 'message' => 'Error deleting flowchart: ' . $e->getMessage()]);
            // Log the error message for debugging
            error_log($e->getMessage(), 3, "errors.log");
        }
    } else {
        // If the ID is not valid, return an error message
        echo json_encode(['success' => false, 'message' => 'Invalid flowchart ID.']);
    }
} else {
    // If the request method is not DELETE, return an error message
    echo json_encode(['success' => false, 'message' => 'Invalid request method.']);
}

?>