const express = require('express');
const { assignGrade, getGrades } = require('../controllers/gradeController');
const { verifyToken, checkRole } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', verifyToken, checkRole(['Teacher']), assignGrade);
router.get('/:courseId', verifyToken, checkRole(['Student', 'Teacher']), getGrades);

module.exports = router;
