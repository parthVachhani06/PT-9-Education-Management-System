const express = require('express');
const { createCourse, enrollStudent } = require('../controllers/courseController');
const { verifyToken, checkRole } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', verifyToken, checkRole(['Admin']), createCourse);
router.post('/:id/enroll', verifyToken, checkRole(['Admin', 'Student']), enrollStudent);

module.exports = router;
