import PropTypes from 'prop-types';
import { FriendListItemStyles } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendListItemStyles>
      <span key={isOnline}></span>
      <img src={avatar} alt="User avatar" width="48px" />
      <p>{name}</p>
    </FriendListItemStyles>
  );
};
FriendListItem.protoTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
};
