function updateDateTime() {
    var now = new Date();
    var datetimeElement = document.getElementById('datetime');
    var options = { day: 'numeric', month: 'long', year: 'numeric' };
    var dateString = now.toLocaleDateString('en-GB', options);
    datetimeElement.innerHTML = dateString;
}

// อัปเดตวันที่และเวลาทุกๆ 1 วินาที
function startDateTimeUpdate() {
    updateDateTime();
    setInterval(updateDateTime, 1000);
}

// เรียกฟังก์ชันเพื่อแสดงวันที่และเวลาเมื่อโหลดหน้าเว็บครั้งแรก
window.onload = startDateTimeUpdate;
