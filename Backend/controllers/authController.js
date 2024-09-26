
const jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt');
const User = require('../models/User'); // Make sure you have the correct model

exports.signup = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    // Validate that all required fields are provided
    if (!username || !email || !password) {
      return res.status(400).json({ error: 'Username, email, and password are required' });
    }

    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email is already in use' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance
    const user = new User({
      username,
      email,
      password: hashedPassword,
      role // If role is optional, you can set a default value in the schema
    });

    // Save the user to the database
    await user.save();

    // Respond with success
    res.status(201).json({ message: 'User created successfully' });
    
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Invalid password' });

    const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
