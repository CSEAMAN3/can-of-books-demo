import "./Home.css";

import Book from "../../components/Book/Book";

export default function Home({ books, deleteBook }) {
  return (
    <main>
      <div className="home-main-container container">
        <h2 className="books-heading">Book Collection</h2>
        {books.map((book) => {
          return (
            <div className="book-container" key={book._id}>
              <Book book={book} deleteBook={deleteBook} />
            </div>
          );
        })}
      </div>
    </main>
  );
}
