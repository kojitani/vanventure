import React from 'react';
import { useOutlet, useOutletContext } from 'react-router-dom';
import ListingPreview from './ListingPreview';
import { Link } from 'react-router-dom';
import { Button } from '@mantine/core';
export default function HostDashboard() {
  const user = JSON.parse(localStorage.getItem('user'));
  const vanDetails = useOutletContext();

  const nameCase = user.name[0]?.toUpperCase() + user.name.slice(1);
  return (
    <div className="host-dashboard">
      <h1>Welcome back, {nameCase === 'undefined' ? 'User' : nameCase}!</h1>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h2>Your listed vans</h2>
        <Link to="/host/vans">
          <Button variant="default">View all</Button>
        </Link>
      </div>
      <ListingPreview vanDetails={vanDetails} />
    </div>
  );
}
