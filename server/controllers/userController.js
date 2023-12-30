const User = require('../models/userModel.js');

const userController = {
  users: async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  signup: async (req, res) => {
    const { username, email, password } = req.body;
    const existUsername = await User.findOne({ username, email });
    if (existUsername) {
      return res.status(400).json({ message: 'Username already exists' });
    }
    const user = new User({ username: username, email: email, password: password });
    try {
      const token = generateToken(username);
      res.json({ token, user });
      await user.save();
      res.json({ message: 'User registered successfully' });
    } catch (err) {
      console.log(`this err: ${err}`);
    }
  },
  login: async (req, res) => {
    const { username, email, password } = req.body;
    const user = await User.findOne({ username, password });
    if (user) {
      const token = generateToken(username);
      res.json({ token, user });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  },
}

function generateToken(username) {
  const secretKey = 'rondom_website';
  return Buffer.from(`${username}:${secretKey}`).toString('base64');
}

module.exports = userController;