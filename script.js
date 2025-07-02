const form = document.getElementById('studentForm');
const tableBody = document.querySelector('#studentTable tbody');

// यह global variable याद रखेगा कि कौन सी row edit हो रही है
let editingRow = null;

form.addEventListener('submit', function (e) {
    e.preventDefault(); // page reload नहीं होगा

    // Input values निकालना
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const father = document.getElementById('father').value;
    const joining = document.getElementById('joining').value;
    const course = document.getElementById('course').value;
    const branch = document.getElementById('branch').value;
    const batch = document.getElementById('batch').value;

    // अगर edit चल रहा है, तो existing row update करो
    if (editingRow) {
        editingRow.cells[0].innerText = name;
        editingRow.cells[1].innerText = phone;
        editingRow.cells[2].innerText = father;
        editingRow.cells[3].innerText = joining;
        editingRow.cells[4].innerText = course;
        editingRow.cells[5].innerText = branch;
        editingRow.cells[6].innerText = batch;

        editingRow = null; // Editing end.
    } else {

        //new row banoa
        const row = document.createElement('tr');

        row.innerHTML = `
       <td>${name}</td>
       <td>${phone}</td>
       <td>${father}</td>
       <td>${joining}</td>
       <td>${course}</td>
       <td>${branch}</td>
       <td>${batch}</td>
       <td>
          <button class=edit onclick="editStudent(this)">Edit</button>
          <button class="delete" onclick="deleteStudent(this)">Delete</button>
       </td>
    `;

        tableBody.appendChild(row)
    }
    form.reset();
});


// Delete function
function deleteStudent(button) {
    const row = button.parentElement.parentElement;
    if (confirm("Are you sure you want to delete this student?")) {
        row.remove();
    }
}

// Edit function
function editStudent(button) {
    editingRow = button.parentElement.parentElement;

     // values वापस form में भरो
    document.getElementById('name').value = editingRow.cells[0].innerText;
    document.getElementById('phone').value = editingRow.cells[1].innerText;
    document.getElementById('father').value = editingRow.cells[2].innerText;
    document.getElementById('joining').value = editingRow.cells[3].innerText;
    document.getElementById('course').value = editingRow.cells[4].innerText;
    document.getElementById('branch').value = editingRow.cells[5].innerText;
    document.getElementById('batch').value = editingRow.cells[6].innerText;
}