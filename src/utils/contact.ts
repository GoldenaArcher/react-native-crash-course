import { contacts, User } from "../data/data";
import { capitializeFirstLetter } from "./string";

export const getContactById = (id: string) => {
  return contacts.find((contact) => String(contact.id) === id);
};

export const getContactFullName = (user: User) => {
  const {
    name: { first: firstName, last: lastName },
  } = user;
  
  return `${capitializeFirstLetter(firstName)} ${capitializeFirstLetter(
    lastName
  )}`;
};
