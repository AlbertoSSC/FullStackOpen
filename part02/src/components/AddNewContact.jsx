export const AddNewContactForm = ({
  newName,
  newPhone,
  handleNameInput,
  handlePhoneInput,
  handleNewName,
}) => {
  return (
    <form>
      <div>
        name: <input value={newName} onChange={handleNameInput} />
      </div>
      <div>
        phone: <input value={newPhone} onChange={handlePhoneInput} />
      </div>
      <div>
        <button type="submit" onClick={handleNewName}>
          add
        </button>
      </div>
    </form>
  );
};
