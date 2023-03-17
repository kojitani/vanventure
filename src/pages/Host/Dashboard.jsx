import React from 'react';
import { useOutlet, useOutletContext } from 'react-router-dom';
import ListingPreview from './ListingPreview';
import { Link } from 'react-router-dom';
import { Button, Text } from '@mantine/core';
import IncomeDetails from './Income';
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
          flexDirection: 'column',
          margin: '2rem 0',
          gap: '1rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text fz="xl" fw={500}>
            Income last 30 days
          </Text>
          <Link to="/host/income">
            <Button variant="default">Details</Button>
          </Link>
        </div>
        <IncomeDetails />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text fz="xl" fw={500}>
          Your listings
        </Text>
        <Link to="/host/vans">
          <Button variant="default">View all</Button>
        </Link>
      </div>
      <ListingPreview vanDetails={vanDetails} />
    </div>
  );
}
