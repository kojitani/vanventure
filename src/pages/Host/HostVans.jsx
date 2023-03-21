import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
export default function HostVansListing() {
  const hostData = useOutletContext();

  const vanElements = hostData
    .filter(item => (item.host.id === 123 ? item : ''))
    .map(van => {
      return (
        <Link
          key={van.id}
          to={`${van.id}/details`}
          style={{ textDecoration: 'none' }}
        >
          <div className="host-listing">
            <img src={van.imageUrl[0]}></img>
            <div className="host-listing-info">
              <p style={{ fontWeight: 'bold' }}>{van.name}</p>
              <p>${van.price}/night</p>
              <p>Public</p>
            </div>
          </div>
        </Link>
      );
    });

  return <>{vanElements}</>;
}
