import React from "react";
import PropTypes from "prop-types";
import List from "./friends.component";

const FriendListItem = ({ friend }) => {
  const { avatar, name, isOnline } = friend;
  return (
    <List.li>
      <List.span isOnline={isOnline}></List.span>
      <List.img src={avatar} alt="avatar" width="48" />
      <List.p>{name}</List.p>
    </List.li>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};
export default FriendListItem;
