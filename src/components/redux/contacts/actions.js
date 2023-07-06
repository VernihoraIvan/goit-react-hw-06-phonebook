import { delete_contact } from './types';
import { add_contact } from './types';

export const deleteContact = contactId => ({
  type: delete_contact,
  payload: contactId,
});

export const addContact = contacts => ({
  type: add_contact,
  payload: contacts,
});
