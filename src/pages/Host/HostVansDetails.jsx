import React from 'react';
import { useOutletContext } from 'react-router-dom';

export default function HostVansDetails() {
  const van = useOutletContext();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <h2>
        Name: <span style={{ fontWeight: 'lighter' }}>{van.name}</span>
      </h2>
      <h2>
        Description:{' '}
        <span style={{ fontWeight: 'lighter' }}>{van.description}</span>
      </h2>
      <h2>
        Pricing: <span style={{ fontWeight: 'lighter' }}>${van.price}</span>
      </h2>
      <h2>
        Visibility: <span style={{ fontWeight: 'lighter' }}>Public</span>
      </h2>
    </div>
  );
}
