import React from "react";
import user from "../images/user.png";

const ContactCard = ({ contact, clickHandler }) => {
  const { id, name, email } = contact;
  return (
    <div className="item" style={{ display: "block", padding: "10px" }}>
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", float: "right" }}
        onClick={() => clickHandler(id)}
      ></i>
    </div>
  );
};

export default ContactCard;
