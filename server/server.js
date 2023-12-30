const express = require('express');
const cors = require('cors'); // Import the cors middleware
const app = express();
const connectDB = require('./config/db.js');
const authRoutes = require('./routes/authRoutes');
const PORT = 5000;

connectDB();

// Use the cors middleware with options
app.use(cors({ origin: '*' }));

app.use(express.json());
app.use('/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});