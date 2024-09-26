const mongoose = require('mongoose');

const GradeSchema = new mongoose.Schema({
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  grade: String
});

module.exports = mongoose.model('Grade', GradeSchema);
