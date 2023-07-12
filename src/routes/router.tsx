import { createBrowserRouter } from 'react-router-dom';

import { App } from '../App';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';

import { PrivateRoute } from './PrivateRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/private',
        element: (
          <PrivateRoute>
            <h2>private route </h2>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
