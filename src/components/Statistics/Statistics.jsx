import { StatisticsStyle } from './Statistics.styled';
import PropTypes from 'prop-types';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const Statistics = ({ title, stats }) => {
  const elements = stats.map(({ id, label, percentage }) => (
    <li key={id} style={{ backgroundColor: getRandomHexColor() }}>
      <span>{label}</span>
      <span>{percentage}</span>
    </li>
  ));
  return (
    <StatisticsStyle>
      {title && <h2>{title}</h2>}

      <ul>{elements}</ul>
    </StatisticsStyle>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired
    }).isRequired
  ).isRequired,
  title: PropTypes.string,
};
