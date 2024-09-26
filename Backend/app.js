const express = require('express');
const authRoutes = require('./routes/authRoutes');
const courseRoutes = require('./routes/courseRoutes');
const gradeRoutes = require('./routes/gradeRoutes');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();

connectDB();


app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/grades', gradeRoutes);

module.exports = app;
