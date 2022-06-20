import React from 'react';
import { useSelector } from 'react-redux';
import Avatar from 'react-avatar';
import { authSelectors } from 'redux/auth';
import UserMenuStyled from './UserMenu.styled';

export default function UserMenu() {
  const { name } = useSelector(authSelectors.getUser);

  return (
    <UserMenuStyled>
      <Avatar name={name} size="33" className="profileImage" />
      <p className="userName">{name}</p>
    </UserMenuStyled>
  );
}
