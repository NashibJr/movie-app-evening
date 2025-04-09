import React from "react";
import NavigationBar from "../navigation/NavigationBar";
import { useParams } from "react-router-dom";

const SingleBook = () => {
  const { id } = useParams();

  const [book, setBook] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      try {
        setBook(
          await (await fetch(`https://gutendex.com/books/${id}/`)).json()
        );
      } catch (error) {
        alert(error?.message);
      }
    })();
  }, [id]);

  return (
    <>
      <NavigationBar />
      <main>
        <h2>Book Details</h2>
        <div className="single-book">
          <img
            src={"/assets/images/book.webp"}
            height={200}
            width={100}
            alt="books"
          />
        </div>
        <h2>{book?.title}</h2>
        <p>[{book?.authors?.map((author) => author.name)}]</p>
        <ul>
          {book?.summaries?.map((summary) => (
            <li key={summary}>{summary}</li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default SingleBook;
