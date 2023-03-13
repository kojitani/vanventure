import React, { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Tabs } from '@mantine/core';
import { getHostVans } from '../api';
import { useLoaderData } from 'react-router-dom';

export function loader() {
  return getHostVans();
}
export default function HostLayout() {
  const hostDetails = useLoaderData();

  const navigate = useNavigate();
  const location = useLocation();
  const urlGetter = location.pathname.lastIndexOf('/') + 1;
  const [activeTab, setActiveTab] = useState(
    location.pathname.slice(urlGetter)
  );

  return (
    <div className="host-container">
      <Tabs
        color="dark"
        radius="md"
        variant="pills"
        defaultValue={activeTab}
        value={activeTab}
        onTabChange={value => {
          setActiveTab(value);
          navigate(`${value}`);
        }}
        m="2rem 0rem"
      >
        <Tabs.List grow position="center">
          <Tabs.Tab
            value="dashboard"
            style={{ fontSize: '1.25rem', padding: '0.5rem 1.25rem' }}
          >
            Dashboard
          </Tabs.Tab>
          <Tabs.Tab value="income" style={{ fontSize: '1.25rem' }}>
            Income
          </Tabs.Tab>
          <Tabs.Tab value="vans" style={{ fontSize: '1.25rem' }}>
            Van Listings
          </Tabs.Tab>
          <Tabs.Tab value="reviews" style={{ fontSize: '1.25rem' }}>
            Reviews
          </Tabs.Tab>
        </Tabs.List>
      </Tabs>
      <Outlet context={hostDetails} />
    </div>
  );
}
