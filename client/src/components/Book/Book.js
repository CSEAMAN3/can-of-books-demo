import "./Book.css";

import { Link } from "react-router-dom";

export default function Book({ book, deleteBook }) {
  return (
    <div>
      <Link to={`/book/${book._id}`}>
        <h1 className="book-title">{book.title}</h1>
      </Link>
      <p className="book-description">{book.description}</p>
      {book.status ? <p className="book-status green">In Stock</p> : <p className="book-status red">Out of Stock</p>}
      <button className="book-button" onClick={() => deleteBook(book)}>
        Delete Book
      </button>
    </div>
  );
}
