import PropTypes from 'prop-types';
import { Container } from './Profile.styled';

export const Profile = ({
  avatar,
  username,
  tag,
  location,
 stats
}) => {
  const{ followers,views,likes,}= stats;
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
  avatar: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  }),
  
};
