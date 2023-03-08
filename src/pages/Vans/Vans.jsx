import React, { Suspense } from 'react';
import { useLoaderData, Link, NavLink, defer, Await } from 'react-router-dom';
import { getVans } from '../../api';

export function loader() {
  return defer({ vans: getVans() });
}
export default function Vans() {
  const dataPromise = useLoaderData();
  console.log(dataPromise);
  return (
    <div className="vans-container">
      <div className="filter-container">
        <button>Class A</button>
        <button>Class B</button>
        <button>Camper Van</button>
      </div>
      <div className="van-list">
        <Suspense fallback={<h1>Loading...</h1>}>
          <Await resolve={dataPromise.vans}>
            {vans => {
              const vanElements = vans.map(van => {
                return (
                  <>
                    <Link className="van-tile-link" to={van.id}>
                      <div key={van.id} className="van-tile">
                        <img src={van.imageUrl} />
                        <div className="van-tile-info">
                          <span className="van-name">{van.name}</span>{' '}
                          <span className="van-class">
                            {van.class} · {van.seat}
                          </span>
                          <span className="van-rating">★ {van.rating}</span>
                          <span className="van-reviews">({van.reviews})</span>
                          <span className="van-pricing">
                            <span id="van-price">${van.price}</span>/day
                          </span>
                        </div>
                      </div>
                    </Link>
                  </>
                );
              });
              console.log(vanElements);
              return vanElements;
            }}
          </Await>
        </Suspense>
      </div>
    </div>
  );
}
