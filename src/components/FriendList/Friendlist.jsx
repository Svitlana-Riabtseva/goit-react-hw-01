import React from 'react';
import FriendListItem from "../FriendListItem/FriendListItem";
import styles from './Friendlist.module.css';



function FriendList({ friends }) {
  return (
    <div>
      <ul className={styles.list}>
        {friends.map(friend => (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline} />
        ))}
      </ul>
    </div>
  );
}

export default FriendList