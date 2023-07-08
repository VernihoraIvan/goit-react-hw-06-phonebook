import PropTypes from 'prop-types';
import css from './FilterInput.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';
import {
  filterContact,
  filterInputValue,
} from 'components/redux/contacts/slice';
import { getFilter, getFilterInput } from 'components/redux/contacts/selectors';

const FilterInput = () => {
  const filteredList = useSelector(getFilter);
  const filteredInput = useSelector(getFilterInput);
  const inputRef = useRef();
  const dispatch = useDispatch();
  const handleOnChange = () => {
    const input = inputRef.current.value;
    dispatch(filterContact(input));
    dispatch(filterInputValue(input));
  };
  return (
    <label className={css.label}>
      Find contacts by name:
      <br />
      <input
        ref={inputRef}
        className={css.input}
        type="text"
        onChange={handleOnChange}
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
