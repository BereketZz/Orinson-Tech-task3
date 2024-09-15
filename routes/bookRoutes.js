const express = require('express');
const { getAllBooks, getBookById, addBook, updateBook, deleteBook } = require('../controllers/bookController');

const router = express.Router();

// Book routes
router.get('/books', getAllBooks);        // Get all books
router.get('/books/:id', getBookById);    // Get book by ID
router.post('/books', addBook);           // Add a new book
router.put('/books/:id', updateBook);     // Update a book
router.delete('/books/:id', deleteBook);  // Delete a book

module.exports = router;
