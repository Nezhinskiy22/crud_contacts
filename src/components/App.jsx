import ContactList from "./ContactList";
import AddContact from "./AddContact";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Header from "./Header";
import { useState, useEffect } from "react";
function App() {
  const [contacts, setContacts] = useState([]);

  const LOCAL_STORAGE_KEY = "contacts";

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  const addContactHandler = (name, email) =>
    setContacts([...contacts, { id: uuidv4(), name: name, email: email }]);

  useEffect(() => {
    const retrieveContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (retrieveContacts) setContacts(retrieveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    console.log(contacts);
  }, [contacts]);

  return (
    <div className="ui container ">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
    </div>
  );
}

export default App;
