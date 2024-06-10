function submitForm() {
    Swal.fire({
        title: 'Confirm to Save Flowchart',
        html: `
        <div>
            <input id="creator" name="creator" class="swal2-input" placeholder="Enter creator name">
            <select id="status" name="status" class="swal2-select">
                <option value="">Select status</option>
                <option value="completed">Completed</option>
                <option value="in-progress">In Progress</option>
                <option value="not-started">Not Started</option>
            </select>
        </div>
        `,
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: 'Submit',
        preConfirm: () => {
            const creatorName = Swal.getPopup().querySelector('#creator').value;
            const status = Swal.getPopup().querySelector('#status').value;
            if (!creatorName || !status) {
                Swal.showValidationMessage('Please enter creator name and select status');
            }
            return { creatorName, status };
        }
    }).then((result) => {
        if (result.isConfirmed) {
            // Add hidden input fields to the form
            const creatorInput = document.createElement('input');
            creatorInput.type = 'hidden';
            creatorInput.name = 'creator';
            creatorInput.value = result.value.creatorName;

            const statusInput = document.createElement('input');
            statusInput.type = 'hidden';
            statusInput.name = 'status';
            statusInput.value = result.value.status;

            document.getElementById('flowchartForm').appendChild(creatorInput);
            document.getElementById('flowchartForm').appendChild(statusInput);

            // Submit the form
            document.getElementById('flowchartForm').submit();
        }
    });
}

// ฟังก์ชันเพื่อดึงข้อมูลการตัดสินใจ
function getSelectedProcessData() {
    const selectedProcessData = Array.from(document.querySelectorAll('select[name^="to_process_"]')).map(select => {
        return {
            decisionId: select.getAttribute('data-decision-id'),
            caseType: select.getAttribute('data-case-type'),
            value: select.value
        };
    });

    const selectedProcess1Data = selectedProcessData.filter(item => item.caseType === 'yes').map(item => item.value);
    const selectedProcess2Data = selectedProcessData.filter(item => item.caseType === 'no').map(item => item.value);

    return { selectedProcess1Data, selectedProcess2Data };
}



var laneModal = document.getElementById("laneModal");

function showLanePrompt() {
    const laneFields = Array.from(document.querySelectorAll('#lane_fields input[name="lane[]"]')).map(input => input.value);

    Swal.fire({
        title: 'Add Lanes',
        html: `
            <div id="lane_prompt_fields">
                ${laneFields.map((laneValue, index) => `
                    <div class="my-2 d-flex mx-2">
                        <input class="mx-2 form-control" type="text" name="prompt_lane[]" value="${laneValue}" placeholder="Enter lane data">
                        <button type="button" onclick="removeLaneFieldInPrompt(this, ${index})" class="btn btn-danger btn-sm">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                `).join('')}
            </div>
            <button type="button" onclick="addLaneFieldInPrompt()" class="btn btn-primary">Add Lane</button>
        `,
        showCancelButton: true,
        confirmButtonText: 'Save',
        showLoaderOnConfirm: true,
        preConfirm: () => {
            const laneInputs = Array.from(document.querySelectorAll('#lane_prompt_fields input[name="prompt_lane[]"]')).map(input => input.value);
            return saveLaneFields(laneInputs);
        },
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
            updateDropdowns();
        }
    });
}

function closeLaneModal() {
    laneModal.style.display = "none";
}

function addLaneFieldInPrompt() {
    const div = document.createElement('div');
    div.classList.add('my-2', 'd-flex', 'mx-2');
    div.innerHTML = `
        <input id="prompt_lane" class="mx-2" type="text" name="prompt_lane[]" placeholder="Enter lane data">
        <button type="button" onclick="removeLaneFieldInPrompt(this)" style="background: none; border: none; padding: 0;">
            <img src="../src/img/remove.png" alt="" style="width: 30px; height: 30px;">
        </button>
    `;
    document.getElementById('lane_prompt_fields').appendChild(div);
}

function removeLaneFieldInPrompt(element, index) {
    const laneField = element.parentNode;
    laneField.parentNode.removeChild(laneField);

    // Remove the corresponding lane field from the original fields
    const laneFields = document.querySelectorAll('#lane_fields input[name="lane[]"]');
    if (index !== undefined && laneFields[index]) {
        laneFields[index].parentNode.removeChild(laneFields[index].parentNode);
    }
}

function saveLaneFields(laneData) {
    const laneFieldsContainer = document.getElementById('lane_fields');

    laneFieldsContainer.innerHTML = ''; // Clear existing fields

    let flexContainer = document.createElement('div');
    flexContainer.classList.add('d-flex', 'flex-wrap', 'align-items-center', 'mb-2');
    laneFieldsContainer.appendChild(flexContainer);

    laneData.forEach((laneValue, index) => {
        if (laneValue.trim() !== '') {
            if (index % 5 === 0 && index !== 0) {
                flexContainer = document.createElement('div');
                flexContainer.classList.add('d-flex', 'flex-wrap', 'align-items-center', 'mb-2');
                laneFieldsContainer.appendChild(flexContainer);
            }
            const div = document.createElement('div');
            div.classList.add('mx-2', 'my-2', 'd-flex', 'align-items-center');
            div.innerHTML = `
                <input id="lane" class="form-control" type="text" name="lane[]" value="${laneValue}" placeholder="Enter lane data" onblur="updateDropdowns()">
                <button type="button" onclick="removeLaneField(this)" class="btn btn-danger btn-sm ms-2">
                    <i class="fas fa-times"></i>
                </button>
            `;
            flexContainer.appendChild(div);
        }
    });

    // Create a hidden input field for lane data
    const hiddenInput = document.createElement('input');
    hiddenInput.type = 'hidden';
    hiddenInput.name = 'lane_hidden';
    hiddenInput.value = JSON.stringify(laneData);
    laneFieldsContainer.appendChild(hiddenInput);

    updateDropdowns();
}



// Call addProcessField with default "Start" process, hideRemoveButton and fullStart
addProcessField("Start", true, true, true, false, 1, null);
let processCounter = 2; // เริ่มนับลำดับกระบวนการจาก 2 หลังจาก Start

// Add "End" process without specifying processId
addProcessField("End", false, true, true, true, null, processCounter);

// Make the process fields sortable
new Sortable(document.getElementById('process_fields'), {
    animation: 150,
    handle: '.process-counter', // drag handle selector within list items
    onEnd: function (evt) {
        // Reorder the process numbers after dragging
        const processFields = document.querySelectorAll('.process-field .process-counter');
        processFields.forEach((counter, index) => {
            counter.textContent = (index + 1) + '.';
        });
    }
});

function addProcessField(defaultProcess = "", isStart = false, hideRemoveButton = false, fullStart = false, isEnd = false, processId = null) {
    var processFields = document.querySelectorAll('.process-field');
    var div = document.createElement('div');

    div.classList.add('mx-2', 'my-2', 'd-flex', 'flex-column', 'process-field');
    div.innerHTML = `
        <div class="mx-2 my-2 d-flex flex-column">
        <div class="d-flex flex-row ${fullStart ? 'me-4 mx-1' : ''} ${isEnd ? '' : ''}">
            <div class="process-counter me-2 my-auto">${processId || (isStart ? 1 : (isEnd ? processFields.length + 2 : processCounter++))}.</div>

            <input class="mx-2" type="text" name="process[]" id="process" placeholder="Enter process data" value="${defaultProcess}"
                ${isStart || isEnd ? 'readonly' : ''} onblur="updateDropdowns()">

            ${hideRemoveButton ? '' : `<button style="background: none; border: none; padding: 0;" type="button"
                onclick="removeProcessField(this)">
                <img src="../src/img/remove.png" alt="" style="width: 30px; height: 30px;">
            </button>`}
        </div>
        <div class="ms-2 row my-3 align-items-center">
            <div class="col ms-2">
                <input id="before_manday" type="number" class="form-control" name="before_manday[]" placeholder="before Manday"
                    ${isStart || isEnd ? 'value="0" readonly' : ''}>
            </div>

            <div class="col" style="margin-right:30px">
                <div class="d-flex flex-row">
                    <div class="my-auto me-2">Symbol </div>
                        <select id="selected_symbol" class="form-select" name="selected_symbol[]" onchange="handleSymbolChange(this)">
                            ${isStart ? '<option value="start" selected>Start</option>' : ''}
                            ${!isStart && !isEnd ? '<option value="process">Process</option>' : ''}
                            ${!isStart && !isEnd ? '<option value="decision">Decision</option>' : ''}
                            ${!isStart && !isEnd ? '<option value="input">Input</option>' : ''}
                            ${!isStart && !isEnd ? '<option value="output">Output</option>' : ''}
                            ${isEnd ? '<option value="end" selected>End</option>' : ''}
                        </select>
                </div>
            </div>

            <div class="col">
                <div class="d-flex flex-row">
                    <div class="me-2 my-auto">From </div>
                    <select id="selected_lane1" class="form-select" name="selected_lane1[]">
                        <!-- Options will be added dynamically using JavaScript -->
                    </select>
                </div>
            </div>

            <div class="col">
                <div class="d-flex flex-row">
                    <div class="me-2 my-auto">To </div>
                    <select id="selected_lane2" class="form-select" name="selected_lane2[]">
                        <!-- Options will be added dynamically using JavaScript -->
                    </select>
                </div>
            </div>

            <div class="col">
                <div class="d-flex flex-row">
                    <div class="my-auto me-2">ECRS.</div>
                        <select id="selected_ECRS" class="form-select" name="selected_ECRS[]">
                            ${!isStart && !isEnd ? '<option value="Eliminate"Simplify>Eliminate</option>' : ''}
                            ${!isStart && !isEnd ? '<option value="Combine">Combine</option>' : ''}
                            ${!isStart && !isEnd ? '<option value="Rearrange">Rearrange</option>' : ''}
                            ${!isStart && !isEnd ? '<option value="Simplify">Simplify</option>' : ''}
                            ${isStart || isEnd ? '<option value="Exist" selected>Exist</option>' : ''}
                        </select>
                </div>
            </div>
            <div class="col">
                <input id="after_manday" type="number" class="form-control" name="after_manday[]" placeholder="After Manday"
                    ${isStart || isEnd ? 'value="0" readonly' : ''}>
            </div>
        </div>
        <div class="d-flex flex-row decision_fields ms-5"></div>
    </div>
    `;

    // Check if "End" process already exists
    var endProcessExists = Array.from(processFields).some(field => {
        const processInput = field.querySelector('input[name="process[]"]');
        return processInput && processInput.value === "End";
    });

    // If "End" process already exists
    if (endProcessExists && !isEnd) {
        var endProcessField = Array.from(processFields).find(field => {
            const processInput = field.querySelector('input[name="process[]"]');
            return processInput && processInput.value === "End";
        });
        endProcessField.parentNode.insertBefore(div, endProcessField);
    } else {
        // Otherwise, append to the end
        document.getElementById('process_fields').appendChild(div);
    }

    // Update process counter for existing "End" process
    if (endProcessExists) {
        var endProcessField = Array.from(processFields).find(field => {
            const processInput = field.querySelector('input[name="process[]"]');
            return processInput && processInput.value === "End";
        });
        var endProcessCounter = endProcessField.querySelector('.process-counter');
        endProcessCounter.textContent = (processFields.length + 1) + ".";
    }

    updateDropdowns();
}


function removeLaneField(element) {
    const laneField = element.parentNode;
    laneField.parentNode.removeChild(laneField);
    updateDropdowns();
}

function removeProcessField(element) {
    var processField = element.closest('.process-field');
    var processCounter = processField.querySelector('.process-counter');
    var processId = parseInt(processCounter.textContent);

    processField.remove();

    // Update process counters for remaining process fields
    var remainingProcessFields = document.querySelectorAll('.process-field');
    for (var i = 0; i < remainingProcessFields.length; i++) {
        var counter = remainingProcessFields[i].querySelector('.process-counter');
        var id = parseInt(counter.textContent);
        if (id > processId) {
            counter.textContent = (id - 1) + '.';
        }
    }

    // Update the counters from the current order
    remainingProcessFields.forEach((field, index) => {
        field.querySelector('.process-counter').textContent = (index + 1) + '.';
    });

    // Update lastProcessId to the new number of process fields
    lastProcessId = remainingProcessFields.length;

    updateDropdowns();
}


function addDecisionFields(decisionFields) {
    const decisionId = `decision_${Date.now()}`; // กำหนด ID ที่ไม่ซ้ำกัน
    decisionFields.innerHTML = `
        <div id="decision_details_${decisionId}"></div>
    `;
    return decisionId;
}

function handleSymbolChange(selectElement) {
    const decisionFields = selectElement.parentNode.parentNode.parentNode.parentNode.querySelector('.decision_fields');
    const selectedSymbol = selectElement.value;

    decisionFields.innerHTML = ''; // Clear existing fields

    if (selectedSymbol === 'decision') {
        const decisionId = addDecisionFields(decisionFields);
        decisionFields.innerHTML += `
        <div class="d-flex flex-row align-items-center">
            <input class="mx-2 form-control" type="text" name="case_type_${decisionId}[]" value="Yes" placeholder="Enter Case Type" readonly></input>
            <select class="form-select" name="yes_process[]" data-decision-id="${decisionId}" data-case-type="yes">
                ${Array.from(document.querySelectorAll('input[name="process[]"]')).map(input => `<option value="${input.value}">${input.value}</option>`).join('')}
            </select>
        </div>
        <div class="d-flex flex-row align-items-center mt-2">
            <input class="mx-2 form-control" type="text" name="case_type_${decisionId}[]" value="No" placeholder="Enter Case Type" readonly>
            <select class="form-select" name="no_process[]" data-decision-id="${decisionId}" data-case-type="no">
                ${Array.from(document.querySelectorAll('input[name="process[]"]')).map(input => `<option value="${input.value}">${input.value}</option>`).join('')}
            </select>
        </div>
        `;
    }
}

// การอัปเดตข้อมูลจาก selectedProcess1Data และ selectedProcess2Data
function getSelectedProcessData() {
    const selectedProcessData = Array.from(document.querySelectorAll('select[name^="to_process_"]')).map(select => {
        return {
            decisionId: select.getAttribute('data-decision-id'),
            caseType: select.getAttribute('data-case-type'),
            value: select.value
        };
    });

    const selectedProcess1Data = selectedProcessData.filter(item => item.caseType === 'yes').map(item => item.value);
    const selectedProcess2Data = selectedProcessData.filter(item => item.caseType === 'no').map(item => item.value);

    return { selectedProcess1Data, selectedProcess2Data };
}


function updateDropdowns() {
    var laneDropdowns = document.querySelectorAll('select[name^="selected_lane"]');

    // Get the existing selected values
    var existingLaneOptions = Array.from(laneDropdowns).reduce((acc, select) => {
        acc[select.id] = select.options[select.selectedIndex]?.value || '';
        return acc;
    }, {});

    updateLaneDropdowns(existingLaneOptions);
}

function updateLaneDropdowns(existingOptions) {
    var lanes = document.getElementsByName('lane[]');
    var laneDropdowns = document.querySelectorAll('select[name^="selected_lane"]');

    // Store the existing selected values
    var existingSelections = {};
    laneDropdowns.forEach(function (dropdown) {
        existingSelections[dropdown.id] = dropdown.value;
    });

    // Clear existing options
    laneDropdowns.forEach(function (select) {
        // Store the selected option before clearing
        var selectedOption = select.options[select.selectedIndex];

        select.innerHTML = '';

        // Add default option "ไม่มี"
        var defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.textContent = 'ไม่มี';
        select.appendChild(defaultOption);

        // Re-add the previously selected option if it exists
        if (selectedOption && selectedOption.value !== '') {
            select.appendChild(selectedOption);
        }
    });

    // Add each lane data as an option
    lanes.forEach(function (lane) {
        var option = document.createElement('option');
        option.value = lane.value;
        option.textContent = lane.value;
        laneDropdowns.forEach(function (select) {
            select.appendChild(option.cloneNode(true));
            // Select the previously selected option if it exists
            if (existingSelections[select.id] === option.value) {
                option.selected = true;
            }
        });
    });
}

addProcessField();

