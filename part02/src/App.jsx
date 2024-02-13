import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleInputChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNewName = (event) => {
    event.preventDefault();

    const nameObject = {
      name: newName,
    };

    for (const person of persons) {
      if (person.name === nameObject.name) {
        return alert(`// ${nameObject.name} // is already added to phonebook`);
      }
    }

    setPersons(persons.concat(nameObject));
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleInputChange} />
        </div>
        <div>
          <button type="submit" onClick={handleNewName}>
            add
          </button>
        </div>
      </form>

      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
