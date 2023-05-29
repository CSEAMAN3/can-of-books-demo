import { useState, useEffect } from "react";
import "./BookDetails.css";

import axios from "axios";
import { useParams, Link } from "react-router-dom";

export default function BookDetails() {
  const [book, setBook] = useState({});

  const { id } = useParams();

  useEffect(() => {
    getBook();
  }, []);

  async function getBook() {
    try {
      const API = `http://localhost:8080/books?_id=${id}`;
      const res = await axios.get(API);
      setBook(res.data[0]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>{book.title}</h1>
      <p>{book.description}</p>
      {book.status ? <p>In Stock</p> : <p>Out of Stock</p>}
      <Link to="/">&#8629; Back to book collection</Link>
    </div>
  );
}
