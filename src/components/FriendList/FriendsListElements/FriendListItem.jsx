import PropTypes from 'prop-types';
import { FriendListItemStyles } from './FriendListItem.styled';

export const FriendListItem = ({ data }) => {
  const friendsElements = data.map(d => {
    return (
      <FriendListItemStyles key={d.id}>
        {d.isOnline ? (
          <span style={{ backgroundColor: 'green' }}></span>
        ) : (
          <span style={{ backgroundColor: 'red' }}></span>
        )}
        <img src={d.avatar} alt="User avatar" width="48px" />
        <p>{d.name}</p>
      </FriendListItemStyles>
    );
  });
  return friendsElements;
};

FriendListItem.propTypes = {
  data: PropTypes.array,
  id: PropTypes.number,
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
