import css from "../Profile/Profile.module.css";
export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.conteiner}>
      <div>
        <img className={css.avatar} src={image} alt={name} />
        <p className={css.name}>{name}</p>
        <p>&#64;{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span>Followers</span>
          <span className={css.stats}>{stats.followers}</span>
        </li>
        <li className={css.item}>
          <span>Views</span>
          <span className={css.stats}>{stats.views}</span>
        </li>
        <li className={css.item}>
          <span>Likes</span>
          <span className={css.stats}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}