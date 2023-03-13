import React from 'react';
import { useOutletContext } from 'react-router-dom';
export default function HostVansAmenities() {
  const van = useOutletContext();

  const vanFeatures = van.features.map((feature, i) => {
    const featureCase =
      Object.keys(feature)[0][0].toUpperCase() +
      Object.keys(feature)[0].slice(1);
    return <p key={i}>{featureCase}</p>;
  });
  const vanAmenities = van.amenities.map((amenity, i) => {
    const amenityCase =
      amenity[0].toUpperCase() + amenity.slice(1).replace('-', ' ');
    return <p key={i}>{amenityCase} </p>;
  });
  return (
    <div>
      <h1>Features:</h1>
      {vanFeatures}
      <h1>Amenities</h1>
      {vanAmenities}
    </div>
  );
}
