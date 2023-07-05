import { useSelector, useDispatch } from 'react-redux';
import Notiflix from 'notiflix';
import { getContactsList } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';
import { Form, Input, Button, Text } from './ContactForm.styled';

export const ContactForm = () => {

  const dispatch = useDispatch();
  const contacts = useSelector(getContactsList);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formName = e.target.elements.name.value;
    const formNumber = e.target.elements.number.value;


    if (contacts.some(({ name }) => name === formName)) {
      Notiflix.Report.warning(
        'Alert',
        `Contact with name "${formName}" already exists!`,
        'Ok'
      );
      return;
    }

    dispatch(addContact(formName, formNumber));
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Text>Name</Text>
      <Input
        type="text"
        name="name"
        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={contacts.name}
      />
      <Text>Number</Text>
      <Input
        type="tel"
        name="number"
        // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={contacts.number}
      />
      <Button type="submit">Add Contact</Button>
    </Form>
  );
}
