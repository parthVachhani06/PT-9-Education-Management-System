const Course = require('../models/Course');
const User = require('../models/User');

exports.createCourse = async (req, res) => {
  try {
    const { title, description, teacherId } = req.body;
    const course = new Course({ title, description, teacher: teacherId });
    await course.save();
    res.status(201).json(course);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.enrollStudent = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    const student = await User.findById(req.body.studentId);
    course.students.push(student);
    await course.save();
    res.status(200).json(course);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
