import PropTypes from 'prop-types';

import {
  StatisticsList,
  StatisticsItem,
  StatisticsText,
} from './Statistic.styled';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <StatisticsList>
      <StatisticsItem>
        <StatisticsText style={{ color: 'green' }}>Good: {good}</StatisticsText>
      </StatisticsItem>
      <StatisticsItem>
        <StatisticsText style={{ color: 'orange' }}>
          Neutral: {neutral}
        </StatisticsText>
      </StatisticsItem>
      <StatisticsItem>
        <StatisticsText style={{ color: 'red' }}>Bad: {bad}</StatisticsText>
      </StatisticsItem>
      <StatisticsItem>
        <StatisticsText> Total: {total}</StatisticsText>
      </StatisticsItem>
      <StatisticsItem>
        <StatisticsText>
          Positive feedback: {positivePercentage}%
        </StatisticsText>
      </StatisticsItem>
    </StatisticsList>
  );
}

Statistics.prototype = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
