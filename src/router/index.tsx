import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { HomePage } from '../pages/HomePage';
import { ApplicationPage } from '../pages/ApplicationPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'applications',
        element: <ApplicationPage />,
      },
    ],
  },
]);