import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { ApplicationFormPage, ApplicationsListPage, HomePage } from '../pages';

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
        element: <ApplicationsListPage />,
      },
      {
        path: 'application/:applicationId',
        element: <ApplicationFormPage />,
      },
    ],
  },
]);
