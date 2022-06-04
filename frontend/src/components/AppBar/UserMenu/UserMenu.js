import React from 'react';
import UserMenuStyled from './UserMenu.styled';
// import { useDispatch, useSelector } from 'react-redux';
// import { authSelectors, authOperations } from '../../redux/auth';
import Avatar from 'react-avatar';

export default function UserMenu() {
  //   const dispatch = useDispatch();
  //   const name = useSelector(authSelectors.getUsername);

  return (
    <UserMenuStyled>
      <Avatar name="Wim" size="33" className="profileImage" />

      {/* <Button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Вихід
      </Button> */}

      <button className="button">Вихід</button>
    </UserMenuStyled>
  );
}
