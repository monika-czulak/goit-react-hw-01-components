import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => (
  <section className="statistics">
    <h2 className="title">{title}</h2>

    <ul className="stat-list">
      {stats.map(el => (
        <li className="item" key={el.id}>
          <span className="label">{el.label}</span>
          <span className="percentage">{el.percentage}</span>
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
