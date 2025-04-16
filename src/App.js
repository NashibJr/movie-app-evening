import React from "react";
import { Route, Routes } from "react-router-dom";
import Users from "./pages/Users";
import Movies from "./pages/Movies";
import Books from "./pages/Books";
import UsersPosts from "./pages/UsersPosts";
import SingleBook from "./pages/SingleBook";
import Forms from "./pages/Forms";

/**
 * React Router DOM (RRD) => Is a library that handles routing in react applications.
 * Features.
 *  - Routes are defined using components
 *      => <Route path="home" element={<Home />} />
 *  - Allows dynamic routes.
 *      => <Route path="users/:id" element={<SingleUser />} /> =>useParams()
 *  - Creates a hierachical routes. => Allows nested routes
 *  - Allows protected routes.
 *  - Allows developers to programatically route users to different routes. => useNavigate()
 */

/**
 * TODO
 * - We're gonna create a navigation with users, posts, movies, books.
 * - We're gonna to have the different pages for the users, posts, movies and the books.
 * - We're also gonna have the single movie and single post pages.
 *
 * CONCEPTS.
 *  - Congiguring routes. => To configure routes, we define the Route component in the
 *  Routes component.
 *  - Nest Routes => Routes in Routes
 *  - Dynamic Segments/routes => Routes that change.
 *  - Route prefixes. => users/all, users/profile. posts/all, posts/users.
 */

// https://api.sampleapis.com/movies/horror
// https://jsonplaceholder.typicode.com/posts
// https://gutendex.com/books/

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Forms />} />
        {/* The users books is gonna be a nested route in the users route */}
        <Route path="users" element={<Users />}>
          {/* The UsersPosts page is at /users/posts */}
          <Route path="posts/:userId" element={<UsersPosts />} />
        </Route>
        <Route path="books" element={<Books />} />
        <Route path="books/:id" element={<SingleBook />} />
      </Routes>
    </>
  );
}

export default App;
