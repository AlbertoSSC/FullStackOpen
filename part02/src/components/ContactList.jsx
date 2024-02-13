export const ContacList = ({ persons, showFilteredPersons }) => {
  return (
    <>
      {showFilteredPersons.length === 0 ? (
        <table>
          <tbody>
            {persons.map((person) => (
              <tr key={person.name}>
                <td>{person.name}</td>
                <td>{person.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <table>
          <tbody>
            {showFilteredPersons.map((person) => (
              <tr key={person.name}>
                <td>{person.name}</td>
                <td>{person.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
