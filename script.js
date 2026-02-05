//get html elements
const popUp = document.getElementById("registrationModal");
const studentNameInput = document.getElementById("studentName");
const studentIdInput = document.getElementById("studentId");
const studentTableBody = document.getElementById("studentTableBody");

//list of students
let students = [];

//functions
function toggleModal() {
  popUp.classList.toggle("hidden");
  popUp.classList.toggle("block");
}

//Register student
function registerStudent() {
  const name = studentNameInput.value.trim();
  const id = studentIdInput.value.trim();

  const newStudent = {
    id: id,
    name: name,
    status: "Absent",
    time: new Date().toLocaleString(),
  };

  students.push(newStudent);
  studentNameInput.value = "";
  studentIdInput.value = "";
  displayStudents();
  toggleModal();
}

//display students

function displayStudents() {
  studentTableBody.innerHTML = "";
  if (students.length === 0) {
    studentTableBody.innerHTML = `<tr>
                                     <td colspan="5" class="py-3 px-6 text-center">No students registered yet.</td>
                                  </tr>`;
  }

  function checkStatus(studentStatus) {
    if (studentStatus === "Absent") {
      return "bg-red-500";
    } else if (studentStatus === "Present") {
      return "bg-green-800";
    }
  }

  students.forEach((student) => {
    const row = document.createElement("tr");
    row.className =
      "text-black border-b border-black/20 hover:bg-gray-100 text-lg";
    row.innerHTML = `<td class="py-4 px-6 text-left border-r border-black/20">${student.id}</td>
                        <td class="py-4 px-6 text-left border-r border-black/20">${student.name}</td>
                        <td class="py-4 px-6 text-left border-r border-black/20">${student.status}</td>
                        <td class="py-4 px-6 text-left border-r border-black/20">${student.time}</td>
                        <td class=" flex items-center justify-center py-4">
                            <button onclick="toggleAttendance('${student.id}')" class="${checkStatus(student.status)} px-6 py-2 text-xs text-white font-bold rounded-xl" >Toggle</button>
                      </td>`;
    studentTableBody.appendChild(row);
  });
}

//change status

function toggleAttendance(id) {
  students.forEach((student) => {
    if (student.id === id) {
      student.status = student.status === "Absent" ? "Present" : "Absent";
      student.time = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    }
  });
  displayStudents();
}

displayStudents();
