import React from 'react';
import { StyledItem, StyledStatus } from './FriendsList.styled';

export const FriendListItem = ({ id, avatar, name, isOnline }) => {
  console.log(isOnline);
  return (
    <StyledItem>
      <StyledStatus isOnline={isOnline} />

      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </StyledItem>
  );
};
