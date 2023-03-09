import React from 'react';

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
          src="https://styles.redditmedia.com/t5_3kn1qh/styles/profileIcon_snoo1bacb84e-936a-4878-9298-264c8a867d7b-headshot.png?width=256&height=256&frame=1&auto=webp&crop=256:256,smart&v=enabled&s=131a5fa32c85c6fdfc9e5abe03c7ad263a6c47dc"
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
          src="https://styles.redditmedia.com/t5_3kn1qh/styles/profileIcon_snoo1bacb84e-936a-4878-9298-264c8a867d7b-headshot.png?width=256&height=256&frame=1&auto=webp&crop=256:256,smart&v=enabled&s=131a5fa32c85c6fdfc9e5abe03c7ad263a6c47dc"
          width="30px"
        ></img>
        <p>{amenityCase}</p>
      </div>
    );
  });
  const ruleElements = vanDetails.rules.map((rule, i) => {
    return (
      <div key={i} className="rule-item">
        <img
          className="features-svg"
          src="https://styles.redditmedia.com/t5_3kn1qh/styles/profileIcon_snoo1bacb84e-936a-4878-9298-264c8a867d7b-headshot.png?width=256&height=256&frame=1&auto=webp&crop=256:256,smart&v=enabled&s=131a5fa32c85c6fdfc9e5abe03c7ad263a6c47dc"
          width={30}
        ></img>
        <p>{rule}</p>
      </div>
    );
  });
  return (
    <div className="van-details-info-container">
      <span className="van-details-rating">
        ★{vanDetails.rating}
        <span> · </span>
        <a href="#">{vanDetails.reviews} reviews</a>
      </span>
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
      <div className="host-info-container">
        <div className="host-name-container">
          <img
            src="https://styles.redditmedia.com/t5_3kn1qh/styles/profileIcon_snoo1bacb84e-936a-4878-9298-264c8a867d7b-headshot.png?width=256&height=256&frame=1&auto=webp&crop=256:256,smart&v=enabled&s=131a5fa32c85c6fdfc9e5abe03c7ad263a6c47dc"
            width={40}
          />
          <h1 className="host-info-title">
            Meet your host,{' '}
            {vanDetails.host.name[0].toUpperCase() +
              vanDetails.host.name.slice(1)}
          </h1>
        </div>
        <p className="host-message">{vanDetails.host.message}</p>
      </div>
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
