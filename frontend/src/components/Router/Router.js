import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { routes } from 'constants';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

const Router = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Routes>
      {Object.keys(routes).map(route => {
        const {
          path,
          component: Component,
          isPrivate,
          redirect,
        } = routes[route];

        if ((isPrivate && !isLoggedIn) || (!isPrivate && isLoggedIn)) {
          return (
            <Route
              key={path}
              path={path}
              element={<Navigate to={redirect} />}
            />
          );
        }

        return <Route key={path} path={path} element={<Component />} />;
      })}
    </Routes>
  );
};

export default Router;
