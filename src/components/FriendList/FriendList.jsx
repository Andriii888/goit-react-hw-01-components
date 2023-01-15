import { FriendsListStyle } from './FriendList.styled';
import PropTypes from 'prop-types';
import { FriendListItem } from './FriendsListElements/FriendListItem';

export const FriendList = ({ dataList }) => {
  return (
    <FriendsListStyle>
      <FriendListItem data={dataList} />
    </FriendsListStyle>
  );
};
FriendList.propTypes = {
  dataList: PropTypes.array,
};
