const mongoose = require('mongoose');

// Define the Book schema
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Book title is required"]
    },
    author: {
        type: String,
        required: [true, "Author is required"]
    },
    year: {
        type: Number,
        required: [true, "Publication year is required"]
    }
}, {
    timestamps: true // Automatically add createdAt and updatedAt fields
});

// Create and export the Book model
const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
