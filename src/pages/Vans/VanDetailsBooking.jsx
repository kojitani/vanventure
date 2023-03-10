import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
export default function VanDetailsBooking() {
  const [fixed, setFixed] = useState(false);
  const [params, setParams] = useState(useParams());

  console.log(params);
  let observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      setFixed(false);
    } else {
      setFixed(true);
    }
  });
  useEffect(() => {
    if (!params) {
      observer.disconnect();
      console.log('disconnected');
    } else {
      observer.observe(document.querySelector('#van-gallery'));
      console.log('observing');
    }
  }, [params]);

  return (
    <div className={`booking-container ${fixed ? 'fixed' : ''}`}>
      <div className="booking-price">
        <p>$150 night</p>
        <span>★4.6 20 reviews</span>
      </div>

      <h2>MAY 5, 2023 - MAY 10, 2023</h2>
      <h2>PICK UPanels, a composting toi </h2>
      <button className="booking-btn">RENT NOW</button>
      <div className="booking-calc">
        <h3>$150 X 6 NIGHTS</h3>
        <h3>$900 </h3>
      </div>
      <div className="booking-total">
        <h1>TOTAL BEFORE TAXES </h1>
        <h1>$8948934</h1>
      </div>
    </div>
  );
}
