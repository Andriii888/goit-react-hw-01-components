import PropTypes from 'prop-types';
import { Container } from './Profile.styled';

export const Profile = ({ props }) => {
  const { avatar, username, tag, location, stats } = props;
  const { followers, views, likes } = stats;
  return (
    <Container>
      <div>
        <img src={avatar} alt="User avatar" />
        <p>{username}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>
      <ul>
        <li>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </Container>
  );
};

Profile.protoTypes = {
  props: PropTypes.object.isRequired,
  avatar: PropTypes.string,
  userName: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
