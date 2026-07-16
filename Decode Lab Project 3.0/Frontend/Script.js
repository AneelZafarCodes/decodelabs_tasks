// ==========================================
// Student Management System (CRUD)
// ==========================================

// Backend API URL
const API_URL = "http://localhost:5000/api/students";

// HTML Elements
const studentForm = document.getElementById("studentForm");
const studentTable = document.getElementById("studentTable");
const submitBtn = document.getElementById("submitBtn");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");
const courseInput = document.getElementById("course");
const searchInput = document.getElementById("search");

// Edit Student ID
let editId = null;

// ==========================================
// Load Students
// ==========================================

window.addEventListener("DOMContentLoaded", loadStudents);

// ==========================================
// Get All Students
// ==========================================

async function loadStudents() {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Failed to load students.");
        }

        const students = await response.json();

        displayStudents(students);

    } catch (error) {
        console.error(error);
        alert("Unable to load students.");
    }
}

// ==========================================
// Display Students
// ==========================================

function displayStudents(students) {

    studentTable.innerHTML = "";

    if (students.length === 0) {
        studentTable.innerHTML = `
        <tr>
            <td colspan="6">No Students Found</td>
        </tr>`;
        return;
    }

    students.forEach(student => {

        studentTable.innerHTML += `
        <tr>
            <td>${student._id}</td>
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.age}</td>
            <td>${student.course}</td>
            <td>

                <button class="edit-btn"
                onclick="editStudent(
                '${student._id}',
                '${student.name}',
                '${student.email}',
                '${student.age}',
                '${student.course}')">

                Edit
                </button>

                <button class="delete-btn"
                onclick="deleteStudent('${student._id}')">

                Delete
                </button>

            </td>
        </tr>`;
    });

}

// ==========================================
// Add / Update Student
// ==========================================

studentForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const student = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        age: Number(ageInput.value),
        course: courseInput.value.trim()
    };

    try {

        if (editId === null) {

            const response = await fetch(API_URL, {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(student)

            });

            if (!response.ok) {
                throw new Error("Failed to add student.");
            }

            alert("Student Added Successfully!");

        } else {

            const response = await fetch(`${API_URL}/${editId}`, {

                method: "PUT",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(student)

            });

            if (!response.ok) {
                throw new Error("Failed to update student.");
            }

            alert("Student Updated Successfully!");

            editId = null;

            submitBtn.textContent = "Add Student";
        }

        studentForm.reset();

        loadStudents();

    } catch (error) {

        console.error(error);

        alert(error.message);

    }

});

// ==========================================
// Edit Student
// ==========================================

function editStudent(id, name, email, age, course) {

    editId = id;

    nameInput.value = name;
    emailInput.value = email;
    ageInput.value = age;
    courseInput.value = course;

    submitBtn.textContent = "Update Student";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

// ==========================================
// Delete Student
// ==========================================

async function deleteStudent(id) {

    if (!confirm("Delete this student?")) return;

    try {

        const response = await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        });

        if (!response.ok) {
            throw new Error("Failed to delete student.");
        }

        alert("Student Deleted Successfully!");

        loadStudents();

    } catch (error) {

        console.error(error);

        alert(error.message);

    }

}

// ==========================================
// Search Student
// ==========================================

searchInput.addEventListener("keyup", async () => {

    try {

        const response = await fetch(API_URL);

        const students = await response.json();

        const keyword = searchInput.value.toLowerCase();

        const filtered = students.filter(student =>
            student.name.toLowerCase().includes(keyword) ||
            student.email.toLowerCase().includes(keyword) ||
            student.course.toLowerCase().includes(keyword)
        );

        displayStudents(filtered);

    } catch (error) {

        console.error(error);

    }

});