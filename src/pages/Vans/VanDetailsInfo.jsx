import React from 'react';
// import Icons from '../../assets/svg/beds.svg';
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
          src={`/public/svg/${Object.keys(feature)}.svg`}
          width="30px"
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
          src={`/public/svg/${amenity}.svg`}
          width="30px"
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
          src={`/public/svg/${rule}.svg`}
          width={30}
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
      <p className="van-details-description">{vanDetails.description}</p>
      <h2 className="feature-title">Features</h2>
      <div className="feature-container">{featureElements}</div>
      <h2 className="amenity-title">Amenities</h2>
      <div className="amenity-container">{amenityElements}</div>
      <h1 className="rules-title">Rules and policies</h1>
      <div className="rules-container">{ruleElements}</div>

      <div className="calendar">
        <h1>CALENDAR WILL GO HERE WOO</h1>
        <h1>CALENDAR WILL GO HERE WOO</h1>
        <h1>CALENDAR WILL GO HERE WOO</h1>
        <h1>CALENDAR WILL GO HERE WOO</h1>
        <h1>CALENDAR WILL GO HERE WOO</h1>
        <h1>CALENDAR WILL GO HERE WOO</h1>
        <h1>CALENDAR WILL GO HERE WOO</h1>
        <h1>CALENDAR WILL GO HERE WOO</h1>
      </div>
    </div>
  );
}
