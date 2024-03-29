import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { Text } from '@mantine/core';
export default function HostVansAmenities() {
  const van = useOutletContext();

  const vanFeatures = van.features.map((feature, i) => {
    const featureCase =
      Object.keys(feature)[0][0].toUpperCase() +
      Object.keys(feature)[0].slice(1);
    return (
      <Text inherit fz="lg" key={i}>
        {featureCase}
      </Text>
    );
  });
  const vanAmenities = van.amenities.map((amenity, i) => {
    const amenityCase =
      amenity[0].toUpperCase() + amenity.slice(1).replace('-', ' ');
    return (
      <Text inherit fz="lg" key={i}>
        {amenityCase}{' '}
      </Text>
    );
  });
  return (
    <div>
      <h2 style={{ margin: '0.5rem 0' }}>Features:</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
        {vanFeatures}
      </div>

      <h2 style={{ margin: '0.5rem 0' }}>Amenities:</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
        {vanAmenities}
      </div>
    </div>
  );
}
