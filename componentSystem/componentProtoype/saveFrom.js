// function submitForm() {
//     const laneData = Array.from(document.getElementsByName('lane[]')).map(input => input.value);
//     const processData = Array.from(document.getElementsByName('process[]')).map(input => input.value);
//     const mandayData = Array.from(document.getElementsByName('before_manday[]')).map(input => input.value);
//     const selectedLane1Data = Array.from(document.getElementsByName('selected_lane1[]')).map(select => select.value);
//     const selectedLane2Data = Array.from(document.getElementsByName('selected_lane2[]')).map(select => select.value);
//     const selectedSymbolData = Array.from(document.getElementsByName('selected_symbol[]')).map(select => select.value);
//     const selectedProcess1Data = Array.from(document.getElementsByName('selected_process1[]')).map(select => select.value);
//     const selectedProcess2Data = Array.from(document.getElementsByName('selected_process2[]')).map(select => select.value);

//     const userId = document.getElementById('user_id').value;
//     const flowchartName = document.getElementById('flowchart_name').value;
//     const dateSave = new Date().toISOString().slice(0, 19).replace('T', ' ');

//     const formData = {
//         user_id: userId,
//         flowchart_name: flowchartName,
//         date_save: dateSave,
//         process: processData,
//         ecrs: '',
//         before_manday: mandayData,
//         after_manday: '',
//         symbol: selectedSymbolData,
//         from_lane: selectedLane1Data,
//         to_lane: selectedLane2Data
//     };

//     fetch('../DB/users.php', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//     })

//         .then(response => response.text())
//         .then(data => {
//             console.log(data);
//             // แสดงข้อความจาก PHP
//             // ดำเนินการอื่นๆ ต่อไปหากต้องการ
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });
// }

// var laneModal = document.getElementById("laneModal");

// function showLanePrompt() {
//     const laneFields = Array.from(document.querySelectorAll('#lane_fields input[name="lane[]"]')).map(input => input.value);

//     Swal.fire({
//         title: 'Add Lanes',
//         html: `
//             <div id="lane_prompt_fields">
//                 ${laneFields.map((laneValue, index) => `
//                     <div class="my-2 d-flex mx-2">
//                         <input class="mx-2 form-control" type="text" name="prompt_lane[]" value="${laneValue}" placeholder="Enter lane data">
//                         <button type="button" onclick="removeLaneFieldInPrompt(this, ${index})" class="btn btn-danger btn-sm">
//                             <i class="fas fa-times"></i>
//                         </button>
//                     </div>
//                 `).join('')}
//             </div>
//             <button type="button" onclick="addLaneFieldInPrompt()" class="btn btn-primary">Add Lane</button>
//         `,
//         showCancelButton: true,
//         confirmButtonText: 'Save',
//         showLoaderOnConfirm: true,
//         preConfirm: () => {
//             const laneInputs = Array.from(document.querySelectorAll('#lane_prompt_fields input[name="prompt_lane[]"]')).map(input => input.value);
//             return saveLaneFields(laneInputs);
//         },
//         allowOutsideClick: () => !Swal.isLoading()
//     }).then((result) => {
//         if (result.isConfirmed) {
//             updateDropdowns();
//         }
//     });
// }

// function closeLaneModal() {
//     laneModal.style.display = "none";
// }

// function addLaneFieldInPrompt() {
//     const div = document.createElement('div');
//     div.classList.add('my-2', 'd-flex', 'mx-2');
//     div.innerHTML = `
//         <input class="mx-2" type="text" name="prompt_lane[]" placeholder="Enter lane data">
//         <button type="button" onclick="removeLaneFieldInPrompt(this)" style="background: none; border: none; padding: 0;">
//             <img src="../src/img/remove.png" alt="" style="width: 30px; height: 30px;">
//         </button>
//     `;
//     document.getElementById('lane_prompt_fields').appendChild(div);
// }

// function removeLaneFieldInPrompt(element, index) {
//     const laneField = element.parentNode;
//     laneField.parentNode.removeChild(laneField);

//     // Remove the corresponding lane field from the original fields
//     const laneFields = document.querySelectorAll('#lane_fields input[name="lane[]"]');
//     if (index !== undefined && laneFields[index]) {
//         laneFields[index].parentNode.removeChild(laneFields[index].parentNode);
//     }
// }

// function saveLaneFields(laneData) {
//     const laneFieldsContainer = document.getElementById('lane_fields');

//     laneFieldsContainer.innerHTML = ''; // Clear existing fields

//     laneData.forEach(laneValue => {
//         if (laneValue.trim() !== '') {
//             const div = document.createElement('div');
//             div.classList.add('mx-2', 'my-2', 'd-flex', 'align-items-center');
//             div.innerHTML = `
//                 <input class="form-control" type="text" name="lane[]" value="${laneValue}" placeholder="Enter lane data" onblur="updateDropdowns()">
//                 <button type="button" onclick="removeLaneField(this)" class="btn btn-danger btn-sm ms-2">
//                     <i class="fas fa-times"></i>
//                 </button>
//             `;
//             laneFieldsContainer.appendChild(div);
//         }
//     });

//     updateDropdowns();
// }

// function loadExistingLanes() {
//     var laneFields = document.getElementsByName('lane[]');
//     var laneModalFieldsContainer = document.getElementById('lane_modal_fields');

//     laneModalFieldsContainer.innerHTML = ''; // Clear existing fields

//     for (var i = 0; i < laneFields.length; i++) {
//         var laneData = laneFields[i].value;
//         var div = document.createElement('div');
//         div.classList.add('my-2', 'd-flex', 'mx-2');
//         div.innerHTML = `
//             <input class="mx-2" type="text" name="modal_lane[]" value="${laneData}" placeholder="Enter lane data">
//             <button type="button" onclick="removeLaneFieldInModal(this)" style="background: none; border: none; padding: 0;">
//                 <img src="../src/img/remove.png" alt="" style="width: 30px; height: 30px;">
//             </button>
//         `;
//         laneModalFieldsContainer.appendChild(div);
//     }
// }

// // Call addProcessField with default "Start" process, hideRemoveButton and fullStart
// addProcessField("Start", true, true, true, false, 1, null);
// let lastProcessId = 2; // Initialize with 2 for processes after "Start"
// addProcessField("End", false, true, true, true, null, null); // Add "End" process without specifying processId

// function addProcessField(defaultProcess = "", isStart = false, hideRemoveButton = false, fullStart = false, isEnd = false, processId = null) {
//     var processFields = document.querySelectorAll('.process-field');
//     var div = document.createElement('div');

//     div.classList.add('mx-2', 'my-2', 'd-flex', 'flex-column', 'process-field');
//     div.innerHTML = `
//     <div class="mx-2 my-2 d-flex flex-column">
//     <div class="d-flex flex-row ${fullStart ? 'me-4 mx-1' : ''} ${isEnd ? '' : ''}">
//         <div class="process-counter me-2 my-auto">${processId || (isStart ? 1 : (isEnd ? processFields.length + 2 :
//             lastProcessId++))}.</div>

//         <input class="mx-2" type="text" name="process[]" placeholder="Enter process data" value="${defaultProcess}"
//             ${isStart || isEnd ? 'disabled' : '' } onblur="updateDropdowns()">

//         ${hideRemoveButton ? '' : `<button style="background: none; border: none; padding: 0;" type="button"
//             onclick="removeProcessField(this)">
//             <img src="../src/img/remove.png" alt="" style="width: 30px; height: 30px;">
//         </button>`}
//     </div>
//     <div class="ms-2 row my-3 align-items-center"">
//         <div class="col ms-2">
//             <input type="number" class="form-control" name="before_manday[]" placeholder="before Manday"
//                 ${isStart || isEnd ? 'value="0" disabled' : '' }>
//         </div>

//         <div class="col" style="margin-right:30px">
//             <div class=" d-flex flex-row p-2">
//                 <div class="my-auto me-2">Symbol </div>
//                 <select class="form-select" name="selected_symbol[]" ${isStart || isEnd ? 'disabled' : '' }
//                     onchange="handleSymbolChange(this)">
//                     ${isStart ? `<option value="start" ${isStart ? 'selected' : '' }>Start</option>` : ''}
//                     <option value="process" ${!isStart && !isEnd ? 'selected' : '' }>Process</option>
//                     <option value="decision">Decision</option>
//                     <option value="input">Input</option>
//                     <option value="output">Output</option>
//                     ${isEnd ? `<option value="end" ${isEnd ? 'selected' : '' }>End</option>` : ''}
//                 </select>
//             </div>
//         </div>

//         <div class="col">
//             <div class="d-flex flex-row p-2">
//                 <div class="me-2 my-auto">From </div>
//                 <select class="form-select" name="selected_lane1[]">
//                     <!-- Options will be added dynamically using JavaScript -->
//                 </select>
//             </div>
//         </div>

//         <div class="col">
//             <div class="d-flex flex-row p-2">
//                 <div class="me-2 my-auto">To </div>
//                 <select class="form-select" name="selected_lane2[]">
//                     <!-- Options will be added dynamically using JavaScript -->
//                 </select>
//             </div>
//         </div>

//         <div class="col">
//             <div class=" d-flex flex-row p-2">
//                 <div class="my-auto me-2">ECRS.</div>
//                 <select class="form-select" name="selected_ECRS[]" ${isStart || isEnd ? 'disabled' : '' }>
//                     <option value="Eliminate">Eliminate</option>
//                     <option value="Combine">Combine</option>
//                     <option value="Rearrange">Rearrange</option>
//                     <option value="Simplify">Simplify</option>
//                     ${isStart || isEnd ? `<option value="Exist" ${isStart || isEnd ? 'selected' : '' }>Exist</option>` :
//                     ''}
//                 </select>
//             </div>
//         </div>
//         <div class="col">
//             <input type="number" class="form-control" name="after_manday[]" placeholder="After Manday"
//                 ${isStart || isEnd ? 'value="0" disabled' : '' }>
//         </div>
//     </div>
//     <div class="d-flex flex-row decision_fields ms-5"></div>
// </div>
//     `;

//     // Check if "End" process already exists
//     var endProcessExists = Array.from(processFields).some(field => {
//         const processInput = field.querySelector('input[name="process[]"]');
//         return processInput && processInput.value === "End";
//     });

//     // If "End" process already exists
//     if (endProcessExists && !isEnd) {
//         var endProcessField = Array.from(processFields).find(field => {
//             const processInput = field.querySelector('input[name="process[]"]');
//             return processInput && processInput.value === "End";
//         });
//         endProcessField.parentNode.insertBefore(div, endProcessField);
//     } else {
//         // Otherwise, append to the end
//         document.getElementById('process_fields').appendChild(div);
//     }

//     // Update process counter for existing "End" process
//     if (endProcessExists) {
//         var endProcessField = Array.from(processFields).find(field => {
//             const processInput = field.querySelector('input[name="process[]"]');
//             return processInput && processInput.value === "End";
//         });
//         var endProcessCounter = endProcessField.querySelector('.process-counter');
//         endProcessCounter.textContent = (processFields.length + 1) + ".";
//     }
//     updateDropdowns();
// }


// function removeLaneField(element) {
//     const laneField = element.parentNode;
//     laneField.parentNode.removeChild(laneField);
//     updateDropdowns();
// }

// function removeProcessField(element) {
//     var processField = element.closest('.process-field');
//     var processCounter = processField.querySelector('.process-counter');
//     var processId = parseInt(processCounter.textContent);

//     processField.remove();

//     // Update process counters for remaining process fields
//     var remainingProcessFields = document.querySelectorAll('.process-field');
//     for (var i = 0; i < remainingProcessFields.length; i++) {
//         var counter = remainingProcessFields[i].querySelector('.process-counter');
//         var id = parseInt(counter.textContent);
//         if (id > processId) {
//             counter.textContent = id - 1 + '.';
//         }
//     }

//     // Update lastProcessId
//     lastProcessId--;

//     updateDropdowns();
// }

// function handleSymbolChange(selectElement) {
//     const decisionFields = selectElement.parentNode.parentNode.parentNode.parentNode.querySelector('.decision_fields');
//     const selectedSymbol = selectElement.value;

//     decisionFields.innerHTML = ''; // Clear existing fields

//     if (selectedSymbol === 'decision') {
//         const decisionId = addDecisionFields(decisionFields);
//         decisionFields.innerHTML += `
//         <div class="d-flex flex-column">
//             <div class="d-flex mt-2 mb-2 align-items-center">
//                 <button   button type="button" class="btn btn-primary" onclick="showDecisionPrompt(this, ${decisionId})">
//                     <i class="fas fa-code-branch"></i> Add Case
//                 </button>
//             </div>
//             <div id="decision_cases_${decisionId}" class="d-flex flex-row flex-wrap justify-content-center"></div>
//         </div>
//         `;
//     }
// }


// function updateDropdowns() {
//     var laneDropdowns = document.querySelectorAll('select[name^="selected_lane"]');

//     // Get the existing selected values
//     var existingLaneOptions = Array.from(laneDropdowns).reduce((acc, select) => {
//         acc[select.id] = select.options[select.selectedIndex]?.value || '';
//         return acc;
//     }, {});

//     updateLaneDropdowns(existingLaneOptions);}

// function updateLaneDropdowns(existingOptions) {
//     var lanes = document.getElementsByName('lane[]');
//     var laneDropdowns = document.querySelectorAll('select[name^="selected_lane"]');

//     // Store the existing selected values
//     var existingSelections = {};
//     laneDropdowns.forEach(function (dropdown) {
//         existingSelections[dropdown.id] = dropdown.value;
//     });

//     // Clear existing options
//     laneDropdowns.forEach(function (select) {
//         // Store the selected option before clearing
//         var selectedOption = select.options[select.selectedIndex];

//         select.innerHTML = '';

//         // Add default option "ไม่มี"
//         var defaultOption = document.createElement('option');
//         defaultOption.value = '';
//         defaultOption.textContent = 'ไม่มี';
//         select.appendChild(defaultOption);

//         // Re-add the previously selected option if it exists
//         if (selectedOption && selectedOption.value !== '') {
//             select.appendChild(selectedOption);
//         }
//     });

//     // Add each lane data as an option
//     lanes.forEach(function (lane) {
//         var option = document.createElement('option');
//         option.value = lane.value;
//         option.textContent = lane.value;
//         laneDropdowns.forEach(function (select) {
//             select.appendChild(option.cloneNode(true));
//             // Select the previously selected option if it exists
//             if (existingSelections[select.id] === option.value) {
//                 option.selected = true;
//             }
//         });
//     });
// }

// // Call updateProcessDropdown after adding decision fields
// function addDecisionFields(decisionFields) {
//     const decisionId = Date.now();
//     decisionFields.innerHTML = `
//         <div id="decision_details_${decisionId}"></div>
//     `;
//     return decisionId;
// }

// function saveDecisionFields(decisionField, decisionId, caseTypeValue, toProcessValue) {
//     const decisionCasesDiv = decisionField.querySelector(`#decision_cases_${decisionId}`);
//     const div = document.createElement('div');
//     div.classList.add('d-flex', 'align-items-center', 'me-2', 'mb-2');
//     div.innerHTML = `
//         <input class="form-control me-2" type="text" name="case_type_${decisionId}[]" value="${caseTypeValue}" placeholder="Enter Case Type" readonly>
//         <select class="form-select" name="to_process_${decisionId}[]">
//             ${Array.from(document.querySelectorAll('input[name="process[]"]')).map(input => `<option value="${input.value}" ${input.value === toProcessValue ? 'selected' : ''}>${input.value}</option>`).join('')}
//         </select>
//         <button type="button" onclick="showDecisionDetails(this, '${caseTypeValue}', '${toProcessValue}')" class="btn btn-primary btn-sm ms-2">
//             <i class="fas fa-info-circle"></i>
//         </button>
//         <button type="button" onclick="removeDecisionField(this, ${decisionId})" class="btn btn-danger btn-sm ms-2">
//             <i class="fas fa-times"></i>
//         </button>
//     `;

//     decisionCasesDiv.appendChild(div);
// }

// function showDecisionDetails(button, caseTypeValue, toProcessValue) {
//     Swal.fire({
//         title: 'Decision Details',
//         html: `
//             <p><strong>Case Type:</strong> ${caseTypeValue}</p>
//             <p><strong>To Process:</strong> ${toProcessValue}</p>
//         `,
//         confirmButtonText: 'OK'
//     });
// }


// function showDecisionDetails(button, caseTypeValue, toProcessValue) {
//     Swal.fire({
//         title: 'Decision Details',
//         html: `
//             <p><strong>Case Type:</strong> ${caseTypeValue}</p>
//             <p><strong>To Process:</strong> ${toProcessValue}</p>
//         `,
//         confirmButtonText: 'OK'
//     });
// }


// function showDecisionPrompt(element, decisionId) {
//     const processFields = Array.from(document.querySelectorAll('input[name="process[]"]')).map(input => input.value);
//     const existingCases = Array.from(document.querySelectorAll(`#decision_cases_${decisionId} input[name="case_type_${decisionId}[]"]`)).map(input => input.value);
//     const existingToProcesses = Array.from(document.querySelectorAll(`#decision_cases_${decisionId} select[name="to_process_${decisionId}[]"]`)).map(select => select.value);

//     Swal.fire({
//         title: 'Add Case',
//         html: `
//             <div id="decision_prompt_fields">
//                 ${existingCases.map((caseTypeValue, index) => `
//                     <div class="my-2 d-flex mx-2">
//                         <input class="mx-2 form-control" type="text" name="prompt_case_type" value="${caseTypeValue}" placeholder="Enter Case Type">
//                         <select class="form-select" name="prompt_to_process">
//                             ${processFields.map(processValue => `<option value="${processValue}" ${processValue === existingToProcesses[index] ? 'selected' : ''}>${processValue}</option>`).join('')}
//                         </select>
//                         <button type="button" onclick="removeDecisionFieldInPrompt(this)" class="btn btn-danger btn-sm ms-2">
//                             <i class="fas fa-times"></i>
//                         </button>
//                     </div>
//                 `).join('')}
//             </div>
//             <button type="button" onclick="addDecisionFieldInPrompt(${decisionId})" class="btn btn-primary">Add Case</button>
//         `,
//         showCancelButton: true,
//         confirmButtonText: 'Save',
//         showLoaderOnConfirm: true,
//         preConfirm: () => {
//             const caseTypeInputs = Array.from(document.querySelectorAll('#decision_prompt_fields input[name="prompt_case_type"]')).map(input => input.value);
//             const toProcessSelects = Array.from(document.querySelectorAll('#decision_prompt_fields select[name="prompt_to_process"]')).map(select => select.value);

//             const decisionCasesDiv = document.getElementById(`decision_cases_${decisionId}`);
//             decisionCasesDiv.innerHTML = '';

//             caseTypeInputs.forEach((caseTypeValue, index) => {
//                 const toProcessValue = toProcessSelects[index];
//                 saveDecisionFields(element.parentNode.parentNode, decisionId, caseTypeValue, toProcessValue);
//             });
//         },
//         allowOutsideClick: () => !Swal.isLoading()
//     });
// }


// function addDecisionFieldInPrompt(decisionId) {
//     const decisionPromptFields = document.getElementById('decision_prompt_fields');
//     const processFields = Array.from(document.querySelectorAll('input[name="process[]"]')).map(input => input.value);

//     const div = document.createElement('div');
//     div.classList.add('my-2', 'd-flex', 'mx-2');
//     div.innerHTML = `
//         <input class="mx-2 form-control" type="text" name="prompt_case_type" placeholder="Enter Case Type">
//         <select class="form-select" name="prompt_to_process">
//             <option value="">Select Process</option>
//             ${processFields.map(processValue => `<option value="${processValue}">${processValue}</option>`).join('')}
//         </select>
//         <button type="button" onclick="removeDecisionFieldInPrompt(this)" class="btn btn-danger btn-sm ms-2">
//             <i class="fas fa-times"></i>
//         </button>
//     `;

//     decisionPromptFields.appendChild(div);
// }

// function removeDecisionFieldInPrompt(element) {
//     const decisionField = element.parentNode;
//     decisionField.parentNode.removeChild(decisionField);
// }

// function removeDecisionField(button, decisionId) {
//     const decisionField = button.parentNode;
//     decisionField.parentNode.removeChild(decisionField);
// }

// addProcessField();




// <div class="mx-2 my-2 d-flex flex-column">
//     <div class="d-flex flex-row ${fullStart ? 'me-4 mx-1' : ''} ${isEnd ? '' : ''}">
//         <div class="process-counter me-2 my-auto">${processId || (isStart ? 1 : (isEnd ? processFields.length + 2 :
//             lastProcessId++))}.</div>

//         <input class="mx-2" type="text" name="process[]" placeholder="Enter process data" value="${defaultProcess}"
//             ${isStart || isEnd ? 'disabled' : '' } onblur="updateDropdowns()">

//         ${hideRemoveButton ? '' : `<button style="background: none; border: none; padding: 0;" type="button"
//             onclick="removeProcessField(this)">
//             <img src="../src/img/remove.png" alt="" style="width: 30px; height: 30px;">
//         </button>`}
//     </div>
//     <div class="ms-2 row my-3">
//         <div class="col">
//             <input type="number" class="form-control mx-2" name="before_manday[]" placeholder="Enter Your before Manday"
//                 ${isStart || isEnd ? 'value="0" disabled' : '' }>
//         </div>

//         <div class="col" style="margin-right:30px">
//             <div class=" d-flex flex-row p-2">
//                 <div class="my-auto me-2">Symbol </div>
//                 <select class="form-select" name="selected_symbol[]" ${isStart || isEnd ? 'disabled' : '' }
//                     onchange="handleSymbolChange(this)">
//                     ${isStart ? `<option value="start" ${isStart ? 'selected' : '' }>Start</option>` : ''}
//                     <option value="process" ${!isStart && !isEnd ? 'selected' : '' }>Process</option>
//                     <option value="decision">Decision</option>
//                     <option value="input">Input</option>
//                     <option value="output">Output</option>
//                     ${isEnd ? `<option value="end" ${isEnd ? 'selected' : '' }>End</option>` : ''}
//                 </select>
//             </div>
//         </div>

//         <div class="col">
//             <div class="d-flex flex-row p-2">
//                 <div class="me-2 my-auto">From </div>
//                 <select class="form-select" name="selected_lane1[]">
//                     <!-- Options will be added dynamically using JavaScript -->
//                 </select>
//             </div>
//         </div>

//         <div class="col">
//             <div class="d-flex flex-row p-2">
//                 <div class="me-2 my-auto">To </div>
//                 <select class="form-select" name="selected_lane2[]">
//                     <!-- Options will be added dynamically using JavaScript -->
//                 </select>
//             </div>
//         </div>

//         <div class="col">
//             <div class=" d-flex flex-row p-2">
//                 <div class="my-auto me-2">ECRS.</div>
//                 <select class="form-select" name="selected_ECRS[]" ${isStart || isEnd ? 'disabled' : '' }>
//                     <option value="Eliminate">Eliminate</option>
//                     <option value="Combine">Combine</option>
//                     <option value="Rearrange">Rearrange</option>
//                     <option value="Simplify">Simplify</option>
//                     ${isStart || isEnd ? `<option value="Exist" ${isStart || isEnd ? 'selected' : '' }>Exist</option>` :
//                     ''}
//                 </select>
//             </div>
//         </div>
//         <div class="col">
//             <input type="number" class="form-control mx-2" name="After_manday[]" placeholder="Enter Your After Manday"
//                 ${isStart || isEnd ? 'value="0" disabled' : '' }>
//         </div>
//     </div>
//     <div class="d-flex flex-row decision_fields"></div>
// </div>