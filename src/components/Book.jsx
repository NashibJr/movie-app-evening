import React from "react";
import { useNavigate } from "react-router-dom";

const Book = ({ image, title, authors, id }) => {
  const navigate = useNavigate();

  return (
    <div className="book user" onClick={() => navigate(`/books/${id}`)}>
      <img
        src={"/assets/images/book.webp"}
        height={200}
        width={100}
        alt="books"
      />
      <div>
        <h2>{title}</h2>
        <p>[{authors?.map((author) => author.name)}]</p>
      </div>
    </div>
  );
};

export default Book;
