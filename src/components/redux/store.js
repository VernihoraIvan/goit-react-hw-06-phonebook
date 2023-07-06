import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import appReducers from './reducers';

const enhancer = devToolsEnhancer();
export const store = createStore(appReducers, enhancer);

// import { deleteContact } from './contacts/actions';
// import { addContact } from './contacts/actions';
// const initialState = {
//   contacts: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   filter: '',
//   name: '',
//   number: '',
// };

// const rootReducer = (state = initialState, action) => {
//   console.log(action.payload);
//   switch (action.type) {
//     case deleteContact:
//       return {
//         contacts: state.contacts.filter(
//           contact => contact.id !== action.payload
//         ),
//       };
//     case addContact:
//       return {
//         ...state,
//       };
//     default:
//       return state;
//   }
// };
