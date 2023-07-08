import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },

    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },

    filterContact(state, action) {
      state.contacts = state.contacts.filter(({ name }) =>
        name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
});

console.log(contactsSlice);

export const { addContact, deleteContact, filterContact } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
