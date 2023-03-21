import { Skeleton } from '@mantine/core';
import React, { Suspense, useEffect, useState } from 'react';
import {
  Outlet,
  Link,
  useLoaderData,
  defer,
  Await,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { Tabs, Loader } from '@mantine/core';
import { getHostVans } from '../../api';
import { IconChevronLeft } from '@tabler/icons-react';

export function loader({ params }) {
  return defer({ hostVan: getHostVans(params.id) });
}

export default function HostVansLayout() {
  const vanDetails = useLoaderData();
  const navigate = useNavigate();
  const location = useLocation();
  const urlGetter = location.pathname.lastIndexOf('/');
  const [activeTab, setActiveTab] = useState(
    location.pathname.slice(urlGetter + 1)
  );
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setActiveTab(location.pathname.slice(urlGetter + 1));
  }, [location]);
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Link
        to="/host/vans"
        style={{
          display: 'flex',
          textDecoration: 'none',
          color: 'black',
          alignItems: 'center',
          marginBottom: '1rem',
          alignSelf: 'flex-start',
        }}
      >
        <IconChevronLeft />
        <p>Go back to all listings</p>
      </Link>
      <Suspense
        fallback={<Loader color="dark" variant="dots" size={48} mt="3rem" />}
      >
        <Await resolve={vanDetails.hostVan}>
          {van => {
            return (
              <div style={{ width: '100%' }}>
                <div className="host-listing">
                  <img src={van.imageUrl[0]}></img>
                  <div className="host-listing-info">
                    <p style={{ fontWeight: 'bold' }}>{van.name}</p>
                    <p>${van.price}/night</p>
                    <p>Public</p>
                  </div>
                </div>
                <Tabs
                  value={activeTab}
                  onTabChange={value => {
                    setActiveTab(value);
                    navigate(value);
                  }}
                  m={'2rem 0'}
                >
                  <Tabs.List>
                    <Tabs.Tab value="details" style={{ fontSize: '1.2rem' }}>
                      Details
                    </Tabs.Tab>
                    <Tabs.Tab value="features" style={{ fontSize: '1.2rem' }}>
                      Features & Amenities
                    </Tabs.Tab>
                    <Tabs.Tab value="photos" style={{ fontSize: '1.2rem' }}>
                      Photos
                    </Tabs.Tab>
                  </Tabs.List>
                </Tabs>
                <Outlet context={van} />
              </div>
            );
          }}
        </Await>
      </Suspense>
    </div>
  );
}
