import PropTypes from 'prop-types';
import './ProfileDetails.css';


const ProfileDetails = (props) => {
    return <div className="profile">
  <div className="description">
    <img
      src={props.avatar}
      alt="User avatar"
      className="avatar"
    />
    <p className="name">{props.name}</p>
    <p className="tag">@{props.tag}</p>
    <p className="location">{props.location}</p>
  </div>

  <ul className="stats">
    <li className="card_dscr">
      <span className="label">Followers</span>
      <span className="quantity"> {props.stats.followers}</span>
    </li>
    <li className="card_dscr">
      <span className="label">Views</span>
      <span className="quantity"> {props.stats.views}</span>
    </li>
    <li className="card_dscr">
      <span className="label">Likes</span>
      <span className="quantity"> {props.stats.likes}</span>
    </li>
  </ul>
</div>
}

ProfileDetails.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number)
}

export default ProfileDetails;