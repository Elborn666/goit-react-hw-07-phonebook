import { useDispatch, useSelector } from 'react-redux';
import { setContactsFilter } from 'redux/filtersSlice';
import { getContactsFilter } from 'redux/selectors';
import { Input } from './Filter.styled'

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getContactsFilter);

  const handleFilterChange = ({ currentTarget: { value } }) => {
    const normalizedValue = value.toLowerCase().trim();
    dispatch(setContactsFilter(normalizedValue));
  };

  return (
    <Input
      type="text"
      name="filter"
      placeholder="Search by name"
      value={filter}
      onChange={handleFilterChange}
    />
  );
}