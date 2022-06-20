import React from 'react';
import { Navigate } from 'react-router-dom';
import { routes } from 'constants';

const NotFoundView = () => {
  return <Navigate to={routes.home.path} />;
};

export default NotFoundView;
