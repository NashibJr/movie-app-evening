import React from "react";
import NavigationBar from "../navigation/NavigationBar";
import { useParams } from "react-router-dom";
import Post from "../components/Post";

// get the posts
// filter the user's posts.

const UsersPosts = () => {
  const { userId } = useParams();

  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();

        setPosts(() =>
          !Array.isArray(data)
            ? []
            : data?.filter((post) => post.userId.toString() === userId)
        );
      } catch (error) {
        alert(error?.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [userId]);

  return (
    <>
      <NavigationBar />
      <main>
        <h2>User posts</h2>
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <div className="posts">
            {posts.length === 0 ? (
              <h2>No posts for this user</h2>
            ) : (
              posts?.flatMap((post) => [
                <Post key={post.id} title={post.title} body={post.body} />,
              ])
            )}
          </div>
        )}
      </main>
    </>
  );
};

export default UsersPosts;
