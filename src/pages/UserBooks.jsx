import React from "react";
import NavigationBar from "../navigation/NavigationBar";
import { useParams } from "react-router-dom";

const UserBooks = () => {
  const params = useParams();

  console.log(params, ":::");

  return (
    <>
      <NavigationBar />
      <main>
        <h2>Users books</h2>
      </main>
    </>
  );
};

export default UserBooks;
