const Student = require("../models/Student");

// ===============================
// Get All Students
// ===============================
const getStudents = async (req, res) => {
    try {
        const students = await Student.find().sort({ createdAt: -1 });

        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch students",
            error: error.message
        });
    }
};

// ===============================
// Add New Student
// ===============================
const addStudent = async (req, res) => {
    try {
        const { name, email, age, course } = req.body;

        // Check required fields
        if (!name || !email || !age || !course) {
            return res.status(400).json({
                success: false,
                message: "All fields are required."
            });
        }

        // Check duplicate email
        const existingStudent = await Student.findOne({ email });

        if (existingStudent) {
            return res.status(400).json({
                success: false,
                message: "Email already exists."
            });
        }

        const student = await Student.create({
            name,
            email,
            age,
            course
        });

        res.status(201).json({
            success: true,
            message: "Student added successfully.",
            student
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Unable to add student.",
            error: error.message
        });

    }
};

// ===============================
// Update Student
// ===============================
const updateStudent = async (req, res) => {

    try {

        const student = await Student.findByIdAndUpdate(

            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }

        );

        if (!student) {

            return res.status(404).json({

                success: false,
                message: "Student not found."

            });

        }

        res.status(200).json({

            success: true,
            message: "Student updated successfully.",
            student

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,
            message: "Unable to update student.",
            error: error.message

        });

    }

};

// ===============================
// Delete Student
// ===============================
const deleteStudent = async (req, res) => {

    try {

        const student = await Student.findByIdAndDelete(req.params.id);

        if (!student) {

            return res.status(404).json({

                success: false,
                message: "Student not found."

            });

        }

        res.status(200).json({

            success: true,
            message: "Student deleted successfully."

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,
            message: "Unable to delete student.",
            error: error.message

        });

    }

};

// Export All Controllers
module.exports = {
    getStudents,
    addStudent,
    updateStudent,
    deleteStudent
};