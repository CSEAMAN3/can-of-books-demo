const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bp = require("body-parser");
require("dotenv").config();

const Book = require("./models/book");

const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors());
app.use(bp.json());

mongoose.connect(process.env.DATABASE_URL);

app.get("/", (request, response) => {
  return response.json("Ho, Ho, Ho, Merry Xmas! Ya filthy animal!");
});

// Get all the books
app.get("/books", async (request, response) => {
  try {
    const allBooks = await Book.find(request.query);
    return response.status(200).json(allBooks);
  } catch (error) {
    console.log(error);
    return response.status(500).json(error);
  }
});

// get a specific book using request.params
app.get("/books/:id", async (request, response) => {
  try {
    const theBook = await Book.find({ _id: request.params.id });
    return response.status(200).json(theBook);
  } catch (error) {
    console.log(error);
    return response.status(500).json(error);
  }
});

// post a new book to the database using request.body and the .create() mongoose method
app.post("/books", async (request, response) => {
  try {
    const newBook = await Book.create(request.body);
    return response.status(200).json(newBook);
  } catch (error) {
    console.log(error);
    return response.status(500).json(error);
  }
});

// edit a book in the database using request.params and request.body
app.put("/books/:id", async (request, response) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(request.params.id, request.body);
    return response.status(200).json(updatedBook);
  } catch (error) {
    console.log(error);
    return response.status(500).json(error);
  }
});

// delete a book from the database using request.params
app.delete("/books/:id", async (request, response) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(request.params.id);
    return response.status(200).json(deletedBook);
  } catch (error) {
    console.log(error);
    return response.status(500).json(error);
  }
});

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
