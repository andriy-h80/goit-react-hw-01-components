import React from 'react';
import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem';
import { FriendsList } from './FriendList.styled';

export const FriendList = ({friends}) => {
  return (
    <FriendsList>
      {
        friends.map(({id, avatar, name, isOnline}) => (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}/>
          )
        )
      }
   </FriendsList>
  );
};

FriendList.propTypes = {
friends: PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  }).isRequired).isRequired
};