import React from 'react';
import UserMenuStyled from './UserMenu.styled';
import Avatar from 'react-avatar';

export default function UserMenu() {
  return (
    <UserMenuStyled>
      <Avatar name="Wim" size="33" className="profileImage" />
      <p className="userName">Martha Stewart</p>
      {/* <p className="userName">{name}</p> */}
    </UserMenuStyled>
  );
}
