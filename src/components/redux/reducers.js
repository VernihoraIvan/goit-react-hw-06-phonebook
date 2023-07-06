import { combineReducers } from 'redux';
import { contactsReducer } from './contacts/reducer';

const appReducer = combineReducers({
  contacts: contactsReducer,
});

// export default (state, action) => {
//   return appReducer(state, action);
// };

export default appReducer;
