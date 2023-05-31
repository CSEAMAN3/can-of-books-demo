import "./Reset.css";
import "./App.css";

import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import BookDetails from "./pages/BookDetails/BookDetails";

function App() {
  const [books, setBooks] = useState([]);
  const [newBookForm, setNewBookForm] = useState({
    title: "",
    description: "",
    status: true,
  });

  useEffect(() => {
    getBooks();
  }, []);

  async function getBooks() {
    const API = `http://localhost:8080/books`;
    const Res = await axios.get(API);
    setBooks(Res.data);
  }

  async function deleteBook(book) {
    const check = window.confirm(`Are you sure you want to delete ${book.title}`);
    if (!check) {
      return;
    }

    try {
      const API = `http://localhost:8080/books/${book._id}`;
      await axios.delete(API);
      getBooks();
    } catch (error) {
      console.log(error);
    }
  }

  async function addBook() {
    try {
      const API = `http://localhost:8080/books`;
      await axios.post(API, newBookForm);
      getBooks();
      setNewBookForm({
        title: "",
        description: "",
        status: true,
      });
    } catch (error) {
      console.log(error);
    }
  }

  function handleNewBookForm(event) {
    const { name, type, value, checked } = event.target;
    setNewBookForm({ ...newBookForm, [name]: type === "checked" ? checked : value });
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                books={books}
                deleteBook={deleteBook}
                addBook={addBook}
                newBookForm={newBookForm}
                handleNewBookForm={handleNewBookForm}
                getBooks={getBooks}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/book/:id" element={<BookDetails />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
