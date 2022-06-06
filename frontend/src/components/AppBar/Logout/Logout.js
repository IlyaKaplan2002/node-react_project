import { logout } from 'api/auth';
import { notifyError } from 'helpers';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authActions, authSelectors } from 'redux/auth';
import LogoutStyled from './Logout.styled';

const Logout = () => {
  const dispatch = useDispatch();
  const token = useSelector(authSelectors.getToken);

  const onLogout = async () => {
    try {
      await logout(token);
      dispatch(authActions.logout());
    } catch (error) {
      notifyError(error);
    }
  };

  return (
    <LogoutStyled>
      <button className="button" type="button" onClick={onLogout}>
        Logout
      </button>
    </LogoutStyled>
  );
};

export default Logout;
