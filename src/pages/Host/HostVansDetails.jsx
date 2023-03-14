import React from 'react';
import { useOutletContext } from 'react-router-dom';
export default function HostVansDetails() {
  const van = useOutletContext();
  return (
    <div>
      <h1>Name: {van.name}</h1>
      <h1>Class: {van.class}</h1>
      <h1>Description: {van.description}</h1>
      <h1>Pricing: ${van.price}</h1>
      <h1>Visibility: public</h1>
    </div>
  );
}
