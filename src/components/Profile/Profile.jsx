import PropTypes from 'prop-types';

import "./Profile.css";

const CardProfile = ({ name, tag, location, avatar, stats }) => {
    return (
        <div className="profile">
            <div className="description">
                <img
                    src={avatar}
                    alt="Аватар пользователя"
                    className="avatar"
                />
                <p className="name">{name}</p>
                <p className="tag">@{tag}</p>
                <p className="location">{location}</p>
            </div>

            <ul className="stats">
            <li className ="stats-item">
                <span className="label">Followers</span>
                <span className="quantity">{stats.followers}</span>
            </li>
            <li className ="stats-item">
                <span className="label">Views</span>
                <span className="quantity">{stats.views}</span>
            </li>
            <li className ="stats-item">
                <span className="label">Likes</span>
                <span className="quantity">{stats.likes}</span>
            </li>
            </ul>
        </div>
    )
}

CardProfile.defaultProps = {
    avatar:"https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg",
}

CardProfile.propTypes = {
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.objectOf(PropTypes.number),
}

export default CardProfile