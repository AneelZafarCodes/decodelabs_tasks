const express = require("express");
const router = express.Router();

const {
    getStudents,
    addStudent,
    updateStudent,
    deleteStudent
} = require("../controllers/studentController");

// ===============================
// GET All Students
// URL: /students
// ===============================
router.get("/", getStudents);

// ===============================
// POST Add New Student
// URL: /students
// ===============================
router.post("/", addStudent);

// ===============================
// PUT Update Student
// URL: /students/:id
// ===============================
router.put("/:id", updateStudent);

// ===============================
// DELETE Student
// URL: /students/:id
// ===============================
router.delete("/:id", deleteStudent);

module.exports = router;