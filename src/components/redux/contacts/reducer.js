// import { addContact, deleteContact } from './actions';
// import { createReducer } from '@reduxjs/toolkit';
// const initialState =
// {
//   contacts:
// [
// { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
// { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
// { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
// { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];
//   filter: '',
//   name: '',
//   number: '',
// };

// export const addContactReducer = createReducer(initialState, {
//   [addContact]: (state, action) => [...state, action.payload],
// });
// export const deleteContactReducer = createReducer([], {
//   [deleteContact]: (state, action) =>
//     state.filter(({ id }) => id !== action.payload),
// });

// export const contactsReducer = (state = initialState, action) => {
//   switch (action.type) {

//     case 'contacts/add_contact':
//       console.log(action.payload);
//       return [...state, action.payload];
//     // (state, action) => {
//     //   state.contacts.push(action.payload);
//     // },

//     case 'contacts/delete_contact':
//       console.log(action.payload);
//       return state.filter(({ id }) => id !== action.payload);
//     // contacts: state.contacts.filter(
//     //   contact => contact.id !== action.payload
//     // ),

//     default:
//       return state;
//   }
// };
