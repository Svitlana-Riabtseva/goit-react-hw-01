import FriendListItem from "./FriendListItem";
import clsx from "clsx";
import css from "./Friendlist.module.css"

const FriendList = ({ friends }) => {
    return (
        <ul className={clsx(css.list)}>
            {friends.map((friend) => {
                return <li className={clsx(css.item)} key={friend.id}>
                    <FriendListItem
                        img={friend.avatar}
                        name={friend.name}
                        status={friend.isOnline}
                     />
                </li>;
            })}
        </ul>
    );
};

export default FriendList