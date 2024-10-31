const mongoose = require('mongoose');
const Book = require('../models/Book');
require('dotenv').config();

const sampleBooks = [
  {
    title: "Test Book 1",
    author: "Author 1",
    description: "Description 1",
    price: 29.99,
    stock: 10,
    imageUrl: "https://via.placeholder.com/150"
  },
  {
    title: "Test Book 2",
    author: "Author 2",
    description: "Description 2",
    price: 19.99,
    stock: 5,
    imageUrl: "https://via.placeholder.com/150"
  }
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    await Book.deleteMany({}); // Clear existing books
    await Book.insertMany(sampleBooks);
    console.log('Database seeded!');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}

seedDatabase(); 