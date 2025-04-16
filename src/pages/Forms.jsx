import React from "react";

/**
 * They are a way we can collect data from the user.
 *  -=> Text
 *  -=> Choice -> radio, checkbox, select.
 *  -=> Note -> Text area
 *
 * ** We can handle forms in react using Controlled or uncontrolled components
 *
 * controlled components. => An input's value is controlled by the react state
 */

const Forms = () => {
  const [person, setPerson] = React.useState({
    fullName: "",
    email: "",
    password: "",
    age: 0,
  });

  const handleChange = (event) => {
    setPerson((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(Object.entries(person), ">>>>");
  };

  return (
    <form style={{ padding: 20 }} onSubmit={handleSubmit}>
      <h2>React forms</h2>
      <input
        type="text"
        placeholder="Enter fullname"
        name="fullName"
        value={person.fullName}
        onChange={handleChange}
      />
      <input
        type="email"
        placeholder="Enter Email"
        name="email"
        value={person.email}
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Enter Password"
        name="password"
        value={person.password}
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Enter Age"
        name="age"
        value={person.age}
        onChange={handleChange}
      />
      <input type="submit" value="submit" />
    </form>
  );
};

export default Forms;
