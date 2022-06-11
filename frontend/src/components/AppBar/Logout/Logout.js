import { logout } from 'api/auth';
import { tryRefreshToken } from 'helpers';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authActions, authSelectors } from 'redux/auth';
import LogoutStyled from './Logout.styled';

const Logout = () => {
  const dispatch = useDispatch();
  const token = useSelector(authSelectors.getToken);
  const refreshTokenValue = useSelector(authSelectors.getRefreshToken);

  const onLogout = async () => {
    const tryFunc = async tokenValue => {
      await logout(tokenValue);
      dispatch(authActions.logout());
    };

    try {
      await tryFunc(token);
    } catch (error) {
      await tryRefreshToken(error, refreshTokenValue, dispatch, tryFunc);
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
