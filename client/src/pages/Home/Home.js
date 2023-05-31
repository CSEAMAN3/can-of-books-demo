import "./Home.css";

import Book from "../../components/Book/Book";

export default function Home({ books, deleteBook, addBook, newBookForm, handleNewBookForm, getBooks }) {
  return (
    <main>
      <div className="home-main-container container">
        <div className="form-container">
          <form onSubmit={addBook}>
            <fieldset>
              <legend>Add a book to the collection</legend>
              <label htmlFor="new-book-title">
                Book Title
                <input id="new-book-title" type="text" onChange={handleNewBookForm} name="title" value={newBookForm.title} />
              </label>
              <label htmlFor="new-book-description">
                Book Description
                <textarea
                  id="new-book-description"
                  onChange={handleNewBookForm}
                  name="description"
                  value={newBookForm.description}
                />
              </label>
              <label htmlFor="new-book-status">
                Book Available in Stock
                <input
                  id="new-book-status"
                  type="checkbox"
                  onChange={handleNewBookForm}
                  checked={newBookForm.status}
                  name="status"
                />
                <button className="newBookButton">Add book to the collection</button>
              </label>
            </fieldset>
          </form>
        </div>
        <h2 className="books-heading">Book Collection</h2>
        <button onClick={getBooks}>Refresh Collection</button>
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
