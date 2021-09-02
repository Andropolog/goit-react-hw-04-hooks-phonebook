import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import Filter from '../filter/Filter';

function Contacts({ contacts, title, onDeleteContact }) {
  const [filter, setFilter] = useState('');

  const handleFilter = filter => {
    setFilter(filter);
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <>
      <h2 >{title}</h2>
      <Filter filter={filter} onFilter={handleFilter} />
      <ul className={styles.TaskList}>
        {filteredContacts.length > 0 &&
          filteredContacts.map(({ id, name, tel }) => (
            <li key={id} className={styles.TaskList_item}>
              <span >{name}</span>
              <span >{tel}</span>
              <button
                className={styles.TaskList_button}
                type="button"
                onClick={() => onDeleteContact(id)}
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
    </>
  );
}

Contacts.propTypes = {
  title: PropTypes.string,
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};

export default Contacts;