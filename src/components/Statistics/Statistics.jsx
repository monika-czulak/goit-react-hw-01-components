import styles from "./Statistics.module.css";
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    <h2 className={styles.title}>{title}</h2>

    <ul className={styles['stat-list']}>
      {stats.map(el => (
        <li className={styles.item} key={el.id}>
          <span className={styles.label}>{el.label}</span>
          <span className={styles.percentage}>{el.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.defaultProps = {
  title: null,
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

export default Statistics;
