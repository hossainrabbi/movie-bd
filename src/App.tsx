import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import About from './pages/About';
import Error from './pages/Error';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';

// create router elements with Routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path="/movies/:movieId" element={<MovieDetails />} />
      <Route path="/about" element={<About />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
