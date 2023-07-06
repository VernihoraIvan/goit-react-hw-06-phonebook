import PropTypes from 'prop-types';
import css from './Contacts.module.css';
import { useSelector } from 'react-redux';
import { getContactsList } from 'components/redux/contacts/selectors';
import { deleteContact } from 'components/redux/contacts/actions';
import { useDispatch } from 'react-redux';

const Contacts = () => {
  useSelector(state => console.log(state));
  const contactsList = useSelector(getContactsList);
  console.log(contactsList.contacts);

  const dispatch = useDispatch();

  const onDelete = id => {
    console.log(id);
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.list}>
      {contactsList.contacts?.map(({ id, name, number }) => (
        <li key={id} className={css.list_item}>
          {name}: {number}{' '}
          <button
            className={css.button}
            type="button"
            // onClick={() => onDeleteContact(id)}
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
