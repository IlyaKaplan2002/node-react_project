import { logout } from 'api/auth';
import LossOfChange from 'components/LossOfChange';
import { tryRefreshToken } from 'helpers';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { authActions, authSelectors } from 'redux/auth';
import LogoutStyled from './Logout.styled';

const Logout = () => {
  const [logoutModal, setLogoutModal] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector(authSelectors.getToken);
  const refreshTokenValue = useSelector(authSelectors.getRefreshToken);
  const { t } = useTranslation();

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

  const toggleLogout = () => setLogoutModal(prev => !prev);

  return (
    <>
      <LogoutStyled>
        <button className="button" type="button" onClick={toggleLogout}>
          {t('logout')}
        </button>
      </LogoutStyled>
      <CSSTransition
        in={logoutModal}
        unmountOnExit
        classNames="modal"
        timeout={300}
      >
        <LossOfChange onCloseModal={toggleLogout} onLeaveClick={onLogout} />
      </CSSTransition>
    </>
  );
};

export default Logout;
