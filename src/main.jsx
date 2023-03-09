import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from 'react-router-dom';
import './index.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Vans, { loader as vansLoader } from './pages/Vans/Vans';
import VanDetails, {
  loader as vanDetailsLoader,
} from './pages/Vans/VanDetails';
import HostLayout from './components/HostLayout';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import Dashboard from './pages/Host/Dashboard';
import HostVans from './pages/Host/HostVans';
import HostVansLayout from './pages/Host/HostVansLayout';
import HostVansDetails from './pages/Host/HostVansDetails';
import HostVansPhotos from './pages/Host/HostVansPhotos';
import HostVansPricing from './pages/Host/HostVansPricing';
import Error from './components/Error';
import './server';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<Error />}>
      <Route index element={<Home />} errorElement={<Error />} />
      <Route path="about" element={<About />} errorElement={<Error />} />
      <Route
        path="vans"
        element={<Vans />}
        loader={vansLoader}
        errorElement={<Error />}
      />
      <Route
        path="vans/:id"
        element={<VanDetails />}
        errorElement={<Error />}
        loader={vanDetailsLoader}
      />

      <Route path="host" element={<HostLayout />} errorElement={<Error />}>
        <Route index element={<Dashboard />} errorElement={<Error />} />
        <Route path="income" element={<Income />} errorElement={<Error />} />
        <Route path="reviews" element={<Reviews />} errorElement={<Error />} />
        <Route path="vans" element={<HostVans />} errorElement={<Error />} />
        <Route
          path="vans/:id"
          element={<HostVansLayout />}
          errorElement={<Error />}
        >
          <Route index element={<HostVansDetails />} errorElement={<Error />} />
          <Route
            path="pricing"
            element={<HostVansPricing />}
            errorElement={<Error />}
          />
          <Route
            path="photos"
            element={<HostVansPhotos />}
            errorElement={<Error />}
          />
        </Route>
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
