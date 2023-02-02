import css from './friendlist.module.css';
import PropTypes from 'prop-types';

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

Friend.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
