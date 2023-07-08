import PropTypes from 'prop-types';
import css from './FilterInput.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';
import { filterContact } from 'components/redux/contacts/slice';

const FilterInput = () => {
  const filteredList = useSelector(state => state.contacts.filter);
  const inputRef = useRef();
  const dispatch = useDispatch();
  const onChange = () => {
    const input = inputRef.current.value;
    dispatch(filterContact(input));
  };
  return (
    <label className={css.label}>
      Find contacts by name:
      <br />
      <input
        ref={inputRef}
        className={css.input}
        type="text"
        // value={value}
        onChange={onChange}
        placeholder="search..."
      />
    </label>
  );
};

export default FilterInput;

FilterInput.propTypes = {
  value: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};
