import { StatisticsStyle } from './Statistics.styled';
import PropTypes from 'prop-types';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const Statistics = props => {
  const { title, stats } = props;
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
  props: PropTypes.object,
  title: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
