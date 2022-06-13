import { lazy } from 'react';

const HomeView = lazy(() => import('views/HomeView'));
const LoginView = lazy(() => import('views/LoginView'));
const SignUpView = lazy(() => import('views/SignUpView'));
const LibraryView = lazy(() => import('views/LibraryView'));
const TrainingView = lazy(() => import('views/TrainingView'));

const paths = {
  home: '/',
  login: '/login',
  signUp: '/signup',
  library: '/library',
  training: '/training',
};

const routes = {
  home: {
    path: paths.home,
    component: HomeView,
    isPrivate: false,
    redirect: paths.library,
  },
  login: {
    path: paths.login,
    component: LoginView,
    isPrivate: false,
    redirect: paths.library,
  },
  signUp: {
    path: paths.signUp,
    component: SignUpView,
    isPrivate: false,
    redirect: paths.library,
  },
  library: {
    path: paths.library,
    component: LibraryView,
    isPrivate: true,
    redirect: paths.home,
  },
  training: {
    path: paths.training,
    component: TrainingView,
    isPrivate: true,
    redirect: paths.home,
  },
};

export default routes;
