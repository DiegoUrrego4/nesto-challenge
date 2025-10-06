import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { HomePage } from '../pages/HomePage';
import { ApplicationsListPage } from '../pages/ApplicationsListPage.tsx';
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
        element: <ApplicationsListPage />,
      },
      {
        path: 'application/:applicationId',
        element: <ApplicationFormPage />,
      },
    ],
  },
]);