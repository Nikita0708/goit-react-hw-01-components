import css from './friendlist.module.css';

export const Friend = ({ name, avatar, isOnline }) => {
  return (
    <li>
      <span
        className={`${css.status} ${isOnline ? css.online : css.offline}`}
      ></span>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </li>
  );
};
