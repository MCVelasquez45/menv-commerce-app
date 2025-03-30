const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db'); 
const productRoutes = require('./routes/productRoute');


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
// Middleware
app.use(cors());
app.use(express.json());
app.use('/api/products', productRoutes);


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

