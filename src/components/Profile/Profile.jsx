import PropTypes from "prop-types";
import {Description} from '../Profile/ProfileElements/Description';

export const Profile = (props) => {
    const { avatar, userName, tag, location, followers, views, likes } = props;
        return <div>
            <Description data = {props} />
    </div>
}

Profile.protoTypes = {
props: PropTypes.object.isRequired,
}
// {avatar, userName, tag,location,followers,views,likes}