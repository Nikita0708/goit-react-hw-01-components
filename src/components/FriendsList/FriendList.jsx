import { Friend } from './Friend';
import css from './friendlist.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ id, name, avatar, isOnline }) => (
        <Friend key={id} name={name} avatar={avatar} isOnline={isOnline} />
      ))}
    </ul>
  );
};
