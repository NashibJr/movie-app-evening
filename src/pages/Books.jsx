import React from "react";
import NavigationBar from "../navigation/NavigationBar";
import Book from "../components/Book";

/**
 * - image
 * - title
 * - authors.
 * Single book page
 * - image
 * - title
 * - authors
 * - summary
 */

const Books = () => {
  const [books, setBooks] = React.useState([]);

  React.useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await (await fetch("https://gutendex.com/books/")).json();

        setBooks(data?.results);
      } catch (error) {
        alert(error?.message);
      }
    };

    fetchBooks();
  }, []);

  return (
    <>
      <NavigationBar />
      <main>
        <h2>Books</h2>
        <div className="posts">
          {books?.map((book) => (
            <Book
              key={book.id}
              image={book.formats["image/jpeg"]}
              title={book.title}
              authors={book.authors}
              id={book.id}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default Books;
