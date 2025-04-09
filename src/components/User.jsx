import React from "react";
import { useNavigate } from "react-router-dom";

const User = ({ name, email, id }) => {
  const navigate = useNavigate(); // lets us programatically route users to different pages.
  const navigateToUserPosts = () => {
    navigate(`/users/posts/${id}`);
  };

  return (
    <div className="user" onClick={navigateToUserPosts}>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default User;
