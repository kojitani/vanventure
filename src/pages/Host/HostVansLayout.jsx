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
import { Tabs } from '@mantine/core';
import { getHostVans } from '../../api';
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
    <div>
      <Link to="/host/vans">go back to all vans</Link>
      <Suspense fallback={<h1>LOADING VAN DETAILS ^^</h1>}>
        <Await resolve={vanDetails.hostVan}>
          {van => {
            return (
              <div>
                <Skeleton visible={loading} width={300}>
                  <img
                    src={van.imageUrl[0]}
                    width={300}
                    onLoad={() => setLoading(false)}
                  ></img>{' '}
                </Skeleton>
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
