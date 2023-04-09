import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import Contact from 'components/contact/Contact';

const ContactList = () => {
  const filters = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  console.log(contacts);

  let visibleContacts;

  if ((filters !== '') & (contacts.data.length > 0)) {
    visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filters.toLowerCase())
    );
  }
  if ((filters === '') & (contacts.data.length > 0)) {
    visibleContacts = contacts.data;
  }

  return (
    <ul className={css.list}>
      {visibleContacts.map(contact => (
        <Contact contact={contact} key={contact.id} />
      ))}
    </ul>
  );
};

export default ContactList;
