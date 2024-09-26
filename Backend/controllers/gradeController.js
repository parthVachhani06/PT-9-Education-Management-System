const Grade = require('../models/Grade');

exports.assignGrade = async (req, res) => {
  try {
    const { courseId, studentId, grade } = req.body;
    const newGrade = new Grade({ courseId, studentId, grade });
    await newGrade.save();
    res.status(201).json(newGrade);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getGrades = async (req, res) => {
  try {
    const grades = await Grade.find({ courseId: req.params.courseId });
    res.json(grades);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
