import PropTypes from 'prop-types';
import css from './Contacts.module.css';
import { useSelector } from 'react-redux';
import { getContactsList } from 'components/redux/products/selectors';
import { deleteContact } from 'components/redux/products/actions';
import { useDispatch } from 'react-redux';

const Contacts = ({ contacts, onDeleteContact }) => {
  useSelector(state => console.log(state));
  const contactsList = useSelector(getContactsList);
  console.log(contactsList);

  const dispatch = useDispatch();

  const onDelete = id => {
    console.log(id);
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
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
