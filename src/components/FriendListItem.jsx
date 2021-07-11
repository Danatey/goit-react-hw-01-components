import PropTypes from 'prop-types';

const FriendListItem = ({avatar, name, isOnline}) => {
    return <li className="item">
        <span className={isOnline ? "status-online" : "status-offline"}></span>
        <img className="avatar" src={avatar} alt={name} width="48" />
        <p className="name">{name}</p>
    </li>
}

FriendListItem.defaultProps = {
    avatar: "https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg",
    isOnline: false,
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
}

export default FriendListItem