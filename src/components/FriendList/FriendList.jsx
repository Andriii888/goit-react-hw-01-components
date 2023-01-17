import { FriendsListStyle } from './FriendList.styled';
import PropTypes from 'prop-types';
import { FriendListItem } from './FriendsListElements/FriendListItem';

export const FriendList = ({ dataList }) => {
  return (
    <FriendsListStyle>
      {dataList.map(d => {
        const { id, name, avatar, isOnline } = d;
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        );
      })}
    </FriendsListStyle>
  );
};
FriendList.propTypes = {
  dataList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      avatar: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};
