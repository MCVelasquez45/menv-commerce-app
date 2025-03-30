const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db'); // ✅ Only one import

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Start DB + Server
const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`🚀 Express server running at http://localhost:${PORT}`);
  });
};

startServer();

// Test Route
app.get('/', (req, res) => {
  res.send('MENV Commerce API is running...');
});

