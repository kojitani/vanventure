import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { Tabs } from '@mantine/core';
import { getHostVans } from '../api';
import { useLoaderData } from 'react-router-dom';

export function loader() {
  return getHostVans();
}
export default function HostLayout() {
  const hostDetails = useLoaderData();
  const navigate = useNavigate();
  const [pathName, setPathName] = useState(window.location.pathname);
  const [activeTab, setActiveTab] = useState(pathName.slice(6));

  useEffect(() => {
    const path = window.location.pathname;
    setActiveTab(path.includes('/host/vans') ? 'vans' : path.slice(6));
  }, [window.location.pathname]);
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
        style={{ margin: '0 auto', marginBottom: '2rem' }}
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
