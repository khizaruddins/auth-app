import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import App from './App';
import { authRoutes } from './features/auth/routes';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <App />,
      },
    ],
  },
  ...authRoutes,
]);
