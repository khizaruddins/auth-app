import type { RouteObject } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/register/RegisterPage';
import AuthLayout from './layouts/AuthLayout';

export const authRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <AuthLayout />,
    children: [{ index: true, element: <LoginPage /> }],
  },
  {
    path: '/register',
    element: <AuthLayout />,
    children: [{ index: true, element: <RegisterPage /> }],
  },
];
