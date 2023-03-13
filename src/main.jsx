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
import HostLayout, { loader as hostLoader } from './components/HostLayout';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import Dashboard from './pages/Host/Dashboard';
import HostVans from './pages/Host/HostVans';
import HostVansLayout, {
  loader as hostVansLayoutLoader,
} from './pages/Host/HostVansLayout';
import HostVansDetails from './pages/Host/HostVansDetails';
import HostVansPhotos from './pages/Host/HostVansPhotos';
import HostVansFeatures from './pages/Host/HostVansFeatures';
import Error from './components/Error';
import './server';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="vans" element={<Vans />} loader={vansLoader} />
      <Route
        path="vans/:id"
        element={<VanDetails />}
        loader={vanDetailsLoader}
      />

      <Route path="host" element={<HostLayout />} loader={hostLoader}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="income" element={<Income />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="vans" element={<HostVans />} />
        <Route
          path="vans/:id"
          element={<HostVansLayout />}
          loader={hostVansLayoutLoader}
        >
          <Route index element={<HostVansDetails />} />
          <Route path="features" element={<HostVansFeatures />} />
          <Route path="photos" element={<HostVansPhotos />} />
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
