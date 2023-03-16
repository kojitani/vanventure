import React, { ReactDOM, useEffect, useState } from 'react';
import { Divider, Group, Rating } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

export default function VanDetailsBooking(props) {
  const [dateValue, setDateValue] = useState([(null, null)]);
  const [numDays, setNumDays] = useState(0);
  const [calendarState, setCalendarState] = useState(false);
  const ratingArr = [];
  props.vanDetails.reviews.forEach(review => ratingArr.push(review.rating));
  const ratingTotal =
    ratingArr.reduce((accRating, curRating) => accRating + curRating, 0) /
    ratingArr.length;
  document.querySelector('.mantine-1avyp1d').style.display = 'none';
  document.querySelector('body').classList.add('body-hide-overflow');
  const calendar = (
    <Group>
      <DatePicker
        numberOfColumns={1}
        maxLevel="month"
        minDate={new Date()}
        maxDate={
          new Date(
            new Date().getFullYear(),
            new Date().getMonth() + 3,
            new Date().getDate()
          )
        }
        type="range"
        size="md"
        value={dateValue}
        onChange={setDateValue}
      />
    </Group>
  );
  function showCalendar() {
    setCalendarState(true);
    document.querySelector('.calendar-overlay').style.display = 'block';
  }
  function clearDates() {
    setDateValue([]);
  }
  function closeCalendar() {
    setCalendarState(false);
    document.querySelector('.calendar-overlay').style.display = 'none';
  }
  useEffect(() => {
    if (dateValue[1]) {
      closeCalendar();
      setNumDays(
        (dateValue[1].getTime() - dateValue[0].getTime()) /
          (1000 * 60 * 60 * 24)
      );
    }
  }, [dateValue]);
  function calendarOverlayClose(e) {
    if (e.target.className === 'calendar-overlay') closeCalendar();
  }
  window.addEventListener('click', calendarOverlayClose);

  function featureUnavailable() {
    const btn = document.querySelector('.booking-reserve');
    btn.textContent = 'Sorry, this feature is currently under progress.';
    btn.disabled = true;
    btn.style.backgroundColor = '#4e5752';
    btn.style.cursor = 'default';
  }
  return (
    <>
      <div className="mobile-booking-modal">
        <div className="mobile-booking-header">
          <img
            className="mobile-booking-img"
            src={props.vanDetails.imageUrl[0]}
          ></img>
          <div>
            <h1>{props.vanDetails.name}</h1>{' '}
            <div className="booking-price">
              <span style={{ fontWeight: 'bold', fontSize: '2rem' }}>
                ${props.vanDetails.price}
              </span>{' '}
              <span>/night</span>
            </div>
          </div>
        </div>
        <div onClick={() => showCalendar()} className="calendar-date">
          <div className="pickup-date">
            <p>Pickup date</p>
            <span className="selected-date">
              {dateValue[0] ? String(dateValue[0]).slice(4, 15) : 'Add date'}
            </span>
          </div>
          <div className="dropoff-date">
            <p>Dropoff date</p>
            <span className="selected-date">
              {dateValue[1] ? String(dateValue[1]).slice(4, 15) : 'Add date'}
            </span>
          </div>
        </div>
        {calendarState && (
          <div className="mobile-calendar">
            {calendar}
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button className="calendar-clear" onClick={() => clearDates()}>
                Clear dates
              </button>
              <button
                className="calendar-close"
                onClick={() => closeCalendar()}
              >
                Close
              </button>
            </div>
          </div>
        )}

        {!dateValue[1] && (
          <button
            className="booking-availability"
            onClick={() => showCalendar()}
          >
            Check availability
          </button>
        )}

        {dateValue[1] && (
          <>
            <button
              className="booking-reserve"
              onClick={() => featureUnavailable()}
            >
              Reserve
            </button>
            <p className="booking-warning">You won't be charged yet</p>
            <div className="booking-calc">
              <p>
                ${props.vanDetails.price} x {numDays}{' '}
                {numDays > 1 ? 'nights' : 'night'}
              </p>
              <p>
                ${(numDays * props.vanDetails.price).toLocaleString('en-US')}
              </p>
            </div>
            <div className="booking-cleaning">
              <p>Cleaning fee</p>
              <p>$200</p>
            </div>
            <div className="booking-insurance">
              <p>Insurance Coverage</p>
              <p>${(numDays * props.vanDetails.price * 0.21).toFixed(2)}</p>
            </div>
            <div className="booking-tax">
              <p>State & local tax</p>
              <p>${(numDays * props.vanDetails.price * 0.09).toFixed(2)}</p>
            </div>
            <div className="booking-total">
              <p>Total</p>
              <p>
                $
                {(
                  numDays * props.vanDetails.price +
                  numDays * props.vanDetails.price * 0.21 +
                  numDays * props.vanDetails.price * 0.09 +
                  200
                )
                  .toFixed(2)
                  .toLocaleString('en-US')}
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
}
