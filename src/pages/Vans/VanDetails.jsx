import React, { Suspense } from 'react';
import { useLoaderData, Await, defer, Link } from 'react-router-dom';
import { getVans } from '../../api';
import VanDetailsInfo from './VanDetailsInfo';
import Loading from '../../components/Loading';
export function loader({ params }) {
  return defer({ vanDetails: getVans(params.id) });
}
export default function VanDetails() {
  const loaderData = useLoaderData();
  return (
    <div className="fallback-container">
      <Link className="van-details-back-btn" to="/vans">
        <p>← Back to all vans</p>
      </Link>
      <Suspense fallback={<Loading />}>
        <Await resolve={loaderData.vanDetails}>
          {vanDetails => {
            return (
              <div className="van-details-container">
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
