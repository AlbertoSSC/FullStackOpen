import axios from "axios";

const getContactList = () => {
  const request = axios.get("http://localhost:3001/persons");
  return request.then((response) => response.data);
};

const addContact = (contact) => {
  const request = axios.post("http://localhost:3001/persons", contact);
  return request.then((response) => response.data);
};

const deleteContact = (id) => {
  const request = axios.delete(`http://localhost:3001/persons/${id}`);
  return request;
};

const updateContact = (id, contact) => {
  const request = axios.patch(`http://localhost:3001/persons/${id}`, contact);
  return request.then((response) => response.data);
};

export default { getContactList, addContact, deleteContact, updateContact };
