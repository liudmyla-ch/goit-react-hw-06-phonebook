import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import css from './Contacts.module.css'

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));
  
  return (
    <li key={contact.id} className={css.item}>
      {contact.name}: {contact.number}
      <button type="button" className={css.button} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
