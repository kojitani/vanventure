import React from 'react';
import { Outlet, Link } from 'react-router-dom';
export default function HostLayout() {
  return (
    <div>
      <div className="host-container">
        <nav>
          <Link to=".">Dashboard</Link>
          <Link to="income">Income</Link>
          <Link to="vans">Vans</Link>
          <Link to="reviews">Reviews</Link>
        </nav>
      </div>
      <Outlet />
    </div>
  );
}
