const Book = require("../models/Book");
const Joi = require('joi');


// Define the validation schema for books
const bookSchema = Joi.object({
    title: Joi.string().required().messages({
        'string.empty': 'Title is required',  // Custom error message if title is missing
    }),
    author: Joi.string().required().messages({
        'string.empty': 'Author is required', // Custom error message if author is missing
    }),
    year: Joi.number().integer().min(0).required().messages({
        'number.base': 'Year must be a number', 
        'any.required': 'Year is required',     
        'number.min': 'Year must be a positive number'  
    })
});

// Get all books
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: "Error fetching books" });
  }
};

// Get a specific book by ID
const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.status(200).json(book);
  } catch (error) {
    // Check if the error is caused by an invalid ObjectId
    if (error.kind === "ObjectId") {
      return res.status(400).json({ error: "Invalid Book ID format" });
    }
    res.status(500).json({ error: "Error fetching book" });
  }
};

// Add a new book
const addBook = async (req, res) => {
  try {
    // Validate request body using Joi schema
    const { error } = bookSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message }); // Return the validation error message
    }

    // Destructure title, author, and year from the request body
    const { title, author, year } = req.body;

    // Create a new book
    const newBook = new Book({ title, author, year });
    await newBook.save(); // Save the new book to the database

    // Send the created book as the response
    res.status(201).json(newBook);
  } catch (err) {
    res.status(500).json({ error: "Error creating the book" }); // Handle server errors
  }
};

// Update an existing book by ID
const updateBook = async (req, res) => {
  try {
    // Validate request body using Joi schema
    const { error } = bookSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message }); // Return the validation error message
    }

    // Find and update the book by ID
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!book) {
      return res.status(404).json({ error: "Book not found" }); // Handle case when book is not found
    }

    // Send the updated book as the response
    res.status(200).json(book);
  } catch (err) {
    // Check if the error is caused by an invalid ObjectId
    if (error.kind === "ObjectId") {
      return res.status(400).json({ error: "Invalid Book ID format" });
    }
    res.status(500).json({ error: "Error updating the book" }); // Handle server errors
  }
};

// Delete a book by ID
const deleteBook = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    // Check if the error is caused by an invalid ObjectId
    if (error.kind === "ObjectId") {
      return res.status(400).json({ error: "Invalid Book ID format" });
    }
    res.status(500).json({ error: "Error deleting book" });
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
};
