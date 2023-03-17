import React from 'react';
import { Divider, SimpleGrid } from '@mantine/core';
import VanDetailsBooking from './VanDetailsBooking';
export default function VanDetailsInfo(props) {
  const vanDetails = props.vanDetails;

  const featureElements = vanDetails.features.map((feature, i) => {
    const featureCase =
      String(Object.keys(feature)).slice(0, 1).toUpperCase() +
      String(Object.keys(feature)).slice(1);
    return (
      <div key={i} className="feature-item">
        <img
          className="features-svg"
          src={`/svg/${Object.keys(feature)}.svg`}
          width="30px"
          height={30}
          alt={feature}
        ></img>
        <p>{`${featureCase}: ${Object.values(feature)}`}</p>
      </div>
    );
  });

  const amenityElements = vanDetails.amenities.map((amenity, i) => {
    const amenityCase =
      amenity[0].toUpperCase() + amenity.slice(1).replace('-', ' ');

    return (
      <div key={i} className="amenity-item">
        <img
          className="features-svg"
          src={`/svg/${amenity}.svg`}
          width="30px"
          height={30}
          alt={amenity}
        ></img>
        <p>{amenityCase}</p>
      </div>
    );
  });
  const ruleElements = vanDetails.rules.map((rule, i) => {
    const ruleCase = rule[0].toUpperCase() + rule.slice(1).replaceAll('-', ' ');
    return (
      <div key={i} className="rule-item">
        <img
          className="features-svg"
          src={`/svg/${rule}.svg`}
          alt={rule}
          width={32}
          height={32}
        ></img>
        <p>{ruleCase}</p>
      </div>
    );
  });
  return (
    <div className="van-details-info-container">
      <p className="van-details-name">{vanDetails.name}</p>
      <div className="feature-preview-container">
        <button>6 guests</button>
        <button>Sleeps 4</button>
        <button>20 ft. long</button>
        <button>Pet friendly</button>
      </div>
      <Divider my="sm" />
      <p className="van-details-description">{vanDetails.description}</p>
      <Divider my="sm" />
      <h2 className="feature-title">Features</h2>
      <SimpleGrid
        style={{ gridAutoRows: '1fr' }}
        cols={2}
        spacing="sm"
        breakpoints={[{ maxWidth: '36rem', cols: 1, spacing: 'sm' }]}
      >
        {featureElements}
      </SimpleGrid>
      <Divider my="sm" />
      <h2 className="amenity-title">Amenities</h2>
      <SimpleGrid
        style={{ gridAutoRows: '1fr' }}
        cols={2}
        spacing="sm"
        breakpoints={[{ maxWidth: '36rem', cols: 1, spacing: 'sm' }]}
      >
        {amenityElements}
      </SimpleGrid>
      <Divider my="sm" />
      <h1 className="rules-title">Rules and policies</h1>
      <SimpleGrid
        style={{ gridAutoRows: '1fr' }}
        cols={2}
        spacing="sm"
        breakpoints={[{ maxWidth: '36rem', cols: 1, spacing: 'sm' }]}
      >
        {ruleElements}
      </SimpleGrid>

      {/* <div className="availability-container" id="availability-container">
        <h1 id="test" className="availability-title">
          Availability and rates
        </h1>
      </div> */}
    </div>
  );
}
