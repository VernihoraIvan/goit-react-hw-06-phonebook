import PropTypes from 'prop-types';
import css from './Contacts.module.css';
import { useSelector } from 'react-redux';
import {
  getContactsList,
  getFilter,
} from 'components/redux/contacts/selectors';
import { deleteContact } from 'components/redux/contacts/slice';
import { useDispatch } from 'react-redux';

const Contacts = () => {
  const contactsList = useSelector(getContactsList);
  const filteredContactsList = useSelector(getFilter);
  console.log(filteredContactsList);
  const dispatch = useDispatch();
  const contactListToRender = filteredContactsList
    ? filteredContactsList
    : contactsList;
  const onDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.list}>
      {contactListToRender?.map(({ id, name, number }) => (
        <li key={id} className={css.list_item}>
          {name}: {number}{' '}
          <button
            className={css.button}
            type="button"
            onClick={() => onDelete(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Contacts;

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
