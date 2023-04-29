import React from 'react';
import PropTypes from 'prop-types';
import { FriendItem, Status, Image, Name } from './FriendListItem.styled';

export const FriendListItem = ( { avatar, name, isOnline }) => {
  return (
    <FriendItem>
      <Status status={isOnline}></Status>
      <Image src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </FriendItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired
};
