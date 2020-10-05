import React from "react";
import PropTypes from "prop-types";
import  styles from"./profile.module.css";

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
      <div className={styles.container}>
        <div className={styles.description}>
          <img className={styles.img} src={avatar} alt="user avatar" />
          <p className={styles.name}>{name}</p>
          <p>@{tag}</p>
          <p>{location}</p>
        </div>

        <ul className={styles.list}>
          <li className={styles.item}>
            <span className={styles.label}>Followers</span>
            <span className={styles.quantity}>{stats.followers}</span>
          </li>
          <li className={styles.item}>
            <span className={styles.label}>Views</span>
            <span className={styles.quantity}>{stats.views}</span>
          </li>
          <li className={styles.item}>
            <span className={styles.label}>Likes</span>
            <span className={styles.quantity}>{stats.likes}</span>
          </li>
        </ul>
      </div>
  
  );
};
  Profile.defaultProps = {
    avatar:'https://dummyimage.com/640x480/2a2a2a/ffffff&text=avatar+image',
    location:'not specified',
    tag:'...',
  };

Profile.propTypes={
user:PropTypes.shape({
  name: PropTypes.string.isRequired,
  tag: PropTypes.string,
  avatar: PropTypes.string,
  location: PropTypes.string,
  stats : PropTypes.number.isRequired,
})
};   
export default Profile;
