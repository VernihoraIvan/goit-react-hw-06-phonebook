import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
  filterInput: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      //   return [...state, action.payload];
      state.contacts.push(action.payload);
    },

    deleteContact(state, action) {
      if (state.filter) {
        state.filter = state.filter.filter(
          contact => contact.id !== action.payload
        );
      }
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },

    filterContact(state, action) {
      //   return state.filter(contact => contact === action.payload);
      if (state.contacts) {
        state.filter = state.contacts.filter(({ name }) =>
          name.toLowerCase().includes(action.payload.toLowerCase())
        );
      }
      console.log(action);
      return state;
    },

    filterInputValue(state, action) {
      state.filterInput = action.payload;
    },
  },
});

// const filteredList = () => {
//   const filteredContacts = contacts.filter(({ name }) =>
//     name.toLowerCase().includes(filter.toLowerCase())
//   );
//   return filteredContacts;
// };

console.log(contactsSlice);

export const { addContact, deleteContact, filterContact, filterInputValue } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
