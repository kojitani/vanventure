import React, { Suspense } from 'react';
import { useLoaderData, Link, NavLink, defer, Await } from 'react-router-dom';
import { getVans } from '../../api';
import Loading from '../../components/Loading';
export function loader() {
  return defer({ vans: getVans() });
}
export default function Vans() {
  const dataPromise = useLoaderData();

  return (
    <div className="vans-container">
      <div className="filter-container">
        <button>Class A</button>
        <button>Class B</button>
        <button>Camper Van</button>
      </div>
      <div className="van-list">
        <Suspense fallback={<Loading />}>
          <Await resolve={dataPromise.vans}>
            {vans => {
              const vanElements = vans.map(van => {
                return (
                  <Link key={van.id} className="van-tile-link" to={van.id}>
                    <div className="van-tile">
                      <img src={van.imageUrl[0]} loading="lazy" />
                      <div className="van-tile-info">
                        <span className="van-name">{van.name}</span>{' '}
                        <p className="van-class">
                          {van.class} · {van.seat}
                        </p>
                        <p>
                          <span className="van-rating">fix later</span>
                          <span className="van-reviews">fix later</span>
                        </p>
                        <span className="van-pricing">
                          <span id="van-price">${van.price}</span>/day
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              });
              return vanElements;
            }}
          </Await>
        </Suspense>
      </div>
    </div>
  );
}
