import React, { Suspense } from 'react';
import { useLoaderData, Await, defer, Link } from 'react-router-dom';
import { getVans } from '../../api';
import VanDetailsInfo from './VanDetailsInfo';
import Loading from '../../components/Loading';
import VanDetailsBooking from './VanDetailsBooking';
import VanDetailsReviews from './VanDetailsReviews';
import ImageGallery from './ImageGallery';
import { IconChevronLeft } from '@tabler/icons-react';
import MobileBooking from './MobileBooking';
import { Text } from '@mantine/core';
export function loader({ params }) {
  return defer({ vanDetails: getVans(params.id) });
}
export default function VanDetails() {
  const loaderData = useLoaderData();

  function openMobileBooking() {
    document.querySelector('.mobile-booking-modal').style.display = 'flex';
    setTimeout(() => {
      document.querySelector('.mobile-booking-modal').style.transform =
        'translate3d(0,0,0)';
    }, 11);
    document.querySelector('body').classList.add('body-hide-overflow');
    document.querySelector('.mantine-1avyp1d').style.display = 'none';
    document.querySelector('.mobile-booking-container').style.display = 'none';
  }

  return (
    <div className="fallback-container hidden" id="fallback-container">
      <div className="calendar-overlay"></div>
      <Link className="van-details-back-btn" to="/vans">
        <IconChevronLeft />
        <p>Back to all vans</p>
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

                  <VanDetailsReviews vanDetails={vanDetails} />
                </div>
                <div className="mobile-booking-container">
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <p style={{ fontSize: '1.3rem', fontWeight: 'bolder' }}>
                      ${vanDetails.price}
                    </p>
                    <Text fz="md" c="dimmed">
                      /night
                    </Text>
                  </div>
                  <button
                    className="mobile-bottom-btn"
                    onClick={() => openMobileBooking()}
                  >
                    Check availability
                  </button>
                </div>
                <div>
                  <MobileBooking vanDetails={vanDetails} />
                </div>
              </>
            );
          }}
        </Await>
      </Suspense>
    </div>
  );
}
