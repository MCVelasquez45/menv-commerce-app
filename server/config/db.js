const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('../models/productModel');
const products = require('../seed/products');

dotenv.config();
console.log(`🧪 SEED mode is: ${process.env.SEED}`);

const connectDB = async () => {
  try {
    console.log('🔌 Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB connected');

    if (process.env.SEED === 'true') {
      console.log('🌱 Seeding product data...');
      await Product.deleteMany();
      const inserted = await Product.insertMany(products);
      console.log(`✅ ${inserted.length} products seeded successfully!`);
      inserted.forEach(p => console.log(`🧾 ${p.name}`));
    }

  } catch (err) {
    console.error('❌ MongoDB connection or seeding error:', err);
    process.exit(1);
  }
};

module.exports = connectDB;

