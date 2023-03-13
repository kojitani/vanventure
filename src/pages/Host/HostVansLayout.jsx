import React, { Suspense } from 'react';
import { Outlet, Link, useLoaderData, defer, Await } from 'react-router-dom';
import { getHostVans } from '../../api';
export function loader({ params }) {
  return defer({ hostVan: getHostVans(params.id) });
}

export default function HostVansLayout() {
  const vanDetails = useLoaderData();
  return (
    <div>
      <Link to="/host/vans">go back to all vans</Link>
      <Suspense fallback={<h1>LOADING VAN DETAILS ^^</h1>}>
        <Await resolve={vanDetails.hostVan}>
          {van => {
            return (
              <div>
                <img src={van.imageUrl[0]} width={300}></img>
                <nav>
                  <Link to=".">details</Link>
                  <Link to="features">Features</Link>
                  <Link to="photos">photos</Link>
                </nav>
                <Outlet context={van} />
              </div>
            );
          }}
        </Await>
      </Suspense>
    </div>
  );
}
