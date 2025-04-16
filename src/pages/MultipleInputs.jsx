import React from "react";

const MultipleInputs = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const values = formData.entries();
    const myValues = Object.fromEntries([...values]);
    console.log(myValues);
  };

  return (
    <form
      style={{ padding: 20, display: "flex", flexDirection: "column", gap: 1 }}
      onSubmit={handleSubmit}
    >
      <div>
        <input type="email" placeholder="Email" name="email" />
        <input type="password" placeholder="Password" name="password" />
      </div>
      <br />
      <label>
        <input type="checkbox" name="policies" /> Agree to terms and Policies
      </label>
      <br />
      <label>
        Gender: <br /> <input type="radio" name="gender" value={"Male"} /> Male{" "}
        <input type="radio" name="gender" value={"Female"} /> Female{" "}
        <input type="radio" name="gender" value={"Prefer not to say"} /> Prefer
        not to say
      </label>
      <label>
        Country: <br />
        <select name="country">
          <option value={"Uganda"}>Uganda</option>
          <option value={"Kenya"}>Kenya</option>
          <option value={"Tanzania"}>Tanzania</option>
          <option value={"Rwanda"}>Rwanda</option>
        </select>
      </label>
      <label>
        Why choose us? <br />
        <textarea rows={5} name="whyUs"></textarea>
      </label>
      <input type="submit" value={"Submit"} />
    </form>
  );
};

export default MultipleInputs;
