import styled from '@emotion/styled';

export const StatisticsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  letter-spacing: 2px;
  font-weight: 700;
  font-size: 30px;
  margin-bottom: 10px;
`;

export const StatisticsItem = styled.li`
  display: flex;
  text-align: center;
  &:first-of-type {
    margin-top: 10px;
  }
  &:nth-last-of-type(2) {
    margin-top: 20px;
  }
`;

export const StatisticsText = styled.p`
  margin: 5px;
  font-size: 22px;
  letter-spacing: 1px;
  font-weight: normal;
`;
