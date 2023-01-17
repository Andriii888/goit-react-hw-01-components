import styled from '@emotion/styled';

export const FriendListItemStyles = styled.li`
  display: flex;
  align-items: center;
  background-color: white;
  width: 120px;
  border: 2px solid black;
  span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 1px solid silver;
    background-color: ${({ children }) => {
      if (children[0].key === 'false') {
        return `red`;
      }
      return `green`;
    }};
  }
  img {
    width: 48px;
  }
`;
