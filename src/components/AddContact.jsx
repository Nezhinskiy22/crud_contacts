import React, { useState } from "react";

const AddContact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { addContactHandler } = props;

  const add = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("All the fields are mandatory!");
      return;
    } else {
      addContactHandler(name, email);
      setName("");
      setEmail("");
      props.history.push("/");
      console.log(props);
    }
  };

  return (
    <div className="ui main" style={{ marginTop: "40px" }}>
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="ui button blue">Add</button>
      </form>
    </div>
  );
};

export default AddContact;
