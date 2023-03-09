import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <ul className="list">
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          isOnline={friend.isOnline}
          avatar={friend.avatar}
          name={friend.name}
        />
      ))}
    </ul>
  );
};

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="item">
      <span className="isOnline">{isOnline}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string,
        isOnline: PropTypes.bool,
        avatar: PropTypes.string,
        name: PropTypes.string
      })
    )
  }

export default FriendList;
