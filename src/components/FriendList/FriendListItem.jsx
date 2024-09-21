import clsx from "clsx"
import css from "./Friendlist.module.css"

const FriendListItem = ({ img, name, status }) => {
    return (
        <div>
            <img src={img} alt="Avatar" width="48" />
            <p className={clsx(css.nameText)}>{name}</p>
            {status ? <p className={clsx(css.statusOnlineText)}>Online</p> : <p className={clsx(css.statusOfflineText)}>Offline</p>}
        </div>
    )
}

export default FriendListItem