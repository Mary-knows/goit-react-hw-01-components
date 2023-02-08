import PropTypes from 'prop-types';
import './FriendList.css';


const FriendListItem = (props) => {
    return <li className="friend-list_item">
            <span className={props.isOnline ? "status-on" : "status-off"} ></span>
            <img className="friend-list_avatar" src={props.avatar} alt="User avatar" width="48" />
            <p className="name">{props.name}</p>
        </li>
}


FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}


export default FriendListItem;