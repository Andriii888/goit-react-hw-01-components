import PropTypes from "prop-types";

export const Description = ({ avatar, userName, tag, location }) => {
    console.log(avatar);
    return <div>
    <img
      src={avatar}
      alt="User avatar"
    />
    <p>{userName}</p>
    <p>{tag}</p>
    <p>{location}</p>
  </div>}

Description.propTypes = {
    avatar: PropTypes.string,
    userName: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
}