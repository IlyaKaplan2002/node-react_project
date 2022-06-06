import React from 'react';
import UserMenuStyled from './UserMenu.styled';
import Avatar from 'react-avatar';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

export default function UserMenu() {
  const { name } = useSelector(authSelectors.getUser);

  return (
    <UserMenuStyled>
      <Avatar name={name} size="33" className="profileImage" />
      <p className="userName">{name}</p>
    </UserMenuStyled>
  );
}
