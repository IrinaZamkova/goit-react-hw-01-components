import React from "react";
import FriendListItem from "./friendsListItem";
import PropTypes from "prop-types";
import List from "./friends.component";

const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map((friend) => (
        <FriendListItem friend={friend} key={friend.id} />
      ))}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
export default FriendList;
