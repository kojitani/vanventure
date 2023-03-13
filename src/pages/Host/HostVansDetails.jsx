import React from 'react';
import { useOutletContext } from 'react-router-dom';
export default function HostVansDetails() {
  const van = useOutletContext();
  return (
    <div>
      <h1>{van.name}</h1>
      <h1>{van.class}</h1>
      <h1>{van.description}</h1>
      <h1>{van.price}</h1>
      <h1>Visibility: public</h1>
    </div>
  );
}
