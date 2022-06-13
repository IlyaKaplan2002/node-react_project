import { routes } from 'constants';
import React from 'react';
import { Navigate } from 'react-router-dom';

const NotFoundView = () => {
  return <Navigate to={routes.home.path} />;
};

export default NotFoundView;
