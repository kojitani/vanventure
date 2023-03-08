import React, { Suspense } from 'react';
import { useLoaderData, Await, defer, Link } from 'react-router-dom';
import { getVans } from '../../api';

export function loader({ params }) {
  return defer({ vanDetails: getVans(params.id) });
}
export default function VanDetails() {
  const loaderData = useLoaderData();
  return (
    <div className="van-details-container">
      <Link to="/vans">
        <h3>← Back to all vans</h3>
      </Link>
      <Suspense fallback={<h1>Loading van details...</h1>}>
        <Await resolve={loaderData.vanDetails}>
          {vanDetails => {
            console.log(vanDetails);

            return (
              <div>
                <div className="van-gallery">
                  <img src={vanDetails.imageUrl} />
                  <img src={vanDetails.imageUrl} />
                  <img src={vanDetails.imageUrl} />
                  <img src={vanDetails.imageUrl} />
                  <img src={vanDetails.imageUrl} />
                </div>

                <h3>{vanDetails.description}</h3>
              </div>
            );
          }}
        </Await>
      </Suspense>
    </div>
  );
}
