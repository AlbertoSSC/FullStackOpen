import { useState } from "react";
import { FilterList } from "./components/FilterList";
import { AddNewContactForm } from "./components/AddNewContact";
import { ContacList } from "./components/ContactList";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: "040-123456", id: 1 },
    { name: "Ada Lovelace", phone: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", phone: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", phone: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [showFilteredPersons, setShowFilteredPersons] = useState([]);

  const handleNameInput = (event) => {
    setNewName(event.target.value);
  };

  const handlePhoneInput = (event) => {
    setNewPhone(event.target.value);
  };

  const handleNewName = (event) => {
    event.preventDefault();

    const nameObject = {
      name: newName,
      phone: newPhone,
    };

    for (const person of persons) {
      if (person.name === nameObject.name) {
        return alert(`// ${nameObject.name} // is already added to phonebook`);
      }
    }

    setPersons(persons.concat(nameObject));
  };

  const handleFilter = (event) => {
    const filterValue = event.target.value;
    const filteredPersons = persons.filter((person) =>
      person.name.toLowerCase().includes(filterValue.toLowerCase())
    );
    setShowFilteredPersons(filteredPersons);
  };

  return (
    <div>
      <h1>Phonebook</h1>

      <FilterList handleFilter={handleFilter} />

      <h2>Add new</h2>
      <AddNewContactForm
        handleNewName={handleNewName}
        newName={newName}
        newPhone={newPhone}
        handleNameInput={handleNameInput}
        handlePhoneInput={handlePhoneInput}
      />

      <h2>Contacts</h2>
      <ContacList persons={persons} showFilteredPersons={showFilteredPersons} />
    </div>
  );
};

export default App;
