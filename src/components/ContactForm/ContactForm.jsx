import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { getContactsList } from 'components/redux/contacts/selectors';
import { useDispatch } from 'react-redux';
import { addContact } from 'components/redux/contacts/slice';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';

const ContactForm = ({ onSubmit }) => {
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');

  const contactsList = useSelector(getContactsList);
  const dispatch = useDispatch();

  const contactNameRef = useRef();
  const contactNumberRef = useRef();

  const saveContactHandler = event => {
    event.preventDefault();
    const contactName = contactNameRef.current.value;
    console.log(contactNameRef);
    const contactNumber = Number(contactNumberRef.current.value);
    dispatch(
      addContact({ name: contactName, number: contactNumber, id: nanoid() })
    );
  };
  // const onAdd = () => {
  //   console.log(name);
  //   dispatch(addContact({ name, number }));
  // };

  // const handleSubmit = event => {
  //   event.preventDefault();

  //   if (name !== '' && number !== '') {
  //     const newContact = { name, number };
  //     onSubmit(newContact);
  //   }
  //   reset();
  // };

  // const reset = () => {
  //   setName('');
  //   setNumber('');
  // };

  // const handleChange = event => {
  //   const { name, value } = event.target;
  //   if (name === 'name') {
  //     setName(value);
  //   } else if (name === 'number') {
  //     setNumber(value);
  //   }
  // };

  return (
    <form onSubmit={saveContactHandler}>
      <label className={css.label} htmlFor="name">
        Name:
      </label>
      <input
        ref={contactNameRef}
        className={css.input}
        // value={name}
        // onChange={handleChange}
        id="name"
        type="text"
        name="name"
        placeholder="name"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label className={css.label} htmlFor="tel">
        Number:
      </label>
      <input
        ref={contactNumberRef}
        className={css.input}
        // value={number}
        // onChange={handleChange}
        id="tel"
        type="tel"
        name="number"
        placeholder="number"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit" className={css.button} onClick={saveContactHandler}>
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
