const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DATABASE_URL);

const Book = require("./models/book");

async function seed() {
  await Book.create({
    title: "My Teacher is an Alien",
    description: "The story of a Teacher who is an Alien",
    status: true,
  });
  await Book.create({
    title: "The Simpsons",
    description: "A book about Homer, Marge, Bart, Lisa and Maggie",
    status: true,
  });
  console.log("Wohooo we created some books in our database");
  mongoose.disconnect();
}

seed();
