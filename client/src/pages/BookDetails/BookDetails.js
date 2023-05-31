import { useState, useEffect } from "react";
import "./BookDetails.css";

import axios from "axios";
import { useParams, Link } from "react-router-dom";

export default function BookDetails() {
  const [book, setBook] = useState({});
  const [form, setForm] = useState({
    title: "",
    description: "",
    status: true,
  });

  const { id } = useParams();

  useEffect(() => {
    getBook();
  }, []);

  async function getBook() {
    try {
      const API = `http://localhost:8080/books?_id=${id}`;
      const res = await axios.get(API);
      setBook(res.data[0]);
      setForm(res.data[0]);
    } catch (error) {
      console.log(error);
    }
  }

  async function updateBook(event) {
    event.preventDefault();
    try {
      const API = `http://localhost:8080/books/${id}`;
      await axios.put(API, form);
      getBook();
    } catch (error) {
      console.log(error);
    }
  }

  function handleForm(event) {
    const { name, type, value, checked } = event.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  }

  return (
    <div className="container the-book-container">
      <h1 className="book-title green">{book.title}</h1>
      <p>{book.description}</p>
      {book.status ? <p className="green">In Stock</p> : <p className="red">Out of Stock</p>}
      <Link to="/">&#8629; Back to book collection</Link>

      <form onSubmit={updateBook}>
        <fieldset>
          <legend>Edit Book Details</legend>
          <label htmlFor="input-title">
            Book Title
            <input onChange={handleForm} id="input-title" type="text" name="title" value={form.title} />
          </label>
          <label htmlFor="input-description">
            Book Description
            <textarea
              className="textarea"
              onChange={handleForm}
              id="input-description"
              name="description"
              value={form.description}
            />
          </label>
          <label htmlFor="input-status">
            Book In Stock
            <input onChange={handleForm} id="input-status" type="checkbox" name="status" checked={form.status} />
          </label>
          <button>Update Book</button>
        </fieldset>
      </form>
    </div>
  );
}
