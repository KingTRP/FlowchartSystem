<?php
include '../DB/connect.php'; // เชื่อมต่อกับฐานข้อมูล

// Get the id from the query parameter
$flowchartId = isset($_GET['id']) ? (int) $_GET['id'] : 0;

$sql = "SELECT * FROM flowchart_save WHERE id = :flowchartId";
$stmt = $conn->prepare($sql);

// Bind the id parameter
$stmt->bindParam(':flowchartId', $flowchartId, PDO::PARAM_INT);

// Execute the SQL statement
$stmt->execute();

$flowchartName = ''; // กำหนดค่าเริ่มต้นเป็นข้อความว่าง

if ($stmt->rowCount() > 0) {
    // ถ้ามีข้อมูล
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    $flowchartName = $row["flowchart_name"]; // ดึงชื่อ Flowchart จากฐานข้อมูล
} else {
    // ถ้าไม่มีข้อมูล
    $flowchartName = "ไม่พบข้อมูล"; // หรือกำหนดค่าอื่นที่ต้องการ
}

?>
