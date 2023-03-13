import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
export default function HostVansListing() {
  const hostData = useOutletContext();

  const vanElements = hostData
    .filter(item => (item.host.id === 123 ? item : ''))
    .map(van => {
      return (
        <Link key={van.id} to={van.id}>
          <p>{van.name}</p>
        </Link>
      );
    });

  return <div>{vanElements}</div>;
}
