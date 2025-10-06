import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { HomePage } from '../pages/HomePage';
import { ApplicationPage } from '../pages/ApplicationPage';
import { ApplicationFormPage } from '../pages/ApplicationFormPage';

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
      {
        path: 'application/:applicationId',
        element: <ApplicationFormPage />,
      },
    ],
  },
]);