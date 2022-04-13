import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

const ContactCard = ({ contact, clickHandler }) => {
  const { id, name, email } = contact;
  return (
    <div className="item" style={{ display: "block", padding: "10px" }}>
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <Link to={{ pathname: `/contact/${id}`, state: { contact: contact } }}>
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{
          color: "red",
          marginTop: "7px",
          marginLeft: "10px",
          float: "right",
        }}
        onClick={() => clickHandler(id)}
      ></i>
      <Link to={{ pathname: `/edit`, state: { contact: contact } }}>
        <i
          className="edit alternate outline icon"
          style={{ color: "blue", marginTop: "7px", float: "right" }}
        ></i>
      </Link>
    </div>
  );
};

export default ContactCard;
