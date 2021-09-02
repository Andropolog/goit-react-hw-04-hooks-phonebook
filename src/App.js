
import useLocalStorage from './hooks/useLocalStorage';

// import Phonebook from './components/Phonebook';
import ContactForm from './components/contactForm/ContactForm';
import ContactList from './components/contactList/ContactList';

function App() {


  const [contacts, setContacts] = useLocalStorage('contacts', []);

  const handleAddContact = newContact => {
    setContacts(prevState => [...prevState, newContact]);
  };

  const handlerUniqName = name => {
    const uniqName = !!contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
    if (uniqName) {
      alert(`${name} is already in contacts`);
      return false;
    }
    return true;
  };

  const handleDeleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm
        onAdd={handleAddContact}
        onCheckforUniqName={handlerUniqName}
      />
     
      <ContactList
        title="Contacts"
        contacts={contacts}
        onDeleteContact={handleDeleteContact}
      />
   </div>
  );
}

export default App;
