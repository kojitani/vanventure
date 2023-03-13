import React from 'react';
import Footer from './Footer';
import Header from './Header';
import HostHeader from './HostHeader';
import { Outlet, useLocation } from 'react-router-dom';

export default function Layout() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="main">
      {location.pathname.includes('/host') ? <HostHeader /> : <Header />}
      <Outlet />
      <Footer />
    </div>
  );
}
