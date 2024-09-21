import clsx from "clsx"
import css from "./Profile.module.css"

const Profile = ({ name, tag, location, image, stats }) => { 
    return (
        <div className={clsx(css.cart)}>
            <div>
                <img className={clsx(css.image)} src={image} alt="User avatar"/>
                <p className={clsx(css.text, css.boldtext)}>{name}</p>
                <p className={clsx(css.text, css.graytext)}>@{tag}</p>
                <p className={clsx(css.text, css.graytext)}>{location}</p>
            </div>

            <ul className={clsx(css.stats)}>
                <li className={clsx(css.statElement)}>
                    <span>Followers</span>
                    <span className={clsx(css.boldtext)}>{stats.followers}</span>
                </li>
                <li className={clsx(css.statElement, css.statElementCenter)}>
                    <span>Views</span>
                    <span className={clsx(css.boldtext)}>{stats.views}</span>
                </li>
                <li className={clsx(css.statElement)}>
                    <span>Likes</span>
                    <span className={clsx(css.boldtext)}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    )
}

export default Profile