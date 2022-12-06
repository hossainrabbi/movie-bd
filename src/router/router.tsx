import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layout/RootLayout';
import About from '../pages/About';
import Home from '../pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]);

export default router;
