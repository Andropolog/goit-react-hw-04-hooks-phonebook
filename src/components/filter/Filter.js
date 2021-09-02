import PropTypes from 'prop-types';
import styles from './Filter.module.css';

function Filter({ filter, onFilter }) {
  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        className={styles.input}
        type="text"
        name="filter"
        value={filter}
        onChange={e => onFilter(e.target.value)}
      />
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  onFilter: PropTypes.func,
};

export default Filter;