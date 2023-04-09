import ContactForm from './contact-form/ContactForm';
import Filter from './filter/Filter';
import ContactList from './contact-list/ContactList';


const App = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />

      <>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </>
    </>
  );
};

export default App;
