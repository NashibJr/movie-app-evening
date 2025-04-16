import React from "react";

const MultipleInputs = () => {
  const [state, setState] = React.useState({
    email: "",
    password: "",
    policies: true,
    gender: "",
    country: "Kenya",
    whyUs: "",
  });

  const handleChange = (event) => {
    setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const onChangePolicies = () => {
    setState((prevState) => ({ ...prevState, policies: !prevState.policies }));
  };

  const onChangeGender = (event) => {
    setState((prevState) => ({ ...prevState, gender: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state, "::::");
  };

  return (
    <form
      style={{ padding: 20, display: "flex", flexDirection: "column", gap: 1 }}
      onSubmit={handleSubmit}
    >
      <div>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={state.password}
          onChange={handleChange}
        />
      </div>
      <br />
      <label>
        <input
          type="checkbox"
          name="policies"
          value={state.policies}
          onChange={onChangePolicies}
          checked={state.policies}
        />{" "}
        Agree to terms and Policies
      </label>
      <br />
      <label>
        Gender: <br />{" "}
        <input
          type="radio"
          name="gender"
          value={"Male"}
          onChange={onChangeGender}
          checked={state.gender === "Male"}
        />{" "}
        Male{" "}
        <input
          type="radio"
          name="gender"
          value={"Female"}
          onChange={onChangeGender}
          checked={state.gender === "Female"}
        />{" "}
        Female{" "}
        <input
          type="radio"
          name="gender"
          value={"Prefer not to say"}
          onChange={onChangeGender}
          checked={state.gender === "Prefer not to say"}
        />{" "}
        Prefer not to say
      </label>
      <label>
        Country: <br />
        <select name="country" value={state.country} onChange={handleChange}>
          <option value={"Uganda"}>Uganda</option>
          <option value={"Kenya"}>Kenya</option>
          <option value={"Tanzania"}>Tanzania</option>
          <option value={"Rwanda"}>Rwanda</option>
        </select>
      </label>
      <label>
        Why choose us? <br />
        <textarea
          rows={5}
          name="whyUs"
          value={state.whyUs}
          onChange={handleChange}
        ></textarea>
      </label>
      <input type="submit" value={"Submit"} />
    </form>
  );
};

export default MultipleInputs;
