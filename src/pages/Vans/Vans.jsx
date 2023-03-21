import React, { Suspense } from 'react';
import { useLoaderData, Link, defer, Await } from 'react-router-dom';
import { getVans } from '../../api';
import { Rating, SimpleGrid } from '@mantine/core';
import Loading from '../../components/Loading';
export function loader() {
  return defer({ vans: getVans() });
}
export default function Vans() {
  const dataPromise = useLoaderData();

  return (
    <div className="vans-container">
      <div>
        <h1
          style={{
            maxWidth: '1440px',
            margin: '0 auto',
            textAlign: 'left',
            fontSize: 'clamp(1.6rem, 3vw, 3rem',
          }}
        >
          Explore our van options
        </h1>
      </div>
      <SimpleGrid
        className="van-list"
        cols={5}
        breakpoints={[
          { maxWidth: '100rem', cols: 4, spacing: 'md' },
          { maxWidth: '75rem', cols: 3, spacing: 'md' },
          { maxWidth: '55rem', cols: 2, spacing: 'md' },
          { maxWidth: '31.25rem', cols: 1, spacing: 'md' },
        ]}
      >
        <Suspense fallback={<Loading />}>
          <Await resolve={dataPromise.vans}>
            {vans => {
              const vanElements = vans.map(van => {
                const ratingArr = [];
                van.reviews.forEach(review => ratingArr.push(review.rating));
                const ratingTotal =
                  ratingArr.reduce(
                    (accRating, curRating) => accRating + curRating,
                    0
                  ) / ratingArr.length;
                return (
                  <Link key={van.id} className="van-tile-link" to={van.id}>
                    <img
                      className="vans-tile-img"
                      src={van.imageUrl[0]}
                      loading="lazy"
                    />
                    <div className="van-tile-info">
                      <span className="van-name">{van.name}</span>{' '}
                      <p className="van-class">
                        {van.class} · {van.seat}
                      </p>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Rating readOnly value={1} color="dark" count={1} />
                        <span className="van-rating">
                          {ratingTotal.toFixed(2)}
                        </span>
                        <span className="van-reviews">
                          ({van.reviews.length})
                        </span>
                      </div>
                      <span className="van-pricing">
                        <span id="van-price">${van.price}</span>/day
                      </span>
                    </div>
                  </Link>
                );
              });
              return vanElements;
            }}
          </Await>
        </Suspense>
      </SimpleGrid>
    </div>
  );
}
