import React from 'react';
import { Outlet, Link } from 'react-router-dom';
export default function HostVansLayout() {
  return (
    <div>
      <Link to="/host/vans">go back to all vans</Link>
      <p>host van layout</p>
      <Link to=".">details</Link>
      <Link to="pricing">pricing</Link>
      <Link to="photos">photos</Link>
      <Outlet />
    </div>
  );
}
