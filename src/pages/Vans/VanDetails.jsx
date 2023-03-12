import React, { Suspense } from 'react';
import { useLoaderData, Await, defer, Link } from 'react-router-dom';
import { getVans } from '../../api';
import VanDetailsInfo from './VanDetailsInfo';
import Loading from '../../components/Loading';
import VanDetailsBooking from './VanDetailsBooking';
import ImageGallery from './ImageGallery';

export function loader({ params }) {
  return defer({ vanDetails: getVans(params.id) });
}
export default function VanDetails() {
  const loaderData = useLoaderData();

  return (
    <div className="fallback-container" id="fallback-container">
      <Link className="van-details-back-btn" to="/vans">
        <p>← Back to all vans</p>
      </Link>
      <Suspense fallback={<Loading />}>
        <Await resolve={loaderData.vanDetails}>
          {vanDetails => {
            return (
              <>
                <ImageGallery vanDetails={vanDetails} />

                <div className="van-details-container">
                  <div className="container-seperator">
                    <VanDetailsInfo vanDetails={vanDetails} />
                    <VanDetailsBooking vanDetails={vanDetails} />
                  </div>
                </div>
              </>
            );
          }}
        </Await>
      </Suspense>
    </div>
  );
}
