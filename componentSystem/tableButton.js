document.addEventListener("DOMContentLoaded", function () {
    // Assuming you have a variable to check if the user is admin
    const isAdmin = true; // Set this based on your session or logic

    // Show Button - Navigate to another page
    document.querySelectorAll(".show-btn").forEach(function (button) {
        button.addEventListener("click", function () {
            var row = button.closest("tr");
            var flowchartId = row.getAttribute("data-flowchart-id");

            // Get the isAdmin value from the data-is-admin attribute
            var isAdmin = document.body.getAttribute("data-is-admin") === "true";

            if (isAdmin) {
                // If the user is an Admin, navigate to userFlowchartAdmin.php
                window.location.href = `../flowchartAdmin/userFlowchartAdmin.php?id=${flowchartId}`;
            } else {
                // If the user is not an Admin, navigate to userFlowchart.php
                window.location.href = `../flowchartUser/userFlowchart.php?id=${flowchartId}`;
            }
        });
    });

    // ShowRead Button - Navigate to another page
    document.querySelectorAll(".showRead-btn").forEach(function (button) {
        button.addEventListener("click", function () {
            var row = button.closest("tr");
            var flowchartId = row.getAttribute("data-flowchart-id");
            window.location.href = `../flowchartUser/userFlowchartRead.php?id=${flowchartId}`;
        });
    });

    // Print Button - Show Popup Modal
    document.querySelectorAll(".print-btn").forEach(function (button) {
        button.addEventListener("click", function () {
            Swal.fire({
                title: "Do you want to save the changes?",
                html: `
                <div style="margin-top: 10px;">
                    <button id="saveExcel" class="swal2-confirm swal2-styled">
                    <div><img src="../src/img/excel.png" alt="Excel" style="max-width: 100px; margin-right: 8px;"></div>
                    <div>Save as Excel</div>
                    </button>
                    <button id="savePDF" class="swal2-confirm swal2-styled" style="margin-left: 10px;">
                    <div><img src="../src/img/pdf.png" alt="Excel" style="max-width: 100px; margin-right: 8px;"></div>
                    <div>Save as PDF</div>
                    </button>
                </div>
            `,
                showCancelButton: true,
                cancelButtonText: 'Cancel',
                showConfirmButton: false,
            });

            document.getElementById("saveExcel").addEventListener("click", function () {
                // Generate and save Excel file using SheetJS
                const workbook = XLSX.utils.book_new();
                const worksheet_data = [['Header1', 'Header2', 'Header3'], ['Row1', 'Data1', 'Data2'], ['Row2', 'Data3', 'Data4']];
                const worksheet = XLSX.utils.aoa_to_sheet(worksheet_data);
                XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
                XLSX.writeFile(workbook, "data.xlsx");

                Swal.fire("Excel File Saved!", "", "success");
            });

            document.getElementById("savePDF").addEventListener("click", function () {
                // Generate and save PDF using jsPDF
                const { jsPDF } = window.jspdf;
                const doc = new jsPDF();
                doc.text("This is a sample PDF document.", 10, 10);
                doc.save("document.pdf");

                Swal.fire("PDF File Saved!", "", "success");
            });
        });
    });

    // Edit Button - Navigate to another page (Admin only)
    if (isAdmin) {
        document.querySelectorAll(".edit-btn").forEach(function (button) {
            button.addEventListener("click", function () {
                var row = button.closest("tr");
                var flowchartId = row.getAttribute("data-flowchart-id");
                window.location.href = `../flowchartUser/createFlowchart.php?id=${flowchartId}`;
            });
        });
    }

    // Delete Button - Show Popup Modal (Admin only)
    if (isAdmin) {
        document.querySelectorAll(".delete-btn").forEach(function (button) {
            button.addEventListener("click", function () {
                var row = button.closest("tr");
                var flowchartId = row.getAttribute("data-flowchart-id");

                Swal.fire({
                    title: 'Are you sure?',
                    text: 'This will permanently delete the flowchart',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, delete it',
                    cancelButtonText: 'Cancel'
                }).then((result) => {
                    if (result.isConfirmed) {
                        // Send the DELETE request
                        fetch(`http://localhost/autoSwimChart/flowchartSystem/backend/action.php?id=${flowchartId}`, {
                            method: 'DELETE',
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        })
                            .then(response => response.json())
                            .then(data => {
                                if (data.success) {
                                    // Remove the row from the table
                                    row.remove();
                                    Swal.fire('Deleted!', 'The flowchart has been deleted.', 'success');
                                } else {
                                    Swal.fire('Error', data.message, 'error');
                                }
                            })
                            .catch(error => {
                                console.error('Error:', error);
                                Swal.fire('Error', 'An error occurred while trying to delete the flowchart.', 'error');
                            });
                    }
                });
            });
        });
    }

    // Function to navigate to CreateFlowchart.php when Edit-Flow button is clicked (Admin only)
    if (isAdmin) {
        document.querySelectorAll(".edit-Flow").forEach(function (button) {
            button.addEventListener("click", function () {
                var flowchartId = "<?php echo $flowchartId; ?>"; // แทนที่ด้วยค่า flowchartId ที่เหมาะสม
                window.location.href = `../flowchartAdmin/createFlowchart.php?id=${flowchartId}`;
            });
        });
    }
});

function confirmLogout() {
    Swal.fire({
        title: 'Are you sure?',
        text: 'You will be logged out',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, logout',
        cancelButtonText: 'Cancel'
    }).then((result) => {
        if (result.isConfirmed) {
            var isAdmin = document.body.getAttribute("data-is-admin") === "true";
            
            if (isAdmin) {
                // If the user is an Admin, redirect to ../LogoutAdmin.php
                window.location.href = '../LogoutAdmin.php';
            } else {
                // If the user is not an Admin, redirect to ../LogoutUser.php
                window.location.href = '../LogoutUser.php';
            }
        }
    });
}

// Go Back Function
function goBack() {
    window.history.back();
}

// Go Back Function
function goBack() {
    window.history.back();
}
