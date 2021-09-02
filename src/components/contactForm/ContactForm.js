import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

function ContactForm({ onAdd, onCheckforUniqName }) {
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangeTel = e => {
    setTel(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const checkUniqName = onCheckforUniqName(name);
    if (!checkUniqName) return;

    if (!(name && tel)) {
      alert('Empty field');
      return;
    }

    onAdd({ id: uuidv4(), name, tel });
    reset();
  };

  const reset = () => {
    setName('');
    setTel('');
  };

  return (
    <form className={styles.TaskEditor} onSubmit={handleSubmit}>
      <label className={styles.TaskEditor_label}>
        Name
        <input
          className={styles.TaskEditor_input}
          type="text"
          name="name"
          value={name}
          onChange={handleChangeName}
        />
      </label>
      <label className={styles.TaskEditor_label}>
        Number
        <input
          className={styles.TaskEditor_input}
          type="tel"
          name="tel"
          value={tel}
          onChange={handleChangeTel}
        />
      </label>
      <button className={styles.TaskEditor_button} type="submit">
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  onAdd: PropTypes.func,
  onCheckforUniqName: PropTypes.func,
};

export default ContactForm;