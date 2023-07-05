import { useSelector } from 'react-redux';
import { getContactsFilter, getContactsList } from 'redux/selectors';
import { ContactListItem } from '../ContactListItem/ContactListItem'

export const ContactList = () => {
  const contacts = useSelector(getContactsList);
  const filter = useSelector(getContactsFilter);
  const visibleContacts = [
    ...contacts.filter(contact => contact.name.toLowerCase().includes(filter)),
  ];

  return (
    <ul>
      {visibleContacts.map(({ name, number, id }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};
