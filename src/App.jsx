import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Rockets from './components/Rockets';
import Profile from './components/Profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Rockets />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  // Here
]);
const App = () => (
  <RouterProvider router={router} />
);

export default App;
