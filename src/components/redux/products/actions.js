import { delete_contact } from './types';
export const deleteContact = contactId => ({
  type: delete_contact,
  payload: contactId,
});

// const deleteContact = contactId => {
//   setContacts(state => state.filter(contact => contact.id !== contactId));
// };
