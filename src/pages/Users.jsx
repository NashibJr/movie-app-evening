import React from "react";
import NavigationBar from "../navigation/NavigationBar";
import { Outlet, useLocation } from "react-router-dom";
import User from "../components/User";

const Users = () => {
  const pathname = useLocation().pathname;

  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();

        setUsers(data);
      } catch (error) {
        console.log(error);
        setUsers([]);
      }
    })();
  }, []);

  return (
    <>
      {pathname === "/users" ? (
        <>
          <NavigationBar />
          <main>
            <h2>Users</h2>
            <div className="posts">
              {users?.map((user) => (
                <User
                  key={user.id}
                  name={user.name}
                  email={user.email}
                  id={user.id}
                />
              ))}
            </div>
          </main>
        </>
      ) : null}
      <Outlet />
    </>
  );
};

export default Users;
