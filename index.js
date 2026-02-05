// Get html elements
const popUp = document.getElementById("registrationModal");
const studentNameInput = document.getElementById("studentName");
const studentIdInput = document.getElementById("studentId");
const studentTableBody = document.getElementById("studentTableBody");


// lists of student
let students = []


// functions
function toggleModal() {
popUp.classList.toggle("hidden")
popUp.classList.toggle("block");
}


function registerStudent() {
    const name = studentNameInput.ValueM.trim()
    const id = studentIdInput.Value.trim()

   