import clsx from "clsx";
import css from "./FriendListItem.module.css";
export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.friendName}>{name}</p>
      <p className={clsx(css.status, isOnline ? css.isOnline : css.isOfline)}>
        {isOnline ? "Online" : "Ofline"}
      </p>
    </div>
  );
};