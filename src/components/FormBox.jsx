import React, { useState } from "react";
import Card from "./Card";

const FormBox = (props) => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");

  const addUser = (e) => {
    e.preventDefault();
    if (
      name.trim().length == 0 ||
      city.trim().length == 0 ||
      email.trim().length == 0
    ) {
      confirm("Please fill a valid input for all inputs.");
    } else {
      const userInfo = {
        name,
        city,
        email,
      };
      props.getUserInfo(userInfo);

      setName("");
      setCity("");
      setEmail("");
    }
  };
  return (
    <Card>
      <form onSubmit={addUser}>
        <div className="form-div">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="btn">
          Add User
        </button>
      </form>
    </Card>
  );
};

export default FormBox;
