import styled from '@emotion/styled';

export const ControlList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  letter-spacing: 2px;
  font-weight: 700;
  font-size: 30px;
  margin-bottom: 10px;
`;

export const ControlItem = styled.li``;

export const ControlButton = styled.button`
  margin: 10px 0;
  height: 90px;
  width: 90px;
  padding: 5px;
  font-weight: 900;
  text-transform: uppercase;
  margin-right: 20px;
  border: none;
  border-radius: 50%;
  background-color: #90ee90;
  transition: all 200ms ease-in-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
