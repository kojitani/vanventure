import React, { Suspense } from 'react';
import { useLoaderData, Await, defer, Link } from 'react-router-dom';
import { getVans } from '../../api';
import VanDetailsInfo from './VanDetailsInfo';

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
            return (
              <div>
                <div className="van-gallery">
                  <img src={vanDetails.imageUrl} className="wide-gallery-img" />

                  <img
                    className="medium-gallery-img"
                    src={vanDetails.imageUrl}
                  />
                  <img
                    className="medium-gallery-img "
                    src={vanDetails.imageUrl}
                  />
                  <img
                    className="small-gallery-img"
                    src={vanDetails.imageUrl}
                  />
                  <img
                    className="small-gallery-img"
                    src={vanDetails.imageUrl}
                  />
                </div>
                <div className="container-seperator">
                  <VanDetailsInfo vanDetails={vanDetails} />
                  <div className="price-hover">
                    <img src="https://i.imgur.com/dXOtFE1.png"></img>
                  </div>
                </div>
              </div>
            );
          }}
        </Await>
      </Suspense>
    </div>
  );
}
