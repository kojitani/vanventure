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
          src={`/svg/${Object.keys(feature)}.svg`}
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
          src={`/svg/${amenity}.svg`}
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
        <img className="features-svg" src={`/svg/${rule}.svg`} width={30}></img>
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
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          accusantium, quod voluptatem asperiores ducimus in inventore, debitis
          culpa reiciendis, nulla placeat quidem ea soluta iure magnam. Nisi,
          sequi ipsam non voluptatibus aspernatur itaque dicta obcaecati, et
          provident officia voluptas libero rem reprehenderit! Repellat soluta
          eaque voluptatem ullam sunt quos, tempora id beatae. Ipsum maiores
          quis maxime commodi nam omnis animi temporibus eum neque deleniti non
          inventore ipsa dolore amet itaque in praesentium, nostrum quos
          quisquam ex corrupti debitis esse! Quam dolore esse velit praesentium
          aliquid, molestiae ipsum quasi voluptatibus, officiis deserunt id.
          Necessitatibus omnis nemo inventore nesciunt fugit. Tenetur, autem.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit id
          maxime ullam dolores molestias illum amet. Impedit, quidem? Quod sunt
          voluptates est nobis facilis doloribus earum? Quasi laudantium, ex est
          id corporis saepe possimus? Quibusdam eum ratione molestias velit
          assumenda sequi nesciunt excepturi temporibus, deserunt perferendis
          iste consectetur qui maxime eaque libero repellat? Accusamus nisi,
          exercitationem at pariatur culpa consectetur nihil ab expedita
          repellendus amet minima rem enim cum maiores cupiditate aliquid
          consequuntur, totam libero sit adipisci excepturi. Tenetur magnam
          dolore eum autem et, doloremque, culpa quod commodi quis est labore,
          tempora unde dolores ex ullam fuga totam saepe voluptatem? Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Odit optio laudantium
          officiis? Non atque ex enim? Amet fugit maxime, quae a nisi sed vitae
          dignissimos explicabo nesciunt iusto nobis, beatae est? Odit, eos
          exercitationem. Eos libero voluptate, reiciendis repellendus ea
          quaerat quisquam laborum est molestiae at inventore eligendi labore
          impedit, quo perspiciatis fuga? Ab, libero sint. Qui nisi cum id
          commodi ea dignissimos ducimus ab in vel magni repellendus expedita
          tempore earum provident debitis numquam aliquid, dolore fugit
          nesciunt! Porro, nulla recusandae excepturi aliquam corrupti illum
          harum cum praesentium tempora dolorum esse facilis cupiditate officiis
          eos repellat itaque dicta nemo!
        </h1>
      </div>
    </div>
  );
}
